'use client';
import React, { useState } from 'react';
import Heading from '@/src/shared/ui/Heading';
import ParticlesBackground from '@/src/shared/ui/ParticlesBackground';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<{title: string, category: string, img: string} | null>(null);

  const projects = [
    { 
      title: "Residencia Las Lomas", 
      category: "Ventanas Corredizas",
      img: "/images/ventanas/ventana-corrediza.png"
    },
    { 
      title: "Centro Empresarial Vértice", 
      category: "Mamparas Divisorias",
      img: "/images/mamparas/mampara-corrediza.png"
    },
    { 
      title: "Casa de Campo Girasoles", 
      category: "Ventanas Pivotantes",
      img: "/images/ventanas/ventana-pivotante.png"
    },
    { 
      title: "Baño Suite Principal", 
      category: "Mamparas Fijas",
      img: "/images/mamparas/mampara-fija.png"
    },
    { 
      title: "Penthouse San Isidro", 
      category: "Ventanas Fijas Panorámicas",
      img: "/images/ventanas/ventana-fija.png"
    },
    { 
      title: "Ducha Esquinera Moderna", 
      category: "Mamparas de Ducha Integrales",
      img: "/images/mamparas/mampara-ducha.png"
    },
  ];

  return (
    <section id="proyectos" className="py-24 md:py-32 relative bg-surface overflow-hidden w-full">
      {/* Fondo Interactivo de Partículas */}
      <ParticlesBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal staggerChildren={0.15} direction="up" className="text-center mb-16">
          <ScrollRevealItem>
            <span className="text-[#997a00] font-bold uppercase tracking-widest text-sm mb-4 block">
              PORTAFOLIO
            </span>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <Heading level="h2" className="text-4xl md:text-5xl font-extrabold text-on-surface">
              Galería de <span className="text-[#997a00]">Obras</span>
            </Heading>
          </ScrollRevealItem>
        </ScrollReveal>

        <ScrollReveal staggerChildren={0.1} direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <ScrollRevealItem 
              key={idx} 
              className="h-full w-full"
            >
              <div
                onClick={() => setSelectedProject(proj)}
                className="relative group h-64 md:h-80 rounded-3xl overflow-hidden border border-outline-variant/10 shadow-md cursor-pointer"
              >
              {/* Imagen de fondo con efecto de ampliación (zoom) */}
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
              />
              
              {/* Degradado oscuro base para mejorar contraste */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Efecto oscuro elegante al hacer Hover para mostrar el texto */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#110e08]/90 via-[#110e08]/50 to-transparent flex flex-col justify-end p-8">
                <span className="text-[#FACC15] font-bold uppercase tracking-widest text-xs mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {proj.category}
                </span>
                <Heading level="h3" className="text-white text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {proj.title}
                </Heading>
              </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>

      {/* Modal / Lightbox */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 transition-opacity animate-fade-in-up"
          onClick={() => setSelectedProject(null)}
        >
          {/* Botón de cerrar (esquina superior derecha) */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-[#FACC15] transition-colors p-2"
            onClick={() => setSelectedProject(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Contenedor principal del modal */}
          <div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full flex flex-col"
            onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer click en el contenido
          >
            {/* Imagen grande */}
            <div className="relative w-full h-[50vh] md:h-[65vh] bg-[#110e08]">
              <img 
                src={selectedProject.img} 
                alt={selectedProject.title} 
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
            
            {/* Pie de foto con información */}
            <div className="p-6 md:p-8 bg-white flex flex-col items-start gap-3 border-t border-outline-variant/10">
              <span className="bg-[#110e08] text-[#FACC15] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase shadow-sm">
                {selectedProject.category}
              </span>
              <Heading level="h3" className="text-on-surface text-2xl md:text-3xl font-extrabold">
                {selectedProject.title}
              </Heading>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
