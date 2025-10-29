const galleryItems = [
  {
    id: 1,
    src: "/alltim.jpeg",
    alt: "All Tim",
    caption: "mendesain banner",
  },
  {
    id: 2,
    src: "/perancangan-mobil2.jpeg",
    alt: "Perancangan Mobil",
    caption: "Perancangan komponen hardware",
  },

  {
    id: 4,
    src: "/model-mobil.jpeg",
    alt: "Model Mobil",
    caption: "Model Mobil",
  },
  {
    id: 3,
    src: "/perancangan-skema.jpeg",
    alt: "Perancangan Skema",
    caption: "Prototyping",
  },
  {
    id: 5,
    src: "/website-development.jpeg",
    alt: "Website Development",
    caption: "Website Development",
  },
  {
    id: 6,
    src: "/perancangan-mobil7.jpeg",
    alt: "Perancangan Mobil",
    caption: "Perancangan Mobil",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Bagian Judul */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4">
            Momen di Balik <span className="text-sky-500">Layar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dokumentasi proses dari konsep, perakitan hardware, hingga sesi
            <span className="font-semibold"> coding</span> intensif untuk proyek{" "}
            <span className="font-semibold">PENGUIN RESING</span>.
          </p>
        </div>

        {/* Grid Galeri Foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer hover:shadow-2xl relative bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 ease-in-out"
            >
              {/* Gambar */}
              <div className="h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="group-hover:scale-110 w-full h-full object-cover transition duration-500"
                />
              </div>

              <div className="p-4 text-center">
                <p className="text-base text-gray-700 font-medium">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
