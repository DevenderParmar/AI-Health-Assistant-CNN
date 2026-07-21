// import PredictionForm from "../components/prediction/PredictionForm";
// import PredictionResult from "../components/prediction/PredictionResult";

// function HomePage() {
//   return (
//     <main className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col items-start justify-center gap-8 px-6 py-10 lg:flex-row lg:items-start">
//       <PredictionForm />
//       <PredictionResult />
//     </main>
//   );
// }

// export default HomePage;
import { useState } from "react";
import PredictionForm from "../components/prediction/PredictionForm";
import PredictionResult from "../components/prediction/PredictionResult";
import type { PredictionResponse } from "../types/prediction";

function HomePage() {
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);

  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col items-start justify-center gap-8 px-6 py-10 lg:flex-row">
      <PredictionForm setPrediction={setPrediction} />

      <PredictionResult prediction={prediction} />
    </main>
  );
}

export default HomePage;