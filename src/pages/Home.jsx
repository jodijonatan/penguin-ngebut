export default function Home() {
  return (
    <div
      id="home"
      className="bg-[url(/background.png)] min-h-screen bg-cover flex justify-center pt-32"
    >
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold">PENGUIN NGEBUT</h1>
        <p className="text-slate-200 text-2xl mb-4">
          “Smart Drive Smart Design”
        </p>
        <a
          href="#about"
          className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-full"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}
