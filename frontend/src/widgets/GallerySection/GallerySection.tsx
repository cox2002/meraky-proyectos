'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import ParticlesBackground from '@/src/shared/ui/ParticlesBackground';

// ─────────────────────────────────────────────
// TIPOS
// ─────────────────────────────────────────────
type Category = 'todos' | 'ventanas' | 'mamparas';
type ProductType = 'todos' | 'corrediza' | 'batiente' | 'proyectante' | 'pivotante' | 'plegable' | 'fija';

interface GalleryItem {
  id: number;
  category: 'mamparas' | 'ventanas';
  type: Exclude<ProductType, 'todos'>;
  img: string;
  title: string;
  location: string;
}

// ─────────────────────────────────────────────
// ICONOS SVG (Inline Components)
// ─────────────────────────────────────────────
const GridIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const MamparaIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="8" y1="9" x2="8" y2="13" />
    <line x1="16" y1="11" x2="16" y2="15" />
  </svg>
);

const VentanaIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="12" y1="4" x2="12" y2="20" />
  </svg>
);

const FilterIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

const CorredizaIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 8 21 12 17 16" />
    <polyline points="7 16 3 12 7 8" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

const BatienteIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 12h16" />
    <path d="M12 4v16" />
    <path d="M12 4l6 4v8l-6 4" />
  </svg>
);

const ProyectanteIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 12h16" />
    <path d="M4 12l4-5h8l4 5" />
  </svg>
);

const PivotanteIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="3" ry="8" />
    <path d="M12 2v2M12 20v2" />
    <path d="M15 12a3 3 0 0 1-6 0" />
  </svg>
);

const PlegableIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6l5 3v10l-5-3V6z" />
    <path d="M8 9l8-4v10l-8 4V9z" />
    <path d="M16 5l5 3v10l-5-3V5z" />
  </svg>
);

const FijaIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="10" rx="2" ry="2" />
    <path d="M12 11V7a3 3 0 0 0-6 0v4" />
  </svg>
);

