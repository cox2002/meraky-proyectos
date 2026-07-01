"use client";

import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

// Datos de Portafolio y FAQ
const PORTAFOLIO_VENTANAS = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=600&auto=format&fit=crop"
];

const FAQ_VENTANAS = [
  {
    pregunta: "¿Qué tipo de ventana aísla mejor el ruido?",
    respuesta: "Las ventanas termoacústicas con sistema de doble o triple vidrio y cámara de aire (sistema insulado) ofrecen el máximo aislamiento acústico, reduciendo el ruido hasta en 45dB."
  },
  {
    pregunta: "¿El aluminio se oxida con el tiempo?",
    respuesta: "No, utilizamos perfilería de aluminio arquitectónico anodizado o termoesmaltado, lo que le confiere alta resistencia a la corrosión y garantiza una larga vida útil incluso en climas adversos."
  },
  {
    pregunta: "¿Cuánto tiempo dura la instalación de las ventanas?",
    respuesta: "El tiempo de instalación depende del número de ventanas y la complejidad del proyecto, pero típicamente toma entre 1 a 3 días. Nuestro equipo profesional asegura un sellado hermético y acabados perfectos."
  },
  {
    pregunta: "¿Qué garantía ofrecen en sus ventanas?",
    respuesta: "Ofrecemos hasta 10 años de garantía en nuestra perfilería de aluminio y 5 años en los sistemas de vidrio. La garantía cubre defectos de fabricación y problemas de estanqueidad o instalación."
  },
  {
    pregunta: "¿Cuál es la diferencia entre vidrio crudo y vidrio templado?",
    respuesta: "El vidrio templado recibe un tratamiento térmico que lo hace 5 veces más resistente a los impactos que el vidrio crudo. Además, si se rompe, se fragmenta en trozos pequeños sin filo, minimizando riesgos."
  },
  {
    pregunta: "¿Realizan ventanas a medida o tienen medidas estándar?",
    respuesta: "Todas nuestras ventanas son fabricadas a la medida exacta de sus vanos. Realizamos una visita técnica previa para garantizar un ajuste perfecto y recomendar el mejor sistema para su espacio."
  }
];

// Datos de Tipos de Ventanas
const TIPOS_VENTANAS = [
  {
    title: "Ventana Corrediza",
    desc: "Sistema de hojas deslizantes que se desplazan horizontalmente sobre rieles. Ideal para espacios donde no se puede abrir hacia afuera.",
    price: "Desde S/ 298",
    tags: ["Ahorro de espacio", "Fácil operación", "Múltiples hojas"],
    materials: "3 materiales disponibles · Ver precios",
    image: "/images/ventanas/ventana-corrediza.png",
    href: "/productos/ventanas/corrediza",
    objectFit: "cover"
  },
  {
    title: "Ventana Proyectante",
    desc: "Se abre hacia afuera desde la parte inferior, permitiendo ventilación incluso con lluvia. Perfecta para baños y cocinas.",
    price: "Desde S/ 245",
    tags: ["Ventilación con lluvia", "Seguridad adicional", "Fácil limpieza"],
    materials: "2 materiales disponibles · Ver precios",
    image: "/images/ventanas/ventana-proyectante.png",
    href: "/productos/ventanas/proyectante",
    objectFit: "cover"
  },
  {
    title: "Ventana Batiente",
    desc: "Apertura lateral con bisagras, permite máxima ventilación y fácil limpieza. Clásica y funcional para cualquier ambiente.",
    price: "Desde S/ 180",
    tags: ["Máxima ventilación", "Fácil limpieza exterior", "Cierre multipunto"],
    materials: "2 materiales disponibles · Ver precios",
    image: "/images/ventanas/ventana-batiente.png",
    href: "/productos/ventanas/batiente",
    objectFit: "cover"
  },
  {
    title: "Ventana Pivotante",
    desc: "Gira sobre un eje central horizontal o vertical. Diseño moderno que permite limpiar ambos lados desde el interior.",
    price: "Desde S/ 250",
    tags: ["Diseño moderno", "Limpieza desde interior", "Giro 180°"],
    materials: "2 materiales disponibles · Ver precios",
    image: "/images/ventanas/ventana-pivotante.png",
    href: "/productos/ventanas/pivotante",
    objectFit: "cover"
  },
  {
    title: "Ventana Fija",
    desc: "Panel de vidrio fijo que no se abre. Maximiza la entrada de luz y las vistas, ideal para fachadas y muros cortina.",
    price: "Desde S/ 290",
    tags: ["Máxima luminosidad", "Sin mantenimiento de herrajes", "Mayor aislamiento"],
    materials: "2 materiales disponibles · Ver precios",
    image: "/images/ventanas/ventana-fija.png",
    href: "/productos/ventanas/fija",
    objectFit: "cover"
  }
];

