# CardioML - AI-Powered Cardiovascular Risk Assessment

A professional machine learning web application for cardiovascular disease risk prediction using Random Forest classification.

## 🎯 Features

- **Machine Learning Prediction**: Random Forest model with 73% accuracy
- **Professional UI/UX**: Modern pastel color scheme with responsive design
- **Comprehensive Analytics**: Interactive charts and performance metrics
- **Detailed Documentation**: Methodology, FAQ, and About pages
- **Medical Disclaimers**: Prominent warnings and consent mechanisms
- **Privacy-First**: No data storage, real-time processing only
- **Educational Focus**: Complete transparency about model limitations

## 📁 Project Structure

```
cardio-ml-project/
│
├── app.py                          # Flask backend application
├── final_model.pkl                 # Trained Random Forest model
├── X_mean.npy                      # Feature scaling parameters
├── X_std.npy                       # Feature scaling parameters
│
├── templates/                      # HTML templates
│   ├── index.html                  # Homepage
│   ├── predict.html                # Prediction form
│   ├── result.html                 # Results display
│   ├── analytics.html              # Data analytics
│   ├── about.html                  # About page
│   ├── methodology.html            # Methodology details
│   ├── faq.html                    # FAQ page
│   └── navbar.html                 # Navigation component
│
└── static/                         # Static assets
    ├── css/
    │   └── style.css               # Main stylesheet (pastel theme)
    └── js/
        └── charts.js               # Chart.js visualizations
```

## 🚀 Installation & Setup

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Step 1: Install Dependencies

```bash
pip install flask numpy joblib scikit-learn
```

### Step 2: Verify Model Files

Ensure you have these files in your project root:
- `final_model.pkl` - Your trained Random Forest model
- `X_mean.npy` - Mean values for feature scaling
- `X_std.npy` - Standard deviation values for feature scaling

### Step 3: Create Directory Structure

```bash
mkdir -p templates static/css static/js
```

### Step 4: Place Files

- Place all HTML files in the `templates/` folder
- Place `style.css` in `static/css/`
- Place `charts.js` in `static/js/`
- Place `app.py` in the project root

### Step 5: Run the Application

```bash
python app.py
```

The application will start on `http://127.0.0.1:5000/`

## 🎨 Design Features

### Color Palette (Pastel Theme)
- Primary: `#a8dadc` (Light blue)
- Secondary: `#457b9d` (Medium blue)
- Accent: `#e63946` (Red for warnings)
- Pastel Pink: `#ffc8dd`
- Pastel Blue: `#bde0fe`
- Pastel Green: `#b7e4c7`
- Pastel Purple: `#d8bbff`

### UI/UX Elements
- Gradient backgrounds
- Smooth animations
- Responsive grid layouts
- Interactive charts (Chart.js)
- Modern glassmorphism effects
- Accessible color contrasts

## 📊 Model Information

### Algorithm
**Random Forest Classifier** - Ensemble learning method

### Why Random Forest?
1. **High Accuracy**: 73% on validation data
2. **Robustness**: Reduces overfitting through tree averaging
3. **Interpretability**: Provides feature importance scores
4. **Balance**: Good sensitivity (71%) and specificity (75%)
5. **Production-Ready**: Fast inference for real-time predictions

### Features (12 parameters)
1. Age
2. Gender
3. Height
4. Weight
5. BMI (calculated)
6. Systolic Blood Pressure
7. Diastolic Blood Pressure
8. Cholesterol Level
9. Glucose Level
10. Smoking Status
11. Alcohol Consumption
12. Physical Activity

### Performance Metrics
- **Accuracy**: 73%
- **Sensitivity**: 71%
- **Specificity**: 75%
- **F1-Score**: 72%
- **AUC-ROC**: 0.79

## 📖 Pages Overview

### 1. Home (`/`)
- Hero section with CTA
- Medical disclaimer banner
- Key statistics (accuracy, dataset size, use case)
- Model type and features overview
- "How It Works" section

### 2. Predict (`/predict`)
- Comprehensive input form with 12 parameters
- Medical disclaimer consent checkbox
- Input validation
- Organized sections (Demographics, Measurements, Vitals, Lifestyle)
- Real-time validation feedback

