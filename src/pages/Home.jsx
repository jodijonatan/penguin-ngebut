import { ArrowRight } from "lucide-react"; // Pastikan Anda telah menginstal 'lucide-react' jika ingin menggunakan ikon

export default function Home() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden" // Hapus bg-gray-900 di sini
      style={{
        backgroundImage: "url(/background.png)", // Gunakan gambar background Anda
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Membuat background tetap saat discroll (opsional, bisa dihapus jika tidak mau)
      }}
    >
      {/* Overlay Gelap dengan Gradien Biru */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/50 to-blue-800/60 z-0"></div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center max-w-4xl p-6 md:p-8">
        {/* Tagline di atas judul */}
        <p className="text-sky-300 text-lg md:text-xl font-semibold uppercase tracking-widest mb-2 md:mb-3">
          Proyek Pameran IoT | Oktober 2025
        </p>

        {/* Judul Utama */}
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 md:mb-5 leading-tight drop-shadow-2xl">
          PENGUIN RESING
        </h1>

        {/* Sub-judul/Slogan */}
        <p className="text-blue-100 text-2xl md:text-3xl font-light italic mb-8 md:mb-10 max-w-2xl mx-auto">
          “Mengemudi Cerdas, Desain Mulus: Kontrol Penuh di Genggaman Anda.”
        </p>

        {/* Tombol CTA (Call to Action) */}
        <a
          href="#about"
          className="inline-flex items-center bg-sky-500 hover:bg-sky-600 active:bg-sky-700 transition duration-300 ease-in-out text-white text-xl font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform"
        >
          JELAJAHI PROYEK KAMI
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
