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
      title: "Diseño Web",
      description: "Desarrollamos sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.",
      features: ["Sitios web corporativos", "E-commerce", "Landing pages", "Aplicaciones web"]
    }
  ];

  const portfolio = [
    {
      image: "https://images.unsplash.com/photo-1748326650737-33500fdfda30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Desarrollo de Logo",
      category: "Diseño Gráfico"
    },
    {
      image: "https://images.unsplash.com/photo-1766239303199-b45e6bcdc901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Revista y Catálogo",
      category: "Diseño Editorial"
    },
    {
      image: "https://images.unsplash.com/photo-1697301439916-89153ae8bbd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Fotografía de Producto",
      category: "Fotografía"
    },
    {
      image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Diseño de Interfaz",
      category: "Diseño Web"
    },
    {
      image: "https://images.unsplash.com/photo-1775737599962-fa2f0db12e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Identidad Corporativa",
      category: "Diseño Gráfico"
    },
    {
      image: "https://images.unsplash.com/photo-1611149974482-764b0c2a211a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      title: "Fotografía Comercial",
      category: "Fotografía"
    }
  ];

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
              Descubre algunos de nuestros proyectos más creativos y exitosos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
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
                    <div className="text-sm text-green-300 mb-2">{item.category}</div>
                    <div className="text-xl font-semibold">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
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
                <li><a href="#servicios" className="hover:text-green-400 transition-colors">Fotografía Publicitaria</a></li>
                <li><a href="#servicios" className="hover:text-green-400 transition-colors">Diseño Web</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#nosotros" className="hover:text-green-400 transition-colors">Sobre Nosotros</a></li>
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