### 3. Results (`/result`)
- Risk prediction (High/Low)
- Confidence score meter
- BMI calculation and interpretation
- Identified risk factors
- Medical disclaimers
- Recommendations based on risk level
- Quick actions (new assessment, analytics, about)

### 4. Analytics (`/analytics`)
- Model performance bar chart
- Feature importance horizontal bar chart
- Risk factor distribution doughnut chart
- Evaluation metrics radar chart
- Performance summary cards
- Dataset insights

### 5. About (`/about`)
- Project overview
- Dataset information
- Model selection rationale
- Training pipeline details
- Performance metrics
- Limitations and considerations
- Medical disclaimer
- Privacy and security information

### 6. Methodology (`/methodology`)
- Technical approach
- Data preprocessing pipeline
- Model selection comparison
- Hyperparameter optimization
- Training and validation strategy
- Evaluation metrics explanation
- Feature importance analysis
- Known limitations

### 7. FAQ (`/faq`)
- General questions
- Understanding results
- Technical questions
- Privacy and security
- Limitations and concerns
- Additional resources

## ⚠️ Important Disclaimers

### Medical Disclaimer
This application is for **educational and research purposes only**. It does NOT:
- Provide medical diagnoses
- Replace professional medical consultation
- Offer treatment recommendations
- Serve as emergency medical assessment

### Accuracy Limitations
- 73% accuracy means ~27% of predictions may be incorrect
- Model cannot account for all medical factors
- False positives and false negatives are possible
- Should not be used for clinical decision-making

### Privacy
- No personal health data is stored
- All predictions are processed in real-time
- No cookies or tracking for health data
- Anonymous usage statistics only

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `static/css/style.css`:
```css
:root {
    --primary: #a8dadc;
    --secondary: #457b9d;
    /* ... other colors ... */
}
```

### Updating Model
Replace these files with your trained model:
- `final_model.pkl`
- `X_mean.npy`
- `X_std.npy`

### Adding Features
1. Update the form in `predict.html`
2. Modify the prediction logic in `app.py`
3. Update feature lists in `about.html` and `methodology.html`

## 📈 Analytics Charts

Uses Chart.js for interactive visualizations:
1. **Bar Chart**: Model performance metrics
2. **Horizontal Bar**: Feature importance
3. **Doughnut Chart**: Risk factor categories
4. **Radar Chart**: Evaluation metrics

## 🛠️ Troubleshooting

### Common Issues

**Problem**: Model file not found
```
Solution: Ensure final_model.pkl is in the project root directory
```

**Problem**: Charts not displaying
```
Solution: Check that Chart.js CDN is accessible
Verify charts.js is in static/js/ folder
```

**Problem**: CSS not loading
```
Solution: Verify static/css/style.css exists
Check Flask static folder configuration
```

**Problem**: Form validation errors
```
Solution: Ensure all form fields have proper name attributes
Check JavaScript validation in predict.html
```

## 📝 Development Notes

### Flask Routes
- `/` - Homepage
- `/predict` - Prediction form (GET/POST)
- `/analytics` - Analytics dashboard
- `/about` - About page
- `/methodology` - Methodology details
- `/faq` - FAQ page

### Model Prediction Flow
1. User submits form with health parameters
2. Flask validates input ranges
3. BMI calculated from height/weight
4. Features standardized using saved mean/std
5. Model makes prediction
6. Results rendered with risk factors and confidence

### Feature Scaling
Continuous features are standardized:
```python
scaled = (raw_value - mean) / std
```

This ensures consistent input range for the model.

## 🚀 Deployment

### Production Considerations
1. **Security**: Use HTTPS in production
2. **Environment**: Set `debug=False` in app.py
3. **Server**: Use production WSGI server (Gunicorn, uWSGI)
4. **Monitoring**: Implement logging and error tracking
5. **Updates**: Regularly retrain model with new data

### Example Production Run
```bash
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

## 📄 License

Educational project for demonstration purposes.

## 🤝 Contributing

This is an educational project. For improvements:
1. Enhance model accuracy
2. Add more features
3. Improve UI/UX
4. Add internationalization
5. Implement user authentication (if needed)

## 📞 Support

For questions about:
- **Model**: See Methodology page
- **Usage**: See FAQ page
- **Medical**: Consult healthcare professionals

---

**Remember**: This tool is for educational purposes only. Always consult qualified healthcare professionals for medical advice.