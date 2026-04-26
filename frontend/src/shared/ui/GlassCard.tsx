import React from 'react';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function GlassCard({ 
  children, 
  className = '', 
  padding = 'md', 
  ...props 
}: GlassCardProps) {
  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6 md:p-8",
    lg: "p-8 md:p-12",
  };

  // Utiliza el .glass-panel (blur y opacidad), la sombra ambiental y radio xl
  return (
    <div 
      className={`glass-panel ambient-shadow rounded-xl border border-white/20 ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
