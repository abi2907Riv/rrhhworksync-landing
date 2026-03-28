import {
  User,
  ScanFace,
  CalendarCheck,
  Clock,
  GraduationCap,
  BarChart3,
  CheckCircle,
  Layers,
} from "lucide-react";

export default function Funciones() {
  const funciones = [
    {
      title: "Gestión de empleados",
      desc: "Accedé a la información del equipo en fichas digitales siempre actualizadas.",
      icon: <User size={18} />,
    },
    {
      title: "Control biométrico",
      desc: "Registro de asistencia preciso con validación facial segura.",
      icon: <ScanFace size={18} />,
    },
    {
      title: "Administración de permisos",
      desc: "Organizá licencias, ausencias y vacaciones de forma simple.",
      icon: <CalendarCheck size={18} />,
    },
    {
      title: "Planificación de horarios",
      desc: "Definí turnos flexibles según las necesidades de tu empresa.",
      icon: <Clock size={18} />,
    },
    {
      title: "Formación interna",
      desc: "Impulsá el crecimiento del equipo con capacitaciones centralizadas.",
      icon: <GraduationCap size={18} />,
    },
    {
      title: "Seguimiento de asistencia",
      desc: "Visualizá ingresos y egresos en tiempo real.",
      icon: <Layers size={18} />,
    },
    {
      title: "Análisis de desempeño",
      desc: "Medí resultados y evolución del equipo con indicadores claros.",
      icon: <BarChart3 size={18} />,
    },
    {
      title: "Gestión de incidencias",
      desc: "Controlá justificaciones y validaciones de forma ágil.",
      icon: <CheckCircle size={18} />,
    },
  ];

  return (
    <section id="Funciones" className="pt-12 pb-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">

        {/* HEADER */}
        <div className="max-w-2xl mb-12">
          <span className="text-xl font-bold text-[#4e73df] uppercase tracking-wider">
            Funciones
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 leading-tight">
            Herramientas que potencian tu gestión
          </h2>

          <p className="text-lg text-slate-500 mt-6">
            Simplificá procesos, organizá tu equipo y mejorá la productividad desde un solo lugar.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-y-2 gap-x-16">

          {funciones.map((item, index) => (
            <div key={index} className="flex items-start gap-4 group hover:-translate-y-1 transition-all duration-300">

              {/* ICONO + LINEA */}
              <div className="flex flex-col items-center mt-1">

                {/* CIRCULO */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full 
                                bg-[#4e73df]/10 text-[#4e73df]
                                transition-all duration-300
                                group-hover:bg-[#4e73df] group-hover:text-white">
                  {item.icon}
                </div>

                {/* LINEA CORTA */}
                {index !== 6 && index !== 7 && (
                    <div className="hidden md:block w-[2px] h-6 bg-[#4e73df]/20 mt-2 
                                transition-all duration-300 
                                group-hover:bg-[#4e73df]"></div>
                )}
                
              </div>

              {/* TEXTO */}
              <div>
                <h4 className="font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-500 mt-1">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}