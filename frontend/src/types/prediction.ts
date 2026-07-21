export interface PatientData {
  Pregnancies: number;
  Glucose: number;
  BloodPressure: number;
  SkinThickness: number;
  Insulin: number;
  BMI: number;
  DiabetesPedigreeFunction: number;
  Age: number;
}

export interface Prediction {
  result: string;
  risk_level: string;
  confidence: string;
}

export interface PredictionResponse {
  prediction: Prediction;
  message: string;
}