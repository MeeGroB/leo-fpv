import { useParams, /*Link,*/ useNavigate } from "react-router-dom";
import { ArrowLeft, /*Play*/ } from "lucide-react";
import { useEffect } from "react";

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  projects: {
    title: string;
    category: string;
    image: string;
    video?: string;
    description: string;
  }[];
}

const servicesData: Record<string, ServiceData> = {
  'cinematografia-fpv': {
    title: 'Videografía FPV Cinematográfica',
    subtitle: 'Grabaciones de alto impacto con tecnología FPV de última generación',
    description: 'Especializado en capturar movimientos dinámicos y perspectivas imposibles con drones FPV. Creamos videos cinematográficos en 4K que cuentan historias desde ángulos nunca vistos. Perfectos para comerciales, trailers y contenido viral que realmente destaca en redes sociales.',
    features: [
      'Grabación en 4K con estabilización profesional',
      'Movimientos dinámicos de alta velocidad',
      'Efectos visuales de transiciones suaves',
      'Edición profesional incluida',
      'Entrega en múltiples formatos'
    ],
    projects: [
      {
        title: 'Campaña Comercial Tech Startup',
        category: 'Publicidad',
        image: 'https://images.pexels.com/photos/1179648/pexels-photo-1179648.jpeg?auto=compress&cs=tinysrgb&w=1200',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Video comercial de 30 segundos con movimientos FPV dinámicos para empresa tecnológica'
      },
      {
        title: 'Trailer de Película Independiente',
        category: 'Cine',
        image: 'https://images.pexels.com/photos/3389804/pexels-photo-3389804.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Trailer cinematográfico con efectos de transición aérea'
      },
      {
        title: 'Presentación de Producto',
        category: 'Productivo',
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Showcasing de producto con aproximación FPV innovadora'
      }
    ]
  },
  'grabaciones-accion': {
    title: 'Grabaciones de Acción',
    subtitle: 'Captura de momentos adrenalínicos con precisión FPV',
    description: 'Grabamos eventos de acción, deportes extremos y momentos de alto octanaje con la velocidad y agilidad única del FPV. Nuestros drones pueden seguir la acción a 100 km/h, capturando cada detalle con claridad 4K.',
    features: [
      'Seguimiento de movimiento rápido',
      'Captura en tiempo real de eventos',
      'Estabilización avanzada FPV',
      'Edición acelerada disponible',
      'Entregas en 24-48 horas'
    ],
    projects: [
      {
        title: 'Competencia de Skate Park',
        category: 'Deportes',
        image: 'https://images.pexels.com/photos/3860443/pexels-photo-3860443.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Cobertura en vivo de competencia de skateboarding con drones FPV'
      },
      {
        title: 'Rally de Autos',
        category: 'Automovilismo',
        image: 'https://images.pexels.com/photos/3407320/pexels-photo-3407320.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Grabaciones aéreas de carreras de autos siguiendo velocidades altas'
      },
      {
        title: 'Festival de Actividades Extremas',
        category: 'Eventos',
        image: 'https://images.pexels.com/photos/1623519/pexels-photo-1623519.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Cobertura completa de festival con múltiples actividades'
      }
    ]
  },
  'contenido-comercial': {
    title: 'Contenido Comercial',
    subtitle: 'Soluciones visuales para marcas modernas',
    description: 'Creamos contenido comercial impactante que destaca tu marca. Desde tours creativos de propiedades hasta presentaciones de productos, utilizamos perspectivas únicas para captar la atención de tu audiencia.',
    features: [
      'Tours inmobiliarios interactivos',
      'Presentaciones de productos dinámicas',
      'Identidad visual de marca',
      'Optimización para redes sociales',
      'Estrategia de contenido incluida'
    ],
    projects: [
      {
        title: 'Tour Inmobiliario Lujo',
        category: 'Bienes Raíces',
        image: 'https://images.pexels.com/photos/3944682/pexels-photo-3944682.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Tour completo de propiedad de lujo con aproximaciones aéreas'
      },
      {
        title: 'Presentación Resort',
        category: 'Turismo',
        image: 'https://images.pexels.com/photos/3571215/pexels-photo-3571215.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Video promocional de resort mostrando instalaciones'
      },
      {
        title: 'Campaña E-commerce',
        category: 'Comercio Electrónico',
        image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Contenido de productos para plataforma de e-commerce'
      }
    ]
  },
  'eventos-celebraciones': {
    title: 'Eventos y Celebraciones',
    subtitle: 'Momentos memorables capturados desde nuevas perspectivas',
    description: 'Transformamos eventos especiales en historias visuales impactantes. Bodas, eventos corporativos, celebraciones privadas: cada momento merece una perspectiva única capturada con precisión FPV.',
    features: [
      'Cobertura completa del evento',
      'Cintas de entrada cinematográficas',
      'Highlights editados en 24 horas',
      'Múltiples ángulos y perspectivas',
      'Video de baja resolución para previsualización'
    ],
    projects: [
      {
        title: 'Boda en Playa Paradisiaca',
        category: 'Bodas',
        image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Cobertura completa de boda con cintas de entrada aérea'
      },
      {
        title: 'Conferencia Empresarial',
        category: 'Corporativo',
        image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Video de conferencia con entrada aérea y tomas generales'
      },
      {
        title: 'Festival de Música',
        category: 'Entretenimiento',
        image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Cobertura aérea de festival con multitudes y escena'
      }
    ]
  },
  'videoclips-musicales': {
    title: 'Videoclips Musicales',
    subtitle: 'Visuales dinámicos que complementan tu música',
    description: 'Creamos videoclips musicales profesionales que sincronizar perfectamente con tu música. Utilizamos coreografía aérea FPV para crear visuals únicos que elevan tu arte a otro nivel.',
    features: [
      'Sincronización perfecta con música',
      'Coreografía aérea personalizada',
      'Edición y color grading profesional',
      'Distribución en plataformas digitales',
      'Derechos de uso completos'
    ],
    projects: [
      {
        title: 'Videoclip Artista Indie',
        category: 'Música',
        image: 'https://images.pexels.com/photos/3618519/pexels-photo-3618519.jpeg?auto=compress&cs=tinysrgb&w=1200',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Videoclip de 4 minutos con movimientos aéreos sincronizados'
      },
      {
        title: 'Cover Acústico',
        category: 'Música',
        image: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Videoclip minimalist con perspectivas aéreas sutiles'
      },
      {
        title: 'Tema Promocional',
        category: 'Producción',
        image: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Video promocional de nuevo álbum con visuals dinámicos'
      }
    ]
  },
  'proyectos-personalizados': {
    title: 'Proyectos Personalizados',
    subtitle: 'Tu visión hecha realidad con tecnología FPV',
    description: 'Si tienes una idea única que no encaja en las categorías anteriores, podemos hacerla realidad. Trabajamos contigo desde la conceptualización hasta la entrega final para crear algo verdaderamente especial.',
    features: [
      'Concepto personalizado',
      'Pre-producción colaborativa',
      'Equipos dedicados',
      'Revisiones ilimitadas',
      'Soporte post-producción'
    ],
    projects: [
      {
        title: 'Documental Aventura',
        category: 'Documental',
        image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Documental de aventura en montaña con perspectivas aéreas'
      },
      {
        title: 'Transmisión en Vivo',
        category: 'Streaming',
        image: 'https://images.pexels.com/photos/3626014/pexels-photo-3626014.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Streaming en vivo con drones FPV para mayor enganche'
      },
      {
        title: 'Proyecto Artístico',
        category: 'Arte',
        image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
        description: 'Instalación artística documentada con perspectiva aérea'
      }
    ]
  }
};

