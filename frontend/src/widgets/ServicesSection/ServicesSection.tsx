import React from 'react';
import Heading from '@/src/shared/ui/Heading';
import ParticlesBackground from '@/src/shared/ui/ParticlesBackground';

export default function ServicesSection() {
  const services = [
    { 
      title: 'Ventanas y Cancelería', 
      desc: 'Sistemas de aislamiento termoacústico con aluminio europeo para máximo confort.',
      img: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Mamparas Interiores', 
      desc: 'Vidrio templado de seguridad con acabados de lujo para baños y divisiones.',
      img: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Fachadas Integrales', 
      desc: 'Muros cortina para edificios comerciales y residenciales con diseño de vanguardia.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Barandales', 
      desc: 'Pasamanos invisibles de máxima seguridad y diseño minimalista en cristal templado.',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Espejos Decorativos', 
      desc: 'Cortes a medida con iluminación LED integrada y biselados elegantes.',
      img: 'https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=800&auto=format&fit=crop'
    },
    { 
      title: 'Pérgolas y Domos', 
      desc: 'Cubiertas de cristal de alta resistencia para proteger y decorar terrazas.',
      img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop'
    },
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 px-6 w-full relative overflow-hidden bg-surface">
      {/* Fondo Interactivo de Partículas */}
      <ParticlesBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-[#997a00] font-bold uppercase tracking-widest text-sm mb-4 block">
            NUESTROS SERVICIOS
          </span>
          <Heading level="h2" className="text-4xl md:text-5xl font-extrabold text-on-surface">
            Soluciones <span className="text-[#997a00]">Integrales</span>
          </Heading>
          <p className="mt-4 text-on-surface-variant max-w-2xl mx-auto">
            Ofrecemos servicios especializados para todas sus necesidades en vidrio y aluminio, asegurando calidad y durabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-outline-variant/10 animate-fade-in-up [animation-delay:${idx * 100}ms]`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
