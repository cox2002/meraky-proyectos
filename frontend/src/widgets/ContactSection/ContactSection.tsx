import React from 'react';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 md:py-32 relative bg-[#0c0a07] overflow-hidden w-full">
      {/* Elementos decorativos de fondo oscuros */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FACC15]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#997a00]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado Principal Centrado */}
        <ScrollReveal staggerChildren={0.15} direction="up" className="text-center mb-16">
          <ScrollRevealItem>
            <span className="text-[#997a00] font-bold uppercase tracking-widest text-sm mb-4 block">
              CONTÁCTANOS
            </span>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <Heading level="h2" className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Hagamos Realidad tu <span className="text-[#FACC15]">Proyecto</span>
            </Heading>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Estamos listos para asesorarte. Solicita tu cotización sin compromiso.
            </p>
          </ScrollRevealItem>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Lado Izquierdo: Info, Mapa e Iconos */}
          <ScrollReveal staggerChildren={0.15} direction="left" className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Tarjeta de Teléfono */}
            <ScrollRevealItem className="bg-[#16130c] border border-[#2a2415] rounded-2xl p-6 flex items-center gap-5 shadow-lg">
              <div className="bg-[#0c0a07] p-4 rounded-xl text-[#FACC15]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <span className="block text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Teléfono</span>
                <span className="text-white font-semibold text-lg">+51 929 765 802</span>
              </div>
            </ScrollRevealItem>

            {/* Tarjeta de Correo */}
            <ScrollRevealItem className="bg-[#16130c] border border-[#2a2415] rounded-2xl p-6 flex items-center gap-5 shadow-lg">
              <div className="bg-[#0c0a07] p-4 rounded-xl text-[#FACC15]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <span className="block text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Email</span>
                <span className="text-white font-semibold">cotizaciones@merakyproyectos.com</span>
              </div>
            </ScrollRevealItem>

            {/* Tarjeta de Dirección */}
            <ScrollRevealItem className="bg-[#16130c] border border-[#2a2415] rounded-2xl p-6 flex items-center gap-5 shadow-lg">
              <div className="bg-[#0c0a07] p-4 rounded-xl text-[#FACC15]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <span className="block text-xs text-white/50 uppercase tracking-widest font-bold mb-1">Dirección</span>
                <span className="text-white font-semibold">Av. Independencia 1338 - IV Centenario, Arequipa</span>
              </div>
            </ScrollRevealItem>

            {/* Mapa de Google Real */}
            <ScrollRevealItem className="h-56 rounded-2xl border border-[#2a2415] overflow-hidden shadow-lg relative mt-2">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.218526558362!2d-71.53188998466184!3d-16.413725542848525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b071720d2cb%3A0xc68e5904fc7c2295!2sAv.%20Independencia%201338%2C%20Arequipa%2004001!5e0!3m2!1ses!2spe!4v1680000000000!5m2!1ses!2spe" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </ScrollRevealItem>

            {/* Redes Sociales */}
            <ScrollRevealItem className="flex justify-center gap-4 mt-4">
              <a href="#" className="bg-[#16130c] border border-[#2a2415] p-3 rounded-xl text-white/70 hover:text-[#FACC15] hover:border-[#FACC15]/30 transition-all shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="bg-[#16130c] border border-[#2a2415] p-3 rounded-xl text-white/70 hover:text-[#FACC15] hover:border-[#FACC15]/30 transition-all shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="bg-[#16130c] border border-[#2a2415] p-3 rounded-xl text-white/70 hover:text-[#FACC15] hover:border-[#FACC15]/30 transition-all shadow-md">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </ScrollRevealItem>

          </ScrollReveal>

          {/* Lado Derecho: Formulario Estilizado */}
          <ScrollReveal direction="right" className="lg:col-span-7 h-full">
            <ScrollRevealItem className="bg-[#16130c] p-8 md:p-10 rounded-3xl border border-[#2a2415] shadow-2xl h-full flex flex-col justify-center">
              
              <div className="mb-8">
                <Heading level="h3" className="text-white text-3xl font-bold mb-2">Enviar Mensaje</Heading>
                <p className="text-white/50 text-sm">Completa el formulario y te responderemos lo antes posible.</p>
              </div>

              <form className="space-y-6 flex-grow flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/70">Nombre Completo <span className="text-[#FACC15]">*</span></label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0c0a07] border border-[#2a2415] focus:border-[#997a00] outline-none px-4 py-3.5 rounded-xl text-white placeholder:text-white/30 transition-colors shadow-inner" 
                      placeholder="Tu nombre" 
                    />
                  </div>
                  {/* Teléfono */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-white/70">Teléfono <span className="text-[#FACC15]">*</span></label>
                    <input 
                      type="tel" 
                      className="w-full bg-[#0c0a07] border border-[#2a2415] focus:border-[#997a00] outline-none px-4 py-3.5 rounded-xl text-white placeholder:text-white/30 transition-colors shadow-inner" 
                      placeholder="+51 999 999 999" 
                    />
                  </div>
                </div>
                
                {/* Correo */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-white/70">Correo Electrónico <span className="text-[#FACC15]">*</span></label>
                  <input 
                    type="email" 
                    className="w-full bg-[#0c0a07] border border-[#2a2415] focus:border-[#997a00] outline-none px-4 py-3.5 rounded-xl text-white placeholder:text-white/30 transition-colors shadow-inner" 
                    placeholder="tu@email.com" 
                  />
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-white/70">Mensaje <span className="text-[#FACC15]">*</span></label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-[#0c0a07] border border-[#2a2415] focus:border-[#997a00] outline-none px-4 py-3.5 rounded-xl text-white placeholder:text-white/30 resize-none transition-colors shadow-inner" 
                    placeholder="Cuentanos sobre tu proyecto..."
                  ></textarea>
                </div>

                {/* Placeholder reCAPTCHA (estilizado como la imagen) */}
                <div className="flex justify-center md:justify-start pt-2">
                  <div className="bg-[#0c0a07] border border-[#2a2415] p-3 rounded-lg flex items-center gap-4 shadow-sm">
                    <div className="w-6 h-6 border-2 border-white/30 bg-white/5 rounded-sm" />
                    <span className="text-white/70 text-sm font-medium">No soy un robot</span>
                    <div className="ml-4 flex flex-col items-center">
                      <svg className="w-6 h-6 text-white/40" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12A10.56 10.56 0 1112 1.44a10.46 10.46 0 017.52 3.16l-2.48 2.48H24V0l-3 3a13.3 13.3 0 103.56 9h-2z" /></svg>
                      <span className="text-[8px] text-white/30 mt-1">reCAPTCHA</span>
                    </div>
                  </div>
                </div>

                {/* Botón de Enviar */}
                <button 
                  type="button"
                  className="w-full bg-gradient-to-r from-[#2a2415] to-[#110e08] border border-[#FACC15]/20 text-[#FACC15] px-6 py-4 rounded-xl text-base font-bold shadow-lg shadow-black hover:shadow-[#FACC15]/10 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  Enviar Mensaje
                </button>
              </form>
            </ScrollRevealItem>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
