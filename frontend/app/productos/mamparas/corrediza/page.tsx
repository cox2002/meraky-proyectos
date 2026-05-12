"use client";

import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

const PRECIOS = [
  { material: "Moduglas", precio: "S/ 980.00", badge: "DESDE" },
  { material: "Serie 25", precio: "S/ 1,150.00" },
  { material: "Convencional", precio: "S/ 1,250.00" },
  { material: "Serie 62", precio: "S/ 2,450.00" },
  { material: "Serie 80", precio: "S/ 3,180.00" },
];

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
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
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
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
    title: "Vidrio",
    items: [
      { label: "Tipo", value: "Templado de seguridad" },
      { label: "Espesor disponible", value: "8mm / 10mm" },
      { label: "Acabados", value: "Transparente, Pavonado, Esmerilado" },
      { label: "Certificación", value: "NTP 399 / ISO 9001" },
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: "Perfilería",
    items: [
      { label: "Material", value: "Aluminio anodizado" },
      { label: "Acabados", value: "Plata, Cromo, Negro mate" },
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
    ),
    title: "Sistema de deslizamiento",
    items: [
      { label: "Rodamientos", value: "Acero inoxidable con nylon" },
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
    desc: "Superficies lisas que facilitan la limpieza diaria."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Máxima seguridad",
    desc: "Vidrio templado que resiste impactos y cambios de temperatura."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Instalación rápida",
    desc: "Proceso de instalación en 2-3 horas por profesionales."
  }
];

const APLICACIONES = [
  "Baños de departamentos",
  "Espacios reducidos",
  "Duchas de tamaño estándar",
  "Hoteles y hostales",
  "Renovaciones de baño"
];

const GALERIA = [
  "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
];

const FAQ = [
  {
    pregunta: "¿Cuántas hojas puede tener una mampara corrediza?",
    respuesta: "Las mamparas corredizas pueden tener 2, 3 o 4 hojas dependiendo del ancho del espacio. Para anchos de hasta 120cm se recomiendan 2 hojas, y para espacios más amplios, 3 o 4 hojas."
  },
  {
    pregunta: "¿Los rieles acumulan agua y suciedad?",
    respuesta: "Nuestros rieles inferiores cuentan con sistema de drenaje integrado que evita la acumulación de agua. Además, el diseño facilita la limpieza con un paño húmedo."
  },
  {
    pregunta: "¿Se puede instalar sobre una bañera?",
    respuesta: "Sí, ofrecemos versiones especiales para bañeras con rieles adaptados y sellado especial para evitar filtraciones."
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

  return (
    <main className="min-h-screen w-full bg-[#0c0a07] overflow-hidden flex flex-col">
      <Navigation />

      {/* Hero Section Específico */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex-grow flex items-center min-h-[90vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
            alt="Fondo Mampara Corrediza" 
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
                Corrediza
              </span>
            </div>

            <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              Mampara <span className="text-[#FACC15]">Corrediza</span>
            </Heading>
            
            <h2 className="text-[#4da1ff] md:text-xl font-medium mb-6"> {/* Use a blue tint here if desired, or keep gold. User's image had light blue, let's adapt to gold to keep dark luxury */}
              <span className="text-white/90">La solución perfecta para espacios reducidos</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl font-light">
              Las mamparas corredizas son la opción más popular para baños de tamaño estándar. Su sistema de paneles deslizantes permite un acceso cómodo sin ocupar espacio adicional al abrir. Fabricadas con vidrio templado de alta resistencia y perfilería de aluminio anodizado, ofrecen durabilidad y un acabado elegante que complementa cualquier diseño de baño.
            </p>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <span className="text-white/50 text-xs font-bold uppercase">Desde</span>
                <span className="text-white font-extrabold text-lg">S/ 980</span>
              </div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white/90 text-sm font-medium">2-3 horas</span>
              </div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="text-white/90 text-sm font-medium">5 años en vidrio, 2 años en perfilería</span>
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

      {/* Lo que incluye tu Corrediza */}
      <section className="py-24 px-6 bg-[#0c0a07] relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Características</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">
              Lo que incluye tu <span className="text-[#FACC15]">Corrediza</span>
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
              Ventajas de elegir <span className="text-[#FACC15]">Corrediza</span>
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
                La mampara corrediza es perfecta para diferentes tipos de espacios y necesidades. Descubre si es la opción correcta para tu proyecto.
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
                  alt="Baño ideal para corrediza" 
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

      <ContactSection />
      <Footer />
    </main>
  );
}
