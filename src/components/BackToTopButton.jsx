import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Kelas dinamis untuk mengontrol animasi masuk dan keluar
  const buttonClasses = `
    fixed bottom-6 right-6 p-4 bg-sky-500 text-white rounded-full shadow-lg 
    hover:bg-sky-600 z-50 transform transition-all duration-300 ease-in-out cursor-pointer

    ${
      isVisible
        ? // Saat isVisible TRUE (Animasi Masuk/Tetap Ada)
          "opacity-100 translate-y-0 pointer-events-auto"
        : // Saat isVisible FALSE (Animasi Keluar/Menghilang)
          "opacity-0 translate-y-10 pointer-events-none"
    }
  `;

  return (
    <button
      onClick={scrollToTop}
      className={buttonClasses}
      aria-label="Kembali ke atas"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
