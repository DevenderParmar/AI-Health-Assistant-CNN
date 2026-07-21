from fastapi import FastAPI
from app.routes.prediction import router as prediction_router

app = FastAPI(
    title="AI Health Assistant API",
    version="1.0.0",
    description="Diabetes Prediction API using ANN"
)

app.include_router(prediction_router)


@app.get("/")
def home():
    return {
        "message": "AI Health Assistant Backend Running"
    }