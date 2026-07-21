import { z } from "zod";

const requiredNumber = (
  min: number,
  max: number,
  message: string
) =>
  z
    .string()
    .trim()
    .min(1, `${message} is required`)
    .transform((value) => Number(value))
    .refine((value) => !isNaN(value), {
      message: `${message} must be a number`,
    })
    .refine((value) => value >= min && value <= max, {
      message: `${message} must be between ${min} and ${max}`,
    });

export const predictionSchema = z.object({
  Pregnancies: requiredNumber(0, 20, "Pregnancies"),
  Glucose: requiredNumber(0, 300, "Glucose"),
  BloodPressure: requiredNumber(0, 200, "Blood Pressure"),
  SkinThickness: requiredNumber(0, 100, "Skin Thickness"),
  Insulin: requiredNumber(0, 900, "Insulin"),
  BMI: requiredNumber(0, 70, "BMI"),
  DiabetesPedigreeFunction: requiredNumber(
    0,
    3,
    "Pedigree Function"
  ),
  Age: requiredNumber(1, 120, "Age"),
});

export type PredictionFormData = z.infer<typeof predictionSchema>;