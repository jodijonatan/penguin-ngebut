import { useParams, useNavigate } from "react-router-dom";
import { member } from "../data/members";
import Lanyards from "../components/lanyard";

export default function MemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const person = member.find((m) => m.id === parseInt(id));

  if (!person) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Anggota Tidak Ditemukan 😢
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer bg-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-600 transition duration-300"
        >
          ← Kembali
        </button>
      </div>
    );
  }

  const handleBack = () => {
    document.documentElement.style.scrollBehavior = "auto";
    navigate(-1);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 0);
  };

  const LanyardComponent = Lanyards[person.firstName?.toLowerCase()];

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* 🔹 Kiri: gambar + teks di atasnya */}
      <div className="relative md:w-1/2 w-full h-[70vh] md:h-auto flex items-center justify-center overflow-hidden">
        {/* Gambar dengan overlay gelap */}
        <img
          src={person.gif}
          alt={person.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay gelap */}
        {/* Teks di atas gambar */}
        <div className="absolute z-10 p-8 text-white max-w-lg text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            {person.name}
          </h1>
          <p className="text-2xl font-semibold text-sky-200 mb-6 drop-shadow-md">
            {person.role}
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-sky-100">
              Tanggung Jawab Utama
            </h2>
            <ul className="space-y-2 text-lg">
              {person.tasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-sky-300 mr-2">•</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleBack}
            className="cursor-pointer bg-sky-500 text-white py-2 px-6 rounded-full hover:bg-sky-400 transition duration-300"
          >
            ← Kembali
          </button>
        </div>
      </div>

      {/* 🔹 Kanan: lanyard full */}
      <div className="relative md:w-1/2 w-full bg-black md:bg-[url(/lanyard-background.png)] bg-cover h-[60vh] md:h-auto flex items-center justify-center">
        {LanyardComponent && (
          <div className="absolute inset-0 z-0">
            <LanyardComponent position={[0, 0, 16]} gravity={[0, -40, 0]} />
          </div>
        )}
      </div>
    </section>
  );
}
