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
      {/* <div className="md:flex md:justify-center">
        <Link
          to={`/member/`}
          className="bg-sky-400 text-white py-2 px-4 rounded-full mt-auto hover:bg-sky-500 transition duration-300"
        >
          View More
        </Link>
      </div> */}
    </section>
  );
}
