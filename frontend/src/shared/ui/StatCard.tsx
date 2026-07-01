'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export type StatCardProps = {
  icon: React.ReactNode;
  endValue: number;
  suffix?: string;
  label: string;
};

export default function StatCard({ icon, endValue, suffix = '', label }: StatCardProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  // Se activa cuando el 30% del componente es visible en pantalla.
  // once: true asegura que la animación solo se ejecute una vez.
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // animate() de Framer Motion es perfecto para números dinámicos
      const controls = animate(0, endValue, {
        duration: 2, // 2 segundos
        ease: 'easeOut', // Rápido al inicio, frena al final
        onUpdate(value) {
          setCurrentValue(Math.round(value));
        },
      });

      // Cleanup
      return controls.stop;
    }
  }, [isInView, endValue]);

  return (
    <div 
      ref={ref}
      className="flex flex-col items-center justify-center p-6 md:p-10 rounded-2xl bg-[#140F08] hover:bg-[#1a1711] transition-all duration-500 hover:-translate-y-1 shadow-lg h-full"
    >
      {/* Icono con color de acento amarillo */}
      <div className="mb-4 text-[#F59E1B]">
        {icon}
      </div>
      
      {/* Número y sufijo usando fuente display grande y llamativa */}
      <div className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-3 tracking-tight">
        {currentValue}{suffix}
      </div>
      
      {/* Etiqueta descriptiva en mayúsculas, pequeña y espaciada para dar toque premium */}
      <div className="text-white/70 text-xs md:text-sm tracking-widest uppercase font-semibold text-center">
        {label}
      </div>
    </div>
  );
}
