import { useState } from 'react';
import { Menu, X, Camera, Palette, BookOpen, Globe, Mail, Phone, MapPin, ChevronRight, Monitor } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import logoImago from '../imports/Logotipo-IMAGO.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Palette,
      title: "Diseño Gráfico",
      description: "Creamos identidades visuales memorables que conectan con tu audiencia. Desde branding hasta material publicitario.",
      features: ["Identidad corporativa", "Branding & Logotipos", "Material publicitario", "Diseño de empaques"]
    },
    {
      icon: BookOpen,
      title: "Diseño Editorial",
      description: "Damos vida a tus publicaciones con diseños editoriales profesionales que cautivan y comunican efectivamente.",
      features: ["Revistas y catálogos", "Libros y publicaciones", "Manuales corporativos", "Diseño de portadas"]
    },
    {
      icon: Camera,
      title: "Fotografía",
      description: "Capturamos la esencia de tu marca con fotografía profesional de alto impacto visual y calidad excepcional.",
      features: ["Fotografía de producto", "Fotografía publicitaria", "Fotografía corporativa", "Sesiones comerciales"]
    },
    {
      icon: Monitor,
      title: "Web y Animación",
      description: "Desarrollamos sitios web modernos, responsivos y optimizados, complementados con animaciones que dan vida a tu marca.",
      features: ["Sitios web corporativos", "E-commerce", "Landing pages", "Animaciones digitales"]
    }
  ];

  const portfolioCategories = {
    "Diseño Gráfico": [
      {
        image: "https://images.unsplash.com/photo-1748326650737-33500fdfda30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Desarrollo de Logo",
        description: "Identidad de marca"
      },
      {
        image: "https://images.unsplash.com/photo-1775737599962-fa2f0db12e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Identidad Corporativa",
        description: "Branding completo"
      },
      {
        image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Diseño de Empaque",
        description: "Packaging profesional"
      }
    ],
    "Diseño Editorial": [
      {
        image: "https://images.unsplash.com/photo-1766239303199-b45e6bcdc901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Revista Corporativa",
        description: "Diseño editorial completo"
      },
      {
        image: "https://images.unsplash.com/photo-1643485839726-c9d4fac1c9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Catálogo de Productos",
        description: "Diagramación y maquetación"
      },
      {
        image: "https://images.unsplash.com/photo-1622020934415-9f549755a7bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Manual Corporativo",
        description: "Identidad editorial"
      }
    ],
    "Fotografía": [
      {
        image: "https://images.unsplash.com/photo-1697301439916-89153ae8bbd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Fotografía de Producto",
        description: "Sesión comercial"
      },
      {
        image: "https://images.unsplash.com/photo-1611149974482-764b0c2a211a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Fotografía Publicitaria",
        description: "Campaña comercial"
      },
      {
        image: "https://images.unsplash.com/photo-1682078234868-412ec5566118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Fotografía Corporativa",
        description: "Sesión empresarial"
      }
    ],
    "Web y Animación": [
      {
        image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Diseño de Sitio Web",
        description: "Sitio corporativo"
      },
      {
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "E-commerce",
        description: "Tienda online"
      },
      {
        image: "https://images.unsplash.com/photo-1624225322963-a453470735c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Animaciones Digitales",
        description: "Motion graphics"
      }
    ],
    "Impresión": [
      {
        image: "https://images.unsplash.com/photo-1758183961426-88d64eb5f787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Impresión Offset",
        description: "Alta calidad litográfica"
      },
      {
        image: "https://images.unsplash.com/photo-1745845289797-913815100704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Impresión Tipográfica",
        description: "Técnica artesanal"
      },
      {
        image: "https://images.unsplash.com/photo-1625820104062-387167dd655b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Impresión Digital",
        description: "Tirajes cortos"
      }
    ],
    "Terminados": [
      {
        image: "https://images.unsplash.com/photo-1700887913623-979f688ac56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Troquelado",
        description: "Cortes especiales"
      },
      {
        image: "https://images.unsplash.com/photo-1768902406144-a348c559c73c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Encuadernación",
        description: "Técnicas artesanales"
      },
      {
        image: "https://images.unsplash.com/photo-1758183961426-88d64eb5f787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        title: "Acabados UV",
        description: "Barniz UV y laminado"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <img src={logoImago} alt="Imago Fotodiseño" className="h-12" />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-slate-700 hover:text-green-600 transition-colors">Inicio</a>
              <a href="#servicios" className="text-slate-700 hover:text-green-600 transition-colors">Servicios</a>
              <a href="#portfolio" className="text-slate-700 hover:text-green-600 transition-colors">Portfolio</a>
              <a href="#grupo" className="text-slate-700 hover:text-green-600 transition-colors">Grupo Corporativo</a>
              <a href="#nosotros" className="text-slate-700 hover:text-green-600 transition-colors">Nosotros</a>
              <a href="#contacto" className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                Contacto
              </a>
            </div>

            <button
              className="md:hidden text-slate-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#inicio" className="block text-slate-700 hover:text-green-600 py-2">Inicio</a>
              <a href="#servicios" className="block text-slate-700 hover:text-green-600 py-2">Servicios</a>
              <a href="#portfolio" className="block text-slate-700 hover:text-green-600 py-2">Portfolio</a>
              <a href="#grupo" className="block text-slate-700 hover:text-green-600 py-2">Grupo Corporativo</a>
              <a href="#nosotros" className="block text-slate-700 hover:text-green-600 py-2">Nosotros</a>
              <a href="#contacto" className="block bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full text-center">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                <Camera className="w-4 h-4" />
                <span className="text-sm font-medium">Taller Creativo en Medellín</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Diseño Gráfico y Fotografía
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent"> Profesional</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Estudio de diseño gráfico, editorial, fotografía y desarrollo web profesional en Medellín, Colombia. Transformamos tus ideas en realidad visual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#servicios" className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all">
                  Ver Servicios
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#portfolio" className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:border-green-600 hover:text-green-600 transition-colors">
                  Portfolio
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1682078234868-412ec5566118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Fotografía profesional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">500+</div>
                <div className="text-slate-600">Proyectos realizados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Soluciones creativas integrales para hacer brillar tu marca
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-green-600 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                      <ChevronRight className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Portfolio</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explora nuestros proyectos organizados por categoría
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(portfolioCategories).map(([category, projects], catIndex) => (
              <div key={catIndex}>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-green-600">
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-2">
                      <div className="aspect-[4/3]">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="text-sm text-green-300 mb-1">{item.description}</div>
                          <div className="text-xl font-semibold">{item.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grupo Corporativo Section */}
      <section id="grupo" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Grupo Corporativo de Impresión y Diseño</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6">
              Soluciones gráficas integrales
            </p>
            <p className="text-lg text-slate-400 max-w-4xl mx-auto">
              Somos un grupo empresarial que integra diferentes marcas especializadas del sector gráfico,
              uniendo estrategia, creatividad, diseño, impresión y producción en un solo ecosistema profesional.
            </p>
          </div>

          <div className="mb-16 text-center">
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Nuestro enfoque es ofrecer a empresas y emprendimientos soluciones gráficas completas,
              optimizando tiempos, costos y calidad, desde la conceptualización hasta la entrega final.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center">Empresas del Grupo</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Brillos de Luna Litografía */}
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Brillos de Luna Litografía</h3>
              <p className="text-slate-400 text-sm mb-4">Impresión litográfica y acabados de alta calidad</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Impresión litográfica en GTO bicolor</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Troquelado de pliego menor</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Laminado mate y brillante</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Brillo UV y reserva</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Terminados litográficos</span>
                </li>
              </ul>
              <p className="text-green-400 text-sm mt-4">👉 Producción editorial y comercial con acabados de alta calidad</p>
            </div>

            {/* JR Marquillas */}
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">JR Marquillas</h3>
              <p className="text-slate-400 text-sm mb-4">Marquillas y etiquetas para la industria textil y comercial</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Marquillas en nylon y satín</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Etiquetas en cartón</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Estampado al calor</span>
                </li>
              </ul>
              <p className="text-green-400 text-sm mt-4">👉 Ideal para industria textil, marcas de ropa y productos comerciales</p>
            </div>

            {/* Imago Fotodiseño */}
            <div className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors border-2 border-green-600">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Imago Fotodiseño</h3>
              <p className="text-slate-400 text-sm mb-4">Diseño gráfico, diseño web y fotografía profesional</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Diseño gráfico profesional</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Diseño editorial</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Diseño web</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Fotografía profesional</span>
                </li>
              </ul>
              <p className="text-green-400 text-sm mt-4">👉 Desarrollo visual estratégico para marcas y empresas</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">¿Por qué trabajar con nuestro grupo?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✔</div>
                <div>
                  <h4 className="font-semibold mb-1">Un solo equipo para todo tu proyecto gráfico</h4>
                  <p className="text-slate-300 text-sm">Gestión integral sin intermediarios</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✔</div>
                <div>
                  <h4 className="font-semibold mb-1">Integración entre diseño y producción</h4>
                  <p className="text-slate-300 text-sm">Flujo de trabajo optimizado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✔</div>
                <div>
                  <h4 className="font-semibold mb-1">Optimización de tiempos y costos</h4>
                  <p className="text-slate-300 text-sm">Mayor eficiencia en cada etapa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✔</div>
                <div>
                  <h4 className="font-semibold mb-1">Control de calidad en cada etapa</h4>
                  <p className="text-slate-300 text-sm">Supervisión profesional continua</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✔</div>
                <div>
                  <h4 className="font-semibold mb-1">Asesoría profesional continua</h4>
                  <p className="text-slate-300 text-sm">Acompañamiento en todo momento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-green-400 text-xl">✔</div>
                <div>
                  <h4 className="font-semibold mb-1">Resultados coherentes y funcionales</h4>
                  <p className="text-slate-300 text-sm">Visión completa del proyecto</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-slate-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Nuestro Valor Diferencial</h3>
            <p className="text-slate-300 max-w-3xl mx-auto">
              A diferencia de trabajar con proveedores independientes, el <strong>Grupo Corporativo de Impresión y Diseño</strong> ofrece
              un flujo de trabajo integrado, donde cada área entiende el proyecto como un todo y no como una pieza aislada.
              Esto se traduce en mejores resultados visuales, técnicos y comerciales para nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Sobre Nosotros</h2>
              <p className="text-lg text-slate-600 mb-6">
                <strong>Imago Fotodiseño</strong> es un taller creativo con sede en Medellín, Colombia, especializado en diseño gráfico, editorial, fotografía profesional y desarrollo web. Nos apasiona transformar ideas en experiencias visuales memorables.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Nuestro equipo de diseñadores y fotógrafos trabaja con dedicación para entregar proyectos creativos que comunican efectivamente y generan impacto en tu audiencia.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-slate-600">Proyectos realizados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-2">200+</div>
                  <div className="text-slate-600">Clientes satisfechos</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764588037085-a78240016f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                  alt="Espacio de trabajo creativo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Trabajemos Juntos</h2>
              <p className="text-slate-300 text-lg mb-8">
                ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte a materializar tus ideas. Estamos listos para impulsar tu marca.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:contacto@imagofotodisenomed.com" className="text-slate-300 hover:text-green-400 transition-colors">
                      contacto@imagofotodisenomed.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Teléfono</div>
                    <a href="tel:+5743001234567" className="text-slate-300 hover:text-green-400 transition-colors">
                      +57 (4) 300 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Ubicación</div>
                    <div className="text-slate-300">
                      Medellín, Colombia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all font-medium"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <img src={logoImago} alt="Imago Fotodiseño" className="h-10 brightness-0 invert" />
              </div>
              <p className="text-slate-400">
                Taller creativo en Medellín especializado en diseño gráfico, editorial, fotografía profesional y desarrollo web.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#servicios" className="hover:text-green-400 transition-colors">Diseño Gráfico</a></li>
                <li><a href="#servicios" className="hover:text-green-400 transition-colors">Diseño Editorial</a></li>
                <li><a href="#servicios" className="hover:text-green-400 transition-colors">Fotografía</a></li>
                <li><a href="#servicios" className="hover:text-green-400 transition-colors">Web y Animación</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#nosotros" className="hover:text-green-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#grupo" className="hover:text-green-400 transition-colors">Grupo Corporativo</a></li>
                <li><a href="#portfolio" className="hover:text-green-400 transition-colors">Portfolio</a></li>
                <li><a href="#contacto" className="hover:text-green-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Imago Fotodiseño. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
