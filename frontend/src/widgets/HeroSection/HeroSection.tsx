'use client'; 
// Al igual que Navigation, necesitamos interactividad (slider automático), por lo que es un componente de cliente.

import React, { useState, useEffect } from 'react';
import Heading from '@/src/shared/ui/Heading'; // Un componente reutilizable para tipografía
import GlassButton from '@/src/shared/ui/GlassButton';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';

export default function HeroSection() {
  // Estado para saber qué diapositiva del slider se está mostrando actualmente (inicia en 0).
  const [currentSlide, setCurrentSlide] = useState(0);

  // Arreglo de datos. Separar los datos de la estructura HTML hace el componente más limpio.
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

  // Función para avanzar al siguiente slide. Usa módulo (%) para volver a 0 si llega al final.
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Función para retroceder.
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Efecto secundario para el cambio automático de diapositivas.
  useEffect(() => {
    // setInterval ejecuta 'nextSlide' cada 5000 milisegundos (5 segundos).
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    // Limpieza del intervalo al desmontar el componente para evitar que se ejecute en segundo plano.
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    // section relativa que ocupa al menos la pantalla completa (min-h-screen)
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface pt-24">
      {/* 
        Fondo Arquitectónico y Efectos de Glassmorphism.
        Usamos z-index (z-0, z-10) para definir las capas. Esto va en el fondo (z-0).
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Slider de Imágenes: Renderizamos TODAS las imágenes, pero solo hacemos visible la actual mediante opacidad */}
        {slides.map((slide, index) => (
          <img 
            key={index}
            src={slide.image} 
            alt={`Slide ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-xl scale-105'
            }`}
          />
        ))}
        {/* Capa oscura (overlay) para subir la opacidad del fondo y resaltar el texto */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Círculo Principal Primario (Industrial Gold) que da un resplandor al fondo */}
        <div className="absolute top-[10%] left-[60%] w-[600px] h-[600px] rounded-full bg-primary-container/40 blur-[120px] mix-blend-multiply" />
        {/* Círculo Secundario (Estructura Azul) */}
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-secondary/30 blur-[100px] mix-blend-multiply" />
        {/* Cuadrícula o patrón arquitectónico sutil creado puramente con CSS puro y gradientes lineales */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,27,43,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,27,43,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      {/* Controles del Slider Manuales (Puntos y Flechas) capa intermedia (z-30) */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-between items-center px-12 md:px-24">
        {/* Indicadores de página (Puntos) */}
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
        
        {/* Flechas */}
        <div className="flex items-center gap-2">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* 
        Contenido Principal (Textos). Capa principal (z-10).
        Utilizamos 'key={currentSlide}' en el contenedor padre. Este es un truco avanzado de React:
        al cambiar la 'key', React destruye y vuelve a crear el elemento, forzando que se reinicien las animaciones
        'animate-fade-in-up' cada vez que cambia el slide.
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col justify-center h-full -translate-y-8 md:-translate-y-16">
        
        <ScrollReveal key={currentSlide} staggerChildren={0.15} className="flex flex-col items-start gap-8 max-w-5xl">
          {/* Badge o Etiqueta */}
          <ScrollRevealItem direction="up">
            <span className="inline-block px-5 py-2.5 rounded-full bg-[#110e08]/80 text-[#FACC15] text-sm md:text-base font-medium backdrop-blur-md shadow-lg shadow-black/20">
              {slides[currentSlide].badge}
            </span>
          </ScrollRevealItem>
          
          {/* Título Principal usando el componente Heading */}
          <ScrollRevealItem direction="up">
            <Heading level="display" className="text-white drop-shadow-2xl font-bold text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] md:leading-[1.1]">
              {slides[currentSlide].title}
            </Heading>
          </ScrollRevealItem>
          
          {/* Subtítulo */}
          <ScrollRevealItem direction="up">
            <p className="font-sans text-lg md:text-2xl text-white/90 leading-relaxed drop-shadow-lg max-w-3xl font-medium">
              {slides[currentSlide].subtitle}
            </p>
          </ScrollRevealItem>
          
          {/* Botones de Acción */}
          <ScrollRevealItem direction="up" className="flex flex-col sm:flex-row items-center gap-5 pt-6 w-full sm:w-auto">
            <GlassButton 
              variant="primary" 
              className="w-full sm:w-auto py-4 px-9 text-lg shadow-lg flex items-center justify-center gap-2"
              href="#contacto"
            >
              Solicitar Cotizacion
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </GlassButton>
            <GlassButton 
              variant="glass" 
              className="w-full sm:w-auto py-4 px-9 text-lg text-white border-white/40 hover:bg-white/10 hover:border-white/80 transition-all"
              href="#proyectos"
            >
              Ver Proyectos
            </GlassButton>
          </ScrollRevealItem>
        </ScrollReveal>
      </div>
    </section>
  );
}
