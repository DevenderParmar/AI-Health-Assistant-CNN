import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;