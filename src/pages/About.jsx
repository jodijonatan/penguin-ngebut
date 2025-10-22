import { Zap, Users, Compass } from "lucide-react";

const projectDetails = [
  {
    icon: Zap,
    title: "Teknologi Inti",
    description:
      "Menggunakan React (Front-end), Node.js/Python (Back-end/Logika IoT), dan ESP32 untuk kontrol perangkat keras yang responsif.",
    color: "text-sky-600",
  },
  {
    icon: Compass,
    title: "Misi & Inovasi",
    description:
      "Menciptakan pengalaman mengemudi remote control yang intuitif dengan latensi rendah, menetapkan standar baru di kelasnya.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "Tim Solid",
    description:
      "Dibangun oleh tim sigma yang bersemangat dalam robotika, pemrograman, dan desain produk.",
    color: "text-indigo-600",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Bagian Judul dan Deskripsi Utama */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-500 mb-2">
            Siapa Kami & Proyek Kami
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4">
            Mengenal <span className="text-sky-500">PENGUIN RESING</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami adalah tim inovator yang berdedikasi untuk menggabungkan
            rekayasa perangkat lunak canggih dengan perangkat keras IoT yang
            kuat, menghasilkan Remote Control Car dengan performa dan kontrol
            tak tertandingi.
          </p>
        </div>

        {/* Tata Letak Dua Kolom: Fokus Proyek */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Kolom Kiri: Detail Visual/Deskriptif */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">
              Konsep "Smart Drive Smart Design"
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Proyek ini tidak hanya tentang membuat mobil bergerak. Ini tentang
              menciptakan antarmuka kontrol yang lancar dan{" "}
              <span className="font-semibold">real-time</span>
              menggunakan React dan Tailwind untuk menampilkan telemetri
              langsung dari mobil. Dari daya baterai hingga kecepatan, setiap
              detail terpantau.
            </p>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-sky-500 mr-2 mt-1">✓</span>
                <span>Kontrol Jarak Jauh Berbasis Web (React)</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2 mt-1">✓</span>
                <span>Telemetri Data IoT Real-Time</span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-500 mr-2 mt-1">✓</span>
                <span>Desain Sasis yang Aerodinamis</span>
              </li>
            </ul>
          </div>

          {/* Kolom Kanan */}
          <div className="md:w-1/2 p-6 bg-sky-100 rounded-xl shadow-2xl transform transition duration-500 ease-in-out">
            <img
              src="/background.png"
              alt="Foto/Skema Prototype Mobil Remote Control"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-4 text-center text-sm text-gray-600 italic">
              Model Remote Control Car - Prototype V1.0
            </p>
          </div>
        </div>

        {/* Bagian Detail dalam Bentuk Kartu */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-sky-500 hover:shadow-xl transition duration-300 transform hover:translate-y-[-5px]"
            >
              <detail.icon className={`w-10 h-10 mb-4 ${detail.color}`} />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                {detail.title}
              </h4>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