const ESPECIFICACIONES = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    title: "Perfilería de Aluminio",
    items: [
      { label: "Serie económica", value: "1.2mm espesor" },
      { label: "Serie estándar", value: "1.5mm espesor" },
      { label: "Serie premium", value: "2.0mm espesor" }
    ]
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Tipos de Vidrio",
    items: [
      { label: "Crudo 6mm", value: "Uso estándar" },
      { label: "Templado 6mm", value: "Mayor seguridad" },
      { label: "Laminado", value: "Máxima protección" }
    ]
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Aislamiento Térmico",
    items: [
      { label: "Vidrio simple", value: "U = 5.8 W/m²K" },
      { label: "Doble vidrio", value: "U = 2.8 W/m²K" },
      { label: "Triple vidrio", value: "U = 1.0 W/m²K" }
    ]
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    title: "Aislamiento Acústico",
    items: [
      { label: "Vidrio simple 6mm", value: "28-30 dB" },
      { label: "Doble vidrio 4+4", value: "35-38 dB" },
      { label: "Acústico especial", value: "42-45 dB" }
    ]
  }
];

const PROCESO = [
  {
    step: "1",
    title: "Visita Técnica",
    desc: "Nuestro especialista visita tu hogar para tomar medidas exactas y evaluar las necesidades de aislamiento.",
    time: "30-45 min"
  },
  {
    step: "2",
    title: "Diseño y Cotización",
    desc: "Elaboramos un diseño personalizado considerando estética, funcionalidad y presupuesto. Incluye render 3D.",
    time: "24-48 horas"
  },
  {
    step: "3",
    title: "Fabricación",
    desc: "Fabricamos tus ventanas con perfilería de aluminio de alta calidad y vidrio certificado.",
    time: "7-10 días"
  },
  {
    step: "4",
    title: "Instalación",
    desc: "Instalación profesional con sellado hermético y acabados perfectos.",
    time: "1-3 días"
  }
];

