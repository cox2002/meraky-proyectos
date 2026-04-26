import React from 'react';
import Heading from '@/src/shared/ui/Heading';
import GlassCard from '@/src/shared/ui/GlassCard';
import GlassButton from '@/src/shared/ui/GlassButton';

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 md:py-32 relative bg-surface-container-low overflow-hidden border-y border-outline-variant/10">
      {/* Background Blobs for Refraction Effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Portafolio</span>
          <Heading level="h2">Obras Destacadas</Heading>
        </div>

        <div className="flex flex-col gap-24">
          {/* Proyecto 1: Asimétrico Derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 w-full h-[450px] bg-surface-container-highest rounded-xl border border-outline-variant/10 flex items-center justify-center relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-container to-surface-container-high" />
              <span className="relative z-10 text-on-surface-variant/50 font-bold uppercase tracking-widest">[Imagen Proyecto Torre Empresarial]</span>
            </div>
            <div className="lg:col-span-5 lg:-ml-24 relative z-20">
              <GlassCard padding="lg" className="hover:scale-[1.01] transition-transform duration-300">
                <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">Corporativo</span>
                <Heading level="h3" className="mb-4">Torre Insignia 2025</Heading>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                  Implementación de muro cortina con cristal reflecta de alto desempeño acústico y térmico en 15 niveles, optimizando la luz natural.
                </p>
                <GlassButton variant="glass" className="w-full shadow-sm">Ver Detalles de Proyecto</GlassButton>
              </GlassCard>
            </div>
          </div>

          {/* Proyecto 2: Asimétrico Izquierda */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
             <div className="lg:col-span-5 lg:order-1 order-2 lg:-mr-24 relative z-20">
              <GlassCard padding="lg" className="hover:scale-[1.01] transition-transform duration-300">
                <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">Residencial Premium</span>
                <Heading level="h3" className="mb-4">Casa del Bosque</Heading>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                  Barandales de cristal templado sin herrajes aparentes y ventanales de piso a techo para integrar completamente la naturaleza al interior del hogar.
                </p>
                <GlassButton variant="glass" className="w-full shadow-sm">Ver Detalles de Proyecto</GlassButton>
              </GlassCard>
            </div>
            <div className="lg:col-span-8 lg:order-2 order-1 w-full h-[450px] bg-surface-container-highest rounded-xl border border-outline-variant/10 flex items-center justify-center relative overflow-hidden shadow-sm">
               <div className="absolute inset-0 bg-gradient-to-bl from-surface-container to-surface-container-high" />
               <span className="relative z-10 text-on-surface-variant/50 font-bold uppercase tracking-widest">[Imagen Proyecto Residencial]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
