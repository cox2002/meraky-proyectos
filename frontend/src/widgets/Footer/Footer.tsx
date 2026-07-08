import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050402] border-t border-white/5 pt-16 pb-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16">
        
        {/* Columna 1: Logo y Redes */}
        <div className="flex flex-col">
          <Link href="/" className="mb-6 flex items-center">
            <span className="font-display font-black text-3xl tracking-tight text-white">
              MERA<span className="text-[#F59E1B]">KI</span>
            </span>
          </Link>
          <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-8">
            Lideres en soluciones de vidrio templado y aluminio arquitectónico.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#140F08] border border-white/10 p-2.5 rounded-full text-white/70 hover:text-[#F59E1B] hover:border-[#F59E1B]/30 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="bg-[#140F08] border border-white/10 p-2.5 rounded-full text-white/70 hover:text-[#F59E1B] hover:border-[#F59E1B]/30 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="bg-[#140F08] border border-white/10 p-2.5 rounded-full text-white/70 hover:text-[#F59E1B] hover:border-[#F59E1B]/30 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </a>
          </div>
        </div>
        
        {/* Columna 2: Servicios */}
        <div>
          <span className="font-bold text-white text-lg mb-6 block">Servicios</span>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link href="#servicios" className="hover:text-[#F59E1B] transition-colors">Mamparas</Link></li>
            <li><Link href="#servicios" className="hover:text-[#F59E1B] transition-colors">Espejos</Link></li>
            <li><Link href="#servicios" className="hover:text-[#F59E1B] transition-colors">Ventanas</Link></li>
            <li><Link href="#servicios" className="hover:text-[#F59E1B] transition-colors">Fachadas</Link></li>
          </ul>
        </div>
        
        {/* Columna 3: Contacto */}
        <div>
          <span className="font-bold text-white text-lg mb-6 block">Contacto</span>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+51 929 765 802</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="break-all">cotizaciones@merakiproyectos.com</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-white/40 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="leading-tight">Av. Independencia 1338 - IV Centenario -<br/>Arequipa, Arequipa - Perú</span>
            </li>
          </ul>
        </div>

      </div>
      
      {/* Barra Inferior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs text-center md:text-left">
        <p>&copy; {new Date().getFullYear()} MERAKI. Todos los derechos reservados.</p>
        <p>Desarrollado por <span className="border border-white/20 px-2 py-1 rounded text-white/60">Meraki Proyectos</span></p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
          <Link href="#" className="hover:text-white transition-colors">Terminos</Link>
        </div>
      </div>

      {/* Botón Flotante WhatsApp */}
      <a 
        href="https://wa.me/51929765802" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/50 hover:scale-110 transition-transform z-[100] group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Un pequeño punto blanco (indicador online) como se ve en la imagen */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-white border-2 border-[#25D366] rounded-full"></span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
        </svg>
      </a>
    </footer>
  );
}
