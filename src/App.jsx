import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Member from "./pages/Member";
import Gallery from "./pages/Gallery";
import BackToTopButton from "./components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-[#D4F6FF] font-sans">
      <Routes>
        <Route
          path="/"
          element={
            // layout untuk halaman utama
            <>
              <Navbar />
              <main>
                <Home />
                <About />
                <Member />
                <Gallery />
                <BackToTopButton />
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
