from fastapi import FastAPI
from app.routes.prediction import router as prediction_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="AI Health Assistant API",
    version="1.0.0",
    description="Diabetes Prediction API using ANN"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(prediction_router)


@app.get("/")
def home():
    return {
        "message": "AI Health Assistant Backend Running"
    }