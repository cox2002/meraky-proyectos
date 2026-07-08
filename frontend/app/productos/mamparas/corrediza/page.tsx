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
  "Fácil limpieza",
  "Rodamientos silenciosos",
  "Perfil de aluminio anodizado",
  "Vidrio templado certificado",
  "Sistema anti-descarrilamiento"
];

const DATOS_TECNICOS = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: "Dimensiones",
    items: [
      { label: "Ancho mínimo", value: "80 cm" },
      { label: "Ancho máximo", value: "180 cm" },
      { label: "Alto estándar", value: "180 - 200 cm" },
      { label: "Alto máximo", value: "220 cm" },
    ]
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Vidrio de Seguridad",
    items: [
      { label: "Tipo", value: "Templado certificado" },
      { label: "Espesor disponible", value: "8mm / 10mm" },
      { label: "Acabados", value: "Transparente, Pavonado" },
      { label: "Certificación", value: "NTP 399 / ISO 9001" },
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
      { label: "Material", value: "Aluminio anodizado" },
      { label: "Acabados", value: "Plata, Cromo, Negro mate" },
    ]
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#140F08]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Sistema de Deslizamiento",
    items: [
      { label: "Rodamientos", value: "Acero inox + Nylon" },
      { label: "Capacidad", value: "Hasta 80 kg por hoja" },
    ]
  }
];

const VENTAJAS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    ),
    title: "Ideal para espacios pequeños",
    desc: "No requiere espacio de apertura, perfecta para baños compactos."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
    title: "Fácil mantenimiento",
    desc: "Superficies lisas que facilitan la limpieza y evitan acumulación."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Máxima seguridad",
    desc: "Vidrio templado que resiste altos impactos y cambios de temperatura."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Instalación rápida",
    desc: "Proceso limpio y profesional completado en un lapso de 2 a 3 horas."
  }
];

const APLICACIONES = [
  "Baños de departamentos modernos",
  "Espacios altamente reducidos",
  "Duchas de tamaño estándar y residencial",
  "Proyectos en hoteles y hostales",
  "Renovaciones integrales de baño"
];

const GALERIA = [
  "/images/mamparas/mampara-corrediza-usuario-galeria-1.png",
  "/images/mamparas/mampara-corrediza-usuario-galeria-2.png",
  "/images/mamparas/mampara-corrediza-usuario-galeria-3.png",
  "/images/mamparas/mampara-corrediza-usuario.png",
  "/images/mamparas/mampara-corrediza-usuario-galeria-4.png",
  "/images/mamparas/mampara-corrediza-usuario-galeria-5.png",
  "/images/mamparas/mampara-corrediza-usuario-galeria-6.png",
  "/images/mamparas/mampara-corrediza-usuario-galeria-7.png"
];

const GALERIA_PRODUCTO = [
  "/images/mamparas/mampara-corrediza-usuario-galeria-1.png",
  "/images/mamparas/mampara-corrediza-usuario-galeria-2.png",
  "/images/mamparas/mampara-corrediza-usuario-galeria-3.png"
];

const FAQ = [
  {
    pregunta: "¿Cuántas hojas puede tener una mampara corrediza?",
    respuesta: "Las mamparas corredizas pueden tener 2, 3 o 4 hojas dependiendo del ancho del espacio. Para anchos de hasta 120cm se recomiendan 2 hojas, y para espacios más amplios, 3 o 4 hojas."
  },
  {
    pregunta: "¿Los rieles acumulan agua y suciedad?",
    respuesta: "Nuestros rieles inferiores cuentan con un sistema de drenaje integrado que evita la acumulación de agua. Además, el diseño liso facilita la limpieza rápida con un paño húmedo."
  },
  {
    pregunta: "¿Se puede instalar sobre una bañera?",
    respuesta: "Sí, ofrecemos versiones especiales adaptadas para bañeras con rieles modificados y un sellado de alta presión para evitar filtraciones al exterior."
  }
];