// ─────────────────────────────────────────────
// DATOS (Imágenes Reales del Portafolio)
// ─────────────────────────────────────────────
const GALLERY_ITEMS: GalleryItem[] = [
  // ─── 8 Primeras imágenes que coinciden exactamente con la Imagen 2 ───
  {
    id: 1,
    category: 'mamparas',
    type: 'corrediza',
    img: '/images/mamparas/mampara-corrediza.png',
    title: 'Mampara Corrediza',
    location: 'Baño Principal Residencial',
  },
  {
    id: 2,
    category: 'mamparas',
    type: 'batiente',
    img: '/images/mamparas/mampara-batiente-final.png',
    title: 'Mampara Batiente',
    location: 'Ducha Moderna Suite',
  },
  {
    id: 3,
    category: 'mamparas',
    type: 'plegable',
    img: '/images/mamparas/mampara-plegable-usuario.png',
    title: 'Mampara Plegable',
    location: 'Bañera Acceso Amplio',
  },
  {
    id: 4,
    category: 'mamparas',
    type: 'fija',
    img: '/images/mamparas/mampara-fija-usuario.png',
    title: 'Mampara Fija',
    location: 'Walk-In Minimalista',
  },
  {
    id: 5,
    category: 'ventanas',
    type: 'corrediza',
    img: '/images/ventanas/ventana-corrediza.png',
    title: 'Ventana Corrediza',
    location: 'Sala Residencia Principal',
  },
  {
    id: 6,
    category: 'ventanas',
    type: 'plegable',
    img: '/images/ventanas/ventana_madera_plegable.png',
    title: 'Ventana Plegable',
    location: 'Terraza de Casa de Campo',
  },
  {
    id: 7,
    category: 'ventanas',
    type: 'batiente',
    img: '/images/ventanas/ventana-batiente.png',
    title: 'Ventana Batiente',
    location: 'Dormitorio Principal Surco',
  },
  {
    id: 8,
    category: 'ventanas',
    type: 'fija',
    img: '/images/ventanas/ventana-fija.png',
    title: 'Ventana Fija',
    location: 'Fachada Residencial Premium',
  },

  // ─── Proyectos reales adicionales para un catálogo completo ───
  {
    id: 9,
    category: 'mamparas',
    type: 'corrediza',
    img: '/images/mamparas/mampara-corrediza-usuario.png',
    title: 'Mampara Corrediza Premium',
    location: 'Suite De Lujo Miraflores',
  },
  {
    id: 10,
    category: 'mamparas',
    type: 'corrediza',
    img: '/images/mamparas/mampara-corrediza-usuario-galeria-1.png',
    title: 'Mampara Corrediza de Vidrio',
    location: 'Departamento San Isidro',
  },
  {
    id: 11,
    category: 'mamparas',
    type: 'corrediza',
    img: '/images/mamparas/mampara-corrediza-usuario-galeria-4.png',
    title: 'Mampara Corrediza Balcón',
    location: 'Penthouse Barranco',
  },
  {
    id: 12,
    category: 'mamparas',
    type: 'corrediza',
    img: '/images/mamparas/mampara-corrediza-usuario-galeria-6.png',
    title: 'Mampara Corrediza de Oficina',
    location: 'Corporativo San Borja',
  },
  {
    id: 13,
    category: 'mamparas',
    type: 'batiente',
    img: '/images/mamparas/mampara-batiente-usuario.png',
    title: 'Mampara Batiente Ducha',
    location: 'Residencial Las Casuarinas',
  },
  {
    id: 14,
    category: 'mamparas',
    type: 'batiente',
    img: '/images/mamparas/mampara-batiente-galeria-1.png',
    title: 'Mampara Batiente Templada',
    location: 'Baño de Visitas Lince',
  },
  {
    id: 15,
    category: 'mamparas',
    type: 'plegable',
    img: '/images/mamparas/mampara-plegable-abierta.png',
    title: 'Mampara Plegable Abierta',
    location: 'Bañera Familiar La Planicie',
  },
  {
    id: 16,
    category: 'mamparas',
    type: 'plegable',
    img: '/images/mamparas/mampara-plegable-detalle.png',
    title: 'Detalle de Bisagras Plegable',
    location: 'Ducha Moderna Chorrillos',
  },
  {
    id: 17,
    category: 'mamparas',
    type: 'fija',
    img: '/images/mamparas/mampara-fija-galeria-1.png',
    title: 'Mampara Fija de Vidrio Templado',
    location: 'Departamento Magdalena',
  },
  {
    id: 18,
    category: 'mamparas',
    type: 'fija',
    img: '/images/mamparas/mampara-fija.jpg',
    title: 'Mampara Fija Walk-In',
    location: 'Dormitorio Suite Surco',
  },
  {
    id: 19,
    category: 'ventanas',
    type: 'corrediza',
    img: '/images/ventanas/ventana-corrediza.1.png',
    title: 'Ventana Corrediza Hermética',
    location: 'Oficina Residencial Surco',
  },
  {
    id: 20,
    category: 'ventanas',
    type: 'batiente',
    img: '/images/ventanas/ventana-batiente-fondo.png',
    title: 'Ventana Batiente Acústica',
    location: 'Edificio Empresarial San Borja',
  },
  {
    id: 21,
    category: 'ventanas',
    type: 'proyectante',
    img: '/images/ventanas/ventana-proyectante.png',
    title: 'Ventana Proyectante',
    location: 'Cocina Residencia La Planicie',
  },
  {
    id: 22,
    category: 'ventanas',
    type: 'pivotante',
    img: '/images/ventanas/ventana-pivotante.png',
    title: 'Ventana Pivotante',
    location: 'Sala Loft Barranco',
  },
];

// ─────────────────────────────────────────────
// CONFIGURACIÓN DE FILTROS
// ─────────────────────────────────────────────
const MAIN_CATEGORIES = [
  { key: 'todos', label: 'TODOS', icon: <GridIcon /> },
  { key: 'mamparas', label: 'MAMPARAS', icon: <MamparaIcon /> },
  { key: 'ventanas', label: 'VENTANAS', icon: <VentanaIcon /> },
] as const;

