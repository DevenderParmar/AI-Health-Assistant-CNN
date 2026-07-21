import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  predictionSchema,
  type PredictionFormData,
} from "../../utils/predictionSchema";

import { predictDiabetes } from "../../services/predictionService";
import type { PredictionResponse } from "../../types/prediction";

interface PredictionFormProps {
  setPrediction: React.Dispatch<
    React.SetStateAction<PredictionResponse | null>
  >;
}

const fields = [
  {
    name: "Pregnancies",
    label: "Pregnancies",
    placeholder: "e.g. 2",
  },
  {
    name: "Glucose",
    label: "Glucose",
    placeholder: "e.g. 120",
  },
  {
    name: "BloodPressure",
    label: "Blood Pressure",
    placeholder: "e.g. 80",
  },
  {
    name: "SkinThickness",
    label: "Skin Thickness",
    placeholder: "e.g. 25",
  },
  {
    name: "Insulin",
    label: "Insulin",
    placeholder: "e.g. 90",
  },
  {
    name: "BMI",
    label: "BMI",
    placeholder: "e.g. 24.5",
  },
  {
    name: "DiabetesPedigreeFunction",
    label: "Pedigree Function",
    placeholder: "e.g. 0.45",
  },
  {
    name: "Age",
    label: "Age",
    placeholder: "e.g. 35",
  },
] as const;

function PredictionForm({ setPrediction }: PredictionFormProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PredictionFormData>({
    resolver: zodResolver(predictionSchema),
  });

  const onSubmit = async (data: PredictionFormData) => {
    try {
      setLoading(true);

      const response = await predictDiabetes({
        Pregnancies: Number(data.Pregnancies),
        Glucose: Number(data.Glucose),
        BloodPressure: Number(data.BloodPressure),
        SkinThickness: Number(data.SkinThickness),
        Insulin: Number(data.Insulin),
        BMI: Number(data.BMI),
        DiabetesPedigreeFunction: Number(data.DiabetesPedigreeFunction),
        Age: Number(data.Age),
      });

      setPrediction(response);
    } catch (err) {
      console.error(err);
      alert("Prediction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl rounded-2xl bg-slate-800 p-8 shadow-xl">
      <h2 className="mb-8 text-3xl font-bold text-cyan-400">
        Diabetes Prediction
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 md:grid-cols-2"
      >
        {fields.map((field) => (
          <div key={field.name}>
            <label className="mb-2 block font-medium">
              {field.label}
            </label>

            <input
              type="text"
              inputMode="decimal"
              placeholder={field.placeholder}
              {...register(field.name)}
              className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 transition focus:border-cyan-400 focus:outline-none"
            />

            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-400">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-cyan-500 py-3 text-lg font-semibold text-slate-900 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Predicting..." : "Predict Diabetes"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PredictionForm;