import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  User,
  Clock,
  ScanFace,
  AlertCircle,
  CalendarCheck,
  BarChart3,
  GraduationCap,
  LogIn,
} from "lucide-react";

export default function Capturas() {
  const capturas = [
    {
      img: "/Acceso.png",
      title: "Acceso al sistema",
      desc: "Inicio de sesión seguro para el ingreso de usuarios.",
      icon: <LogIn size={20} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      img: "/Panel de Control.png",
      title: "Panel de control",
      desc: "Visualización general de la información clave del sistema.",
      icon: <LayoutDashboard size={20} />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      img: "/Empleados.png",
      title: "Gestión de empleados",
      desc: "Administración completa de los datos del personal.",
      icon: <User size={20} />,
      color: "bg-green-100 text-green-600",
    },
    {
      img: "/Horarios.png",
      title: "Planificación de horarios",
      desc: "Organización de turnos según las necesidades operativas.",
      icon: <Clock size={20} />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      img: "/Reconocimiento.png",
      title: "Control biométrico",
      desc: "Registro de asistencia mediante reconocimiento facial.",
      icon: <ScanFace size={20} />,
      color: "bg-pink-100 text-pink-600",
    },
    {
      img: "/Justificaciones.png",
      title: "Gestión de incidencias",
      desc: "Registro y validación de ausencias del personal.",
      icon: <AlertCircle size={20} />,
      color: "bg-red-100 text-red-600",
    },
    {
      img: "/Licencias.png",
      title: "Administración de licencias",
      desc: "Control de permisos, vacaciones y ausencias prolongadas.",
      icon: <CalendarCheck size={20} />,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      img: "/Evaluaciones.png",
      title: "Evaluación de desempeño",
      desc: "Análisis del rendimiento del equipo de trabajo.",
      icon: <BarChart3 size={20} />,
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      img: "/Cursos.png",
      title: "Capacitación del personal",
      desc: "Gestión de formación y desarrollo interno.",
      icon: <GraduationCap size={20} />,
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % capturas.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? capturas.length - 1 : prev - 1
    );
  };

  return (
    <section id="Capturas" className="pt-10 pb-14 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">

        {/* HEADER */}
        <div className="max-w-2xl mb-6">
          <span className="text-xl font-bold text-[#4e73df] uppercase tracking-wider">
            Capturas
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 leading-tight">
            Gestión y visualización de datos en tiempo real.
          </h2>

          <p className="text-lg text-slate-500 mt-4">
            Una interfaz clara y eficiente que facilita el control y seguimiento en tiempo real.
          </p>
        </div>

        {/* CARRUSEL */}
        <div className="flex flex-col items-center">

          <div className="group relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl">

            {/* IMAGEN */}
            <img
              src={capturas[index].img}
              alt={capturas[index].title}
              className="w-full h-auto object-cover transition-all duration-500"
            />

            {/* OVERLAY GRADIENTE PRO */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* BOTONES */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
                         p-3 rounded-full bg-white/70 backdrop-blur 
                         shadow hover:bg-white transition 
                         opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 
                         p-3 rounded-full bg-white/70 backdrop-blur 
                         shadow hover:bg-white transition 
                         opacity-0 group-hover:opacity-100"
            >
              <ChevronRight />
            </button>

            {/* CONTENIDO */}
            <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">

              {/* ICONO */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${capturas[index].color}`}>
                {capturas[index].icon}
              </div>

              {/* TEXTO */}
              <div>
                <h3 className="text-white text-lg font-semibold">
                  {capturas[index].title}
                </h3>
                <p className="text-white/90 text-sm">
                  {capturas[index].desc}
                </p>
              </div>

            </div>
          </div>

          {/* INDICADORES */}
          <div className="flex gap-2 mt-5">
            {capturas.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                  i === index
                    ? "bg-[#4e73df] scale-125"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}