const TYPE_FILTERS = [
  { key: 'todos', label: 'TODOS LOS TIPOS', icon: <FilterIcon />, categories: ['mamparas', 'ventanas'] },
  { key: 'corrediza', label: 'CORREDIZAS', icon: <CorredizaIcon />, categories: ['mamparas', 'ventanas'] },
  { key: 'batiente', label: 'BATIENTES', icon: <BatienteIcon />, categories: ['mamparas', 'ventanas'] },
  { key: 'proyectante', label: 'PROYECTANTES', icon: <ProyectanteIcon />, categories: ['ventanas'] },
  { key: 'pivotante', label: 'PIVOTANTES', icon: <PivotanteIcon />, categories: ['ventanas'] },
  { key: 'plegable', label: 'PLEGABLES', icon: <PlegableIcon />, categories: ['mamparas', 'ventanas'] },
  { key: 'fija', label: 'FIJAS', icon: <FijaIcon />, categories: ['mamparas', 'ventanas'] },
] as const;

// ─────────────────────────────────────────────
// AUXILIARES
// ─────────────────────────────────────────────
function getCategoryLabel(category: 'mamparas' | 'ventanas') {
  switch (category) {
    case 'ventanas': return 'Ventana';
    case 'mamparas': return 'Mampara';
    default: return '';
  }
}

// ─────────────────────────────────────────────
// LIGHTBOX MODAL
// ─────────────────────────────────────────────
function LightboxModal({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Botón cerrar */}
        <button
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm cursor-pointer"
          onClick={onClose}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Flecha anterior */}
        <button
          className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm cursor-pointer"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Flecha siguiente */}
        <button
          className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm cursor-pointer"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Contenido */}
        <motion.div
          className="relative max-w-5xl w-full mx-auto rounded-3xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full max-h-[75vh] object-contain bg-[#141B2B]"
          />
          {/* Info pie */}
          <div className="bg-[#141B2B] border-t border-white/5 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left">
            <div>
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              <p className="text-white/50 text-sm flex items-center gap-1.5 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {item.location}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-[#F59E1B]/10 border border-[#F59E1B]/30 text-[#F59E1B] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider self-start sm:self-auto">
              {getCategoryLabel(item.category)}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────
