import axios from "axios";
import type {
  PatientData,
  PredictionResponse,
} from "../types/prediction";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const predictDiabetes = async (
  data: PatientData
): Promise<PredictionResponse> => {
  const response = await api.post("/predict", data);
  return response.data;
};