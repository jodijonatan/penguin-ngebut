import { Car, Github, Mail, Linkedin, MapPin } from "lucide-react"; // Ikon

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-8 border-t-4 border-sky-500">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-blue-800 pb-10 mb-8">
          {/* Kolom 1: Branding & Deskripsi Singkat */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#home"
              className="flex items-center text-3xl font-extrabold text-sky-400 mb-4 hover:text-sky-300 transition duration-300"
            >
              <Car className="w-8 h-8 mr-2" />
              PENGUIN RESING
            </a>
            <p className="text-blue-200 text-sm">
              Proyek Remote Control Car IoT
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h5 className="text-xl font-semibold mb-4 border-b-2 border-sky-500 pb-1">
              Navigasi
            </h5>
            <ul className="space-y-2 text-blue-300">
              <li>
                <a
                  href="#home"
                  className="hover:text-sky-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-sky-400 transition duration-300"
                >
                  About Project
                </a>
              </li>
              <li>
                <a
                  href="#member"
                  className="hover:text-sky-400 transition duration-300"
                >
                  Tim Kami
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-sky-400 transition duration-300"
                >
                  Galeri Momen
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Dukungan */}
          <div>
            <h5 className="text-xl font-semibold mb-4 border-b-2 border-sky-500 pb-1">
              Hubungi Kami
            </h5>
            <ul className="space-y-3 text-blue-300">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-sky-500" />
                <a
                  href="mailto:jodijonatann@gmail.com"
                  className="hover:text-sky-400 transition duration-300 text-sm"
                >
                  jodijonatann@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-sky-500" />
                <span className="text-sm">SMKS TELKOM 1 MEDAN</span>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Media Sosial Tim */}
          <div>
            <h5 className="text-xl font-semibold mb-4 border-b-2 border-sky-500 pb-1">
              Media Sosial
            </h5>
            <div className="flex space-x-4">
              <a
                href="https://github.com/proyek-penguin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-sky-400 transition duration-300"
                aria-label="GitHub Proyek"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/company/proyek-penguin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-sky-400 transition duration-300"
                aria-label="LinkedIn Proyek"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Copyright */}
        <div className="text-center md:flex justify-between items-center text-sm text-blue-400">
          <p>
            &copy; {new Date().getFullYear()} Tim Penguin Resing. Hak Cipta
            Dilindungi.
          </p>
          <p className="mt-2 md:mt-0">Dibuat oleh Jodi Jonatan</p>
        </div>
      </div>
    </footer>
  );
}
