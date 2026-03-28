import { ChevronDown } from "lucide-react";
import {
  UserPlus,
  CalendarCheck,
  Users,
  Clipboard,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="Inicio"
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(78,115,223,0.18), transparent 70%)",
      }}
    >
      {/* CONTENIDO */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center flex flex-col items-center">
        {/* TITULO */}
        <h1 className="text-[34px] sm:text-6xl lg:text-[70px] font-black tracking-tight text-[#0f1f3d] leading-[1]">
          Gestioná tu equipo en un solo lugar, <br className="hidden sm:block" />
          <span className="text-[#4e73df]">sin complicaciones</span>
        </h1>

        {/* DESCRIPCION */}
        <p className="mt-6 text-sm sm:text-lg text-gray-500 font-medium max-w-xl">
          Gestiona empleados, asistencias, evaluaciones y más en un solo lugar.
          Un sistema inteligente que optimiza tu área de Recursos Humanos.
        </p>

        {/* BOTONES */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="http://gestionsueldo.runasp.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4e73df] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-center"
          >
            Ingresar
          </a>
        </div>
      </div>

      {/* CARD IZQUIERDA ARRIBA */}
      <div className="hidden lg:flex absolute top-40 left-10 bg-white rounded-xl shadow-md px-4 py-3 items-start gap-3 w-64 animate-float [animation-delay:0s] [animation-duration:4s]">
        <div className="bg-blue-100 text-[#4e73df] p-2 rounded-lg">
          <UserPlus size={18} />
        </div>
        <div>
          <p className="text-gray-500 text-xs">Nuevo empleado</p>
          <p className="font-semibold text-sm">María López - Ventas</p>
        </div>
      </div>

      {/* CARD DERECHA ARRIBA */}
      <div className="hidden lg:flex absolute top-40 right-10 bg-white rounded-xl shadow-md px-4 py-3 items-start gap-3 w-64 animate-float [animation-delay:1s] [animation-duration:5s]">
        <div className="bg-green-100 text-green-600 p-2 rounded-lg">
          <CalendarCheck size={18} />
        </div>
        <div>
          <p className="text-gray-500 text-xs">Asistencias hoy</p>
          <p className="font-bold text-lg">+125 registros</p>
        </div>
      </div>

      {/* CARD IZQUIERDA ABAJO */}
      <div className="hidden lg:flex absolute top-[70%] left-10 bg-white rounded-xl shadow-md px-4 py-3 items-start gap-3 w-64 animate-float [animation-delay:2s] [animation-duration:6s]">
        <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
          <Users size={18} />
        </div>
        <div>
          <p className="text-gray-500 text-xs">Equipos activos</p>
          <p className="font-semibold text-sm">8 áreas organizadas</p>
        </div>
      </div>

      {/* CARD DERECHA ABAJO */}
      <div className="hidden lg:flex absolute top-[70%] left-[80%] items-center justify-center animate-float [animation-delay:3s] [animation-duration:7s]">
        <div className="bg-[#4e73df] text-white p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300 rotate-6">
          <Clock size={32} />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-slate-900 text-[11px] font-black tracking-[0.4em] uppercase opacity-80 mb-4">
          Deslizar
        </span>

        <button
          onClick={() => {
            const el = document.getElementById("Descripcion");
            if (el)
              window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-[#4e73df] animate-ping opacity-30"></div>
          <div className="relative bg-[#4e73df] p-3 rounded-full">
            <ChevronDown className="text-white" />
          </div>
        </button>
      </div>
    </section>
  );
}
