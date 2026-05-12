import React from 'react';
import Heading from '@/src/shared/ui/Heading';
import ParticlesBackground from '@/src/shared/ui/ParticlesBackground';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';

export default function ServicesSection() {
  const services = [
    { 
      title: 'Mamparas', 
      desc: 'Vidrio templado de alta calidad.',
      img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Ventanas', 
      desc: 'Sistemas de aislamiento total.',
      img: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Puertas de Aluminio', 
      desc: 'Corredizas, batientes y más.',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Pasamanos', 
      desc: 'Inox y vidrio, por metro lineal.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Barandas', 
      desc: 'Balcones y terrazas a medida.',
      img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop'
    },
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 px-6 w-full relative overflow-hidden bg-surface">
      {/* Fondo Interactivo de Partículas */}
      <ParticlesBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal staggerChildren={0.15} direction="up" className="text-center mb-16">
          <ScrollRevealItem>
            <span className="text-[#997a00] font-bold uppercase tracking-widest text-sm mb-4 block">
              NUESTROS SERVICIOS
            </span>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <Heading level="h2" className="text-4xl md:text-5xl font-extrabold text-on-surface">
              Soluciones <span className="text-[#997a00]">Integrales</span>
            </Heading>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto">
              Ofrecemos servicios especializados para todas sus necesidades en vidrio y aluminio, asegurando calidad y durabilidad.
            </p>
          </ScrollRevealItem>
        </ScrollReveal>

        <ScrollReveal staggerChildren={0.15} direction="up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <ScrollRevealItem 
              key={idx} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-outline-variant/10 h-full"
            >
              {/* Imagen y Título Superior */}
              <div className="relative h-56 w-full group">
                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#110e08]/90 via-[#110e08]/40 to-transparent" />
                <h3 className="absolute bottom-5 left-6 text-2xl font-bold text-white tracking-wide">
                  {srv.title}
                </h3>
              </div>
              
              {/* Contenido Inferior */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-sm md:text-base text-on-surface-variant mb-8 flex-grow leading-relaxed">
                  {srv.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <a href="#contacto" className="text-sm font-bold text-[#997a00] flex items-center gap-1 hover:underline">
                    Solicitar Info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                  <a href="#contacto" className="bg-gradient-to-r from-[#2a2415] to-[#110e08] text-[#FACC15] px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105">
                    Ver Más
                  </a>
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
