import { Link } from "react-router-dom";
import logo from "../assets/logo3.png";
const Footer = () => {
  return (
    <footer className="flex bg-primary text-cream py-2 px-10">
      <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 
              bg-linear-to-br from-[#d4af37] to-[#b8860b] 
              rounded-lg 
              flex items-center justify-center 
              transform 
              group-hover:scale-110 transition-transform duration-300"
            >
              <img className="w-10 invert brightness-0 sepia saturate-200 hue-rotate-20deg"
                src={logo} alt="logo silueta de caballo" />
            </div>
            <div className=" sm:block">
              <h1 className="text-xl font-bold text-cream tracking-wide">Horse Country</h1>
              <p className="text-xs text-secondary">Caballos de Élite</p>
            </div>
          </Link>
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-2">Horse Country</h3>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;