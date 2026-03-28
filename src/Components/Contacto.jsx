import { useState } from "react";
import {
  User,
  Mail,
  MessageSquare,
  ArrowRight,
  MessageCircle
} from "lucide-react";

export default function Contacto() {

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mwvwvbjr", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="Contacto" className="py-16 bg-slate-50">

      <div className="container mx-auto px-6 sm:px-12 lg:px-20">

        <div className="max-w-2xl mb-12">
          <span className="text-xl font-bold text-[#4e73df] uppercase tracking-wider">
            Contacto
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 leading-tight">
            ¿Listo para empezar?
          </h2>

          <p className="text-lg text-slate-500 mt-4 max-w-xl">
            Nuestro equipo está listo para ayudarte a implementar la solución en tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">

          {/* FORMULARIO */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

            <h3 className="text-lg font-semibold text-slate-900">
              Enviá un mensaje
            </h3>

            <p className="text-slate-500 text-sm mt-1 mb-4">
              Te respondemos en menos de 24 horas.
            </p>

            {status === "success" ? (
              <p className="text-green-600 text-center font-semibold">
                Mensaje enviado correctamente
              </p>
            ) : (
              <form className="space-y-3" onSubmit={handleSubmit}>

                {/* NOMBRE */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nombre"
                    className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4e73df]"
                  />
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Correo electrónico"
                    className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4e73df]"
                  />
                </div>

                {/* MENSAJE */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-slate-400" size={18} />
                  <textarea
                    name="message"
                    required
                    placeholder="Contanos qué necesitás"
                    rows="3"
                    className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4e73df]"
                  ></textarea>
                </div>

                {/* EXTRAS FORMSPREE */}
                <input type="hidden" name="_subject" value="Nuevo mensaje desde WorkSync" />
                <input type="hidden" name="_captcha" value="false" />

                {/* ERROR */}
                {status === "error" && (
                  <p className="text-red-500 text-xs text-center">
                    Error al enviar. Intentá nuevamente.
                  </p>
                )}

                {/* BOTON */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-[#4e73df] text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-[#3f5fc4] transition-all duration-300 disabled:opacity-70"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                  <ArrowRight size={18} />
                </button>

                <p className="text-xs text-center text-slate-400">
                  Sin compromiso. No compartimos tu información.
                </p>

              </form>
            )}
          </div>

          {/* PANEL DERECHO */}
          <div className="flex flex-col gap-4">

            <a
              href="https://wa.me/5493562525282"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg 
                  bg-[#4e73df]/20 text-[#4e73df]
                  group-hover:bg-[#4e73df] group-hover:text-white transition-all duration-300"
                >
                  <MessageCircle size={18} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">WhatsApp</p>
                  <p className="text-sm text-slate-500">Respuesta rápida</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:abirivadero02@gmail.com"
              className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg 
                  bg-[#4e73df]/20 text-[#4e73df]
                  group-hover:bg-[#4e73df] group-hover:text-white transition-all duration-300"
                >
                  <Mail size={18} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-sm text-slate-500">
                    abirivadero02@gmail.com
                  </p>
                </div>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}