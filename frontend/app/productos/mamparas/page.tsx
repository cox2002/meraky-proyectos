"use client";

import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

// Datos de Portafolio y FAQ
const PORTAFOLIO_MAMPARAS = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop"
];

const FAQ_MAMPARAS = [
  {
    pregunta: "¿Qué espesor de vidrio es el más recomendado?",
    respuesta: "Para uso residencial estándar recomendamos vidrio de 8mm. Para mamparas más grandes o de uso comercial/hotelero, sugerimos 10mm o 12mm para mayor rigidez y durabilidad."
  },
  {
    pregunta: "¿Cuánto tiempo dura la instalación?",
    respuesta: "La instalación típica toma entre 2 a 4 horas dependiendo del tipo de mampara. Mamparas más complejas como las semicirculares pueden requerir hasta 6 horas."
  },
  {
    pregunta: "¿El vidrio templado es realmente seguro?",
    respuesta: "Sí, el vidrio templado es 5 veces más resistente que el vidrio común. En caso de rotura, se fragmenta en pequeños trozos redondeados que minimizan el riesgo de cortes."
  },
  {
    pregunta: "¿Qué garantía ofrecen?",
    respuesta: "Ofrecemos 5 años de garantía en el vidrio templado y 2 años en la perfilería y accesorios. La garantía cubre defectos de fabricación e instalación."
  },
  {
    pregunta: "¿Cómo se limpia una mampara de vidrio templado?",
    respuesta: "Con agua y jabón neutro usando un paño suave. Evite productos abrasivos. Si tiene tratamiento Easy Clean, solo necesita agua. Recomendamos secar después de cada uso para evitar manchas de cal."
  },
  {
    pregunta: "¿Pueden instalar en cualquier tipo de baño?",
    respuesta: "Sí, trabajamos con todo tipo de espacios. Realizamos una visita técnica previa para evaluar las condiciones y proponer la mejor solución para su baño."
  }
];

// Datos de Tipos de Mamparas
const TIPOS_MAMPARAS = [
  {
    title: "Mampara Corrediza",
    desc: "Sistema de paneles deslizantes sobre rieles de aluminio. Ideal para espacios reducidos donde no hay espacio para puertas batientes.",
    price: "Desde S/ 980",
    tags: ["Ahorro de espacio", "Fácil limpieza", "Rodamientos silenciosos"],
    materials: "5 materiales disponibles · Ver precios",
    image: "/images/mamparas/mampara-corrediza.png",
    href: "/productos/mamparas/corrediza",
    objectFit: "cover"
  },
  {
    title: "Mampara Batiente",
    desc: "Puerta con bisagras que abre hacia afuera o adentro. Diseño clásico y elegante con cierre magnético.",
    price: "Desde S/ 600",
    tags: ["Apertura 180°", "Bisagras de acero inox", "Cierre magnético"],
    materials: "2 materiales disponibles · Ver precios",
    image: "/images/mamparas/mampara-batiente-final.png",
    href: "/productos/mamparas/batiente",
    objectFit: "cover"
  },
  {
    title: "Mampara Plegable",
    desc: "Paneles que se pliegan como un acordeón. Perfecta para duchas amplias y bañeras.",
    price: "Desde S/ 1,200",
    tags: ["Diseño versátil", "Acceso amplio", "Ideal para bañeras"],
    materials: "3 materiales disponibles · Ver precios",
    image: "/images/mamparas/mampara-plegable-usuario.png",
    href: "/productos/mamparas/plegable",
    objectFit: "cover"
  },
  {
    title: "Mampara Fija",
    desc: "Panel de vidrio templado sin hojas móviles. Diseño minimalista y walk-in de fácil limpieza.",
    price: "Desde S/ 599",
    tags: ["Sin perfilería", "Vidrio 10mm o 12mm", "Mantenimiento cero"],
    materials: "2 materiales disponibles · Ver precios",
    image: "/images/mamparas/mampara-fija-usuario.png",
    href: "/productos/mamparas/fija",
    objectFit: "cover"
  }
];

