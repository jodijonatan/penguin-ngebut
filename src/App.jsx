import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Members from "./pages/Members";
import Member from "./pages/Member";
import Gallerys from "./pages/Gallerys";
import BackToTopButton from "./components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Materials from "./pages/Materials";
import Scheme from "./pages/Scheme";
// import Material from "./pages/Material";

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
            // layout halaman utama
            <>
              <Navbar />
              <main>
                <Home />
                <About />
                <Members />
                <Gallerys />
                <Scheme />
                <Materials />
                <BackToTopButton />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/member/:id" element={<Member />} />
      </Routes>
    </div>
  );
}

export default App;
