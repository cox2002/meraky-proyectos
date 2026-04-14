// components/shared/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-900 tracking-tight">
        MERAKY <span className="text-blue-600">PROYECTOS</span>
      </div>
      
      <div className="hidden md:flex space-x-8 font-medium text-slate-600">
        <Link href="/" className="hover:text-blue-600 transition">Inicio</Link>
        <Link href="#servicios" className="hover:text-blue-600 transition">Servicios</Link>
        <Link href="#proyectos" className="hover:text-blue-600 transition">Proyectos</Link>
        <Link href="#contacto" className="hover:text-blue-600 transition">Contacto</Link>
      </div>

      <button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm hover:bg-slate-800 transition shadow-sm">
        Cotizar ahora
      </button>
    </nav>
  );
}