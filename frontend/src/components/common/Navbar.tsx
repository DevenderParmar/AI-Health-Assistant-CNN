function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">
            AI Health Assistant
          </h1>

          <p className="text-sm text-slate-400">
            Diabetes Prediction using Artificial Neural Networks
          </p>
        </div>

        <div className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900">
          ANN Model
        </div>
      </div>
    </header>
  );
}

export default Navbar;