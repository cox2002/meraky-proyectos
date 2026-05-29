import React from 'react';
import Heading from '@/src/shared/ui/Heading';
import ParticlesBackground from '@/src/shared/ui/ParticlesBackground';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    { 
      title: 'Mamparas', 
      desc: 'Mamparas de vidrio templado de alta seguridad (8mm, 10mm, 12mm) diseñadas a medida para baños, oficinas y terrazas. Sistemas corredizos y batientes con herrajes de acero inoxidable para un deslizamiento suave y duradero.',
      img: '/images/mamparas/mampara-corrediza.png',
      href: '/productos/mamparas'
    },
    { 
      title: 'Ventanas', 
      desc: 'Ventanas de aluminio arquitectónico de alta gama y vidrio templado. Diseños corredizos, batientes, proyectantes y fijos que ofrecen máxima luminosidad, hermeticidad y un excelente aislamiento para tu hogar.',
      img: '/images/ventanas/ventana-corrediza.png',
      href: '/productos/ventanas'
    },
    { 
      title: 'Puertas de Aluminio', 
      desc: 'Puertas de aluminio y vidrio templado de gran durabilidad y diseño moderno. Soluciones ideales para accesos principales, oficinas y divisiones de ambientes con marcos resistentes y acabados premium.',
      img: '/images/mamparas/puertas-usuario.png', // Puerta principal de aluminio negro de doble hoja (Usuario)
      href: '#contacto'
    },
    { 
      title: 'Pasamanos', 
      desc: 'Pasamanos y barandas de acero inoxidable AISI 304 combinados con vidrio templado. Diseños elegantes y sumamente seguros para escaleras, balcones y pasadizos interiores o exteriores.',
      img: '/images/mamparas/pasamanos-usuario.png', // Escalera con baranda y pasamanos de vidrio templado (Usuario)
      href: '#contacto'
    },
    { 
      title: 'Barandas', 
      desc: 'Barandas de cristal templado y perfiles de aluminio o acero, diseñadas a medida para terrazas, balcones y azoteas. Máxima visibilidad, seguridad y gran resistencia contra la intemperie.',
      img: '/images/mamparas/barandas-usuario.png', // Barandas de vidrio en terraza/balcón (Usuario)
      href: '#contacto'
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
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col border border-outline-variant/10 h-full cursor-pointer group"
            >
              <Link href={srv.href} className="flex flex-col h-full w-full">
                {/* Imagen y Título Superior */}
                <div className="relative h-56 w-full overflow-hidden">
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
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span className="text-sm font-bold text-[#997a00] flex items-center gap-1 hover:underline">
                      Solicitar Info
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                    <span className="bg-gradient-to-r from-[#2a2415] to-[#110e08] text-[#FACC15] px-5 py-2.5 rounded-full text-sm font-bold shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
                      Ver Más
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
