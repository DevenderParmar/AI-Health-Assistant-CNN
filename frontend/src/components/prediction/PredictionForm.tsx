import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { predictDiabetes } from "../../services/predictionService";

import {
    predictionSchema,
    type PredictionFormData,
} from "../../utils/predictionSchema";

function PredictionForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<PredictionFormData>({
        resolver: zodResolver(predictionSchema),
    });

    const onSubmit = async (data: PredictionFormData) => {
        try {
            const response = await predictDiabetes(data);

            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const fields = [
        "Pregnancies",
        "Glucose",
        "BloodPressure",
        "SkinThickness",
        "Insulin",
        "BMI",
        "DiabetesPedigreeFunction",
        "Age",
    ] as const;

    return (
        <div className="w-full max-w-lg rounded-2xl bg-slate-800 p-8 shadow-xl">
            <h2 className="mb-6 text-2xl font-semibold text-cyan-400">
                Diabetes Prediction
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                {fields.map((field) => (
                    <div key={field}>
                        <label className="mb-2 block text-sm">
                            {field}
                        </label>

                        <input
                            type="number"
                            step="any"
                            {...register(field)}
                            className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 outline-none focus:border-cyan-400"
                        />

                        {errors[field] && (
                            <p className="mt-1 text-sm text-red-400">
                                {errors[field]?.message}
                            </p>
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400"
                >
                    Predict
                </button>
            </form>
        </div>
    );
}

export default PredictionForm;