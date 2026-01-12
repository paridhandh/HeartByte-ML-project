// Chart.js Configuration for HeartByte Analytics

// Color palette matching the pastel theme
const colors = {
    primary: '#a8dadc',
    secondary: '#457b9d',
    accent: '#e63946',
    pastelPink: '#ffc8dd',
    pastelBlue: '#bde0fe',
    pastelGreen: '#b7e4c7',
    pastelPurple: '#d8bbff',
    warning: '#ffb703',
    success: '#06d6a0'
};

// Chart defaults
Chart.defaults.font.family = "'Inter', 'Segoe UI', sans-serif";
Chart.defaults.font.size = 13;
Chart.defaults.color = '#1d3557';

// 1. Model Performance Metrics Chart (Bar Chart)
const accuracyCtx = document.getElementById('accuracyChart');
if (accuracyCtx) {
    new Chart(accuracyCtx, {
        type: 'bar',
        data: {
            labels: ['Accuracy', 'Sensitivity', 'Specificity', 'F1-Score'],
            datasets: [{
                label: 'Model Performance (%)',
                data: [73, 71, 75, 72],
                backgroundColor: [
                    colors.pastelBlue,
                    colors.pastelGreen,
                    colors.pastelPink,
                    colors.pastelPurple
                ],
                borderColor: [
                    colors.secondary,
                    colors.success,
                    colors.accent,
                    colors.primary
                ],
                borderWidth: 2,
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20
                    }
                },
                title: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(29, 53, 87, 0.9)',
                    padding: 12,
                    titleFont: {
                        size: 14,
                        weight: 'bold'
                    },
                    bodyFont: {
                        size: 13
                    },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
}

// 2. Feature Importance Chart (Horizontal Bar Chart)
const featureCtx = document.getElementById('featureChart');
if (featureCtx) {
    new Chart(featureCtx, {
        type: 'bar',
        data: {
            labels: [
                'Blood Pressure',
                'Age',
                'Cholesterol',
                'BMI',
                'Glucose',
                'Gender',
                'Lifestyle Factors'
            ],
            datasets: [{
                label: 'Importance (%)',
                data: [30, 20, 18, 15, 8, 4, 5],
                backgroundColor: [
                    colors.accent,
                    colors.secondary,
                    colors.warning,
                    colors.pastelPurple,
                    colors.pastelPink,
                    colors.pastelBlue,
                    colors.success
                ],
                borderColor: colors.secondary,
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(29, 53, 87, 0.9)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return 'Importance: ' + context.parsed.x + '%';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 35,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                }
            }
        }
    });
}

// 3. Risk Factor Distribution (Doughnut Chart)
const riskFactorCtx = document.getElementById('riskFactorChart');
if (riskFactorCtx) {
    new Chart(riskFactorCtx, {
        type: 'doughnut',
        data: {
            labels: [
                'Clinical Markers',
                'Physical Measurements',
                'Demographics',
                'Lifestyle Choices'
            ],
            datasets: [{
                data: [46, 27, 12, 15],
                backgroundColor: [
                    colors.accent,
                    colors.pastelPurple,
                    colors.pastelBlue,
                    colors.success
                ],
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(29, 53, 87, 0.9)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return label + ': ' + value + '%';
                        }
                    }
                }
            },
            cutout: '60%'
        }
    });
}

// 4. Model Evaluation Metrics (Radar Chart)
const metricsCtx = document.getElementById('metricsChart');
if (metricsCtx) {
    new Chart(metricsCtx, {
        type: 'radar',
        data: {
            labels: [
                'Accuracy',
                'Precision',
                'Recall',
                'F1-Score',
                'Specificity',
                'AUC-ROC'
            ],
            datasets: [{
                label: 'Random Forest Model',
                data: [73, 73, 71, 72, 75, 79],
                backgroundColor: 'rgba(168, 218, 220, 0.3)',
                borderColor: colors.secondary,
                borderWidth: 3,
                pointBackgroundColor: colors.accent,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: colors.accent,
                pointHoverBorderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(29, 53, 87, 0.9)',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.r + '%';
                        }
                    }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(69, 123, 157, 0.2)'
                    },
                    angleLines: {
                        color: 'rgba(69, 123, 157, 0.2)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
}

// Optional: Add animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach((container, index) => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.6s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});