
import { Mail } from "lucide-react";
import { FaTiktok, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {

  const whatsappNumber = "+51991012958";
  const whatsappMessage = encodeURIComponent('Hola Leonardo, me interesa contratar tus servicios de drones. ¿Podemos hablar?');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Contacto</h2>
          <p className="text-gray-400 text-xl">¿Listo para llevar tu proyecto al siguiente nivel? Hablemos</p>
        </div>

        <div className="bg-zinc-950 border border-emerald-500/20 rounded-2xl p-12">
          <div className="text-center mb-12">
            <FaWhatsapp className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-white">Contáctame por WhatsApp</h3>
            <p className="text-gray-400 text-lg mb-8">
              La forma más rápida y directa de hablar sobre tu proyecto.
              Respondo personalmente y puedo enviarte ejemplos de trabajos similares al instante.
            </p>

            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-linear-to-r from-emerald-500 to-green-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-emerald-400 hover:to-green-400 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
            >
              <FaWhatsapp className="w-7 h-7" />
              Abrir WhatsApp
            </a>
          </div>

          <div className="border-t border-emerald-500/20 pt-12">
            <p className="text-center text-gray-400 mb-8">También puedes encontrarme en:</p>

            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
              <a 
                href="https://www.instagram.com/leopg97/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
                <span>Instagram</span>
              </a>

              <a 
                href="https://www.youtube.com/@leonardodantepalominogallo6073"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <FaYoutube className="w-6 h-6" />
                <span>Youtube</span>
              </a>

              <a 
                href="mailto:leofpv@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>

              <a 
                href="https://www.tiktok.com/@leonardodantepalo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
                <span>TikTok</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">Te responderé lo más pronto posible</p>
        </div>

      </div>
    </section>
  )
}

export default Contact