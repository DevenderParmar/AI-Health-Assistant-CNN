import joblib
import numpy as np
import tensorflow as tf
from fastapi import HTTPException

from app.config.settings import MODEL_PATH, SCALER_PATH

model = tf.keras.models.load_model(MODEL_PATH)

scaler = joblib.load(SCALER_PATH)


def predict_diabetes(patient):
    try:

        data = np.array([[
            patient.Pregnancies,
            patient.Glucose,
            patient.BloodPressure,
            patient.SkinThickness,
            patient.Insulin,
            patient.BMI,
            patient.DiabetesPedigreeFunction,
            patient.Age
        ]])

        # Scale the data
        scaled_data = scaler.transform(data)

        probability = float(model.predict(scaled_data, verbose=0)[0][0])

        prediction = probability >= 0.5

        confidence = probability if prediction else 1 - probability

        if prediction:
            result = "Diabetic"
            risk_level = "High"
            message = "The model predicts that the patient is likely to have diabetes."
        else:
            result = "Non-Diabetic"
            risk_level = "Low"
            message = "The model predicts that the patient is unlikely to have diabetes."

        return {
            "prediction": {
                "result": result,
                "risk_level": risk_level,
                "confidence": f"{confidence * 100:.2f}%"
            },
            "message": message
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Prediction failed: {str(e)}"
        )
