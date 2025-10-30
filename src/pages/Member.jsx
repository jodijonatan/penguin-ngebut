import { useParams, useNavigate } from "react-router-dom";
import { member } from "../data/members";

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

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Bagian kiri: gambar penuh setengah layar */}
      <div className="relative md:w-1/2 w-full h-64 md:h-auto">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bagian kanan: informasi dengan gradasi */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-gradient-to-r from-sky-900/90 via-sky-800/95 to-sky-700 text-white p-10">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">{person.name}</h1>
          <p className="text-2xl font-semibold text-sky-200 mb-6">
            {person.role}
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 text-sky-100">
              Tanggung Jawab Utama
            </h2>
            <ul className="space-y-2 text-lg">
              {person.tasks.map((task, index) => (
                <li key={index} className="flex items-center justify-start">
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
    </section>
  );
}
