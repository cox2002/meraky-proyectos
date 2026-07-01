import React from 'react';
import Heading from '@/src/shared/ui/Heading';
import GlassButton from '@/src/shared/ui/GlassButton';
import ParticlesBackground from '@/src/shared/ui/ParticlesBackground';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';

export default function AboutSection() {
  const images = [
    "/images/nosotros/nosotros-1.jpg",
    "/images/nosotros/nosotros-2.jpg",
    "/images/nosotros/nosotros-3.jpg",
    "/images/nosotros/nosotros-4.jpg"
  ];

  return (
    <section id="nosotros" className="py-20 md:py-32 px-4 sm:px-6 w-full relative overflow-hidden bg-surface font-inter">
      {/* Fondo Interactivo de Partículas */}
      <ParticlesBackground />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Mosaico de Imágenes Izquierda */}
        <ScrollReveal staggerChildren={0.15} direction="up" className="grid grid-cols-2 gap-3 sm:gap-4">
          <ScrollRevealItem className="flex flex-col gap-4 mt-8 md:mt-12">
            <img 
              src={images[0]} 
              alt="Diseño de planos" 
              className="h-40 sm:h-56 md:h-64 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
            <img 
              src={images[2]} 
              alt="Interior moderno" 
              className="h-32 sm:h-48 md:h-56 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
          </ScrollRevealItem>
          <ScrollRevealItem className="flex flex-col gap-4">
            <img 
              src={images[1]} 
              alt="Construcción estructural" 
              className="h-32 sm:h-48 md:h-56 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
            <img 
              src={images[3]} 
              alt="Fachada de cristal" 
              className="h-48 sm:h-64 md:h-72 w-full object-cover rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            />
          </ScrollRevealItem>
        </ScrollReveal>

        {/* Contenido Derecha */}
        <ScrollReveal staggerChildren={0.15} direction="up" className="flex flex-col items-start w-full">
          <ScrollRevealItem>
            <span className="text-[#F59E1B] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4 block">
              SOBRE NOSOTROS
            </span>
          </ScrollRevealItem>
          
          <ScrollRevealItem className="w-full">
            <h2 className="mb-6 text-gray-900 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              Expertos en <span className="text-[#F59E1B]">Vidrio</span> y <br className="hidden sm:block"/> <span className="text-[#F59E1B]">Aluminio</span>
            </h2>
          </ScrollRevealItem>
          
          <ScrollRevealItem className="font-inter font-normal text-[#4A5568] leading-[1.6] text-sm sm:text-[15.5px] mb-8 flex flex-col gap-5 w-full">
            <p>
              En <strong className="text-[#F59E1B] font-bold">MERAKY PROYECTOS</strong>, fusionamos la precisión técnica con el diseño contemporáneo. Con más de 3 años de experiencia, nos dedicamos a transformar espacios mediante soluciones innovadoras.
            </p>
            <p>
              Nuestro compromiso va más allá de la instalación: creamos ambientes luminosos, seguros y elegantes que elevan la calidad de vida de nuestros clientes.
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
            {/* Tarjeta 1 */}
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-md shadow-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#130F0A] p-3 rounded-2xl text-[#F59E1B] flex-shrink-0 flex items-center justify-center w-12 h-12">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <span className="block font-bold text-gray-900 text-sm md:text-base mb-0.5">Garantía Total</span>
                <p className="text-xs md:text-sm text-gray-500 leading-tight">5 años en nuestros trabajos</p>
              </div>
            </div>
            
            {/* Tarjeta 2 */}
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-md shadow-gray-100/50 hover:shadow-lg transition-all duration-300">
              <div className="bg-[#130F0A] p-3 rounded-2xl text-[#F59E1B] flex-shrink-0 flex items-center justify-center w-12 h-12">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <span className="block font-bold text-gray-900 text-sm md:text-base mb-0.5">Atención</span>
                <p className="text-xs md:text-sm text-gray-500 leading-tight">Atención personalizada</p>
              </div>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem>
            <a 
              href="#contacto" 
              className="inline-flex items-center justify-center bg-[#1E1915] hover:bg-[#2F2721] text-[#F59E1B] px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 gap-2 shadow-lg shadow-black/10 hover:scale-[1.02] cursor-pointer"
            >
              Conocer Mas
              <svg className="w-4 h-4 text-[#F59E1B]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
