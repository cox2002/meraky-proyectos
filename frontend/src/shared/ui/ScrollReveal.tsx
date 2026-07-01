'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

export type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  amount?: number | 'some' | 'all';
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  staggerChildren,
  amount = 'some',
}: ScrollRevealProps) {
  // Desplazamiento inicial oculto (30px como se solicitó)
  const offset = 30;

  const getHiddenPosition = () => {
    switch (direction) {
      case 'up':
        return { y: offset, x: 0 }; // Viene de abajo
      case 'down':
        return { y: -offset, x: 0 }; // Viene de arriba
      case 'left':
        return { x: offset, y: 0 }; // Viene de la derecha (se mueve a la izquierda)
      case 'right':
        return { x: -offset, y: 0 }; // Viene de la izquierda (se mueve a la derecha)
      case 'none':
        return { x: 0, y: 0 }; // Solo Fade-in
      default:
        return { y: offset, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getHiddenPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.25, 0, 1], // easeOutCubic para que la parada sea suave y elegante
        ...(staggerChildren ? { staggerChildren } : {}),
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Componente para usar dentro de un ScrollReveal padre cuando se requiere "Stagger Effect" en listas.
// Hereda el trigger (whileInView) del padre.
export function ScrollRevealItem({
  children,
  className = '',
  direction = 'up',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) {
  const offset = 30;
  
  const getHiddenPosition = () => {
    switch (direction) {
      case 'up': return { y: offset, x: 0 };
      case 'down': return { y: -offset, x: 0 };
      case 'left': return { x: offset, y: 0 };
      case 'right': return { x: -offset, y: 0 };
      case 'none': return { x: 0, y: 0 };
      default: return { y: offset, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getHiddenPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className} onClick={onClick}>
      {children}
    </motion.div>
  );
}
