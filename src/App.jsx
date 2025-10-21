import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#D4F6FF] font-sans">
      <Routes>
        <Route
          path="/"
          element={
            // layout untuk halaman utama
            <>
              <Navbar />
              <main className="pt-8">
                <Home />
                <About />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
