import { useParams, useNavigate } from "react-router-dom";
// import { member } from "../data/members";

export default function Member() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Detail Anggota #{id}</h1>
      <p>Informasi lengkap anggota akan ditampilkan di sini.</p>
      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer mt-6 bg-sky-400 text-white py-2 px-4 rounded-full hover:bg-sky-500 transition duration-300"
      >
        ← Kembali
      </button>
    </section>
  );
}
