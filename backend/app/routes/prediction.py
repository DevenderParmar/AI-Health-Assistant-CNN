from fastapi import APIRouter
from app.schemas.patient import PatientData, PredictionResponse
from app.services.predictor import predict_diabetes

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)


@router.post("/", response_model=PredictionResponse)
def predict(patient: PatientData):
    return predict_diabetes(patient)