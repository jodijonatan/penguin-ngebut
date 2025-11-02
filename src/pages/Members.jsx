import { Link } from "react-router-dom";
import { member } from "../data/members";

// Komponen Kartu Anggota Tim
const MemberCard = ({ member }) => (
  <div className="bg-white rounded-xl shadow-2xl p-6 text-center border-t-4 border-sky-500 transform transition duration-500 ease-in-out hover:-translate-y-2 cursor-default flex flex-col h-full">
    {/* Foto Anggota */}
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sky-300 shadow-md">
      <img
        src={member.image}
        alt={`Foto ${member.name}`}
        className="object-cover w-full h-full"
      />
    </div>

    <h3 className="text-2xl font-bold text-sky-900 mb-1">{member.name}</h3>
    <p className="text-lg font-semibold text-sky-600 mb-4">{member.role}</p>

    {/* 🔹 Info detail — tampil penuh di mobile, tersembunyi di md ke atas */}
    <div className="block md:hidden text-left mb-4">
      <p className="font-bold text-gray-700 mb-2 border-b pb-1 border-gray-200">
        Tanggung Jawab Utama:
      </p>
      <ul className="text-sm text-gray-600 space-y-1">
        {member.tasks.map((task, index) => (
          <li key={index} className="flex items-center">
            <span className="text-sky-500 mr-2">•</span>
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* 🔹 Tombol hanya muncul di layar sedang ke atas */}
    <Link
      to={`/member/${member.id}`}
      className="hidden md:inline-block bg-sky-400 text-white py-2 px-4 rounded-full mt-auto hover:bg-sky-500 transition duration-300"
    >
      View More
    </Link>
  </div>
);

export default function Member() {
  return (
    <section id="member" className="py-20 md:py-32 bg-sky-50 text-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-sky-900 mb-4">
            Tim di Balik <span className="text-sky-500">Inovasi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami adalah kolaborasi dari berbagai keahlian—mulai dari robotika,
            pengembangan web modern, hingga integrasi sistem IoT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {member.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
