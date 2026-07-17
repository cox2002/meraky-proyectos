"use client";

import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

const INCLUYE = [
  "Ventilación con lluvia",
  "Seguridad adicional",
  "Fácil limpieza",
  "Apertura controlada",
  "Brazo limitador",
  "Sellado hermético"
];

const VENTAJAS = [
  {
    title: "Ventila con Lluvia",
    desc: "Su apertura hacia afuera desde la base actúa como visera, ventilando habitaciones sin dejar entrar el agua."
  },
  {
    title: "Seguridad Excepcional",
    desc: "La reducida apertura inferior y el bloqueo interno hacen sumamente difícil el acceso forzado desde fuera."
  },
  {
    title: "Limpieza Interna",
    desc: "El diseño balanceado permite realizar el mantenimiento e higiene del paño exterior con total facilidad."
  },
  {
    title: "Control del Flujo",
    desc: "Equipada con brazos limitadores de fricción de acero inoxidable que sostienen firmemente la apertura elegida."
  }
];

const DATOS = [
  {
    title: "Dimensiones",
    icon: (
      <svg className="w-6 h-6 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    items: [
      { label: "Ancho estándar", value: "40 – 120 cm" },
      { label: "Alto estándar", value: "40 – 120 cm" },
      { label: "Apertura máxima", value: "15 – 25 cm (según brazo)" },
      { label: "Espesor de vidrio", value: "6mm" }
    ]
  },
  {
    title: "Perfilería",
    icon: (
      <svg className="w-6 h-6 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      { label: "Material estructural", value: "Aluminio anodizado" },
      { label: "Espesor de perfil", value: "1.2 – 1.5 mm" },
      { label: "Bisagras utilizadas", value: "Fricción de acero inoxidable" },
      { label: "Acabados disponibles", value: "Natural / Champagne" }
    ]
  },
  {
    title: "Vidrio",
    icon: (
      <svg className="w-6 h-6 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    items: [
      { label: "Tipos de cristal", value: "Crudo o Templado" },
      { label: "Espesor estándar", value: "6mm" },
      { label: "Acabados disponibles", value: "Transparente / Esmerilado" },
      { label: "Tratamiento extra", value: "Easy Clean disponible" }
    ]
  },
  {
    title: "Rendimiento",
    icon: (
      <svg className="w-6 h-6 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      { label: "Brazo limitador", value: "Incluido (con ajuste de resistencia)" },
      { label: "Material de empaque", value: "Burlete de caucho EPDM" },
      { label: "Mantenimiento", value: "Mínimo anual" },
      { label: "Garantía de perfil", value: "10 años Meraki" }
    ]
  }
];

const GALERIA_PRODUCTO = [

  "/images/ventanas/ventana-proyectante1.png",
  "/images/ventanas/ventana-proyectante2.png",
  "/images/ventanas/ventana-proyectante3.png"
];

const GALERIA = [
  "/images/ventanas/ventana-proyectante1.png",
  "/images/ventanas/ventana-proyectante2.png",
  "/images/ventanas/ventana-proyectante3.png",
  "/images/ventanas/ventana-proyectante4.png",
  "/images/ventanas/ventana-proyectante5.png"

];

const APLICACIONES = [
  "Cocinas y lavanderías (ventilación segura incluso con lluvia)",
  "Baños con alta necesidad de privacidad y ventilación constante",
  "Zonas de viento y lluvia moderada (apertura tipo visera)",
  "Oficinas, pasadizos y ambientes residenciales intermedios",
  "Dormitorios secundarios que requieren control preciso del flujo de aire"
];

