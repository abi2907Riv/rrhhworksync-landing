import { useState, useEffect } from "react";

const sections = ["Inicio", "Descripcion", "Funciones", "Capturas", "Contacto"];
const NAVBAR_HEIGHT = 80;

function Navbar() {
  const [active, setActive] = useState("Inicio");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - NAVBAR_HEIGHT - 10;
          const bottom = top + el.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      const top = el.offsetTop - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(section);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-[#4e73df] leading-none">
              WORKSYNC
            </h1>
            <span className="text-[14px] tracking-widest text-[#4e73df] uppercase font-bold">
              RRHH
            </span>
          </div>
        </div>

        {/* LINKS */}
        <ul className="hidden lg:flex items-center gap-8">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className="relative text-[#6A7A89] text-base group font-bold"
              >
                {section}

                {/* línea animada */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#6A7A89] transition-all duration-300 ease-in-out
                  ${active === section ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* DERECHA */}
        <div className="flex items-center gap-6">
          <a
  href="http://gestionsueldo.runasp.net/"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:inline-block bg-[#4e73df] text-white px-6 py-2.5 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-center"
>
  Ingresar
</a>

          <button
            className="lg:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col items-start py-4">
            {sections.map((section) => (
              <li key={section} className="w-full">
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    handleNavClick(e, section);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left text-[#4e73df] font-bold px-6 py-2"
                >
                  {section}
                </a>
              </li>
            ))}

            {/* LINEA SEPARADORA */}
            <div className="w-full border-t border-grey/300 my-3"></div>

            {/* BOTÓN INGRESAR */}
            <li className="w-full px-6">
              <a
                href="http://gestionsueldo.runasp.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#4e73df] text-white py-2 rounded-md font-bold shadow transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                Ingresar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