const ESPECIFICACIONES = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: "Espesor del Vidrio",
    items: [
      { label: "Estándar", value: "8mm" },
      { label: "Premium", value: "10mm" },
      { label: "Heavy Duty", value: "12mm" }
    ]
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Tipo de Vidrio",
    items: [
      { label: "Templado transparente", value: "Mayor luminosidad" },
      { label: "Templado pavonado", value: "Mayor privacidad" },
      { label: "Templado esmerilado", value: "Diseño elegante" }
    ]
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Tratamientos",
    items: [
      { label: "Easy Clean", value: "Repele agua y jabón" },
      { label: "Antical", value: "Evita manchas de cal" },
      { label: "Antibacterial", value: "Protección higiénica" }
    ]
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Perfilería",
    items: [
      { label: "Aluminio anodizado", value: "Resistente a la corrosión" },
      { label: "Acero inoxidable", value: "Máxima durabilidad" },
      { label: "Sin perfil", value: "Estilo minimalista" }
    ]
  }
];

const PROCESO = [
  {
    step: "1",
    title: "Visita Técnica",
    desc: "Un especialista visita tu hogar para tomar medidas exactas y evaluar las condiciones del espacio.",
    time: "30-45 min"
  },
  {
    step: "2",
    title: "Diseño y Cotización",
    desc: "Elaboramos un diseño personalizado con renders 3D y te enviamos una cotización detallada.",
    time: "24-48 horas"
  },
  {
    step: "3",
    title: "Fabricación",
    desc: "Fabricamos tu mampara con vidrio templado certificado y perfilería de primera calidad.",
    time: "5-7 días"
  },
  {
    step: "4",
    title: "Instalación",
    desc: "Nuestro equipo realiza la instalación profesional con acabados perfectos.",
    time: "2-4 horas"
  }
];

