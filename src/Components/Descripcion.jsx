import { Zap, BrainCircuit, Layers } from "lucide-react";

export default function Hero() {
  const features = [
    {
      title: "Procesos simplificados",
      description:
        "Optimizá la gestión diaria eliminando tareas repetitivas y reduciendo errores en cada operación.",
      icon: <Zap size={24} />,
    },
    {
      title: "Control inteligente",
      description:
        "Accedé a información clara y organizada que te permite tomar decisiones de forma rápida y precisa.",
      icon: <BrainCircuit size={24} />,
    },
    {
      title: "Gestión unificada",
      description:
        "Centralizá toda la información y los procesos de tu equipo en una única plataforma accesible.",
      icon: <Layers size={24} />,
    },
  ];

  return (
    <section id="Descripcion" className="pt-12 pb-20 bg-white relative">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative">

        {/* FONDO DECORATIVO */}
        <div className="absolute top-20 -left-32 w-72 h-72 bg-[#4e73df]/10 rounded-full blur-3xl"></div>

        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <span className="text-xl font-bold text-[#4e73df] uppercase tracking-wider">
            Descripción
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-2 leading-tight">
            Profesionalizá tu gestión desde un solo lugar
          </h2>

          <p className="text-lg text-slate-500 mt-4 max-w-xl">
            Centralizá procesos, optimizá tiempos y llevá el control de tu
            equipo con una solución pensada para crecer.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* ICONO */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-lg 
                bg-[#4e73df]/20 text-[#4e73df]
                transition-all duration-300
                group-hover:bg-[#4e73df] group-hover:text-white"
              >
                {feature.icon}
              </div>

              {/* TITULO */}
              <h4 className="mt-5 text-xl font-semibold text-slate-900">
                {feature.title}
              </h4>

              {/* DESCRIPCION */}
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>

              {/* LINEA INFERIOR */}
              <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#4e73df] transition-all duration-300 group-hover:w-full rounded-b-xl"></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}