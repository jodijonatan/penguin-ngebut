import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

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

  return (
    <nav
      ref={navRef}
      className="bg-[#ECF0F1] shadow-lg fixed w-full z-50"
      data-aos="fade-down"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#"
            className="text-[#2C3E50] text-2xl font-bold hover:text-[#1F618D]"
          >
            Penguin Ngebut
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            className="text-[#34495E] hover:text-[#1F618D] transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[#34495E] hover:text-[#1F618D] transition duration-300"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#34495E] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ECF0F1] pb-4">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-2 text-[#34495E] hover:bg-[#D4F6FF] hover:text-[#2C3E50]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-6 py-2 text-[#34495E] hover:bg-[#D4F6FF] hover:text-[#2C3E50]"
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
