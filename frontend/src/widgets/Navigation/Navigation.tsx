'use client'; 
// En Next.js App Router, 'use client' indica que este componente necesita interactividad 
// (ej. escuchar el scroll, manejar estados con useState). Por lo tanto, se ejecuta en el navegador.

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Componente optimizado de Next.js para navegación sin recargar la página.
import GlassButton from '@/src/shared/ui/GlassButton';

export default function Navigation() {
  // --- Estados de React ---
  // useState crea una variable que React "vigila". Si su valor cambia, React actualiza la pantalla.
  // Aquí guardamos si el usuario ha hecho scroll hacia abajo o no.
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Efectos Secundarios ---
  // useEffect permite ejecutar código después de que el componente se dibuja en pantalla.
  useEffect(() => {
    // Función que revisa si bajamos más de 50px en la página.
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Cambiamos estado, lo que causará que la barra cambie de color.
      } else {
        setIsScrolled(false);
      }
    };

    // Inicializar y escuchar scroll de la ventana
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Función de limpieza: Se ejecuta cuando el componente desaparece para evitar "fugas de memoria".
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // El arreglo vacío [] indica que esto solo se ejecuta UNA VEZ al montar el componente.

  // Lista de enlaces. Mantenerlos en un arreglo hace más fácil renderizarlos con un map() abajo.
  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/#nosotros' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Galería', href: '/#galeria' },
    { 
      label: 'Productos', 
      isDropdown: true,
      items: [
        { label: 'Mamparas', desc: 'Vidrio templado de alta calidad', href: '/productos/mamparas' },
        { label: 'Ventanas', desc: 'Sistemas de aislamiento total', href: '/productos/ventanas' },
        { label: 'Puertas de Aluminio', desc: 'Corredizas, batientes y más', href: '/productos/puertas' },
        { label: 'Pasamanos', desc: 'Inox y vidrio, por metro lineal', href: '/productos/pasamanos' },
        { label: 'Barandas', desc: 'Balcones y terrazas a medida', href: '/productos/barandas' },
      ]
    },
    { label: 'Mantenimiento', href: '/mantenimiento' },
    { label: 'Contacto', href: '/#contacto' },
  ];

  return (
    // La etiqueta <header> usa Tailwind para posicionarse fijo arriba (fixed top-0).
    // Fíjate en cómo usamos `isScrolled` para inyectar clases dinámicas de Tailwind
    // que agregan fondo oscuro y un efecto de desenfoque (backdrop-blur) al bajar.
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#140F08]/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 xl:px-6 h-24 flex items-center justify-between">
        
        {/* Logo que redirige al inicio usando el componente <Link> */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="font-display font-bold text-2xl tracking-tight text-[#F59E1B] group-hover:opacity-90 transition-opacity">
            MERAKY
          </span>
          <span className="font-display font-semibold text-xs tracking-[0.2em] text-white/90 mt-1.5 uppercase">
            PROYECTOS
          </span>
        </Link>

        {/* Navegación Desktop: Oculta en móviles (hidden), visible en pantallas medianas (md:flex) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
          {/* Iteramos sobre el arreglo navLinks. */}
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 text-xs xl:text-[13px] font-sans font-bold tracking-wider text-white hover:text-[#F59E1B] drop-shadow-sm transition-colors py-4 uppercase cursor-pointer">
                    {link.label}
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-white/80 group-hover:text-[#F59E1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {/* Menú Desplegable (Dropdown) */}
                  <div className="absolute left-0 top-full mt-0 w-80 bg-[#140F08]/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-4 flex flex-col gap-1 z-50">
                    {link.items?.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={item.href}
                        className="flex flex-col px-4 py-3 hover:bg-white/5 rounded-2xl transition-colors"
                      >
                        <span className="text-[#F59E1B] font-bold text-sm">{item.label}</span>
                        <span className="text-white/60 text-xs mt-0.5">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            
            return (
              <Link 
                key={link.label} 
                href={link.href || '#'}
                className="text-xs xl:text-[13px] font-sans font-bold tracking-wider text-white hover:text-[#F59E1B] drop-shadow-sm transition-colors py-4 uppercase"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Botón de Llamada a la Acción (CTA - Call To Action) */}
        <div className="hidden lg:block">
          <Link 
            href="/#contacto"
            className="inline-flex items-center justify-center bg-[#2D2110]/55 hover:bg-[#3D2D18]/75 text-[#F59E1B] hover:text-[#ffb763] border border-[#F59E1B]/30 hover:border-[#F59E1B]/60 px-4 xl:px-6 py-2.5 rounded-full text-[10px] xl:text-xs font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-sm shadow-sm"
          >
            Cotizar Proyecto
          </Link>
        </div>

        {/* Botón de menú hamburguesa (Móviles): Solo se ve en pantallas pequeñas. */}
        <button 
          className="lg:hidden text-white hover:text-[#F59E1B] p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Menú Móvil */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-[#140F08]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[85vh] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4 px-8 max-h-[70vh] overflow-y-auto w-full">
          {navLinks.map((link) => (
            <div key={link.label} className="flex flex-col w-full">
              {link.isDropdown ? (
                <>
                  <div className="text-lg font-bold text-[#F59E1B] py-2 border-b border-white/10">{link.label}</div>
                  <div className="flex flex-col gap-4 pl-4 pt-4 pb-2">
                    {link.items?.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={item.href}
                        className="text-base text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  href={link.href || '#'}
                  className="text-lg font-medium text-white/90 hover:text-[#F59E1B] py-2 border-b border-white/5 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-6 mt-2 w-full flex justify-center">
            <GlassButton 
              variant="primary" 
              href="/#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cotizar Proyecto
            </GlassButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
