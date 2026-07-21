import { z } from "zod";

export const predictionSchema = z.object({
  Pregnancies: z.coerce.number().min(0).max(20),
  Glucose: z.coerce.number().min(0).max(300),
  BloodPressure: z.coerce.number().min(0).max(200),
  SkinThickness: z.coerce.number().min(0).max(100),
  Insulin: z.coerce.number().min(0).max(900),
  BMI: z.coerce.number().min(0).max(70),
  DiabetesPedigreeFunction: z.coerce.number().min(0).max(3),
  Age: z.coerce.number().min(1).max(120),
});

export type PredictionFormData = z.infer<typeof predictionSchema>;