export default function MamparasPage() {
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

      {/* Hero Section para Mamparas - REPARADO PARA 100% PANTALLA */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 flex-grow flex items-center min-h-screen lg:min-h-screen bg-[#0E0B06]">
        
        {/* Contenedor de fondo fluido sin cortes rígidos */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/mamparas/mampara-fondo.jpg"
            alt="Fondo Mampara Interior de Lujo"
            className="w-full h-full object-cover object-center absolute inset-0 opacity-40 lg:opacity-50"
          />
          {/* Degradado premium integrado de izquierda a derecha */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B06] via-[#0E0B06]/85 to-transparent z-10"></div>
          
          {/* Capa inferior de soporte para dispositivos móviles */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0B06]/30 via-transparent to-[#0E0B06] z-10 lg:hidden"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <ScrollReveal staggerChildren={0.15} direction="left" className="flex flex-col items-start">
              <ScrollRevealItem>
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#F59E1B]/30 bg-[#2D2110]/50 text-[#F59E1B] text-xs md:text-sm font-sans font-bold mb-6 shadow-sm backdrop-blur-md">
                  Mampara Serie 80 Premium
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <Heading level="display" className="text-white drop-shadow-2xl font-display font-bold text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] mb-6 tracking-tight">
                  Mampara <span className="text-[#F59E1B] drop-shadow-[0_0_15px_rgba(245,158,27,0.15)]">Serie 80</span> <br className="hidden md:block" />
                  en Aluminio Madera <br className="hidden md:block" />
                  y <span className="text-[#F59E1B] drop-shadow-[0_0_15px_rgba(245,158,27,0.15)]">Vidrio Insulado</span>
                </Heading>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="font-sans font-normal text-white/95 text-sm sm:text-[15px] leading-relaxed max-w-[500px] mb-8">
                  La combinación perfecta de elegancia y confort termoacústico. Diseñada con perfiles de aluminio premium en color madera y un sistema de doble vidrio insulado de 24mm, ideal para aislar el ruido exterior y la temperatura.
                </p>
              </ScrollRevealItem>

              {/* Feature List */}
              <ScrollRevealItem className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 w-full max-w-md font-sans font-bold text-xs sm:text-[13px] text-white/90">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Aluminio Premium Madera
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Vidrio Insulado 24mm
                </div>
                <div className="flex items-center gap-1.5 col-span-2">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Aislamiento Acústico
                </div>
              </ScrollRevealItem>

              {/* Buttons */}
              <ScrollRevealItem className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto font-sans">
                <a href="#contacto" className="bg-[#F59E1B] hover:bg-[#E08B10] text-[#0E0B06] px-8 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_4px_20px_rgba(245,158,27,0.25)] hover:scale-[1.02]">
                  Cotizar Gratis
                  <span className="text-base font-bold">→</span>
                </a>
                <a href="#catalogo" className="bg-[#1C1712]/60 hover:bg-[#1C1712]/80 text-white border border-[#F59E1B]/20 hover:border-[#F59E1B]/40 px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-sm backdrop-blur-sm hover:scale-[1.02] text-center">
                  Ver Catálogo Completo
                </a>
              </ScrollRevealItem>
            </ScrollReveal>

            {/* Right Content */}
            <ScrollReveal direction="right" className="relative mt-8 lg:mt-0 font-sans w-full max-w-[440px] lg:max-w-[480px] mx-auto z-20">
              <div className="rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 mb-4 transition-transform duration-700 hover:scale-[1.01]">
                <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="/images/mamparas/muestra-fondo.jpg"
                    alt="Mampara Serie 80 en balcón"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="bg-[#1A1410]/50 backdrop-blur-lg px-7 py-5 flex items-center justify-between rounded-[1.5rem] border border-white/10 shadow-2xl select-none font-sans transition-all duration-300 hover:border-[#F59E1B]/30">
                <div>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-1">Desde</span>
                  <span className="text-white text-3xl font-extrabold tracking-tight">
                    S/. 3,180
                  </span>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-[#F59E1B] text-[10px] font-bold uppercase tracking-widest block mb-1">Incluye</span>
                  <span className="text-white text-sm font-bold block leading-tight">
                    Instalación + Vidrio Insulado
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Tipos de Mamparas (Catálogo) */}
      <section id="catalogo" className="py-20 px-4 sm:px-6 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="bg-[#F59E1B] text-[#140F08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">Catálogo</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tipos de Mamparas
            </Heading>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Encuentra el estilo perfecto para tu baño u hogar. Cada tipo está diseñado para diferentes espacios y necesidades.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TIPOS_MAMPARAS.map((tipo, idx) => (
              <ScrollRevealItem key={idx} className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                
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
            <div className="bg-gradient-to-r from-[#F59E1B] to-[#d4af37] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl mt-12 text-[#140F08]">
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">NTP 399</div>
                <div className="font-semibold text-[#140F08]/80 uppercase tracking-wider text-sm">Norma Técnica Peruana</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-[#140F08]/20"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">5x</div>
                <div className="font-semibold text-[#140F08]/80 uppercase tracking-wider text-sm">Más resistente que vidrio común</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-[#140F08]/20"></div>
              <div className="text-center md:text-right">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">100%</div>
                <div className="font-semibold text-[#140F08]/80 uppercase tracking-wider text-sm">Vidrio de seguridad</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proceso de Instalación */}
      <section className="py-20 px-4 sm:px-6 bg-[#0E0B06] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-20">
            <h3 className="text-[#F59E1B] text-sm font-bold tracking-[0.2em] uppercase mb-3">CÓMO TRABAJAMOS</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Proceso de <span className="text-[#F59E1B]">Instalación</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
              Más de 500 proyectos completados en hogares, hoteles y edificios.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className="bg-[#F59E1B] text-[#140F08] px-6 py-2 rounded-full text-sm font-bold shadow-md">Todos</button>
              {['Corrediza', 'Batiente', 'Plegable', 'Fija', 'Semicircular'].map((filtro, idx) => (
                <button key={idx} className="bg-white border border-gray-200 text-gray-600 hover:text-[#140F08] hover:border-[#F59E1B] px-6 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">
                  {filtro}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTAFOLIO_MAMPARAS.slice(0, 6).map((img, idx) => (
              <ScrollRevealItem key={idx} className="aspect-[4/3] rounded-[2rem] overflow-hidden group border border-gray-100 relative cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <img
                  src={img}
                  alt={`Proyecto de Mampara ${idx + 1}`}
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
            {FAQ_MAMPARAS.map((faq, idx) => (
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

      <ContactSection />
      <Footer />
    </main>
  );
}