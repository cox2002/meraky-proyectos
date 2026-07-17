"use client";

import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

const INCLUYE = [
  "Ahorro de espacio",
  "Fácil operación",
  "Múltiples hojas",
  "Rieles de aluminio",
  "Rodamientos silenciosos",
  "Sellado hermético"
];

const VENTAJAS = [
  {
    title: "Ahorra Espacio",
    desc: "Al deslizarse horizontalmente no necesita espacio de barrido, ideal para ambientes de espacio limitado."
  },
  {
    title: "Fácil Operación",
    desc: "Los rodamientos de alta calidad permiten un deslizamiento suave y silencioso con mínimo esfuerzo."
  },
  {
    title: "Múltiples Hojas",
    desc: "Disponible en configuraciones de 2, 3 o 4 hojas para adaptarse perfectamente a cualquier ancho de vano."
  },
  {
    title: "Larga Durabilidad",
    desc: "Perfilería de aluminio anodizado de alta resistencia a la corrosión y el desgaste por el sol y la lluvia."
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
      { label: "Ancho de vano", value: "60 – 300 cm" },
      { label: "Alto de vano", value: "100 – 250 cm" },
      { label: "Hojas disponibles", value: "2, 3 o 4 hojas" },
      { label: "Espesor de vidrio", value: "6mm / 8mm" }
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
      { label: "Material principal", value: "Aluminio arquitectónico" },
      { label: "Espesor de perfil", value: "1.2 – 2.0 mm" },
      { label: "Acabados disponibles", value: "Natural / Champagne / Negro" },
      { label: "Riel superior", value: "Doble canal anti-vibración" }
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
      { label: "Tipo de cristal", value: "Templado o Crudo de seguridad" },
      { label: "Espesor estándar", value: "6mm / 8mm" },
      { label: "Estilos estéticos", value: "Transparente / Pavonado" },
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
      { label: "Ciclos garantizados", value: "+100,000 deslizamientos" },
      { label: "Hermeticidad", value: "Burlete perimetral doble" },
      { label: "Mantenimiento", value: "Mínimo semestral" },
      { label: "Garantía de perfil", value: "10 años Meraki" }
    ]
  }
];

const GALERIA_PRODUCTO = [
  "/images/ventanas/ventana-corrediza.1.png",
  "/images/ventanas/ventana-corrediza.2.png",
  "/images/ventanas/ventana-corrediza.3.png"
];

const GALERIA = [
  "/images/ventanas/ventana-corrediza.26.png",
  "/images/ventanas/ventana-corrediza.2.png",
  "/images/ventanas/ventana-corrediza.3.png",
  "/images/ventanas/ventana-corrediza-galeria-1.jpg",
  "/images/ventanas/ventana-corrediza-galeria-2.jpg",
  "/images/ventanas/ventana-corrediza-galeria-3.jpg",
  "/images/ventanas/ventana-corrediza-galeria-4.jpg",
  "/images/ventanas/ventana-corrediza.5.png",
  "/images/ventanas/ventana-corrediza.10.png",
  "/images/ventanas/ventana-corrediza.17.png",
  "/images/ventanas/ventana-corrediza.20.png",
  "/images/ventanas/ventana-corrediza.25.png",
  "/images/ventanas/ventana-corrediza.27.png",
  "/images/ventanas/ventana-corrediza.24.png",
  "/images/ventanas/ventana-corrediza.13.png"
  
  

];

const APLICACIONES = [
  "Habitaciones con espacio sumamente limitado (sin barrido de hoja)",
  "Terrazas, patios y balcones con transición fluida",
  "Cocinas modernas (instalación sobre lavaderos o mesadas)",
  "Pasadizos y corredores estrechos que requieren luz natural",
  "Oficinas, mamparas residenciales de bajo perfil y locales comerciales"
];

const FAQ = [
  {
    pregunta: "¿Cuántas hojas necesito para mi ventana?",
    respuesta: "Depende directamente del ancho de tu vano. Para vanos de hasta 120 cm recomendamos un sistema de 2 hojas. Para vanos de 120 cm a 200 cm es ideal usar 3 hojas, y para medidas superiores a 200 cm sugerimos 4 hojas. Nuestro equipo técnico evaluará tu espacio en la visita previa."
  },
  {
    pregunta: "¿Se puede instalar en cualquier pared o vano?",
    respuesta: "Sí, siempre que el vano se encuentre correctamente nivelado y preparado. Realizamos una visita técnica sin costo para evaluar la estabilidad de la estructura y garantizar que los rieles y marcos encajen herméticamente."
  },
  {
    pregunta: "¿Cómo se realiza el mantenimiento de la corrediza?",
    respuesta: "El mantenimiento es sumamente sencillo. Se recomienda limpiar los rieles periódicamente con una aspiradora o cepillo suave para evitar que se acumule polvo o arena que pueda obstruir las ruedas. Los vidrios y perfiles se pueden limpiar con un paño suave húmedo."
  }
];

