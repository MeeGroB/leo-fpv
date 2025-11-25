import { Link } from "react-router-dom";

import cinematograficaImg from "../assets/servicio-cinematografica.jpg";
import accionImg from "../assets/servicio-accion.jpg";
import comercialImg from "../assets/servicio-comercial.jpg";
import eventosImg from "../assets/servicio-eventos.jpg";
import videoclipImg from "../assets/servicio-videoclip.jpg";
import productosImg from "../assets/servicio-productos.jpg"

const servicios = [
  {
    id: 'cinematografia-fpv',
    title: 'Videografía FPV Cinematográfica',
    image: cinematograficaImg
  },
  {
    id: 'grabaciones-accion',
    title: 'Grabaciones de Acción',
    image: accionImg
  },
  {
    id: 'contenido-comercial',
    title: 'Contenido Comercial',
    image: comercialImg
  },
  {
    id: 'eventos-celebraciones',
    title: 'Eventos y Celebraciones',
    image: eventosImg
  },
  {
    id: 'videoclips-musicales',
    title: 'Videoclips Musicales',
    image: videoclipImg
  },
  {
    id: 'proyectos-personalizados',
    title: 'Proyectos Personalizados',
    image: productosImg
  }
]

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Lo que Ofrezco</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">Especializado en grabaciones FPV profesionales que ofrecen perspectivas únicas, dinámicas e impactantes para tu proyecto.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio)=> (
            <Link
              key={servicio.id}
              to={`/servicio/${servicio.id}`}
              className="group relative overflow-hidden rounded-xl h-72 cursor-pointer"
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: `url('${servicio.image}')`}}></div>

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent group-hover:via-black/60 transition-all duration-300"></div>

              <div className="absolute inset-0 border-2 border-emerald-500/0 group-hover:border-emerald-500/50 transition-colors duration-300 rounded-xl"></div>

              <div className="relative z-10 h-full flex items-end p-8">
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                  {servicio.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="mt-16 bg-black border-emerald-500/30 rounded-2xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-emerald-400 text-sm font-semibold mb-2 uppercase">Velocidad</p>
              <p className="text-3xl font-bold text-white">100 km/h</p>
              <p className="text-gray-400 text-sm mt-2">Movimiento sin límites</p>
            </div>

            <div>
              <p className="text-blue-400 text-sm font-semibold mb-2 uppercase">Resolución</p>
              <p className="text-3xl font-bold text-white">4K</p>
              <p className="text-gray-400 text-sm mt-2">Claridad profesional</p>
            </div>

            <div>
              <p className="text-green-400 text-sm font-semibold mb-2 uppercase">Experiencia</p>
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-gray-400 text-sm mt-2">Años pilotando FPV</p>
            </div>
          </div>
        </div> */}


      </div>
    </section>
  )
}

export default Services