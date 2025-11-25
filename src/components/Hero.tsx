
import { ChevronDown } from "lucide-react"

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-linear-to-b from-black via-black/20 to-black/80 z-10"></div>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
      ></div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight leading-tight uppercase">
          Leo FPV
        </h1>

        <p className="text-2xl md:text-3xl bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent font-semibold mb-2" aria-label="Eslogan principal">Tu idea, desde otra perspectiva</p>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-1 leading-relaxed">Realizo videografía aérea con drones FPV y DJI.</p>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">Capturo movimientos fluidos, planos creativos y vistas únicas desde el cielo. Trabajo contenido para redes, proyectos comerciales y videos con estilo cinematográfico.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#portafolio"
            className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-emerald-400 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-400 hover:to-blue-500 transition-all transform hover:scale-102 shadow-lg"
          >
            Ver Portafolio
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 border-2 border-emerald-500/50 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:border-emerald-400 hover:bg-emerald-500/10 transition-all"
          >
            Contactar
          </a>
        </div>

      </div>

      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
      >
        <ChevronDown className="w-8 h-8 text-emerald-400" />
      </a>
    </section>
  )
}

export default Hero