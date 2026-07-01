import React from 'react';

// --- Importación de Widgets ---
// En la arquitectura que estamos usando, los "Widgets" son grandes bloques funcionales e independientes
// de la interfaz (como una sección entera de la página).
import Navigation from '@/src/widgets/Navigation/Navigation';
import HeroSection from '@/src/widgets/HeroSection/HeroSection';
import StatsBanner from '@/src/widgets/StatsBanner/StatsBanner';
import AboutSection from '@/src/widgets/AboutSection/AboutSection';
import ServicesSection from '@/src/widgets/ServicesSection/ServicesSection';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import GallerySection from '@/src/widgets/GallerySection/GallerySection';
import Footer from '@/src/widgets/Footer/Footer';

// --- Página Principal (Home) ---
// En Next.js App Router, 'page.tsx' representa la ruta principal "/".
// Por defecto, este es un "Server Component", lo que significa que se renderiza
// en el servidor antes de enviarse al navegador (mejor SEO y rendimiento).
export default function HomePage() {
  return (
    // 'min-h-screen' asegura que la página ocupe al menos la altura completa del monitor.
    // 'overflow-hidden' previene barras de desplazamiento horizontales accidentales.
    <main className="min-h-screen w-full bg-surface overflow-x-hidden">
      {/* 
        Composición de la Interfaz:
        La página es simplemente un contenedor vacío que apila secuencialmente
        nuestros widgets. Esto hace que el código sea extremadamente limpio y modular.
        Si necesitamos reordenar secciones, solo cambiamos el orden aquí.
      */}
      <Navigation />
      <HeroSection />
      <StatsBanner />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}