const FAQ = [
  {
    pregunta: "¿En qué ambientes de la casa se suele instalar la proyectante?",
    respuesta: "Es el sistema idóneo para cocinas, baños, pasadizos y lavanderías."
  },
  {
    pregunta: "¿Qué nivel de seguridad ofrece este modelo?",
    respuesta: "Es de las ventanas más seguras del mercado residencial. Los brazos limitadores de fricción restringen la apertura a unos 15 o 20 cm, lo que hace físicamente imposible que una persona intente ingresar por esa ranura. Además, las manijas interiores cuentan con trabas de alta resistencia."
  },
  {
    pregunta: "¿Se puede acoplar con paños fijos?",
    respuesta: "Sí, es una combinación muy elegante y común. Se suele instalar un paño fijo de vidrio templado de gran tamaño para dar luminosidad y vistas, y en la base o parte superior se coloca una ventana proyectante para controlar la ventilación."
  }
];

export default function VentanaProyectantePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % GALERIA_PRODUCTO.length);
  };
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + GALERIA_PRODUCTO.length) % GALERIA_PRODUCTO.length);
  };

  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) => (prev! + 1) % GALERIA.length);
    }
  };
  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) => (prev! - 1 + GALERIA.length) % GALERIA.length);
    }
  };

  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cards = [
    { img: "/images/ventanas/ventana-proyectante1.png", alt: "Diseño Ventana Cerrada" },
    { img: "/images/ventanas/ventana-proyectante2.png", alt: "Diseño Ventana Abierta" },
    { img: "/images/ventanas/ventana-proyectante3.png", alt: "Manija Ventana Proyectante" }
  ];

  const getCardStyle = (idx: number) => {
    const diff = (idx - activeCard + 4) % 4;

    let zIndex = 10;
    let transform = 'translate3d(-74%, -68%, 0) scale(0.88) rotate(3deg)';
    let opacity = 0.6;
    let boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';

    if (diff === 0) {
      zIndex = 40;
      transform = 'translate3d(-40%, -40%, 0) scale(1) rotate(4deg)';
      opacity = 1;
      boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5)';
    } else if (diff === 1) {
      zIndex = 30;
      transform = 'translate3d(-55%, -52%, 0) scale(0.95) rotate(-6deg)';
      opacity = 0.8;
      boxShadow = '0 15px 20px -5px rgba(0, 0, 0, 0.3)';
    } else if (diff === 2) {
      zIndex = 20;
      transform = 'translate3d(-68%, -62%, 0) scale(0.90) rotate(3deg)';
      opacity = 0.7;
      boxShadow = '0 12px 18px -4px rgba(0, 0, 0, 0.25)';
    }

    if (hoveredCard === idx) {
      zIndex = 50;
      opacity = 1;
      boxShadow = '0 25px 35px -5px rgba(0, 0, 0, 0.6)';
      if (diff === 0) {
        transform = 'translate3d(-40%, -40%, 0) scale(1.1) rotate(2deg)';
      } else if (diff === 1) {
        transform = 'translate3d(-55%, -52%, 0) scale(1.06) rotate(-3deg)';
      } else if (diff === 2) {
        transform = 'translate3d(-68%, -62%, 0) scale(1.02) rotate(1deg)';
      } else {
        transform = 'translate3d(-74%, -68%, 0) scale(0.98) rotate(-1deg)';
      }
    }

    return {
      zIndex,
      transform,
      opacity,
      boxShadow
    };
  };

  return (
    <main className="min-h-screen w-full bg-[#0E0B06] overflow-x-hidden flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex items-center min-h-screen">
        
        {/* Contenedor de fondo fluido */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0E0B06]">
          <img 
            src="/images/ventanas/ventana-proyectante-fondo.png" 
            alt="Ventana Proyectante de Aluminio" 
            className="w-[90%] h-[80%] object-cover object-right ml-auto opacity-40 lg:opacity-50"

          />
          <div className="absolute inset-0 bg-[#0E0B06]/35 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B06] via-[#0E0B06]/85 to-transparent z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <ScrollReveal staggerChildren={0.15} direction="left" className="flex flex-col items-start">
              <ScrollRevealItem>
                <div className="flex items-center gap-4 mb-6">
                  <Link href="/productos/ventanas" className="text-white/60 hover:text-[#F59E1B] transition-colors flex items-center gap-2 text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Volver a tipos de ventanas
                  </Link>
                  <span className="bg-[#1B150B] border border-[#F59E1B]/30 text-[#F59E1B] text-xs px-3 py-1 rounded-full font-medium">
                    Proyectante
                  </span>
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                  Ventana <br className="hidden md:block" />
                  <span className="text-[#F59E1B] drop-shadow-[0_0_15px_rgba(245,158,27,0.2)]">Proyectante</span>
                </Heading>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="text-white/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-light">
                  Apertura hacia el exterior desde la parte inferior, con bisagras en el perfil superior. Ventilación continua y segura para tu hogar, incluso bajo lluvia moderada, con un diseño compacto y máxima hermeticidad.
                </p>
              </ScrollRevealItem>

              {/* Feature List */}
              <ScrollRevealItem className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 w-full">
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <svg className="w-5 h-5 text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Instalación 2-4 horas
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <svg className="w-5 h-5 text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Garantía 10 Años
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <svg className="w-5 h-5 text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Aluminio Anodizado
                </div>
              </ScrollRevealItem>

              {/* Buttons */}
              <ScrollRevealItem className="flex flex-wrap items-center gap-4">
                <a href="#contacto" className="bg-[#F59E1B] text-[#140F08] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(245,158,27,0.3)] hover:shadow-[0_0_30px_rgba(245,158,27,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2">
                  Cotizar Ahora
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
                <a href="tel:+51929765802" className="bg-[#1B150B]/80 text-white border border-[#2D2110] hover:border-[#F59E1B]/50 px-8 py-3.5 rounded-full font-bold hover:bg-[#1f1a11] backdrop-blur-sm hover:-translate-y-1 transition-all">
                  +51 929 765 802
                </a>
              </ScrollRevealItem>
            </ScrollReveal>

            {/* Right Content: Overlapping Cards & Pricing */}
            <ScrollReveal direction="right" className="relative mt-8 lg:mt-0 flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] max-w-md md:max-w-lg lg:max-w-xl mx-auto flex items-center justify-center pt-8 pl-8 pr-4 pb-4 h-[320px] sm:h-[380px] md:h-[420px]">
                {cards.map((card, idx) => {
                  const isActive = idx === activeCard;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveCard(idx)}
                      onMouseEnter={() => setHoveredCard(idx)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={getCardStyle(idx)}
                      className="absolute top-[40%] left-1/2 w-[65%] h-[100%] rounded-[2rem] overflow-hidden border border-[#2D2110]/60 transition-all duration-500 ease-in-out cursor-pointer group bg-[#1B150B]"
                    >
                      <div className={`absolute inset-0 bg-[#140F08] z-10 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-40 group-hover:opacity-10'}`} />
                      <img
                        src={card.img}
                        alt={card.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>

              {/* Pricing Card */}
              <div className="mt-8 bg-[#140F08]/90 backdrop-blur-md border border-[#F59E1B]/30 p-5 rounded-2xl flex items-center justify-between shadow-2xl w-[85%] max-w-md mx-auto">
                <div>
                  <span className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-1">Desde</span>
                  <span className="text-white text-3xl font-extrabold tracking-tight">S/. 245</span>
                </div>
                <div className="text-right">
                  <span className="text-[#F59E1B] text-xs font-bold uppercase tracking-widest block mb-1">Incluye</span>
                  <span className="text-white/90 text-sm font-medium">Instalación + Garantía</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Características Section */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal direction="up" className="mb-16">
            <h3 className="bg-[#F59E1B] text-[#140F08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              CARACTERÍSTICAS
            </h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">
              Lo que incluye tu <span className="text-[#eab308]">Proyectante</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUYE.map((item, idx) => (
              <ScrollRevealItem key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-lg transition-all text-left">
                <div className="w-10 h-10 shrink-0 bg-[#F59E1B] rounded-xl flex items-center justify-center text-[#140F08]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-gray-800 font-semibold text-base">{item}</span>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Especificaciones Técnicas Section */}
      <section className="py-24 px-6 bg-[#0E0B06] relative border-y border-[#2D2110]">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal direction="up" className="mb-16">
            <h3 className="bg-[#F59E1B] text-[#140F08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              ESPECIFICACIONES
            </h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-4">
              Datos <span className="text-[#F59E1B]">Técnicos</span>
            </Heading>
            <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
              Detalle exacto sobre el marco de aluminio, espesores de cristal e intervalos de fricción y apertura.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATOS.map((seccion, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#1B150B] border border-[#2D2110] rounded-3xl p-8 hover:border-[#F59E1B]/30 transition-colors text-left shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#2D2110]">
                  <div className="w-12 h-12 bg-[#F59E1B]/10 rounded-xl flex items-center justify-center text-[#F59E1B]">
                    {seccion.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{seccion.title}</h4>
                </div>
                <div className="space-y-4">
                  {seccion.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between items-center gap-4 border-b border-[#2D2110]/50 pb-3 last:border-0 last:pb-0">
                      <span className="text-white/50 text-sm">{item.label}</span>
                      <span className="text-white font-semibold text-right text-sm sm:text-base">{item.value}</span>
                    </div>
                  ))}
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal direction="up" className="mb-16">
            <h3 className="bg-[#F59E1B] text-[#140F08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              BENEFICIOS
            </h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">
              Ventajas de elegir <span className="text-[#eab308]">Proyectante</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENTAJAS.map((v, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#1B150B] border border-[#2D2110] rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] group hover:border-[#F59E1B]/30 transition-colors">
                <div className="w-14 h-14 bg-[#F59E1B] text-[#140F08] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{v.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed font-light">{v.desc}</p>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Aplicaciones Section */}
      <section className="py-24 px-6 bg-[#FAFAFA] relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h3 className="text-[#eab308] text-base font-bold tracking-[0.2em] uppercase mb-4">Aplicaciones</h3>
              <Heading level="h2" className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Ideal <span className="text-[#eab308]">para</span>
              </Heading>
              <p className="text-gray-600 text-xl md:text-2xl mb-12 leading-relaxed font-light max-w-xl">
                La ventana proyectante es perfecta para diferentes tipos de espacios y necesidades. Descubre si es la opción correcta para tu proyecto.
              </p>

              <div className="space-y-6">
                {APLICACIONES.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-5">
                    <div className="w-8 h-8 rounded-full bg-[#F59E1B]/20 text-[#eab308] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-lg md:text-xl">{app}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Slider de Imágenes del Producto */}
            <ScrollReveal direction="right" className="flex flex-col gap-6 mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[3/4] border border-gray-200 group shadow-lg">
                <div
                  className="absolute inset-0 w-full h-full flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {GALERIA_PRODUCTO.map((img, idx) => (
                    <div key={idx} className="w-full h-full shrink-0 relative">
                      <img
                        src={img}
                        alt={`Vista de producto ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 z-10" />
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
                  aria-label="Anterior"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
                  aria-label="Siguiente"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {GALERIA_PRODUCTO.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeSlide === idx ? 'bg-[#F59E1B] w-6' : 'bg-white/50'}`}
                      aria-label={`Ir al slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Tarjeta de Garantía */}
              <div className="bg-[#140F08]/95 backdrop-blur-md border border-[#F59E1B]/30 p-5 rounded-2xl flex items-center gap-4 shadow-xl w-full">
                <div className="w-12 h-12 rounded-xl bg-[#F59E1B]/10 flex items-center justify-center text-[#F59E1B] shrink-0">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <div className="text-white font-bold text-base">Garantía de 10 Años</div>
                  <div className="text-white/60 text-sm">En perfilería de aluminio y herrajes Meraki</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trabajos Realizados Section */}
      <section className="py-24 px-6 bg-[#0E0B06] relative border-t border-[#2D2110]">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal direction="up" className="mb-16">
            <h3 className="bg-[#F59E1B] text-[#140F08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              GALERÍA
            </h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">
              Trabajos <span className="text-[#F59E1B]">Realizados</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALERIA.map((img, idx) => (
              <ScrollRevealItem 
                key={idx} 
                onClick={() => setSelectedImageIdx(idx)}
                className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden group border border-[#2D2110] relative cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
              >
                <img
                  src={img}
                  alt={`Proyecto de ventana proyectante ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Preguntas Frecuentes FAQ Section */}
      <section className="py-24 px-6 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal direction="up" className="mb-16">
            <h3 className="bg-[#140F08] text-[#F59E1B] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
              FAQ
            </h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">
              Preguntas <span className="text-[#eab308]">Frecuentes</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} direction="up" className="space-y-4 text-left">
            {FAQ.map((faq, idx) => (
              <ScrollRevealItem key={idx}>
                <div
                  className={`bg-white border ${openFaq === idx ? 'border-[#F59E1B] shadow-md' : 'border-gray-200 hover:border-[#F59E1B]/50'} transition-all duration-300 rounded-2xl overflow-hidden`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between cursor-pointer group"
                  >
                    <span className={`font-bold md:text-lg transition-colors pr-8 ${openFaq === idx ? 'text-[#140F08]' : 'text-gray-700 group-hover:text-gray-900'}`}>
                      {faq.pregunta}
                    </span>
                    <svg
                      className={`w-5 h-5 text-[#F59E1B] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="p-6 pt-0 text-gray-600 leading-relaxed font-light">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#140F08] border-y border-[#2D2110] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up">
            <Heading level="h2" className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para tu nueva <span className="text-[#F59E1B]">Proyectante</span>?
            </Heading>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Solicita una cotización gratuita y sin ningún compromiso. Nuestro team de técnicos expertos te contactará en menos de 24 horas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#contacto" className="bg-[#F59E1B] text-[#140F08] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(245,158,27,0.3)] hover:shadow-[0_0_30px_rgba(245,158,27,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2">
                Cotizar Gratis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href="tel:+51929765802" className="text-white border border-[#2D2110] hover:border-[#F59E1B]/50 px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-all flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +51 929 765 802
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
      <Footer />

      {/* Lightbox Modal */}
      {selectedImageIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10 select-none animate-fade-in"
          onClick={() => setSelectedImageIdx(null)}
        >
          {/* Botón de cerrar */}
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-[#F59E1B] transition-colors p-3 bg-[#140F08]/60 rounded-full backdrop-blur-md z-[110] cursor-pointer border-0"
            onClick={() => setSelectedImageIdx(null)}
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flecha Izquierda */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#F59E1B] transition-colors p-3 bg-[#140F08]/60 rounded-full backdrop-blur-md z-[110] cursor-pointer border-0"
            onClick={prevImage}
            aria-label="Anterior"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flecha Derecha */}
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#F59E1B] transition-colors p-3 bg-[#140F08]/60 rounded-full backdrop-blur-md z-[110] cursor-pointer border-0"
            onClick={nextImage}
            aria-label="Siguiente"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contenedor de la Imagen */}
          <div 
            className="relative max-w-5xl w-full h-[75vh] md:h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={GALERIA[selectedImageIdx]} 
              alt={`Vista completa de Proyecto ${selectedImageIdx + 1}`} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
              style={{ objectFit: 'contain' }}
            />
            
            {/* Indicador de número de imagen */}
            <div className="absolute bottom-[-40px] text-white/80 font-sans text-sm bg-[#140F08]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              {selectedImageIdx + 1} / {GALERIA.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}