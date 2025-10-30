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

export default function Gallerys() {
  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 300,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1024/600/800?grayscale",
      url: "https://example.com/four",
      height: 600,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1027/600/800?grayscale",
      url: "https://example.com/five",
      height: 500,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1031/600/800?grayscale",
      url: "https://example.com/six",
      height: 400,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1033/600/800?grayscale",
      url: "https://example.com/seven",
      height: 200,
    },
  ];

  return (
    <section className="p-10 min-h-screen bg-gray-950">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </section>
  );
}
