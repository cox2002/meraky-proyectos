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
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    href: "/productos/mamparas/corrediza"
  },
  {
    title: "Mampara Batiente",
    desc: "Puerta con bisagras que abre hacia afuera o adentro. Diseño clásico y elegante con cierre magnético.",
    price: "Desde S/ 800",
    tags: ["Apertura 180°", "Bisagras de acero inox", "Cierre magnético"],
    materials: "2 materiales disponibles · Ver precios",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mampara Plegable",
    desc: "Paneles que se pliegan como un acordeón. Perfecta para duchas amplias y bañeras.",
    price: "Consultar precio",
    tags: ["Diseño versátil", "Acceso amplio", "Ideal para bañeras"],
    materials: "Precios próximamente",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mampara Fija",
    desc: "Panel de vidrio fijo sin puerta. Estilo moderno y minimalista para duchas de paso.",
    price: "Desde S/ 380",
    tags: ["Sin perfilería visible", "Estilo contemporáneo", "Fácil acceso"],
    materials: "2 materiales disponibles · Ver precios",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mampara de Ducha",
    desc: "Solución completa para duchas con diseño integral. Combina funcionalidad y estética para un baño moderno.",
    price: "Desde S/ 335",
    tags: ["Diseño integral", "Múltiples configuraciones", "Perfiles de alta calidad"],
    materials: "3 materiales disponibles · Ver precios",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
  }
];

