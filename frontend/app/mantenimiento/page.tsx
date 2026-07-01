"use client";

import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';

// Datos de Servicios de Mantenimiento
const SERVICIOS_MANTENIMIENTO = [
  {
    title: "Mantenimiento de Mamparas",
    periodicity: "Recomendado cada 6-12 meses",
    desc: "Servicio completo de mantenimiento preventivo y correctivo para mamparas de baño y sala. Incluye ajuste de rodamientos, cambio de felpas y sellos de silicona.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop",
    tags: ["Ajuste y Calibración", "Reemplazo de Rodajes", "Lubricación de Rieles"],
    icon: (
      <svg className="w-5 h-5 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Mantenimiento de Ventanas",
    periodicity: "Recomendado cada 12 meses",
    desc: "Servicio especializado para ventanas de aluminio y vidrio. Garantizamos el correcto funcionamiento del sistema pivotante, batiente o corredizo, eliminando filtraciones de aire o ruido.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    tags: ["Ajuste de Cierre", "Cambio de Burletes", "Lubricación de Guías"],
    icon: (
      <svg className="w-5 h-5 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Mantenimiento de Puertas",
    periodicity: "Recomendado cada 6-12 meses",
    desc: "Mantenimiento integral para puertas de vidrio templado y sistemas de aluminio. Calibración de bisagras de piso, frenos hidráulicos, tiradores y sistemas de cerradura de alta seguridad.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    tags: ["Ajuste de Bisagras", "Calibración de Freno", "Revisión de Cerraduras"],
    icon: (
      <svg className="w-5 h-5 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Mantenimiento de Espejos",
    periodicity: "Recomendado cada 12-18 meses",
    desc: "Servicio de mantenimiento especializado para espejos de gran formato, espejos con iluminación LED, marcos decorativos y sistemas antivaho. Aseguramos anclajes firmes.",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop",
    tags: ["Revisión del LED", "Limpieza Especializada", "Verificación de Anclajes"],
    icon: (
      <svg className="w-5 h-5 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: "Mantenimiento de Pasamanos",
    periodicity: "Recomendado cada 12 meses",
    desc: "Ajuste y pulido de pasamanos y barandas de acero inoxidable 304/316 con paneles de vidrio templado. Garantizamos rigidez estructural absoluta y brillo duradero en tu hogar.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    tags: ["Ajuste de Anclajes", "Pulido de Acero", "Revisión de Vidrios"],
    icon: (
      <svg className="w-5 h-5 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Mantenimiento de Divisiones",
    periodicity: "Recomendado cada 12 meses",
    desc: "Ajuste de divisiones de ducha en sistema Euro, mamparas plegables y divisiones de vidrio templado para oficinas. Reemplazo de perfiles de hermeticidad y sellos de goteo.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    tags: ["Ajuste de Herrajes", "Cambio de Sellos", "Reemplazo de Viniles"],
    icon: (
      <svg className="w-5 h-5 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  }
];

const VENTAJAS = [
  {
    title: "Mayor Vida Útil",
    desc: "El mantenimiento regular puede extender la vida útil de tus instalaciones de vidrio y marcos de aluminio hasta 3 veces más.",
    icon: (
      <svg className="w-8 h-8 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Seguridad Garantizada",
    desc: "Prevenimos fallas estructurales o mecánicas inesperadas que podrían causar accidentes graves o daños mayores en tu propiedad.",
    icon: (
      <svg className="w-8 h-8 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Funcionamiento Óptimo",
    desc: "Tus puertas, ventanas y mamparas volverán a deslizarse y cerrarse con la misma suavidad y precisión del primer día.",
    icon: (
      <svg className="w-8 h-8 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Ahorro a Largo Plazo",
    desc: "Evita reparaciones costosas de emergencia o el reemplazo total de mamparas y cristales mediante mantenimiento preventivo.",
    icon: (
      <svg className="w-8 h-8 text-[#F59E1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const PROCESO = [
  {
    step: "1",
    title: "Agenda tu Cita",
    desc: "Contáctanos por WhatsApp o formulario. Coordinamos una visita técnica de inmediato en el horario que mejor te convenga."
  },
  {
    step: "2",
    title: "Diagnóstico Gratuito",
    desc: "Nuestro técnico calificado asiste al lugar, evalúa el estado de tus instalaciones e identifica los trabajos necesarios."
  },
  {
    step: "3",
    title: "Cotización Detallada",
    desc: "Recibes un presupuesto transparente con el detalle exacto de cada servicio y repuestos de alta calidad, sin cobros ocultos."
  },
  {
    step: "4",
    title: "Ejecución del Servicio",
    desc: "Realizamos la calibración y mantenimiento con herramientas profesionales de precisión y garantía post-servicio."
  }
];

const FAQ = [
  {
    pregunta: "¿Cada cuánto tiempo debo hacer mantenimiento a mis mamparas?",
    respuesta: "Se recomienda un mantenimiento preventivo general cada 6 a 12 meses. Esto varía según la frecuencia de uso y la exposición a la humedad o polvo. En mamparas de ducha, el mantenimiento semestral evita que los rodajes se traben debido al sarro."
  },
  {
    pregunta: "¿El servicio de diagnóstico tiene costo?",
    respuesta: "No, la visita de diagnóstico técnico y evaluación estructural es 100% gratuita y sin ningún compromiso para ti en todo Lima Metropolitana."
  },
  {
    pregunta: "¿Trabajan con repuestos originales?",
    respuesta: "Sí, utilizamos repuestos originales certificados, rodajes de acero inoxidable de alta gama, burletes y felpas importados que aseguran un funcionamiento sumamente suave y con mayor durabilidad."
  },
  {
    pregunta: "¿Cuánto tiempo toma el mantenimiento de una mampara o ventana?",
    respuesta: "Un mantenimiento preventivo estándar para una mampara o ventana suele tomar entre 1 a 2 horas, incluyendo el desmontaje de hojas, limpieza profunda de rieles, cambio de repuestos y la calibración final."
  },
  {
    pregunta: "¿Ofrecen garantía por el servicio?",
    respuesta: "Sí, todos nuestros servicios profesionales de mantenimiento correctivo y preventivo cuentan con garantía Meraky, respaldando tanto la mano de obra como la calidad de los repuestos instalados."
  },
  {
    pregunta: "¿Atienden emergencias de vidrios fuera del horario comercial?",
    respuesta: "Sí, contamos con atención prioritaria para emergencias de cristales rotos, cerraduras trabadas o descarrilamiento crítico de mamparas. Contáctanos de inmediato vía WhatsApp para darte soporte."
  }
];

export default function MantenimientoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);

  const handleWhatsApp = (serviceTitle?: string) => {
    const text = serviceTitle 
      ? `Hola Meraky Proyectos, estoy interesado en el servicio de: Mantenimiento de ${serviceTitle}. Me gustaría agendar un diagnóstico gratuito.`
      : `Hola Meraky Proyectos, me gustaría agendar un diagnóstico técnico gratuito para el mantenimiento de mis vidrios y mamparas.`;
    window.open(`https://wa.me/51929765802?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main className="min-h-screen w-full bg-[#0E0B06] overflow-x-hidden flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 flex items-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop" 
            alt="Mantenimiento Profesional de Vidrios" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0E0B06]/85"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <ScrollReveal staggerChildren={0.15} direction="left" className="flex flex-col items-start">
              <ScrollRevealItem>
                <div className="inline-flex items-center gap-2 bg-[#1B150B]/90 border border-[#F59E1B]/30 px-4 py-1.5 rounded-full text-xs font-semibold text-[#F59E1B] mb-6 uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
                  Servicio Profesional
                </div>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <Heading level="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                  Mantenimiento <br />
                  <span className="text-[#F59E1B] drop-shadow-[0_0_15px_rgba(245,158,27,0.2)]">Profesional</span> <span className="text-white/90">de Vidrios</span>
                </Heading>
              </ScrollRevealItem>

              <ScrollRevealItem>
                <p className="text-white/80 text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-light">
                  Servicio especializado de mantenimiento preventivo y correctivo para mamparas, ventanas, puertas de vidrio, espejos y pasamanos. Extendemos la vida útil de tus instalaciones con garantía certificada.
                </p>
              </ScrollRevealItem>

              {/* Checkboxes List */}
              <ScrollRevealItem className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-10 w-full">
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <div className="w-5 h-5 bg-[#F59E1B]/10 border border-[#F59E1B]/40 rounded-full flex items-center justify-center text-[#F59E1B]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  Diagnóstico gratuito
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <div className="w-5 h-5 bg-[#F59E1B]/10 border border-[#F59E1B]/40 rounded-full flex items-center justify-center text-[#F59E1B]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  Garantía incluida
                </div>
                <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <div className="w-5 h-5 bg-[#F59E1B]/10 border border-[#F59E1B]/40 rounded-full flex items-center justify-center text-[#F59E1B]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                  </div>
                  Servicio rápido
                </div>
              </ScrollRevealItem>

              {/* Buttons */}
              <ScrollRevealItem className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
                <a href="#servicios" className="w-full sm:w-auto bg-[#F59E1B] text-[#140F08] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(245,158,27,0.3)] hover:shadow-[0_0_30px_rgba(245,158,27,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Ver Servicios
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 13l-7 7-7-7m14-6l-7 7-7-7"/></svg>
                </a>
                <button onClick={() => handleWhatsApp()} className="w-full sm:w-auto bg-[#1B150B]/80 text-white border border-[#2D2110] hover:border-[#F59E1B]/50 px-8 py-3.5 rounded-full font-bold hover:bg-[#1f1a11] backdrop-blur-sm hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73 0-2.597-1.012-5.04-2.85-6.88A9.772 9.772 0 0 0 12.008 1.24c-5.44 0-9.863 4.372-9.865 9.735 0 1.704.458 3.37 1.328 4.86L2.481 21.54l6.166-1.62c-.001.002-.001.002 0 0zM17.15 14.7c-.284-.143-1.682-.83-1.947-.926-.263-.097-.456-.144-.648.143-.19.288-.741.928-.908 1.12-.167.19-.333.213-.617.072-1.282-.64-2.115-1.06-2.946-2.483-.22-.375.22-.347.628-1.16.068-.142.033-.266-.017-.365-.05-.1-.456-1.1-.624-1.506-.164-.398-.33-.342-.456-.342-.117-.006-.25-.006-.384-.006-.134 0-.354.05-.54.25-.186.2-.71.693-.71 1.692 0 1 .729 1.968.83 2.1 1.02 1.358 1.81 2.506 3.54 3.178.41.16.73.257.98.337.41.13.79.11 1.09.06.33-.05 1.02-.42 1.17-.826.15-.407.15-.758.1-.827-.05-.07-.19-.11-.47-.25z"/></svg>
                  WhatsApp
                </button>
              </ScrollRevealItem>
            </ScrollReveal>

            {/* Right Content: Elegant Image Overlay & Diagnostics technical card */}
            <ScrollReveal direction="right" className="relative mt-8 lg:mt-0 flex flex-col items-center">
              <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto rounded-[2.5rem] overflow-hidden border border-[#2D2110]/60 shadow-2xl bg-[#1B150B]">
                
                {/* Tech image */}
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" 
                  alt="Técnico Especialista de Vidrios Meraky" 
                  className="w-full aspect-[4/3] object-cover filter brightness-[0.85]"
                />

                {/* Experience Badge overlay */}
                <div className="absolute top-6 right-6 bg-[#F59E1B] text-[#140F08] font-bold text-center flex flex-col justify-center items-center w-20 h-20 rounded-full shadow-2xl border-4 border-[#0E0B06] z-20">
                  <span className="text-xl leading-none font-extrabold">+3</span>
                  <span className="text-[10px] leading-tight uppercase font-medium">años exp.</span>
                </div>

                {/* Overlaid Diagnostic info card */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#140F08]/90 backdrop-blur-md border border-[#F59E1B]/30 p-5 rounded-2xl flex items-center justify-between shadow-2xl z-20">
                  <div>
                    <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest block mb-1">Visita técnica desde</span>
                    <span className="text-white text-3xl font-extrabold tracking-tight">S/. 0</span>
                    <span className="text-[#F59E1B] text-xs font-semibold block mt-0.5">*Diagnóstico gratuito</span>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => handleWhatsApp()} className="bg-[#F59E1B] hover:bg-[#eab308] text-[#140F08] px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                      Agenda hoy
                    </button>
                    <div className="flex gap-2">
                      <a href="tel:+51929765802" className="p-2 bg-[#1B150B] border border-[#2D2110] hover:border-[#F59E1B]/40 rounded-xl text-[#F59E1B] transition-colors" title="Llamar">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      </a>
                      <button onClick={() => handleWhatsApp()} className="p-2 bg-[#1B150B] border border-[#2D2110] hover:border-emerald-500/40 rounded-xl text-emerald-500 transition-colors" title="WhatsApp">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73 0-2.597-1.012-5.04-2.85-6.88A9.772 9.772 0 0 0 12.008 1.24c-5.44 0-9.863 4.372-9.865 9.735 0 1.704.458 3.37 1.328 4.86L2.481 21.54l6.166-1.62c-.001.002-.001.002 0 0zM17.15 14.7c-.284-.143-1.682-.83-1.947-.926-.263-.097-.456-.144-.648.143-.19.288-.741.928-.908 1.12-.167.19-.333.213-.617.072-1.282-.64-2.115-1.06-2.946-2.483-.22-.375.22-.347.628-1.16.068-.142.033-.266-.017-.365-.05-.1-.456-1.1-.624-1.506-.164-.398-.33-.342-.456-.342-.117-.006-.25-.006-.384-.006-.134 0-.354.05-.54.25-.186.2-.71.693-.71 1.692 0 1 .729 1.968.83 2.1 1.02 1.358 1.81 2.506 3.54 3.178.41.16.73.257.98.337.41.13.79.11 1.09.06.33-.05 1.02-.42 1.17-.826.15-.407.15-.758.1-.827-.05-.07-.19-.11-.47-.25z"/></svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Servicios de Mantenimiento Section */}
      <section id="servicios" className="py-20 px-4 sm:px-6 bg-[#140F08]/30 border-y border-[#2D2110]/50 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <span className="text-[#F59E1B] font-bold uppercase tracking-widest text-xs mb-4 block">
              NUESTROS SERVICIOS
            </span>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Servicios de <span className="text-[#F59E1B]">Mantenimiento</span>
            </Heading>
            <p className="mt-4 text-white/60 max-w-xl mx-auto font-light">
              Mantenemos en óptimas condiciones todas tus instalaciones de vidrio y perfilería de aluminio con mano de obra experta.
            </p>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICIOS_MANTENIMIENTO.map((srv, idx) => (
              <div 
                key={idx}
                className="bg-[#1B150B]/90 rounded-3xl overflow-hidden border border-[#2D2110]/70 hover:border-[#F59E1B]/40 transition-all duration-500 flex flex-col h-full group hover:shadow-2xl hover:shadow-[#F59E1B]/5"
              >
                {/* Image & Recommended Overlays */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img 
                    src={srv.image} 
                    alt={srv.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85]" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140F08] via-transparent to-transparent z-10" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-[#140F08]/90 backdrop-blur-sm border border-[#2D2110] rounded-xl flex items-center justify-center z-20">
                    {srv.icon}
                  </div>

                  {/* Floating Recommended pill */}
                  <span className="absolute bottom-4 right-4 bg-[#F59E1B] text-[#140F08] text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-20">
                    {srv.periodicity}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow bg-[#1B150B]">
                  <Heading level="h3" className="text-2xl font-bold text-white mb-3">
                    {srv.title}
                  </Heading>
                  <p className="text-white/70 text-sm md:text-base font-light mb-6 leading-relaxed flex-grow">
                    {srv.desc}
                  </p>

                  {/* Badges/Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {srv.tags.map((tag, sIdx) => (
                      <span key={sIdx} className="bg-[#140F08]/90 text-white/80 border border-[#2D2110] text-[11px] px-3 py-1.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                    <span className="bg-[#140F08]/90 text-[#F59E1B]/80 border border-[#F59E1B]/20 text-[11px] px-3 py-1.5 rounded-full font-medium">
                      +3 más
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#2D2110]/50">
                    <button 
                      onClick={() => handleWhatsApp(srv.title)}
                      className="text-xs font-bold text-[#F59E1B] flex items-center gap-1 hover:underline"
                    >
                      Diagnóstico Gratis
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                    <button 
                      onClick={() => handleWhatsApp(srv.title)}
                      className="bg-gradient-to-r from-[#2D2110] to-[#140F08] text-[#F59E1B] border border-[#F59E1B]/20 hover:border-[#F59E1B]/50 px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
                    >
                      Cotizar por WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Ventajas Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#0E0B06]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <span className="text-[#F59E1B] font-bold uppercase tracking-widest text-xs mb-4 block">
              VENTAJAS
            </span>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              ¿Por qué hacer <span className="text-[#F59E1B]">Mantenimiento?</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.12} direction="up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENTAJAS.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#140F08]/90 border border-[#2D2110] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:border-[#F59E1B]/30 hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#1B150B] border border-[#2D2110] rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Proceso de Trabajo Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#140F08]/30 border-t border-[#2D2110]/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <span className="text-[#F59E1B] font-bold uppercase tracking-widest text-xs mb-4 block">
              PROCESO
            </span>
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              ¿Cómo <span className="text-[#F59E1B]">Trabajamos?</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.15} direction="up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESO.map((step, idx) => (
              <div 
                key={idx}
                className="bg-[#1B150B]/80 border border-[#2D2110] rounded-3xl p-6 flex flex-col items-start relative overflow-hidden"
              >
                <div className="w-10 h-10 bg-[#F59E1B] text-[#140F08] text-lg font-black rounded-full flex items-center justify-center mb-6 shadow-md shadow-[#F59E1B]/20">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Preguntas Frecuentes FAQ Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#0E0B06] relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-16">
            <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              Preguntas <span className="text-[#F59E1B]">Frecuentes</span>
            </Heading>
          </ScrollReveal>

          <ScrollReveal staggerChildren={0.1} direction="up" className="space-y-4">
            {FAQ.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <ScrollRevealItem 
                  key={idx} 
                  className="bg-[#140F08]/90 border border-[#2D2110] rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#1B150B]/50 transition-colors"
                  >
                    <span className="text-white font-bold text-base md:text-lg tracking-wide">{item.pregunta}</span>
                    <span className={`w-6 h-6 shrink-0 rounded-full bg-[#1B150B] border border-[#2D2110] flex items-center justify-center text-[#F59E1B] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>
                    </span>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[250px] border-t border-[#2D2110]/40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 py-5 text-white/70 font-light text-sm md:text-base leading-relaxed bg-[#1B150B]/20">
                      {item.respuesta}
                    </div>
                  </div>
                </ScrollRevealItem>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#0E0B06] border-t border-[#2D2110]/30">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1c170f] via-[#140F08] to-[#1c170f] border border-[#F59E1B]/30 rounded-[2.5rem] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          
          {/* Alert Warning icon */}
          <div className="w-16 h-16 bg-[#F59E1B]/10 border border-[#F59E1B]/30 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-pulse text-[#F59E1B]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Hace cuánto no revisas tus mamparas?
          </h3>
          <p className="text-white/70 font-light max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            El 70% de las fallas críticas en mamparas y puertas de vidrio templado pueden prevenirse con un mantenimiento preventivo regular. ¡No esperes a que sea demasiado tarde y cause un accidente!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => handleWhatsApp()}
              className="bg-[#F59E1B] hover:bg-[#eab308] text-[#140F08] px-8 py-3.5 rounded-full font-bold shadow-lg transition-all flex items-center gap-2 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              Agendar Visita Gratis
            </button>
            <a 
              href="tel:+51929765802"
              className="bg-[#1B150B]/80 text-white border border-[#2D2110] hover:border-[#F59E1B]/40 px-8 py-3.5 rounded-full font-bold hover:bg-[#1f1a11] backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5 text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              Llamar Ahora
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
