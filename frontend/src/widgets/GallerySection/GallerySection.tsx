'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import ParticlesBackground from '@/src/shared/ui/ParticlesBackground';

// ─────────────────────────────────────────────
// TIPOS
// ─────────────────────────────────────────────
type Category = 'todos' | 'ventanas' | 'mamparas' | 'pasamanos' | 'barandas';

interface GalleryItem {
  id: number;
  category: Category;
  img: string;
  title: string;
  location: string;
}

// ─────────────────────────────────────────────
// DATOS (16 Proyectos de Alta Gama Terminados)
// ─────────────────────────────────────────────
const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    category: 'ventanas',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    title: 'Edificio Mirador',
    location: 'Ventanas de Esquina Templado',
  },
  {
    id: 2,
    category: 'pasamanos',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    title: 'Residencia San Isidro',
    location: 'Pasamanos de Bronce Oscuro',
  },
  {
    id: 3,
    category: 'mamparas',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop',
    title: 'Corporativo Vértice',
    location: 'Mampara Divisoria de Oficina',
  },
  {
    id: 4,
    category: 'mamparas',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
    title: 'Casa Playa Asia',
    location: 'Mampara Corrediza Integrada',
  },
  {
    id: 5,
    category: 'barandas',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop',
    title: 'Torre Omega',
    location: 'Barandas de Vidrio Glazing',
  },
  {
    id: 6,
    category: 'mamparas',
    img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop',
    title: 'Loft Barranco',
    location: 'Mampara Acústica Negro Mate',
  },
  {
    id: 7,
    category: 'pasamanos',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop',
    title: 'Residencia Las Casuarinas',
    location: 'Pasamanos Flotante de Cristal',
  },
  {
    id: 8,
    category: 'ventanas',
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
    title: 'Penthouse Miraflores',
    location: 'Ventanas de Altura Premium',
  },
  {
    id: 9,
    category: 'barandas',
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    title: 'Centro de Innovación',
    location: 'Barandas con Acabado de Aluminio',
  },
  {
    id: 10,
    category: 'mamparas',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    title: 'Sede Corporativa',
    location: 'Mamparas Corredizas Serie 80',
  },
  {
    id: 11,
    category: 'ventanas',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    title: 'Casa La Planicie',
    location: 'Ventana Pivotante de Seguridad',
  },
  {
    id: 12,
    category: 'pasamanos',
    img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop',
    title: 'Edificio Sunset',
    location: 'Pasamanos de Acero Inoxidable',
  },
  {
    id: 13,
    category: 'barandas',
    img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
    title: 'Edificio A-Class',
    location: 'Barandas de Seguridad Modular',
  },
  {
    id: 14,
    category: 'mamparas',
    img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    title: 'Coworking San Borja',
    location: 'Mamparas Divisoras de Oficina',
  },
  {
    id: 15,
    category: 'ventanas',
    img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop',
    title: 'Residencia Valle Hermoso',
    location: 'Sistema Hermético de Ventanas',
  },
  {
    id: 16,
    category: 'pasamanos',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop',
    title: 'Playa Misterio',
    location: 'Pasamanos Flotante de Escalera',
  },
];

// ─────────────────────────────────────────────
// FILTROS CONFIG
// ─────────────────────────────────────────────
const FILTERS: { key: Category; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'ventanas', label: 'Ventanas' },
  { key: 'mamparas', label: 'Mamparas' },
  { key: 'pasamanos', label: 'Pasamanos' },
  { key: 'barandas', label: 'Barandas' },
];

// ─────────────────────────────────────────────
// AUXILIARES
// ─────────────────────────────────────────────
function getCategoryLabel(category: Category) {
  switch (category) {
    case 'ventanas': return 'Ventana';
    case 'mamparas': return 'Mampara';
    case 'pasamanos': return 'Pasamanos';
    case 'barandas': return 'Baranda';
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
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
          onClick={onClose}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Flecha anterior */}
        <button
          className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Flecha siguiente */}
        <button
          className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-sm"
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
            className="w-full max-h-[80vh] object-contain bg-[#0E0B06]"
          />
          {/* Info pie */}
          <div className="bg-[#140F08] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
  const [activeFilter, setActiveFilter] = useState<Category>('todos');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeFilter);

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
        {/* Fondo Interactivo de Partículas (Constelaciones Doradas) */}
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
              <Heading level="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface">
                Nuestro <span className="text-[#F59E1B]">Portafolio</span>
              </Heading>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="text-on-surface-variant max-w-2xl mx-auto mt-4 text-base sm:text-lg">
                Cada proyecto cuenta una historia de precisión, diseño y calidad. Explora nuestra colección de trabajos.
              </p>
            </ScrollRevealItem>
          </ScrollReveal>

          {/* ─── FILTROS Simplificados (Píldoras Limpias directas sobre Fondo Claro) ─── */}
          <ScrollReveal className="flex justify-center mb-12 md:mb-16">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-full">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-[#F59E1B] text-[#2A1200] shadow-[0_4px_12px_rgba(245,158,27,0.25)] border border-transparent'
                        : 'bg-white border border-stone-200 text-stone-500 hover:border-black hover:text-black'
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* ─── GRID DE IMÁGENES (Estable, con altura mínima para evitar colapso y animación fluida) ─── */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] transition-all duration-500">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => {
                return (
                  <motion.div
                    key={item.id}
                    layout="position"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/3] w-full group cursor-pointer rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white"
                    onClick={() => openLightbox(item)}
                  >
                    {/* Imagen absoluta con inline style y !h-full para evitar cortes a la mitad y sobreescribir el height:auto global */}
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ height: '100%' }}
                      className="absolute inset-0 w-full !h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Glass sweep reflection effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Sutil overlay al hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-500" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* ─── CONTADOR ─── */}
          <div className="mt-12 md:mt-16 text-center">
            <span className="text-on-surface-variant text-sm font-medium">
              Mostrando <span className="text-[#F59E1B] font-bold">{filtered.length}</span> de{' '}
              <span className="font-bold">{GALLERY_ITEMS.length}</span> proyectos
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
