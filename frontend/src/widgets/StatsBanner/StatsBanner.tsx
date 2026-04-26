import React from 'react';

export default function StatsBanner() {
  const stats = [
    { 
      value: '3+', 
      label: 'Años de Experiencia',
      icon: (
        <svg className="w-10 h-10 mb-4 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      value: '340+', 
      label: 'Proyectos Completados',
      icon: (
        <svg className="w-10 h-10 mb-4 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      value: '98%', 
      label: 'Clientes Satisfechos',
      icon: (
        <svg className="w-10 h-10 mb-4 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    { 
      value: '5', 
      label: 'Profesionales',
      icon: (
        <svg className="w-10 h-10 mb-4 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
  ];

  return (
    <div className="w-full bg-[#0a0907] py-20 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col items-center justify-center p-10 rounded-2xl bg-gradient-to-b from-[#1a1711] to-[#110e08] border border-[#FACC15]/20 hover:border-[#FACC15]/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] hover:-translate-y-1 transition-all duration-500 animate-fade-in-up [animation-delay:${idx * 150}ms]`}
          >
            {stat.icon}
            <span className="font-display font-bold text-5xl text-white mb-3">
              {stat.value}
            </span>
            <span className="text-white/70 text-sm tracking-widest uppercase font-semibold text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
