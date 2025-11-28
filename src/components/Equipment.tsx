
import { Camera, Cpu, Battery, Radio } from "lucide-react";
import { GiDeliveryDrone } from "react-icons/gi";

const equipment = [
  {
    icon: Camera,
    name: 'Cinewhoop FPV 3.5 pulgadas',
    specs: 'Ideal para eventos cerrados e interiores, vuelo estable y seguro en espacios reducidos'
  },
  {
    icon: GiDeliveryDrone,
    name: 'DJI Mavic 3 Classic',
    specs: 'Cámara Hasselblad 20MP, video 5.1K, sensor CMOS 4/3", excelente para tomas aéreas cinematográficas'
  },
  {
    icon: Cpu,
    name: 'Drones FPV 5 pulgadas',
    specs: 'Alta velocidad y potencia, perfectos para exteriores y tomas dinámicas en espacios amplios'
  },
  {
    icon: Radio,
    name: 'Cosmostreamer',
    specs: 'Sistema profesional para streaming en vivo desde drones y cámaras, ideal para transmisiones en tiempo real'
  },
  {
    icon: Battery,
    name: 'Baterías Inteligentes',
    specs: 'Sistema de carga múltiple, gestión térmica avanzada, autonomía extendida'
  },
  {
    icon: Camera,
    name: 'Filtros ND & Polarizados',
    specs: 'Set completo de filtros profesionales para condiciones de luz variables'
  },
]

const Equipment = () => {
  return (
    <section id="equipo" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-2">Equipo Profesional</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Utilizo tecnología de última generación para garantizar la máxima calidad en cada proyecto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item,index)=>(
            <div
              key={index}
              className="bg-black border border-blue-500/20 rounded-xl p-8 hover:border-blue-400 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">{item.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.specs}</p>
            </div>
          ))}

        </div>

        <div className="mt-16 bg-black border border-green-500/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Certificaciones y Seguridad</h3>
          <p className="text-gray-300 leading-relaxed">
            Todos mis vuelos se realizan cumpliendo con la normativa vigente de aviación civil.
            Cuento con licencia de piloto de drones profesional, seguro de responsabilidad civil
            y todos los permisos necesarios para operaciones comerciales. Tu proyecto está en manos
            seguras y profesionales.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Equipment