const ESPECIFICACIONES = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className="w-7 h-7 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className="w-7 h-7 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <svg className="w-7 h-7 text-[#FACC15]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <main className="min-h-screen w-full bg-[#0c0a07] overflow-hidden flex flex-col">
      <Navigation />

      {/* Hero Section para Mamparas */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex-grow flex items-center min-h-[90vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2000&auto=format&fit=crop" 
            alt="Fondo Mamparas" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a07] via-[#0c0a07]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a07] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <ScrollReveal staggerChildren={0.15} direction="left" className="flex flex-col items-start">
              <ScrollRevealItem>
                <div className="inline-block px-4 py-1.5 rounded-full border border-[#FACC15]/30 bg-[#FACC15]/10 text-[#FACC15] text-xs md:text-sm font-medium mb-6 shadow-sm backdrop-blur-md">
                  Especialistas en Mamparas de Vidrio Templado
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                  Mamparas de <br className="hidden md:block"/>
                  <span className="text-[#FACC15] drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]">Baño</span> que <br className="hidden md:block"/>
                  Transforman tu <br className="hidden md:block"/>
                  Espacio
                </Heading>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="text-white/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-light">
                  Diseño, fabricación e instalación de mamparas de vidrio templado con los más altos estándares de calidad. Más de 3 años de experiencia en Arequipa.
                </p>
              </ScrollRevealItem>

              {/* Feature List */}
              <ScrollRevealItem className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 w-full">
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <svg className="w-5 h-5 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  Vidrio Templado 8-12mm
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <svg className="w-5 h-5 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  Garantía 5 Años
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <svg className="w-5 h-5 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  Instalación Express
                </div>
              </ScrollRevealItem>

              {/* Buttons */}
              <ScrollRevealItem className="flex flex-wrap items-center gap-4">
                <a href="#contacto" className="bg-[#FACC15] text-[#110e08] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2">
                  Cotizar Gratis
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
                <a href="#trabajos" className="bg-[#16130c]/80 text-white border border-[#2a2415] hover:border-[#FACC15]/50 px-8 py-3.5 rounded-full font-bold hover:bg-[#1f1a11] backdrop-blur-sm hover:-translate-y-1 transition-all">
                  Ver Trabajos
                </a>
              </ScrollRevealItem>
            </ScrollReveal>

            {/* Right Content: Image & Floating Card */}
            <ScrollReveal direction="right" className="relative mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#2a2415] aspect-[4/3] group bg-[#16130c]">
                {/* Overlay oscuro sutil */}
                <div className="absolute inset-0 bg-[#110e08]/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop" 
                  alt="Mampara de baño moderna" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Glass Card (Price details) */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-[#110e08]/80 backdrop-blur-md border border-[#FACC15]/20 p-5 rounded-2xl flex items-center justify-between shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div>
                      <span className="text-white/50 text-xs font-bold uppercase tracking-widest block mb-1">Desde</span>
                      <span className="text-white text-3xl font-extrabold tracking-tight">S/. 380</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#FACC15] text-xs font-bold uppercase tracking-widest block mb-1">Incluye</span>
                      <span className="text-white/90 text-sm font-medium">Instalación + Garantía</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>

      {/* Tipos de Mamparas */}
      <section className="py-24 px-6 bg-[#16130c] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Catálogo</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tipos de <span className="text-[#FACC15]">Mamparas</span>
            </Heading>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Encuentra el estilo perfecto para tu baño. Cada tipo está diseñado para diferentes espacios y necesidades.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TIPOS_MAMPARAS.map((tipo, idx) => (
              <ScrollRevealItem key={idx} className={`bg-[#0c0a07] border border-[#2a2415] rounded-3xl overflow-hidden hover:border-[#FACC15]/30 transition-colors group flex flex-col ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="relative h-64 overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img src={tipo.image} alt={tipo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 z-20 bg-[#FACC15] text-[#110e08] px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {tipo.price}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold text-white mb-3">{tipo.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">{tipo.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tipo.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-[#16130c] border border-[#2a2415] text-white/80 text-xs px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                    {tipo.materials}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <Link href={tipo.href || "#"} className="flex-1 bg-[#16130c] border border-[#FACC15]/50 text-[#FACC15] py-3 rounded-xl font-bold hover:bg-[#FACC15] hover:text-[#110e08] transition-colors flex items-center justify-center gap-2">
                      Ver detalles
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <button className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#16130c] border border-[#2a2415] rounded-xl text-white hover:border-[#FACC15]/50 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
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
      <section className="py-24 px-6 bg-[#0c0a07] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Calidad Garantizada</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Especificaciones <span className="text-[#FACC15]">Técnicas</span>
            </Heading>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Utilizamos solo materiales de primera calidad certificados bajo normas internacionales de seguridad.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ESPECIFICACIONES.map((spec, idx) => (
              <ScrollRevealItem key={idx} className="bg-[#16130c] border border-[#2a2415] rounded-3xl p-8 hover:border-[#FACC15]/30 transition-colors">
                <div className="w-14 h-14 bg-[#FACC15]/10 rounded-2xl flex items-center justify-center mb-6">
                  {spec.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-6">{spec.title}</h4>
                <div className="space-y-4">
                  {spec.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex justify-between items-center text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-white/50">{item.label}</span>
                      <span className="text-white font-medium text-right max-w-[55%] leading-tight">{item.value}</span>
                    </div>
                  ))}
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>

          {/* Banner Calidad */}
          <ScrollReveal direction="up">
            <div className="bg-gradient-to-r from-[#FACC15] to-[#d4af37] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(250,204,21,0.15)] mt-12">
              <div className="text-center md:text-left text-[#110e08]">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">NTP 399</div>
                <div className="font-bold text-[#110e08]/80 uppercase tracking-wider text-sm">Norma Técnica Peruana</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-[#110e08]/20"></div>
              <div className="text-center text-[#110e08]">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">5x</div>
                <div className="font-bold text-[#110e08]/80 uppercase tracking-wider text-sm">Más resistente que vidrio común</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-[#110e08]/20"></div>
              <div className="text-center md:text-right text-[#110e08]">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">100%</div>
                <div className="font-bold text-[#110e08]/80 uppercase tracking-wider text-sm">Vidrio de seguridad</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Proceso de Instalación */}
      <section className="py-24 px-6 bg-[#16130c] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Cómo Trabajamos</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proceso de <span className="text-[#FACC15]">Instalación</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/30 to-transparent z-0"></div>
            
            {PROCESO.map((step, idx) => (
              <ScrollRevealItem key={idx} className="relative bg-[#0c0a07] border border-[#2a2415] rounded-3xl p-8 hover:border-[#FACC15]/30 transition-colors group mt-12 lg:mt-0 z-10">
                <div className="absolute -top-8 left-8 w-16 h-16 bg-[#0c0a07] border border-[#FACC15]/50 rounded-2xl flex items-center justify-center text-2xl font-bold text-[#FACC15] shadow-[0_0_20px_rgba(250,204,21,0.1)] group-hover:-translate-y-2 group-hover:bg-[#FACC15] group-hover:text-[#110e08] transition-all duration-300">
                  {step.step}
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#FACC15] text-sm font-medium">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {step.time}
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>
      {/* Trabajos Realizados (Portafolio) */}
      <section className="py-24 px-6 bg-[#0c0a07] relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-12">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Portafolio</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trabajos <span className="text-[#FACC15]">Realizados</span>
            </Heading>
            <p className="text-white/60 max-w-2xl mx-auto text-lg mb-10">
              Más de 500 proyectos completados en hogares, hoteles y edificios de Arequipa.
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button className="bg-[#FACC15] text-[#110e08] px-6 py-2 rounded-full text-sm font-bold shadow-lg">Todos</button>
              {['Corrediza', 'Batiente', 'Plegable', 'Fija', 'Semicircular', 'De ducha'].map((filtro, idx) => (
                <button key={idx} className="bg-[#16130c] border border-[#2a2415] text-white/80 hover:text-white hover:border-[#FACC15]/50 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                  {filtro}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PORTAFOLIO_MAMPARAS.map((img, idx) => (
              <ScrollRevealItem key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden group border border-[#2a2415] relative cursor-pointer">
                <img 
                  src={img} 
                  alt={`Proyecto de Mampara ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </ScrollRevealItem>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Preguntas Frecuentes (FAQ) */}
      <section className="py-24 px-6 bg-[#16130c] relative">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">FAQ</h3>
            <Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">
              Preguntas <span className="text-[#FACC15]">Frecuentes</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} direction="up" className="space-y-4">
            {FAQ_MAMPARAS.map((faq, idx) => (
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

      {/* Sección de Contacto Reutilizada */}
      <ContactSection />

      <Footer />
    </main>
  );
}
