'use client';

import React, { useState, useEffect } from 'react';
import Heading from '@/src/shared/ui/Heading';
import GlassButton from '@/src/shared/ui/GlassButton';
import GlassCard from '@/src/shared/ui/GlassCard';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      badge: "Soluciones en Vidrio y Aluminio",
      title: "Elegancia en Cristal",
      subtitle: "Transformamos espacios con soluciones innovadoras en vidrio templado y aluminio arquitectónico."
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      badge: "Diseño Interior Premium",
      title: "Divisiones que Inspiran",
      subtitle: "Acabados de lujo que maximizan la luz natural y crean ambientes sofisticados."
    },
    {
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
      badge: "Arquitectura Comercial",
      title: "Fachadas Modernas",
      subtitle: "Sistemas de aluminio de alta resistencia para proyectos corporativos y comerciales."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface pt-24">
      {/* 
        Fondo Arquitectónico y "Blobs" de color 
        Se crean elementos absolutos con gradientes y blur para dar vida al Glassmorphism superior.
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Slider de Imágenes Arquitectónicas */}
        {slides.map((slide, index) => (
          <img 
            key={index}
            src={slide.image} 
            alt={`Slide ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-90 blur-0 scale-100' : 'opacity-0 blur-xl scale-105'
            }`}
          />
        ))}
        {/* Círculo Principal Primario (Industrial Gold) */}
        <div className="absolute top-[10%] left-[60%] w-[600px] h-[600px] rounded-full bg-primary-container/40 blur-[120px] mix-blend-multiply" />
        {/* Círculo Secundario (Estructura Azul) */}
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-secondary/30 blur-[100px] mix-blend-multiply" />
        {/* Cuadrícula o patrón arquitectónico sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,27,43,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,27,43,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      {/* Controles del Slider Manuales */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-between items-center px-12 md:px-24">
        {/* Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentSlide 
                  ? 'w-8 h-2 bg-[#FACC15]' 
                  : 'w-2 h-2 bg-white/50 hover:bg-[#FACC15]/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        
        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Contenido Principal ("The Void" - Uso de espacios negativos) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col justify-center h-full">
        
        {/* Text Block Asimétrico con animación en cascada */}
        <div key={currentSlide} className="flex flex-col items-start gap-6 max-w-4xl">
          <div className="animate-fade-in-up [animation-delay:100ms]">
            <span className="inline-block px-5 py-2 rounded-full border border-[#FACC15]/40 bg-[#110e08]/80 text-[#FACC15] text-sm md:text-base font-medium backdrop-blur-md shadow-lg shadow-black/20">
              {slides[currentSlide].badge}
            </span>
          </div>
          
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <Heading level="display" className="text-white drop-shadow-xl font-bold text-5xl md:text-7xl leading-[1.1]">
              {slides[currentSlide].title}
            </Heading>
          </div>
          
          <div className="animate-fade-in-up [animation-delay:300ms]">
            <p className="font-sans text-lg md:text-2xl text-white/90 leading-relaxed drop-shadow-lg max-w-2xl font-medium">
              {slides[currentSlide].subtitle}
            </p>
          </div>
          
          <div className="animate-fade-in-up [animation-delay:400ms] flex flex-col sm:flex-row items-center gap-4 pt-6 w-full sm:w-auto">
            <GlassButton 
              variant="primary" 
              className="w-full sm:w-auto py-4 px-8 text-base shadow-lg flex items-center justify-center gap-2"
              href="#contacto"
            >
              Solicitar Cotizacion
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </GlassButton>
            <GlassButton 
              variant="glass" 
              className="w-full sm:w-auto py-4 px-8 text-base text-white border-white/40 hover:bg-white/10 hover:border-white/80 transition-all"
              href="#proyectos"
            >
              Ver Proyectos
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}
