import LogoLoop from "../components/LogoLoop";

const imageLogos = [
  {
    src: "/material/arduino.png",
    alt: "Company 1",
    href: "#",
  },
  {
    src: "/material/batrai.png",
    alt: "Company 2",
    href: "#",
  },
  {
    src: "/material/blutut.png",
    alt: "Company 3",
    href: "#",
  },
  {
    src: "/material/buzzer.png",
    alt: "Company 3",
    href: "#",
  },
  {
    src: "/material/kabel.png",
    alt: "Company 3",
    href: "#",
  },
  {
    src: "/material/led.png",
    alt: "Company 3",
    href: "#",
  },
  {
    src: "/material/rangka.png",
    alt: "Company 3",
    href: "#",
  },
  {
    src: "/material/steper.png",
    alt: "Company 3",
    href: "#",
  },
  {
    src: "/material/ultrasonic.png",
    alt: "Company 3",
    href: "#",
  },
];

export default function Material() {
  return (
    <div
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
      className="bg-sky-50"
    >
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={180}
        direction="left"
        logoHeight={125}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
