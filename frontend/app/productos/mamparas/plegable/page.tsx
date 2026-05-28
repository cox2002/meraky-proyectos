"use client";

import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

const INCLUYE = [
  "Diseño versátil",
  "Acceso amplio",
  "Ideal para bañeras",
  "Perfil minimalista",
  "Plegado suave",
  "Múltiples configuraciones"
];

const DATOS_TECNICOS = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
    ),
    title: "Dimensiones",
    items: [
      { label: "Ancho total", value: "80 - 160 cm" },
      { label: "Hojas", value: "2, 3 o 4 paneles" },
      { label: "Alto estándar", value: "140 - 200 cm" },
      { label: "Ancho por hoja", value: "30 - 50 cm" },
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
    title: "Vidrio",
    items: [
      { label: "Tipo", value: "Templado de seguridad" },
      { label: "Espesor", value: "6mm / 8mm" },
      { label: "Acabados", value: "Transparente, Pavonado, Decorado" },
      { label: "Tratamiento", value: "Easy Clean disponible" },
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
    title: "Sistema de plegado",
    items: [
      { label: "Bisagras", value: "Articuladas de acero" },
      { label: "Perfil", value: "Aluminio anodizado" },
      { label: "Ángulo de plegado", value: "180°" },
      { label: "Sentido", value: "Hacia dentro o fuera" },
    ]
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: "Rendimiento",
    items: [
      { label: "Ciclos garantizados", value: "+50,000 plegados" },
      { label: "Sellado", value: "Burlete magnético" },
      { label: "Estabilidad", value: "Guía superior e inferior" },
      { label: "Mantenimiento", value: "Mínimo" },
    ]
  }
];

const VENTAJAS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
    ),
    title: "Máxima Versatilidad",
    desc: "Se adapta a espacios irregulares o donde puertas tradicionales no pueden abrirse."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Apertura Total",
    desc: "Pliega casi al 100%, dejando prácticamente todo el espacio libre para el paso."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Seguridad y Cierre",
    desc: "El sistema de burletes garantiza hermeticidad evitando filtraciones al exterior."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
    ),
    title: "Diseño Inteligente",
    desc: "Mecanismos ocultos y guías discretas para una apariencia limpia y contemporánea."
  }
];

const APLICACIONES = [
  "Bañeras",
  "Duchas amplias",
  "Baños familiares",
  "Espacios versátiles",
  "Personas mayores"
];

const GALERIA = [
  "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop"
];

const FAQ = [
  {
    pregunta: "¿Cuántos paneles necesito para mi bañera?",
    respuesta: "La cantidad de paneles dependerá del ancho total de tu bañera o ducha. Generalmente fabricamos configuraciones de 2, 3 o 4 paneles. Nuestros técnicos te asesorarán para encontrar la distribución perfecta que garantice un plegado óptimo y la máxima amplitud de entrada."
  },
  {
    pregunta: "¿El sistema de plegado es resistente?",
    respuesta: "Totalmente. Utilizamos bisagras articuladas de acero inoxidable de alta resistencia, diseñadas específicamente para soportar el peso de los cristales templados. Nuestro sistema está probado para garantizar más de 50,000 ciclos de apertura y cierre sin perder alineación ni suavidad."
  },
  {
    pregunta: "¿Se puede instalar sobre el borde de la bañera?",
    respuesta: "Sí, la mampara plegable es ideal para instalarse directamente sobre el borde de la bañera. Utilizamos perfiles y burletes de sellado inferior especiales que evitan filtraciones de agua, convirtiendo tu bañera en una ducha completamente funcional y hermética."
  }
];

