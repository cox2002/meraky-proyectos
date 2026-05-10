import React from 'react';
import Heading from '@/src/shared/ui/Heading';
import GlassButton from '@/src/shared/ui/GlassButton';
import ParticlesBackground from '@/src/shared/ui/ParticlesBackground';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';

export default function AboutSection() {
  const images = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop", // Planos/arquitecto
    "https://images.unsplash.com/photo-1541888052109-1e3df6a1eb18?q=80&w=800&auto=format&fit=crop", // Construcción/Estructura
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop", // Interior con luz
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"  // Casa moderna cristal
  ];

  return (
    <section id="nosotros" className="py-24 md:py-32 px-6 w-full relative overflow-hidden bg-surface">
      {/* Fondo Interactivo de Partículas */}
      <ParticlesBackground />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Mosaico de Imágenes Izquierda */}
        <ScrollReveal staggerChildren={0.15} direction="up" className="grid grid-cols-2 gap-4">
          <ScrollRevealItem className="flex flex-col gap-4 mt-8 md:mt-12">
            <img 
              src={images[0]} 
              alt="Diseño de planos" 
              className="h-56 md:h-64 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
            <img 
              src={images[2]} 
              alt="Interior moderno" 
              className="h-48 md:h-56 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
          </ScrollRevealItem>
          <ScrollRevealItem className="flex flex-col gap-4">
            <img 
              src={images[1]} 
              alt="Construcción estructural" 
              className="h-48 md:h-56 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
            <img 
              src={images[3]} 
              alt="Fachada de cristal" 
              className="h-64 md:h-72 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
          </ScrollRevealItem>
        </ScrollReveal>

        {/* Contenido Derecha */}
        <ScrollReveal staggerChildren={0.15} direction="up" className="flex flex-col items-start">
          <ScrollRevealItem>
            <span className="text-[#997a00] font-bold uppercase tracking-widest text-sm mb-4 block">
              SOBRE NOSOTROS
            </span>
          </ScrollRevealItem>
          
          <ScrollRevealItem>
            <Heading level="h2" className="mb-6 text-on-surface text-4xl md:text-5xl font-extrabold leading-tight">
              Expertos en <span className="text-[#997a00]">Vidrio</span> y <span className="text-[#997a00]">Aluminio</span>
            </Heading>
          </ScrollRevealItem>
          
          <ScrollRevealItem className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 flex flex-col gap-4">
            <p>
              En <strong className="text-[#997a00]">MERAKY PROYECTOS</strong>, fusionamos la precisión técnica con el diseño contemporáneo. Con más de 3 años de experiencia, nos dedicamos a transformar espacios mediante soluciones innovadoras.
            </p>
            <p>
              Nuestro compromiso va más allá de la instalación: creamos ambientes luminosos, seguros y elegantes que elevan la calidad de vida de nuestros clientes.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
            {/* Tarjeta 1 */}
            <div className="flex items-center gap-4 bg-white p-4 md:p-5 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#110e08] p-3 rounded-xl text-[#FACC15] flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <span className="block font-bold text-on-surface text-sm md:text-base mb-0.5">Garantía Total</span>
                <p className="text-xs md:text-sm text-on-surface-variant leading-tight">5 años en nuestros trabajos</p>
              </div>
            </div>
            
            {/* Tarjeta 2 */}
            <div className="flex items-center gap-4 bg-white p-4 md:p-5 rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#110e08] p-3 rounded-xl text-[#FACC15] flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <span className="block font-bold text-on-surface text-sm md:text-base mb-0.5">Atención</span>
                <p className="text-xs md:text-sm text-on-surface-variant leading-tight">Atención personalizada</p>
              </div>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <GlassButton 
              variant="primary" 
              className="py-4 px-8 text-base shadow-lg flex items-center justify-center gap-2"
              href="#contacto"
            >
              Conocer Mas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </GlassButton>
          </ScrollRevealItem>

        </ScrollReveal>
      </div>
    </section>
  );
}
