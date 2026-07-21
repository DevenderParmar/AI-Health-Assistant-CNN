import type { PredictionResponse } from "../../types/prediction";

interface PredictionResultProps {
  prediction: PredictionResponse | null;
}

function PredictionResult({ prediction }: PredictionResultProps) {
  if (!prediction) {
    return (
      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-xl">
        <h2 className="mb-6 text-3xl font-bold text-cyan-400">
          Prediction Result
        </h2>

        <div className="flex h-72 items-center justify-center rounded-xl border-2 border-dashed border-slate-600 text-center text-slate-400">
          Fill the form and click <br />
          <span className="font-semibold text-cyan-400">
            Predict Diabetes
          </span>
        </div>
      </div>
    );
  }

  const highRisk =
    prediction.prediction.risk_level.toLowerCase() === "high";

  return (
    <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-xl">
      <h2 className="mb-8 text-3xl font-bold text-cyan-400">
        Prediction Result
      </h2>

      <div className="space-y-8">
        <div className="rounded-xl bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Result</p>

          <h3
            className={`mt-2 text-3xl font-bold ${
              highRisk ? "text-red-400" : "text-green-400"
            }`}
          >
            {prediction.prediction.result}
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Risk Level</p>

            <span
              className={`mt-3 inline-block rounded-full px-4 py-2 text-sm font-bold ${
                highRisk
                  ? "bg-red-500/20 text-red-400"
                  : "bg-green-500/20 text-green-400"
              }`}
            >
              {prediction.prediction.risk_level}
            </span>
          </div>

          <div className="rounded-xl bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Confidence</p>

            <h3 className="mt-2 text-2xl font-bold">
              {prediction.prediction.confidence}%
            </h3>
          </div>
        </div>

        <div className="rounded-xl bg-slate-900 p-5">
          <p className="mb-2 text-sm text-slate-400">
            Model Explanation
          </p>

          <p className="leading-7">
            {prediction.message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PredictionResult;