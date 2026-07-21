from typing import Annotated, Literal
from pydantic import BaseModel, Field


class PatientData(BaseModel):
    Pregnancies: Annotated[
        int,
        Field(
            ge=0,
            le=20,
            description="Number of times the patient has been pregnant.",
            examples=[2]
        )
    ]

    Glucose: Annotated[
        float,
        Field(
            ge=0,
            le=300,
            description="Plasma glucose concentration (mg/dL).",
            examples=[148]
        )
    ]

    BloodPressure: Annotated[
        float,
        Field(
            ge=0,
            le=200,
            description="Diastolic blood pressure (mm Hg).",
            examples=[72]
        )
    ]

    SkinThickness: Annotated[
        float,
        Field(
            ge=0,
            le=100,
            description="Triceps skin fold thickness (mm).",
            examples=[35]
        )
    ]

    Insulin: Annotated[
        float,
        Field(
            ge=0,
            le=900,
            description="2-Hour serum insulin (mu U/ml).",
            examples=[125]
        )
    ]

    BMI: Annotated[
        float,
        Field(
            ge=0,
            le=70,
            description="Body Mass Index (kg/m²).",
            examples=[33.6]
        )
    ]

    DiabetesPedigreeFunction: Annotated[
        float,
        Field(
            ge=0,
            le=3,
            description="Diabetes pedigree function score.",
            examples=[0.627]
        )
    ]

    Age: Annotated[
        int,
        Field(
            ge=1,
            le=120,
            description="Age of the patient in years.",
            examples=[50]
        )
    ]








class Prediction(BaseModel):
    result: Annotated[
        Literal["Diabetic", "Non-Diabetic"],
        Field(
            description="Predicted diabetes status of the patient.",
            examples=["Diabetic"]
        )
    ]

    risk_level: Annotated[
        Literal["High", "Low"],
        Field(
            description="Risk level associated with the prediction.",
            examples=["High"]
        )
    ]

    confidence: Annotated[
        float,
        Field(
            ge=0,
            le=100,
            description="Prediction confidence as a percentage.",
            examples=[91.45]
        )
    ]








class PredictionResponse(BaseModel):
    prediction: Annotated[
        Prediction,
        Field(
            description="Detailed prediction information."
        )
    ]

    message: Annotated[
        str,
        Field(
            description="Human-readable explanation of the prediction.",
            examples=[
                "The model predicts that the patient is likely to have diabetes."
            ]
        )
    ]
