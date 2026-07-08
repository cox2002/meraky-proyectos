import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="text-xl font-bold text-slate-900">
        MERAKI <span className="text-blue-600">PROYECTOS</span>
      </div>
      
      <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
        <Link href="/" className="hover:text-blue-600">Inicio</Link>
        <Link href="#servicios" className="hover:text-blue-600">Servicios</Link>
        <Link href="#contacto" className="hover:text-blue-600">Contacto</Link>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition">
        Cotizar ahora
      </button>
    </nav>
  );
}