export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>('todos');
  const [activeType, setActiveType] = useState<ProductType>('todos');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Filtrar las opciones de tipo de producto según la categoría principal activa
  const visibleTypeFilters = useMemo(() => {
    return TYPE_FILTERS.filter(
      (t) =>
        t.key === 'todos' ||
        activeCategory === 'todos' ||
        t.categories.includes(activeCategory as any)
    );
  }, [activeCategory]);

  // Cambiar categoría y resetear tipo si deja de ser válido
  const handleCategoryChange = useCallback((category: Category) => {
    setActiveCategory(category);
    if (category !== 'todos') {
      const validTypes = TYPE_FILTERS.filter(
        (t) => t.key === 'todos' || t.categories.includes(category as any)
      ).map((t) => t.key);

      if (!validTypes.includes(activeType as any)) {
        setActiveType('todos');
      }
    }
  }, [activeType]);

  // Filtrar los elementos según ambos criterios
  const filtered = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchCategory = activeCategory === 'todos' || item.category === activeCategory;
      const matchType = activeType === 'todos' || item.type === activeType;
      return matchCategory && matchType;
    });
  }, [activeCategory, activeType]);

  const lightboxIndex = lightboxItem ? filtered.findIndex((i) => i.id === lightboxItem.id) : -1;

  const openLightbox = useCallback((item: GalleryItem) => setLightboxItem(item), []);
  const closeLightbox = useCallback(() => setLightboxItem(null), []);

  const prevImage = useCallback(() => {
    if (lightboxIndex > 0) setLightboxItem(filtered[lightboxIndex - 1]);
    else setLightboxItem(filtered[filtered.length - 1]);
  }, [lightboxIndex, filtered]);

  const nextImage = useCallback(() => {
    if (lightboxIndex < filtered.length - 1) setLightboxItem(filtered[lightboxIndex + 1]);
    else setLightboxItem(filtered[0]);
  }, [lightboxIndex, filtered]);

  return (
    <>
      {/* ─── LIGHTBOX ─── */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <section id="galeria" className="py-20 md:py-32 bg-surface relative overflow-hidden">
        {/* Fondo Interactivo de Partículas */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <ParticlesBackground />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* ─── HEADER ─── */}
          <ScrollReveal staggerChildren={0.12} className="text-center mb-12 md:mb-16">
            <ScrollRevealItem>
              <span className="text-[#F59E1B] font-bold uppercase tracking-widest text-xs sm:text-sm mb-4 block">
                GALERÍA DE PROYECTOS
              </span>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#141B2B]">
                Nuestros <span className="text-[#F59E1B]">Proyectos</span>
              </Heading>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="text-stone-500 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
                Soluciones en mamparas y ventanas que transforman espacios.
              </p>
            </ScrollRevealItem>
          </ScrollReveal>

          {/* ─── FILTROS DUALES (Imagen 2) ─── */}
          <ScrollReveal className="flex justify-center mb-12 md:mb-16">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 bg-white/40 backdrop-blur-md p-3 rounded-3xl border border-stone-200/50 shadow-sm max-w-full">
              
              {/* Grupo Izquierdo: Categoría Principal */}
              <div className="flex flex-wrap items-center justify-center gap-2 max-w-full flex-shrink-0">
                {MAIN_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => handleCategoryChange(cat.key)}
                      className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-[#F59E1B] text-white shadow-[0_4px_12px_rgba(245,158,27,0.25)] border border-transparent'
                          : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400 hover:text-stone-900'
                      }`}
                    >
                      {cat.icon}
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Divisores Sutiles (Vertical en Desktop, Horizontal en Móvil) */}
              <div className="hidden lg:block h-8 w-[1px] bg-stone-300/80 flex-shrink-0" />
              <div className="block lg:hidden h-[1px] w-12 bg-stone-300/80 flex-shrink-0" />

              {/* Grupo Derecho: Tipo de Producto (Dinámico) */}
              <div className="flex flex-row overflow-x-auto scrollbar-hide py-1 px-1 gap-2 max-w-full flex-nowrap lg:flex-wrap lg:justify-center">
                {visibleTypeFilters.map((type) => {
                  const isActive = activeType === type.key;
                  return (
                    <button
                      key={type.key}
                      onClick={() => setActiveType(type.key)}
                      className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-300 flex-shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#141B2B] text-white shadow-[0_4px_12px_rgba(20,27,43,0.2)] border border-transparent'
                          : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400 hover:text-stone-900'
                      }`}
                    >
                      {type.icon}
                      <span>{type.label}</span>
                    </button>
                  );
                })}
              </div>

            </div>
          </ScrollReveal>

          {/* ─── GRID DE IMÁGENES (Tarjetas con Badge, Título y Flecha Circular) ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[300px] transition-all duration-500">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => {
                return (
                  <motion.div
                    key={item.id}
                    layout="position"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/3] w-full group cursor-pointer rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_35px_rgba(20,27,43,0.12)] transition-all duration-500 bg-white border border-stone-100"
                    onClick={() => openLightbox(item)}
                  >
                    {/* Imagen principal */}
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ height: '100%' }}
                      className="absolute inset-0 w-full !h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Sutil overlay de degradado inferior permanente para contraste del texto blanco */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
                    
                    {/* Glass sweep effect on hover */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Badge Categoría Superior Izquierdo (MAMPARA / VENTANA) */}
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-stone-900 text-[10px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      {item.category === 'mamparas' ? 'MAMPARA' : 'VENTANA'}
                    </div>

                    {/* Texto Inferior y Botón Flecha */}
                    <div className="absolute bottom-4 inset-x-4 z-10 flex items-center justify-between gap-3">
                      <div className="text-left">
                        <p className="text-white text-base sm:text-lg font-bold leading-tight drop-shadow-sm">
                          {item.title}
                        </p>
                        <p className="text-white/70 text-xs mt-1 font-medium flex items-center gap-1">
                          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </p>
                      </div>
                      
                      {/* Botón Flecha Circular */}
                      <div className="w-8.5 h-8.5 rounded-full bg-white flex items-center justify-center text-stone-900 shadow-md group-hover:bg-[#F59E1B] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ─── CONTADOR Y MENSAJE DE RESULTADOS VACÍOS ─── */}
          {filtered.length > 0 ? (
            <div className="mt-12 md:mt-16 text-center">
              <span className="text-stone-500 text-sm font-medium">
                Mostrando <span className="text-[#F59E1B] font-bold">{filtered.length}</span> de{' '}
                <span className="font-bold">{GALLERY_ITEMS.length}</span> proyectos
              </span>
            </div>
          ) : (
            <div className="mt-12 text-center text-stone-500 font-medium">
              No se encontraron proyectos para esta combinación de filtros.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