export default function MamparaPlegablePage() {
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
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2000&auto=format&fit=crop" 
            alt="Fondo Mampara Plegable" 
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
                Plegable
              </span>
            </div>

            <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              Mampara <span className="text-[#FACC15]">Plegable</span>
            </Heading>
            
            <h2 className="text-[#FACC15] md:text-xl font-medium mb-6">
              <span className="text-white/90">Versatilidad y diseño en un solo producto</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl font-light">
              Las mamparas plegables combinan la funcionalidad de una puerta con el ahorro de espacio de un sistema corredizo. Sus paneles articulados se pliegan hacia un lado, permitiendo un acceso amplio cuando está abierta y un cierre hermético cuando está cerrada. Es la opción ideal para bañeras y duchas donde se requiere máxima accesibilidad.
            </p>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <span className="text-white font-extrabold text-lg">Consultar</span>
              </div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white/90 text-sm font-medium">3-4 horas</span>
              </div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="text-white/90 text-sm font-medium">5 años en vidrio, 2 años en sistema plegable</span>
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

      {/* Precios por Material (Custom for Plegable) */}
      <section className="py-24 px-6 bg-[#FAFAFA] border-b border-gray-100 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#eab308] text-sm font-bold tracking-[0.2em] uppercase mb-3">Inversión</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Precios por <span className="text-[#eab308]">Material</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="bg-white border border-gray-200 border-dashed rounded-[3rem] p-12 text-center flex flex-col items-center max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-[#FAFAFA] border-b border-gray-100 border border-gray-200 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#eab308]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Precios próximamente</h4>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Estamos preparando la información de precios para este tipo de mampara. Contáctenos para recibir una cotización personalizada.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lo que incluye tu Plegable */}
      <section className="py-24 px-6 bg-[#0c0a07] relative">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Características</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">
              Lo que incluye tu <span className="text-[#FACC15]">Plegable</span>
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
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Especificaciones</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Datos <span className="text-[#FACC15]">Técnicos</span>
            </Heading>
            <p className="text-gray-500">Información detallada sobre materiales, dimensiones y características técnicas.</p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATOS_TECNICOS.map((seccion, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#FAFAFA] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-8 hover:border-[#FACC15]/30 transition-colors">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="w-12 h-12 bg-[#FACC15]/10 rounded-xl flex items-center justify-center">
                    {seccion.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800">{seccion.title}</h4>
                </div>
                <div className="space-y-5">
                  {seccion.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between items-center gap-4">
                      <span className="text-gray-500 text-sm">{item.label}</span>
                      <span className="text-gray-900 font-medium text-right text-sm sm:text-base">{item.value}</span>
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
              Ventajas de elegir <span className="text-[#FACC15]">Plegable</span>
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
      <section className="py-24 px-6 bg-[#FAFAFA] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Aplicaciones</h3>
              <Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ideal <span className="text-[#FACC15]">para</span>
              </Heading>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light max-w-lg">
                La mampara plegable es perfecta para diferentes tipos de espacios y necesidades. Descubre si es la opción correcta para tu proyecto.
              </p>

              <div className="space-y-4">
                {APLICACIONES.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#FACC15]/20 text-[#FACC15] flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-800 font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="relative mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-gray-200">
                <div className="absolute inset-0 bg-black/5 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop" 
                  alt="Baño ideal para plegable" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-[#110e08]/90 backdrop-blur-md border border-[#FACC15]/30 p-4 rounded-2xl flex items-center gap-4">
                    <svg className="w-8 h-8 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    <div>
                      <div className="text-gray-900 font-bold text-sm">Garantía de 5 años</div>
                      <div className="text-gray-500 text-xs">En vidrio templado certificado</div>
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
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#110e08] font-bold text-sm font-bold tracking-[0.2em] uppercase mb-3">FAQ</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">
              Preguntas <span className="text-[#110e08] font-bold">Frecuentes</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} direction="up" className="space-y-4">
            {FAQ.map((faq, idx) => (
              <ScrollRevealItem key={idx}>
                <div 
                  className={`bg-[#FAFAFA] border ${openFaq === idx ? 'border-[#eab308] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]' : 'border-gray-200 hover:border-[#FACC15]/50'} transition-all duration-300 rounded-2xl overflow-hidden`}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between cursor-pointer group"
                  >
                    <span className={`font-medium md:text-lg transition-colors pr-8 ${openFaq === idx ? 'text-[#110e08] font-bold' : 'text-gray-700 group-hover:text-gray-950'}`}>
                      {faq.pregunta}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-[#110e08] font-bold shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
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

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#16130c] via-[#1f1a11] to-[#16130c] border-y border-[#2a2415] relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up">
            <Heading level="h2" className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para tu nueva <span className="text-[#FACC15]">Plegable</span>?
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
