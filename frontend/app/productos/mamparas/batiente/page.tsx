"use client";

import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

const PRECIOS = [
  { material: "Serie 35", precio: "S/ 800.00", badge: "DESDE" },
  { material: "Serie 72", precio: "S/ 990.00" },
];

const INCLUYE = [
  "Apertura 180°",
  "Bisagras de acero inoxidable",
  "Cierre magnético",
  "Mayor hermeticidad",
  "Diseño elegante",
  "Fácil acceso"
];

const DATOS_TECNICOS = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
    ),
    title: "Dimensiones",
    items: [
      { label: "Ancho de puerta", value: "60 - 100 cm" },
      { label: "Alto estándar", value: "180 - 200 cm" },
      { label: "Alto máximo", value: "220 cm" },
      { label: "Apertura", value: "Interior o exterior" },
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
    title: "Vidrio",
    items: [
      { label: "Tipo", value: "Templado de seguridad" },
      { label: "Espesor recomendado", value: "8mm / 10mm" },
      { label: "Acabados", value: "Transparente, Pavonado, Esmerilado" },
      { label: "Bordes", value: "Pulidos y biselados" },
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: "Bisagras",
    items: [
      { label: "Material", value: "Acero inoxidable 304" },
      { label: "Tipo", value: "Pivote vidrio-pared" },
      { label: "Ángulo de apertura", value: "90° - 180°" },
      { label: "Capacidad", value: "Hasta 45 kg" },
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: "Sistema de cierre",
    items: [
      { label: "Tipo", value: "Magnético de alta potencia" },
      { label: "Sellado", value: "Perfil de silicona" },
      { label: "Durabilidad", value: "+50,000 ciclos" },
      { label: "Hermeticidad", value: "99% anti-salpicaduras" },
    ]
  }
];

const VENTAJAS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    ),
    title: "Diseño premium",
    desc: "Acabado elegante que realza cualquier baño moderno o clásico."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Acceso completo",
    desc: "Apertura total que facilita la entrada y limpieza del espacio."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Sellado perfecto",
    desc: "Sistema magnético que evita filtraciones y salpicaduras."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
    ),
    title: "Máxima durabilidad",
    desc: "Bisagras de acero inoxidable con garantía extendida."
  }
];

const APLICACIONES = [
  "Baños amplios",
  "Diseños de lujo",
  "Hoteles boutique",
  "Personas con movilidad reducida",
  "Duchas walk-in con puerta"
];

const GALERIA = [
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
];

const FAQ = [
  {
    pregunta: "¿Qué espacio se necesita para una mampara batiente?",
    respuesta: "Se requiere tener el espacio libre suficiente (el radio de giro de la puerta) hacia afuera o hacia adentro de la ducha para que la puerta abra completamente sin chocar con inodoros, lavabos o muebles."
  },
  {
    pregunta: "¿Se puede instalar si tengo un desnivel en el piso?",
    respuesta: "Sí, aunque lo ideal es un piso nivelado. Las bisagras permiten ciertos ajustes y se pueden colocar burletes o bota aguas de acrílico en la parte inferior para adaptarse y evitar la salida del agua."
  },
  {
    pregunta: "¿La puerta puede abrir en ambos sentidos?",
    respuesta: "Sí, contamos con bisagras de doble acción que permiten una apertura de 90° hacia afuera y 90° hacia adentro, o bisagras simples con tope según tu preferencia y el espacio disponible."
  }
];