const ServiceDetail = () => {

  const { id } = useParams<{ id: string}>();
  const service = servicesData[id || ''];
  const navigate = useNavigate();

  useEffect(()=> {
    window.scrollTo(0,0);
    console.log(service)
  }, [id]);

  const handleVolverServicios = ()=> {
    navigate('/');
    setTimeout(() => {
      const serviciosSection = document.getElementById("servicios");
      serviciosSection?.scrollIntoView({ behavior: 'smooth'});
    }, 100);
  }

  if(!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Servicio no encontrado</h1>
          <button 
            onClick={handleVolverServicios}
            className="text-emerald-400 hover:text-emerald-300 cursor-pointer"
          >
            Volver a servicios
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={handleVolverServicios}
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a servicios
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-2 bg-linear-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            {service.title}
          </h1>
          <p className="text-2xl text-gray-300 mb-8">{service.subtitle}</p>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">{service.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">Características</h2>
            <ul className="space-y-4">
              {service.features.map((feature,index)=> (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-950 border border-emerald-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Interesado?</h3>
              <p className="text-gray-400 mb-6">Contáctame para discutir tu proyecto específico. Puedo proporcionar presupuesto personalizado basado en tus necesidades.</p>

              <a 
                href="https://wa.me/+51991012958?text=Estoy%20interesado%20en%20el%20servicio%20de%20grabaciones%20FPV"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-linear-to-r from-emerald-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-400 hover:to-blue-500 transition-all duration-300 text-center"
              >
                Contactar por WhatsApp
              </a>
          </div>
        </div>

        

      </div>
    </div>
  )
}

export default ServiceDetail