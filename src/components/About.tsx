import { Award, CheckCircle, ShieldCheck, ThumbsUp, Users } from "lucide-react";
import foto from "../assets/foto_leo.jpg";

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent text-center">
          Piloto de Drones FPV Profesional
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>



            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Soy Leonardo, piloto certificado especializado en videografía aérea FPV cinematográfica. Con experiencia en producciones de alto nivel, creo contenido visual dinámico que captura momentos imposibles de lograr con otros métodos.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Mi pasión es transformar ideas en grabaciones aéreas impactantes. Desde publicidad comercial hasta eventos épicos, cada proyecto recibe dedicación total y técnica de punta.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <p className="text-white font-semibold">Drones FPV Profesionales</p>
                  <p className="text-gray-400 text-sm">DJI Avata 2 con cámaras 4K de alta calidad</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
                <div>
                  <p className="text-white font-semibold">Licencia Profesional</p>
                  <p className="text-gray-400 text-sm">Piloto certificado con todos los permisos vigentes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                <div>
                  <p className="text-white font-semibold">Seguro Profesional</p>
                  <p className="text-gray-400 text-sm">Responsabilidad civil y cobertura completa</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-zinc-900 border border-emerald-500/20 rounded-lg p-6">
                <Award className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-gray-400 text-sm">Años Experiencia</p>
              </div>

              <div className="text-center bg-zinc-900 border border-blue-500/20 rounded-lg p-6">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white">20+</p>
                <p className="text-gray-400 text-sm">Clientes</p>
              </div>

              <div className="text-center bg-zinc-900 border border-emerald-500/20 rounded-lg p-6">
                <ThumbsUp className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-gray-400 text-sm">Satisfacción Cliente</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl ">
              <img
                src={foto}
                alt="Fotografía Leo FPV"
                className=" relative w-full h-full object-cover z-10"
              />
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-green-500/20 rounded-2xl transform rotate-3"></div>

              <div className="absolute -bottom-6 left-1/2 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <ShieldCheck />
                  <span className="font-semibold">Certificado RPAS</span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About