export default function MamparaBatientePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    if (openFaq === idx) {
      setOpenFaq(null);
    } else {
      setOpenFaq(idx);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#0c0a07] overflow-hidden flex flex-col">
      <Navigation />

      {/* Hero Section Específico */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex-grow flex items-center min-h-[90vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
            alt="Fondo Mampara Batiente" 
            className="w-full h-full object-cover opacity-60 md:opacity-90" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a07] via-[#0c0a07]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a07] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <ScrollReveal direction="left" className="max-w-3xl">
            {/* Back Link & Tag */}
            <div className="flex items-center gap-4 mb-8">
              <Link href="/productos/mamparas" className="text-white/60 hover:text-[#FACC15] transition-colors flex items-center gap-2 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Volver a tipos de mamparas
              </Link>
              <span className="bg-[#16130c] border border-[#FACC15]/30 text-[#FACC15] text-xs px-3 py-1 rounded-full font-medium">
                Batiente
              </span>
            </div>

            <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              Mampara <span className="text-[#FACC15]">Batiente</span>
            </Heading>
            
            <h2 className="text-[#FACC15] md:text-xl font-medium mb-6">
              <span className="text-white/90">Elegancia clásica con apertura total</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl font-light">
              Las mamparas batientes representan la opción más elegante y clásica para tu baño. Con su sistema de bisagras de acero inoxidable, ofrecen una apertura completa de hasta 180° que facilita el acceso y la limpieza. El cierre magnético garantiza un sellado perfecto, evitando salpicaduras. Ideales para baños amplios donde se busca un diseño sofisticado.
            </p>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <span className="text-white/50 text-xs font-bold uppercase">Desde</span>
                <span className="text-white font-extrabold text-lg">S/ 800</span>
              </div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white/90 text-sm font-medium">3-4 horas</span>
              </div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="text-white/90 text-sm font-medium">5 años en vidrio, 2 años en bisagras</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contacto" className="bg-[#FACC15] text-[#110e08] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2">
                Cotizar Ahora
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="tel:+51999999999" className="bg-[#16130c]/80 text-white border border-[#2a2415] hover:border-[#FACC15]/50 px-8 py-3.5 rounded-full font-bold hover:bg-[#1f1a11] backdrop-blur-sm hover:-translate-y-1 transition-all flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Llamar
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Precios por Material */}
      <section className="py-24 px-6 bg-[#16130c] relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Inversión</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Precios por <span className="text-[#FACC15]">Material</span>
            </Heading>
            <div className="inline-flex items-center gap-2 bg-[#0c0a07] border border-[#2a2415] px-4 py-2 rounded-full text-white/60 text-sm mb-6">
              <svg className="w-4 h-4 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              Medida de referencia: 2.50m × 2.40m
            </div>
            <p className="text-white/50 text-sm">Precios referenciales para la medida indicada. Solicita cotización para tu medida exacta.</p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} direction="up" className="space-y-4">
            {PRECIOS.map((item, idx) => (
              <ScrollRevealItem key={idx}>
                <div className={`bg-[#0c0a07] border ${item.badge ? 'border-[#FACC15]/50 shadow-[0_0_15px_rgba(250,204,21,0.1)]' : 'border-[#2a2415] hover:border-[#FACC15]/30'} transition-colors rounded-2xl p-6 flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                    {item.badge && (
                      <span className="bg-[#FACC15] text-[#110e08] text-xs font-bold px-2 py-1 rounded">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-white font-medium text-lg">{item.material}</span>
                  </div>
                  <span className={`text-xl font-bold ${item.badge ? 'text-[#FACC15]' : 'text-white/90'}`}>
                    {item.precio}
                  </span>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>

          <p className="text-center text-white/40 text-xs mt-8">
            * Los precios incluyen materiales e instalación. Pueden variar según las medidas y acabados elegidos.
          </p>
        </div>
      </section>

      {/* Lo que incluye tu Batiente */}
      <section className="py-24 px-6 bg-[#0c0a07] relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Características</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">
              Lo que incluye tu <span className="text-[#FACC15]">Batiente</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUYE.map((item, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#16130c] border border-[#2a2415] rounded-2xl p-6 flex items-center gap-4 hover:border-[#FACC15]/30 transition-colors">
                <div className="w-10 h-10 shrink-0 bg-[#FACC15] rounded-xl flex items-center justify-center text-[#110e08]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-white/90 font-medium">{item}</span>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Datos Técnicos */}
      <section className="py-24 px-6 bg-[#16130c] relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Especificaciones</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-4">
              Datos <span className="text-[#FACC15]">Técnicos</span>
            </Heading>
            <p className="text-white/60">Información detallada sobre materiales, dimensiones y características técnicas.</p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATOS_TECNICOS.map((seccion, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#0c0a07] border border-[#2a2415] rounded-3xl p-8 hover:border-[#FACC15]/30 transition-colors">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#2a2415]">
                  <div className="w-12 h-12 bg-[#FACC15]/10 rounded-xl flex items-center justify-center">
                    {seccion.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{seccion.title}</h4>
                </div>
                <div className="space-y-5">
                  {seccion.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between items-center gap-4">
                      <span className="text-white/50 text-sm">{item.label}</span>
                      <span className="text-white font-medium text-right text-sm sm:text-base">{item.value}</span>
                    </div>
                  ))}
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-24 px-6 bg-[#0c0a07] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Beneficios</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">
              Ventajas de elegir <span className="text-[#FACC15]">Batiente</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENTAJAS.map((ventaja, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#16130c] border border-[#2a2415] rounded-3xl p-8 hover:border-[#FACC15]/30 transition-colors flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-[#FACC15] text-[#110e08] rounded-2xl flex items-center justify-center mb-6">
                  {ventaja.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{ventaja.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{ventaja.desc}</p>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Aplicaciones (Ideal para) */}
      <section className="py-24 px-6 bg-[#16130c] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Aplicaciones</h3>
              <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ideal <span className="text-[#FACC15]">para</span>
              </Heading>
              <p className="text-white/70 text-lg mb-10 leading-relaxed font-light max-w-lg">
                La mampara batiente es perfecta para diferentes tipos de espacios y necesidades. Descubre si es la opción correcta para tu proyecto.
              </p>

              <div className="space-y-4">
                {APLICACIONES.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FACC15]/20 text-[#FACC15] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-white/90 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="relative mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-[#2a2415]">
                <div className="absolute inset-0 bg-[#110e08]/20 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" 
                  alt="Baño ideal para batiente" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-[#110e08]/90 backdrop-blur-md border border-[#FACC15]/30 p-4 rounded-2xl flex items-center gap-4">
                    <svg className="w-8 h-8 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <div>
                      <div className="text-white font-bold text-sm">Garantía de 5 años</div>
                      <div className="text-white/50 text-xs">En vidrio templado certificado</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-24 px-6 bg-[#0c0a07] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Galería</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">
              Trabajos <span className="text-[#FACC15]">Realizados</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {GALERIA.map((img, idx) => (
              <ScrollRevealItem key={idx} className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden group border border-[#2a2415] relative cursor-pointer">
                <img 
                  src={img} 
                  alt={`Proyecto ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#16130c] relative">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">FAQ</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">
              Preguntas <span className="text-[#FACC15]">Frecuentes</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} direction="up" className="space-y-4">
            {FAQ.map((faq, idx) => (
              <ScrollRevealItem key={idx}>
                <div 
                  className={`bg-[#0c0a07] border ${openFaq === idx ? 'border-[#FACC15]/50 shadow-[0_0_15px_rgba(250,204,21,0.05)]' : 'border-[#2a2415] hover:border-[#FACC15]/50'} transition-all duration-300 rounded-2xl overflow-hidden`}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between cursor-pointer group"
                  >
                    <span className={`font-medium md:text-lg transition-colors pr-8 ${openFaq === idx ? 'text-[#FACC15]' : 'text-white/90 group-hover:text-white'}`}>
                      {faq.pregunta}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-[#FACC15] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="p-6 pt-0 text-white/70 leading-relaxed">
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
      <section className="py-20 px-6 bg-gradient-to-r from-[#16130c] via-[#1f1a11] to-[#16130c] border-y border-[#2a2415] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up">
            <Heading level="h2" className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para tu nueva <span className="text-[#FACC15]">Batiente</span>?
            </Heading>
            <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Solicita una cotización gratuita y sin compromiso. Nuestro equipo te contactará en menos de 24 horas.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#contacto" className="bg-white text-[#110e08] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2">
                Cotizar Gratis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="tel:+51929765802" className="bg-transparent text-white border border-[#2a2415] hover:border-[#FACC15]/50 px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-all flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +51 929765802
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
