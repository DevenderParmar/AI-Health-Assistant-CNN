from pathlib import Path

# backend/
BASE_DIR = Path(__file__).resolve().parents[2]

MODEL_PATH = BASE_DIR / "ml_models" / "diabetes_ann.keras"
SCALER_PATH = BASE_DIR / "ml_models" / "scaler.pkl"