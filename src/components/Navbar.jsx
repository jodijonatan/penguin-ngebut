import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Efek untuk menutup menu saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Atur scrolled ke true jika posisi scroll lebih dari 50px
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]); // Dependensi [scrolled] untuk menghindari loop

  // Kelas Tailwind berdasarkan status scroll
  const navbarClasses = `
    fixed w-full z-50 transition-all duration-500 ease-in-out
    ${
      scrolled
        ? "bg-sky-900/90 shadow-2xl backdrop-blur-md"
        : "bg-transparent shadow-none"
    }
  `;

  // Kelas untuk teks saat scroll, agar tetap kontras
  const textClasses = scrolled ? "text-white" : "text-sky-900 md:text-white";
  const logoClasses = scrolled ? "text-sky-400" : "text-white md:text-sky-400";

  return (
    <nav ref={navRef} className={navbarClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#home"
            className={`flex items-center text-2xl font-bold transition duration-300 ${logoClasses}`}
          >
            <img
              src="/logo.png"
              alt="logo"
              className="size-8 p-1 bg-white rounded-full  mr-2"
            />
            PENGUIN RESING
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className={`text-lg font-medium hover:text-sky-400 transition duration-300 ${textClasses}`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-lg font-medium hover:text-sky-400 transition duration-300 ${textClasses}`}
          >
            About
          </a>
          <a
            href="#member"
            className={`text-lg font-medium hover:text-sky-400 transition duration-300 ${textClasses}`}
          >
            Member
          </a>
          <a
            href="#gallery"
            className={`text-lg font-medium hover:text-sky-400 transition duration-300 ${textClasses}`}
          >
            Gallery
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none ${textClasses}`}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-sky-900/95 pb-4 transition-all duration-300">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#member", label: "Member" },
            { href: "#gallery", label: "Gallery" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-white hover:bg-sky-700/50 transition duration-300 text-lg font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
