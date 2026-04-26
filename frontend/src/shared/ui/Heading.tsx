import React from 'react';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'display' | 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function Heading({ 
  level = 'h1', 
  children, 
  className = '', 
  as,
  ...props
}: HeadingProps) {
  // Mapeo de estilos basados en la guía "Editorial Authority" y tipografía Space Grotesk
  const styles = {
    // display-lg: 3.5rem con -0.02em de letter-spacing
    display: "font-display text-5xl md:text-[3.5rem] leading-[1.1] tracking-[-0.02em] font-bold", 
    h1: "font-display text-4xl md:text-5xl leading-tight tracking-tight font-bold",
    h2: "font-display text-3xl md:text-4xl leading-snug tracking-tight font-semibold",
    h3: "font-display text-2xl md:text-3xl leading-snug font-medium",
  };

  // Por defecto, usa el tag HTML semántico correspondiente al nivel, a menos que se fuerce con `as`
  const Component = as || (level === 'display' ? 'h1' : level);

  return (
    <Component 
      className={`${styles[level]} text-on-surface ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