export default function VentanasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    if (openFaq === idx) {
      setOpenFaq(null);
    } else {
      setOpenFaq(idx);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#0E0B06] overflow-x-hidden flex flex-col">
      <Navigation />

      {/* Hero Section para Ventanas (Diseño Mamparas Replicado) */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 flex-grow flex items-center min-h-screen lg:min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/images/ventanas/ventana-hero-bg.jpg" 
            alt="Fondo Ventanas de Lujo" 
            className="w-full h-[104%] object-cover object-center absolute top-0" 
          />
          <div className="absolute inset-0 bg-[#0E0B06]/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B06]/95 via-[#0E0B06]/65 to-transparent z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <ScrollReveal staggerChildren={0.15} direction="left" className="flex flex-col items-start">
              <ScrollRevealItem>
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#F59E1B]/30 bg-[#2D2110]/50 text-[#F59E1B] text-xs md:text-sm font-sans font-bold mb-6 shadow-sm backdrop-blur-md">
                  Especialistas en Ventanas de Aluminio
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <Heading level="display" className="text-white drop-shadow-2xl font-display font-bold text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] mb-6 tracking-tight">
                  Ventanas de <br className="hidden md:block"/>
                  <span className="text-[#F59E1B] drop-shadow-[0_0_15px_rgba(245,158,27,0.15)]">Aluminio</span> y Vidrio <br className="hidden md:block"/>
                  de <span className="text-[#F59E1B] drop-shadow-[0_0_15px_rgba(245,158,27,0.15)]">Alta Calidad</span>
                </Heading>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="font-sans font-normal text-white/95 text-sm sm:text-[15px] leading-relaxed max-w-[500px] mb-8">
                  Diseño, fabricación e instalación de ventanas con perfilería de aluminio arquitectónico. Soluciones térmicas y acústicas para tu confort.
                </p>
              </ScrollRevealItem>

              {/* Feature List */}
              <ScrollRevealItem className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 w-full max-w-md font-sans font-bold text-xs sm:text-[13px] text-white/90">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Aluminio Arquitectónico
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Aislamiento Térmico
                </div>
                <div className="flex items-center gap-1.5 col-span-2">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Garantía 10 Años
                </div>
              </ScrollRevealItem>

              {/* Buttons */}
              <ScrollRevealItem className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto font-sans">
                <a href="#contacto" className="bg-[#F59E1B] hover:bg-[#E08B10] text-[#0E0B06] px-8 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_4px_20px_rgba(245,158,27,0.25)] hover:scale-[1.02]">
                  Cotizar Gratis
                  <span className="text-base font-bold">→</span>
                </a>
                <a href="#trabajos" className="bg-[#1C1712]/60 hover:bg-[#1C1712]/80 text-white border border-[#F59E1B]/20 hover:border-[#F59E1B]/40 px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-sm backdrop-blur-sm hover:scale-[1.02] text-center">
                  Ver Trabajos
                </a>
              </ScrollRevealItem>
            </ScrollReveal>

            {/* Right Content — Mismo diseño separado con blur de fondo */}
            <ScrollReveal direction="right" className="relative mt-8 lg:mt-0 font-sans w-full max-w-[440px] lg:max-w-[480px] mx-auto z-20">
              
              {/* Panel de Imagen */}
              <div className="rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 mb-4 transition-transform duration-700 hover:scale-[1.01]">
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <img 
                    src="/images/ventanas/ventana_madera_plegable.png" 
                    alt="Ventana de aluminio moderna" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Panel de Precio — Opacidad al 50% con desenfoque de fondo */}
              <div className="bg-[#1A1410]/50 backdrop-blur-lg px-7 py-5 flex items-center justify-between rounded-[1.5rem] border border-white/10 shadow-2xl select-none font-sans transition-all duration-300 hover:border-[#F59E1B]/30">
                <div>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-1">Desde</span>
                  <span className="text-white text-3xl font-extrabold tracking-tight">
                    S/. 180
                  </span>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-[#F59E1B] text-[10px] font-bold uppercase tracking-widest block mb-1">Incluye</span>
                  <span className="text-white text-sm font-bold block leading-tight">
                    Instalación + Garantía
                  </span>
                </div>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Tipos de Ventanas */}
      <section className="py-20 px-4 sm:px-6 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="bg-[#F59E1B] text-[#140F08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">TIPOS DE VENTANAS</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Encuentra la Ventana Perfecta
            </Heading>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Cada espacio tiene necesidades únicas. Conoce nuestros tipos de ventanas y sus beneficios.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TIPOS_VENTANAS.map((tipo, idx) => (
              <ScrollRevealItem key={idx} className={`bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}>
                {/* Contenedor de imagen optimizado para rellenar de forma homogénea las tarjetas */}
                <div className={`relative w-full aspect-[4/4] overflow-hidden shrink-0 ${tipo.objectFit === 'contain' ? 'bg-white' : 'bg-gray-100'}`}>
                  <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={tipo.image} 
                    alt={tipo.title} 
                    className={`w-full h-full ${tipo.objectFit === 'contain' ? 'object-contain' : 'object-cover'} object-center transition-transform duration-700 group-hover:scale-105`} 
                  />
                  <div className="absolute top-4 right-4 z-20 bg-[#F59E1B] text-[#140F08] px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                    {tipo.price}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{tipo.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{tipo.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tipo.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#F59E1B] text-[#140F08] font-bold text-xs px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[#140F08] font-bold text-sm mb-8">
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {tipo.materials}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <Link href={tipo.href || "#"} className="flex-1 bg-[#F59E1B] text-[#140F08] hover:bg-[#eab308] py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                      Ver detalles
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <button className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#F59E1B] text-[#140F08] rounded-full hover:bg-[#eab308] transition-colors shadow-md">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Especificaciones Técnicas */}
      <section className="py-20 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="bg-[#F59E1B] text-[#140F08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">ESPECIFICACIONES TÉCNICAS</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Calidad Certificada
            </Heading>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Utilizamos los mejores materiales y tecnologías para garantizar durabilidad y rendimiento
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ESPECIFICACIONES.map((spec, idx) => (
              <ScrollRevealItem key={idx} className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="w-14 h-14 bg-[#F59E1B] rounded-2xl flex items-center justify-center mb-6 text-[#140F08] shadow-md">
                  {spec.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{spec.title}</h4>
                <div className="space-y-4">
                  {spec.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between items-center text-base border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-500">{item.label}</span>
                      <span className="text-gray-900 font-bold text-right max-w-[55%] leading-tight">{item.value}</span>
                    </div>
                  ))}
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>

          {/* Banner Calidad */}
          <ScrollReveal direction="up">
            <div className="bg-[#140F08] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl mt-12 text-white border border-[#2D2110]">
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-[#F59E1B]">45 dB</div>
                <div className="font-semibold text-white/80 tracking-wider text-sm">Reducción de ruido máxima</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-[#F59E1B]/20"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-[#F59E1B]">70%</div>
                <div className="font-semibold text-white/80 tracking-wider text-sm">Ahorro energético</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-[#F59E1B]/20"></div>
              <div className="text-center md:text-right">
                <div className="text-4xl md:text-5xl font-extrabold mb-2 text-[#F59E1B]">20+ años</div>
                <div className="font-semibold text-white/80 tracking-wider text-sm">Vida útil garantizada</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proceso de Instalación */}
      <section className="py-20 px-4 sm:px-6 bg-[#0E0B06] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h3 className="text-[#F59E1B] text-sm font-bold tracking-[0.2em] uppercase mb-3">PROCESO DE TRABAJO</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Cómo <span className="text-[#F59E1B]">Trabajamos</span>?
            </Heading>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Un proceso simple y transparente para que tengas tus ventanas perfectas
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#F59E1B]/30 to-transparent z-0"></div>
            
            {PROCESO.map((step, idx) => (
              <ScrollRevealItem key={idx} className="relative bg-[#1B150B] border border-[#2D2110] rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(245,158,27,0.1)] transition-all duration-300 group mt-12 lg:mt-0 z-10">
                <div className="absolute -top-7 left-8 w-14 h-14 bg-[#F59E1B] rounded-full flex items-center justify-center text-2xl font-bold text-[#140F08] shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                  {step.step}
                </div>
                <div className="mt-5">
                  <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-white/60 text-base leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <div className="inline-flex items-center justify-center bg-[#F59E1B]/10 px-4 py-1.5 rounded-full border border-[#F59E1B]/20 text-[#F59E1B] text-sm font-bold">
                    {step.time}
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Trabajos Realizados (Portafolio) */}
      <section id="trabajos" className="py-20 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h3 className="text-[#140F08] text-sm font-bold tracking-[0.2em] uppercase mb-3">Galería de Proyectos</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Nuestros <span className="text-[#F59E1B]">Trabajos</span>
            </Heading>
          </ScrollReveal>

          {/* Filtros */}
          <ScrollReveal direction="up" className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="bg-[#F59E1B] text-[#140F08] px-6 py-2 rounded-full text-sm font-bold shadow-md">Todos</button>
            {['Corrediza', 'Proyectante', 'Batiente', 'Pivotante', 'Fija'].map((filtro, idx) => (
              <button key={idx} className="bg-white border border-gray-200 text-gray-600 hover:text-[#140F08] hover:border-[#F59E1B] px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">
                {filtro}
              </button>
            ))}
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTAFOLIO_VENTANAS.slice(0, 6).map((img, idx) => (
              <ScrollRevealItem key={idx} className="aspect-[4/3] rounded-[2rem] overflow-hidden group border border-gray-100 relative cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <img 
                  src={img} 
                  alt={`Proyecto de Ventana ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Preguntas Frecuentes (FAQ) */}
      <section className="py-20 px-4 sm:px-6 bg-[#FAFAFA] relative">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#140F08] text-sm font-bold tracking-[0.2em] uppercase mb-3">Preguntas Frecuentes</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Resolvemos tus <span className="text-[#F59E1B]">Dudas</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} direction="up" className="space-y-4">
            {FAQ_VENTANAS.map((faq, idx) => (
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
                    <p className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Sección de Contacto Reutilizada */}
      <ContactSection />

      <Footer />
    </main>
  );
}