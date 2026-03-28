import { ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 py-6 mt-10 overflow-hidden">

      {/* FONDO SUAVE */}
      <div className="absolute inset-0 bg-[#4e73df]/5 opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

        {/* FILA PRINCIPAL */}
        <div className="flex flex-row justify-between items-center gap-4 w-full">

          {/* IZQUIERDA */}
          <h2 className="text-2xl font-bold tracking-tight">
            <span className="stroke-black">WORK</span>
            <span className="stroke-blue">SYNC</span>
          </h2>

          {/* CENTRO (SOLO DESKTOP) */}
          <div className="hidden md:flex items-center gap-2">

            <a
              href="https://www.linkedin.com/in/abigail-rivadero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-500 hover:text-[#4e73df] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1 3.86 1 4.98 2.12 4.98 3.5zM.24 8h4.48v14H.24V8zm7.64 0h4.29v1.92h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.85V22h-4.48v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.76-2.61 3.58V22H7.88V8z"/>
              </svg>
            </a>

            <div className="h-4 w-px bg-slate-300"></div>

            <p className="text-sm text-slate-400 whitespace-nowrap">
              © {currentYear}{" "}
              <span className="text-slate-700 font-bold">
                Abigail Rivadero
              </span>
            </p>

          </div>

          {/* DERECHA */}
          <button
            onClick={scrollToTop}
            className="group flex items-center text-white hover:opacity-70 transition"
          >
            <div className="h-8 w-8 rounded-full border border-[#4e73df]/30 flex items-center justify-center group-hover:-translate-y-1 transition-all bg-[#4e73df]">
              <ArrowUp size={14} />
            </div>
          </button>

        </div>

        {/* MOBILE ABAJO */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-4 text-slate-500">

          <a
            href="https://www.linkedin.com/in/abigail-rivadero"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-[#4e73df] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1 3.86 1 4.98 2.12 4.98 3.5zM.24 8h4.48v14H.24V8zm7.64 0h4.29v1.92h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.85V22h-4.48v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.76-2.61 3.58V22H7.88V8z"/>
            </svg>
          </a>

          <span>|</span>

          <p className="text-xs text-slate-400">
            © {currentYear} Abigail Rivadero
          </p>

        </div>

      </div>
    </footer>
  );
}