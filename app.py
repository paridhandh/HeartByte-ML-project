from flask import Flask, render_template, request, jsonify
import numpy as np
import joblib
from datetime import datetime

app = Flask(__name__)

# Load model and scaling parameters
model = joblib.load("final_model.pkl")
X_mean = np.load("X_mean.npy")
X_std = np.load("X_std.npy")

# Track predictions for statistics
prediction_stats = {
    "total": 0,
    "high_risk": 0,
    "low_risk": 0
}

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["GET", "POST"])
def predict():
    if request.method == "POST":
        try:
            # Extract form data
            age = float(request.form["age"])
            height = float(request.form["height"])
            weight = float(request.form["weight"])
            ap_hi = float(request.form["ap_hi"])
            ap_lo = float(request.form["ap_lo"])

            gender = int(request.form["gender"])
            cholesterol = int(request.form["cholesterol"])
            gluc = int(request.form["gluc"])
            smoke = int(request.form["smoke"])
            alco = int(request.form["alco"])
            active = int(request.form["active"])

            # Input validation
            if age < 0 or age > 120:
                return render_template("result.html", 
                                     prediction="Error: Invalid age (must be between 0-120)", 
                                     error=True)
            if height < 50 or height > 250:
                return render_template("result.html", 
                                     prediction="Error: Invalid height (must be between 50-250 cm)", 
                                     error=True)
            if weight < 20 or weight > 300:
                return render_template("result.html", 
                                     prediction="Error: Invalid weight (must be between 20-300 kg)", 
                                     error=True)
            if ap_hi < 70 or ap_hi > 250:
                return render_template("result.html", 
                                     prediction="Error: Invalid systolic BP (must be between 70-250 mmHg)", 
                                     error=True)
            if ap_lo < 40 or ap_lo > 180:
                return render_template("result.html", 
                                     prediction="Error: Invalid diastolic BP (must be between 40-180 mmHg)", 
                                     error=True)
            if ap_hi <= ap_lo:
                return render_template("result.html", 
                                     prediction="Error: Systolic BP must be higher than diastolic BP", 
                                     error=True)

            # Calculate BMI
            bmi = weight / ((height / 100) ** 2)

            # Prepare features for prediction
            raw = np.array([[age, height, weight, ap_hi, ap_lo, bmi]])
            scaled = (raw - X_mean) / X_std

            final_input = np.array([[
                gender, cholesterol, gluc, smoke, alco, active,
                *scaled[0]
            ]])

            # Make prediction
            pred = model.predict(final_input)[0]
            probability = None
            if hasattr(model, 'predict_proba'):
                probability = model.predict_proba(final_input)[0]
            
            result = "High Risk of Cardiovascular Disease" if pred == 1 else "Low Risk of Cardiovascular Disease"
            risk_level = "high" if pred == 1 else "low"
            
            # Update statistics
            prediction_stats["total"] += 1
            if pred == 1:
                prediction_stats["high_risk"] += 1
            else:
                prediction_stats["low_risk"] += 1

            # Prepare risk factors
            risk_factors = []
            if bmi > 30:
                risk_factors.append("BMI indicates obesity (BMI > 30)")
            elif bmi > 25:
                risk_factors.append("BMI indicates overweight (BMI 25-30)")
            
            if ap_hi > 140 or ap_lo > 90:
                risk_factors.append("Elevated blood pressure (Hypertension)")
            elif ap_hi > 130 or ap_lo > 85:
                risk_factors.append("Above normal blood pressure")
                
            if cholesterol == 3:
                risk_factors.append("High cholesterol levels (≥ 240 mg/dL)")
            elif cholesterol == 2:
                risk_factors.append("Above normal cholesterol (200-239 mg/dL)")
                
            if gluc == 3:
                risk_factors.append("High glucose levels (≥ 126 mg/dL)")
            elif gluc == 2:
                risk_factors.append("Above normal glucose (100-125 mg/dL)")
                
            if smoke == 1:
                risk_factors.append("Current smoking habit")
            if alco == 1:
                risk_factors.append("Regular alcohol consumption")
            if active == 0:
                risk_factors.append("Sedentary lifestyle / Low physical activity")
            
            if age > 60:
                risk_factors.append("Advanced age (> 60 years)")

            confidence = None
            if probability is not None:
                confidence = max(probability) * 100

            return render_template("result.html", 
                                 prediction=result, 
                                 risk_level=risk_level,
                                 risk_factors=risk_factors if risk_factors else None,
                                 bmi=round(bmi, 2),
                                 confidence=round(confidence, 1) if confidence else None,
                                 error=False)

        except KeyError as e:
            return render_template("result.html", 
                                 prediction=f"Error: Missing required field - {str(e)}", 
                                 error=True)
        except ValueError as e:
            return render_template("result.html", 
                                 prediction=f"Error: Invalid data format - {str(e)}", 
                                 error=True)
        except Exception as e:
            return render_template("result.html", 
                                 prediction=f"Error processing data: {str(e)}", 
                                 error=True)

    return render_template("predict.html")

@app.route("/analytics")
def analytics():
    return render_template("analytics.html", stats=prediction_stats)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/methodology")
def methodology():
    return render_template("methodology.html")

@app.route("/faq")
def faq():
    return render_template("faq.html")

@app.route("/api/stats")
def get_stats():
    return jsonify(prediction_stats)

if __name__ == "__main__":
    app.run(debug=True)