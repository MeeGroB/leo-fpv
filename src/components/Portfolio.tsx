
import { Play, X } from "lucide-react";
import { useState } from "react";
import naturalezaImg from "../assets/naturaleza.jpg";
import motorsportsImg from "../assets/motorsports.jpg";
import autolandImg from "../assets/autoland.jpg";
import azulcochaImg from "../assets/azulcocha.jpg";
import monumentalImg from "../assets/monumental.jpg"

const portfolioItems = [
  {
    image: motorsportsImg,
    title: 'Motorsports',
    category: 'Deportes',
    videoUrl: 'https://www.youtube.com/embed/NEkrL1nKqwE'
  },
  {
    image: naturalezaImg,
    title: 'Paisajes Naturales',
    category: 'Naturaleza',
    videoUrl: 'https://www.youtube.com/embed/3julXZ5GeA0'
  },
  {
    image: autolandImg,
    title: 'Video de Marca',
    category: 'Empresas',
    videoUrl: 'https://www.youtube.com/embed/rHBkHQuupYY'
  },
  {
    image: azulcochaImg,
    title: 'Azulcocha',
    category: 'Naturaleza',
    videoUrl: 'https://www.youtube.com/embed/40a4SfCs-qM'
  },
  {
    image: monumentalImg,
    title: 'Estadio Monumental',
    category: 'Eventos',
    videoUrl: 'https://www.youtube.com/embed/Wm5j3vRMSpg'
  },
  {
    image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Atardeceres Épicos',
    category: 'Cinematografía',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

const Portfolio = () => {

  const [selectedVideo, setSelectedVideo] = useState<{ title:string; category: string; videoUrl: string} | null>(null);

  return (
    <section id="portafolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Portafolio</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes capturando momentos únicos desde el cielo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item,index)=> (
            <div
              key={index}
              onClick={()=>setSelectedVideo(item)}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-emerald-500/80 p-4 rounded-full">
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 ring-0 p-6">
                  <p className="text-emerald-400 text-sm font-semibold">{item.category}</p>
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            ¿Quieres ver más de mi trabajo? Contáctame para ver mi portafolio completo
          </p>
        </div>

      </div>

      
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={()=> setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-5xl"
            onClick={(e)=> e.stopPropagation()}
          >
            <button
              onClick={()=> setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-zinc-900 rounded-xl overflow-hidden border-2 border-emerald-500/30">
              <div className="aspect-video">
                <iframe 
                  src={selectedVideo.videoUrl} 
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6">
                <p className="text-emerald-400 text-sm font-semibold ">{selectedVideo.category}</p>
                <h3 className="text-white text-2xl font-bold">{selectedVideo.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </section>
  )
}

export default Portfolio