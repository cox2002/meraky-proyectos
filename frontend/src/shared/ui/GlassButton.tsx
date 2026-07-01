'use client';

import React from 'react';
import Link from 'next/link';

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass';
  children: React.ReactNode;
  href?: string;
}

export default function GlassButton({ 
  variant = 'primary', 
  children, 
  className = '', 
  href,
  ...props 
}: GlassButtonProps) {
  // Utilizando las clases personalizadas definidas en globals.css
  const baseStyles = "inline-flex items-center justify-center px-7 py-3.5 rounded-full text-base font-medium transition-all duration-300 ease-out transform";
  
  const variantStyles = {
    // primary usa una combinación elegante de oscuro y amarillo sin bordes
    primary: "bg-gradient-to-b from-[#2D2110] to-[#140F08] text-[#F59E1B] hover:shadow-[0_0_20px_rgba(245,158,27,0.15)] hover:scale-[1.02]",
    // glass usa el glass-panel y border fantasma, aumentando la opacidad al hover
    glass: "glass-panel ghost-border text-on-surface hover:bg-surface-container-highest/60 hover:scale-[1.02]"
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
