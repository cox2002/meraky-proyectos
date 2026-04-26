'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GlassButton from '@/src/shared/ui/GlassButton';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Inicializar y escuchar scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#110e08]/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display font-bold text-3xl md:text-4xl tracking-tight text-[#FACC15]">
            MERAKY
          </span>
          <span className="font-sans text-sm tracking-widest text-white/80 mt-1 uppercase">
            Proyectos
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 -mt-1">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-lg font-medium text-white/90 hover:text-[#FACC15] drop-shadow-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <GlassButton 
            variant="primary" 
            href="#contacto"
          >
            Cotizar Proyecto
          </GlassButton>
        </div>

        {/* Mobile menu button (placeholder for now) */}
        <button className="md:hidden text-on-surface p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </header>
  );
}
