import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaMicrochip, FaCogs } from "react-icons/fa";

const Scheme = () => {
  return (
    <section id="scheme" className="py-20 md:py-28 bg-sky-50 text-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-sky-900 mb-4">
            Skema <span className="text-sky-500">Penguin Resing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berikut adalah gambaran sistem kerja dari mobil IoT kami — mencakup
            komponen utama, hubungan antar sensor, serta arsitektur kontrolnya.
          </p>
        </motion.div>

        {/* Gambar Skema */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl p-6 border-t-4 border-sky-400 mb-16"
        >
          <img
            src="/perancangan-skema/skema3.jpeg" // Ganti sesuai lokasi gambar kamu
            alt="Skema Mobil IoT"
            className="w-full rounded-xl shadow-md border border-sky-200"
          />
          <p className="text-center text-gray-500 mt-4 italic">
            Gambar 1. Skema sistem dan konektivitas Penguin Resing.
          </p>
        </motion.div>

        {/* Kartu Informasi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-sky-400 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <FaMicrochip className="text-sky-500 text-4xl mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-sky-900 mb-2">
              Kontrol Utama
            </h3>
            <p className="text-gray-600 text-sm">
              Mikrokontroler (Arduino/ESP32) sebagai pusat kendali yang mengatur
              seluruh sistem mobil dan komunikasi antar modul.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-sky-400 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <FaCogs className="text-sky-500 text-4xl mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-sky-900 mb-2">
              Aktuator & Motor
            </h3>
            <p className="text-gray-600 text-sm">
              Motor DC dan servo berperan untuk menggerakkan roda dan mengatur
              arah kemudi mobil dengan presisi.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-sky-400 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <FaCar className="text-sky-500 text-4xl mb-3 mx-auto" />
            <h3 className="text-2xl font-bold text-sky-900 mb-2">
              Sensor & IoT
            </h3>
            <p className="text-gray-600 text-sm">
              Sensor ultrasonik, modul WiFi, dan sistem cloud terintegrasi
              memungkinkan mobil mendeteksi rintangan dan terhubung ke internet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scheme;