export default function VentanaCorredizaPage() {
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
    { img: "/images/ventanas/ventana-corrediza.1.png", alt: "Diseño Elegante Blanco" },
    { img: "/images/ventanas/ventana-corrediza.2.png", alt: "Diseño Elegante Blanco" },
    { img: "/images/ventanas/ventana-corrediza.3.png", alt: "Diseño Elegante Blanco" }, 
  ];

  const getCardStyle = (idx: number) => {
    const diff = (idx - activeCard + 3) % 3;

    // Base styles for the normal state
    let zIndex = 10;
    let transform = 'translate3d(-74%, -68%, 0) scale(0.88) rotate(3deg)';
    let opacity = 0.6;
    let boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';

    if (diff === 0) {
      zIndex = 30;
      transform = 'translate3d(-40%, -40%, 0) scale(1) rotate(4deg)';
      opacity = 1;
      boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.5)';
    } else if (diff === 1) {
      zIndex = 20;
      transform = 'translate3d(-60%, -56%, 0) scale(0.95) rotate(-6deg)';
      opacity = 0.8;
      boxShadow = '0 15px 20px -5px rgba(0, 0, 0, 0.3)';
    }

    // Expand (scale up) the card being hovered
    if (hoveredCard === idx) {
      zIndex = 50;
      opacity = 1;
      boxShadow = '0 25px 35px -5px rgba(0, 0, 0, 0.6)';
      if (diff === 0) {
        transform = 'translate3d(-40%, -40%, 0) scale(1.1) rotate(2deg)';
      } else if (diff === 1) {
        transform = 'translate3d(-60%, -56%, 0) scale(1.06) rotate(-3deg)';
      } else {
        transform = 'translate3d(-74%, -68%, 0) scale(1.0) rotate(1deg)';
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
            src="/images/ventanas/ventana-corrediza-fondo.png" 
            alt="Ventana Corrediza de Aluminio" 
            className="w-[90%] h-[78%] object-cover object-right ml-auto opacity-40 lg:opacity-50"

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
                    Corrediza
                  </span>
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                  Ventana <br className="hidden md:block" />
                  <span className="text-[#F59E1B] drop-shadow-[0_0_15px_rgba(245,158,27,0.2)]">Corrediza</span>
                </Heading>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="text-white/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-light">
                  Sistema de hojas deslizantes sobre rieles de aluminio de alta precisión. La solución perfecta para espacios donde la apertura convencional hacia afuera o hacia adentro no es viable. Máxima entrada de luz y ventilación fluida con el mínimo esfuerzo.
                </p>
              </ScrollRevealItem>

              {/* Feature List */}
              <ScrollRevealItem className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 w-full">
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <svg className="w-5 h-5 text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Instalación 1-2 días
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

            {/* Right Content: Overlapping Cards & Pricing below */}
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
                      {/* Dark overlay for background cards, fades on hover */}
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

              {/* Pricing Card below the image stack */}
              <div className="mt-8 bg-[#140F08]/90 backdrop-blur-md border border-[#F59E1B]/30 p-5 rounded-2xl flex items-center justify-between shadow-2xl w-[85%] max-w-md mx-auto">
                <div>
                  <span className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-1">Desde</span>
                  <span className="text-white text-3xl font-extrabold tracking-tight">S/. 298</span>
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
              Lo que incluye tu <span className="text-[#eab308]">Corrediza</span>
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
              Información detallada sobre materiales, dimensiones y características estructurales del sistema corredizo.
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
              Ventajas de elegir <span className="text-[#eab308]">Corrediza</span>
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

      {/* Aplicaciones (Ideal para) */}
      <section className="pt-6 pb-24 px-6 bg-[#FAFAFA] relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h3 className="text-[#F59E1B] text-sm font-bold tracking-[0.2em] uppercase mb-3">Aplicaciones</h3>
              <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ideal <span className="text-[#F59E1B]">para</span>
              </Heading>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light max-w-lg">
                La ventana corrediza es perfecta para diferentes tipos de espacios y necesidades. Descubre si es la opción correcta para tu proyecto.
              </p>

              <div className="space-y-4">
                {APLICACIONES.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#F59E1B]/20 text-[#F59E1B] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-800 font-bold text-base">{app}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Slider de Imágenes del Producto */}
            <ScrollReveal direction="right" className="flex flex-col gap-6 mt-8 lg:mt-0 w-full max-w-[440px] lg:max-w-[480px] mx-auto">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[3/4] border border-gray-200 group shadow-lg">

                {/* Contenedor de Imágenes con Transición Suave */}
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

                {/* Flechas de Navegación */}
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

                {/* Indicadores inferiores (Dots) */}
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

              {/* Tarjeta de Garantía (Colocada ABAJO de la imagen, no flotante) */}
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
                  alt={`Proyecto de ventana corrediza ${idx + 1}`}
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
              ¿Listo para tu nueva <span className="text-[#F59E1B]">Corrediza</span>?
            </Heading>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Solicita una cotización gratuita y sin ningún compromiso. Nuestro equipo de técnicos expertos te contactará en menos de 24 horas.
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