export default function MamparaCorredizaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    if (openFaq === idx) {
      setOpenFaq(null);
    } else {
      setOpenFaq(idx);
    }
  };

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

  return (
    <main className="min-h-screen w-full bg-[#0E0B06] overflow-x-hidden flex flex-col">
      <Navigation />

      {/* Hero Section Premium para Mampara Corrediza */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 flex-grow flex items-center min-h-screen lg:min-h-screen bg-[#0E0B06]">
        
        {/* Contenedor de fondo fluido - REPARADO PARA 100% PANTALLA */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/mamparas/mampara-corrediza-fondo.png"
            alt="Fondo Mampara Corrediza Completa"
            className="w-[89%] h-[89%] object-cover object-right ml-auto opacity-40 lg:opacity-50"
          />
          {/* Degradado premium de izquierda a derecha para legibilidad del contenido */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0B06] via-[#0E0B06]/89 to-transparent z-10"></div>
          
          {/* Capa de soporte extra para pantallas móviles muy brillantes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0B06]/30 via-transparent to-[#0E0B06] z-10 lg:hidden"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Columna Izquierda: Textos y Acciones */}
            <ScrollReveal staggerChildren={0.15} direction="left" className="flex flex-col items-start">
              
              <ScrollRevealItem className="flex flex-wrap items-center gap-4 mb-6">
                <Link href="/productos/mamparas" className="text-white/60 hover:text-[#F59E1B] transition-colors flex items-center gap-2 text-xs md:text-sm font-sans font-bold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver a tipos
                </Link>
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#F59E1B]/30 bg-[#2D2110]/50 text-[#F59E1B] text-xs font-sans font-bold shadow-sm backdrop-blur-md">
                  Línea Corrediza Premium
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <Heading level="display" className="text-white drop-shadow-2xl font-display font-bold text-4xl sm:text-5xl lg:text-[54px] leading-[1.1] mb-6 tracking-tight">
                  Mampara <span className="text-[#F59E1B] drop-shadow-[0_0_15px_rgba(245,158,27,0.15)]">Corrediza</span> <br className="hidden md:block" />
                  <span className="text-white/90 text-2xl sm:text-3xl lg:text-[32px] font-sans font-medium block mt-3 leading-tight">
                    La solución perfecta para spaces reducidos
                  </span>
                </Heading>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="font-sans font-normal text-white/95 text-sm sm:text-[15px] leading-relaxed max-w-[500px] mb-8">
                  Las mamparas corredizas son la opción más popular y eficiente para optimizar tu baño. Su sistema de paneles deslizantes permite un acceso cómodo sin ocupar espacio adicional al abrir, combinando durabilidad y un acabado minimalista de alta gama.
                </p>
              </ScrollRevealItem>

              <ScrollRevealItem className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10 w-full max-w-md font-sans font-bold text-xs sm:text-[13px] text-white/90">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Ahorro de espacio
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Rodamientos silenciosos
                </div>
                <div className="flex items-center gap-1.5 col-span-2">
                  <span className="text-[#F59E1B] font-extrabold text-sm">✓</span>
                  Vidrio Templado Certificado
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto font-sans">
                <a href="#contacto" className="bg-[#F59E1B] hover:bg-[#E08B10] text-[#0E0B06] px-8 py-3.5 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_4px_20px_rgba(245,158,27,0.25)] hover:scale-[1.02]">
                  Cotizar Ahora
                  <span className="text-base font-bold">→</span>
                </a>
                <a href="tel:+51929765802" className="bg-[#1C1712]/60 hover:bg-[#1C1712]/80 text-white border border-[#F59E1B]/20 hover:border-[#F59E1B]/40 px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-sm backdrop-blur-sm hover:scale-[1.02] flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llamar Asesor
                </a>
              </ScrollRevealItem>
            </ScrollReveal>

            {/* Columna Derecha: Imagen Flotante del Producto */}
            <ScrollReveal direction="right" className="relative mt-8 lg:mt-0 font-sans w-full max-w-[440px] lg:max-w-[480px] mx-auto z-20">
              
              <div className="mb-4 transition-transform duration-700 hover:scale-[1.01]">
                <img
                  src="/images/mamparas/mampara-corrediza-usuario-galeria-1.png"
                  alt="Instalación original completa de mampara"
                  className="w-full h-auto object-contain block mx-auto rounded-[1.5rem] shadow-2xl border border-white/5"
                />
              </div>

              <div className="bg-[#1A1410]/60 backdrop-blur-lg px-7 py-5 flex items-center justify-between rounded-[1.5rem] border border-white/10 shadow-2xl select-none font-sans transition-all duration-300 hover:border-[#F59E1B]/30">
                <div>
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest block mb-1">Desde</span>
                  <span className="text-white text-3xl font-extrabold tracking-tight">
                    S/. 980
                  </span>
                </div>
                <div className="text-right flex flex-col items-end">
                  <span className="text-[#F59E1B] text-[10px] font-bold uppercase tracking-widest block mb-1">Garantía Certificada</span>
                  <span className="text-white text-sm font-bold block leading-tight">
                    5 Años en Vidrio Templado
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>



      {/* Lo que incluye tu Corrediza */}
      <section className="py-20 px-4 sm:px-6 bg-[#0E0B06] relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#F59E1B] text-sm font-bold tracking-[0.2em] uppercase mb-3">Características</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Lo que incluye tu <span className="text-[#F59E1B]">Corrediza</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUYE.map((item, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#1B150B] border border-[#2D2110] rounded-2xl p-6 flex items-center gap-4 hover:border-[#F59E1B]/30 transition-colors">
                <div className="w-10 h-10 shrink-0 bg-[#F59E1B] rounded-xl flex items-center justify-center text-[#140F08] shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/90 font-bold font-sans text-sm md:text-base">{item}</span>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Datos Técnicos */}
      <section className="py-20 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#140F08] text-sm font-bold tracking-[0.2em] uppercase mb-3">Especificaciones</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Datos <span className="text-[#F59E1B]">Técnicos</span>
            </Heading>
            <p className="text-gray-500 max-w-xl mx-auto">Información detallada de ingeniería sobre materiales, dimensiones y resistencia del sistema.</p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {DATOS_TECNICOS.map((spec, idx) => (
              <ScrollRevealItem key={idx} className="bg-white border border-gray-100 rounded-[2rem] p-8 hover:shadow-2xl transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="w-14 h-14 bg-[#F59E1B] rounded-2xl flex items-center justify-center mb-6 text-[#140F08] shadow-md">
                  {spec.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{spec.title}</h4>
                <div className="space-y-4">
                  {spec.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between items-center text-base border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-500 text-sm">{item.label}</span>
                      <span className="text-gray-900 font-bold text-right max-w-[55%] leading-tight text-sm md:text-base">{item.value}</span>
                    </div>
                  ))}
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>

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
                <div className="font-semibold text-[#140F08]/80 uppercase tracking-wider text-sm">Vidrio de seguridad templado</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-20 px-4 sm:px-6 bg-[#0E0B06] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#F59E1B] text-sm font-bold tracking-[0.2em] uppercase mb-3">Beneficios</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Ventajas de elegir <span className="text-[#F59E1B]">Corrediza</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENTAJAS.map((ventaja, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#1B150B] border border-[#2D2110] rounded-3xl p-8 hover:border-[#F59E1B]/30 transition-colors flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#F59E1B] text-[#140F08] rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  {ventaja.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{ventaja.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{ventaja.desc}</p>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Aplicaciones */}
      <section className="py-20 px-4 sm:px-6 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal direction="left">
              <h3 className="text-[#F59E1B] text-sm font-bold tracking-[0.2em] uppercase mb-3">Aplicaciones</h3>
              <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ideal <span className="text-[#F59E1B]">para</span>
              </Heading>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light max-w-lg">
                La mampara corrediza es idónea para proyectos residenciales y comerciales donde cada centímetro cuenta. Descubre sus principales aplicaciones:
              </p>

              <div className="space-y-4">
                {APLICACIONES.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#F59E1B]/20 text-[#F59E1B] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-bold text-base">{app}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Slider de Imágenes del Producto */}
            <ScrollReveal direction="right" className="flex flex-col gap-6 mt-8 lg:mt-0 w-full max-w-[440px] lg:max-w-[480px] mx-auto">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[3/4] border border-gray-200 group shadow-lg bg-white">
                
                {/* Contenedor de Imágenes con Transición Suave */}
                <div 
                  className="absolute inset-0 w-full h-full flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {GALERIA_PRODUCTO.map((img, idx) => (
                    <div key={idx} className="w-full h-full shrink-0 relative flex items-center justify-center bg-white">
                      <img 
                        src={img} 
                        alt={`Vista de producto ${idx + 1}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/5 z-10" />
                    </div>
                  ))}
                </div>

                {/* Flechas de Navegación */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
                  aria-label="Anterior"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
                  aria-label="Siguiente"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
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

              {/* Tarjeta de Garantía */}
              <div className="bg-[#140F08]/90 backdrop-blur-md border border-[#F59E1B]/30 p-5 rounded-2xl flex items-center gap-4 shadow-xl w-full">
                <div className="w-12 h-12 rounded-xl bg-[#F59E1B]/10 flex items-center justify-center text-[#F59E1B] shrink-0 shadow-md">
                  <svg className="w-8 h-8 text-[#F59E1B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm font-sans">Garantía Certificada</div>
                  <div className="text-white/60 text-xs font-sans">5 años en estructuras de vidrio templado</div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="trabajos" className="py-20 px-4 sm:px-6 bg-[#0E0B06] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#F59E1B] text-sm font-bold tracking-[0.2em] uppercase mb-3">Galería</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Trabajos <span className="text-[#F59E1B]">Realizados</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {GALERIA.map((img, idx) => (
              <ScrollRevealItem 
                key={idx} 
                className="aspect-square rounded-[2rem] overflow-hidden group border border-[#2D2110] relative cursor-pointer shadow-lg"
                onClick={() => setSelectedImageIdx(idx)}
              >
                <img 
                  src={img} 
                  alt={`Proyecto Ejecutado ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 bg-white relative">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#140F08] text-sm font-bold tracking-[0.2em] uppercase mb-3">Preguntas Frecuentes</h3>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Resolvemos tus <span className="text-[#F59E1B]">Dudas</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} direction="up" className="space-y-4">
            {FAQ.map((faq, idx) => (
              <ScrollRevealItem key={idx}>
                <div 
                  className={`bg-[#FAFAFA] border ${openFaq === idx ? 'border-[#F59E1B] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]' : 'border-gray-200 hover:border-[#F59E1B]/50'} transition-all duration-300 rounded-2xl overflow-hidden`}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between cursor-pointer group"
                  >
                    <span className={`font-bold md:text-lg transition-colors pr-8 ${openFaq === idx ? 'text-[#140F08]' : 'text-gray-700 group-hover:text-gray-950'}`}>
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
                    <p className="p-6 pt-0 text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.respuesta}
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-[#1B150B] via-[#1f1a11] to-[#1B150B] border-y border-[#2D2110] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up">
            <Heading level="h2" className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para renovar con una <span className="text-[#F59E1B]">Corrediza</span>?
            </Heading>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-2xl mx-auto font-sans">
              Solicita una cotización integral gratuita y sin compromisos de obra. Nuestro equipo de soporte técnico te responderá en menos de 24 horas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#contacto" className="bg-white text-[#140F08] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all flex items-center gap-2">
                Cotizar Gratis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
              <a href="tel:+51929765802" className="bg-transparent text-white border border-[#2D2110] hover:border-[#F59E1B]/50 px-8 py-3.5 rounded-full font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +51 929765802
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
      <Footer />

      {/* Lightbox Modal / Vista Completa */}
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