// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-[#2C3E50] text-[#BDC3C7] py-8">
//       {" "}
//       <div className="container mx-auto text-center">
//         <p>
//           &copy; {new Date().getFullYear()} PENGUIN NGEBUT
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-[#BDC3C7] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">PENGUIN NGEBUT</h2>
          <p className="mt-3 text-sm text-gray-400">
            Developer website modern, responsif, dan interaktif untuk kebutuhan
            digitalmu.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-white transition">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Service</h3>
          <ul className="space-y-2 text-sm">
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>Graphic Designer</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow me</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/jodijonatan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jodi-jonatan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/cold.joo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://tiktok.com/@duniadevelopment"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} PENGUIN NGEBUT
      </div>
    </footer>
  );
};

export default Footer;
