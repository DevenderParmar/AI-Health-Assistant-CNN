from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[3]

MODEL_PATH = BASE_DIR / "model" / "saved_models" / "diabetes_ann.keras"
SCALER_PATH = BASE_DIR / "model" / "saved_models" / "scaler.pkl"