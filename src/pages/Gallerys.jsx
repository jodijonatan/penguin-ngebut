// const galleryItems = [
//   {
//     id: 1,
//     src: "/desain-banner/desain.jpeg",
//     alt: "All Tim",
//     caption: "mendesain banner",
//   },
//   {
//     id: 2,
//     src: "/perancangan-mobil/perancangan-mobil2.jpeg",
//     alt: "Perancangan Mobil",
//     caption: "Perancangan komponen hardware",
//   },

//   {
//     id: 4,
//     src: "/perancangan-mobil/model-mobil.jpeg",
//     alt: "Model Mobil",
//     caption: "Model Mobil",
//   },
//   {
//     id: 3,
//     src: "/perancangan-skema/perancangan-skema.jpeg",
//     alt: "Perancangan Skema",
//     caption: "Prototyping",
//   },
//   {
//     id: 5,
//     src: "/website-development/website-development.jpeg",
//     alt: "Website Development",
//     caption: "Website Development",
//   },
//   {
//     id: 6,
//     src: "/perancangan-mobil/perancangan-mobil7.jpeg",
//     alt: "Perancangan Mobil",
//     caption: "Perancangan Mobil",
//   },
// ];

// export default function Gallery() {
//   return (
//     <section id="gallery" className="py-20 md:py-32 bg-gray-50 text-gray-800">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Bagian Judul */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-extrabold text-sky-900 mb-4">
//             Momen di Balik <span className="text-sky-500">Layar</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Dokumentasi proses dari konsep, perakitan hardware, hingga sesi
//             <span className="font-semibold"> coding</span> intensif untuk proyek{" "}
//             <span className="font-semibold">PENGUIN RESING</span>.
//           </p>
//         </div>

//         {/* Grid Galeri Foto */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {galleryItems.map((item) => (
//             <div
//               key={item.id}
//               className="group cursor-pointer hover:shadow-2xl relative bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-500 ease-in-out"
//             >
//               {/* Gambar */}
//               <div className="h-64 overflow-hidden">
//                 <img
//                   src={item.src}
//                   alt={item.alt}
//                   className="group-hover:scale-110 w-full h-full object-cover transition duration-500"
//                 />
//               </div>

//               <div className="p-4 text-center">
//                 <p className="text-base text-gray-700 font-medium">
//                   {item.caption}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import MagicBento from "../components/MagicBento";

// export default function Gallerys() {
//   return (
//     <section className="">
//       <MagicBento
//         textAutoHide={true}
//         enableStars={true}
//         enableSpotlight={true}
//         enableBorderGlow={true}
//         enableTilt={false}
//         enableMagnetism={false}
//         clickEffect={true}
//         spotlightRadius={300}
//         particleCount={12}
//         glowColor="132, 0, 255"
//       />
//     </section>
//   );
// }

import Masonry from "../components/Masonry";
import { gallerys } from "../data/gallerys";
import { Link } from "react-router-dom";

export default function Gallerys() {
  return (
    <section className="p-4 md:p-10 min-h-screen bg-[url(/gallery-background.jpg)] bg-cover">
      <Masonry
        items={gallerys}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
      <div className="md:flex md:justify-center">
        <Link
          to={`/member/`}
          className="bg-sky-400 text-white py-2 px-4 rounded-full mt-auto hover:bg-sky-500 transition duration-300"
        >
          View More
        </Link>
      </div>
    </section>
  );
}
