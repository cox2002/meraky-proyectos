"use client";
import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

const INCLUYE = ["Doble vidrio con cámara de aire","Reducción de ruido hasta 45dB","Ahorro energético 70%","Perfil reforzado de alta prestación","Sellado estructural","Condensación interior minimizada"];
const VENTAJAS = [
  { title: "Aislamiento Acústico", desc: "La cámara de aire entre los vidrios reduce el ruido exterior hasta 45dB, ideal para zonas de alto tráfico." },
  { title: "Ahorro Energético", desc: "Reduce hasta un 70% la pérdida de calor o frío, bajando significativamente los costos de climatización." },
  { title: "Confort Total", desc: "Elimina las corrientes de aire frío en invierno y el calor excesivo en verano manteniendo temperatura estable." },
  { title: "Inversión Inteligente", desc: "El ahorro en energía amortiza la inversión adicional en pocos años, mientras aumenta el valor de la propiedad." }
];
const DATOS = [
  { title: "Sistema de Vidrio", items: [{ label: "Configuración", value: "4mm + 12mm aire + 4mm" }, { label: "Alternativa", value: "6mm + 12mm + 6mm" }, { label: "Triple vidrio", value: "4+10+4+10+4mm" }, { label: "Llenado cámara", value: "Aire o gas Argón" }] },
  { title: "Perfilería Reforzada", items: [{ label: "Material", value: "Aluminio de alta prestación" }, { label: "Espesor perfil", value: "2.0 – 2.5 mm" }, { label: "Rotura de puente", value: "Disponible" }, { label: "Acabado", value: "Natural / Champagne / Negro" }] },
  { title: "Aislamiento Térmico", items: [{ label: "Vidrio simple", value: "U = 5.8 W/m²K" }, { label: "Doble vidrio", value: "U = 2.8 W/m²K" }, { label: "Con Argón", value: "U = 1.8 W/m²K" }, { label: "Triple vidrio", value: "U = 1.0 W/m²K" }] },
  { title: "Aislamiento Acústico", items: [{ label: "Vidrio simple 6mm", value: "28-30 dB" }, { label: "Doble 4+12+4mm", value: "35-38 dB" }, { label: "Doble acústico", value: "40-42 dB" }, { label: "Triple vidrio", value: "44-47 dB" }] }
];
const FAQ = [
  { pregunta: "¿Qué diferencia hay entre doble vidrio con aire y con Argón?", respuesta: "El gas Argón es más denso que el aire, por lo que ofrece mejor aislamiento térmico (U = 1.8 vs 2.8 W/m²K) y ligeramente mejor aislamiento acústico. La diferencia de precio es mínima y el retorno energético compensa la inversión." },
  { pregunta: "¿Se puede combinar con cualquier tipo de apertura?", respuesta: "Sí, el doble vidrio puede instalarse en ventanas corredizas, batientes, proyectantes, fijas y pivotantes. El sistema insulado se adapta a prácticamente cualquier tipo de ventana de aluminio." },
  { pregunta: "¿Cuánto tarda en amortizarse la inversión?", respuesta: "Dependiendo del clima de Arequipa y el uso de sistemas de climatización, la inversión adicional se amortiza en 3 a 6 años gracias al ahorro en energía. Además, aumenta significativamente el confort y el valor de la propiedad." }
];

export default function VentanaTermoacusticaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);
  return (
    <main className="min-h-screen w-full bg-[#0c0a07] overflow-hidden flex flex-col">
      <Navigation />
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex items-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" alt="Ventana Termoacústica" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0c0a07]/70"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <ScrollReveal direction="left" className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/productos/ventanas" className="text-white/60 hover:text-[#FACC15] transition-colors flex items-center gap-2 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                Volver a tipos de ventanas
              </Link>
              <span className="bg-[#16130c] border border-[#FACC15]/30 text-[#FACC15] text-xs px-3 py-1 rounded-full font-medium">Termoacústica</span>
            </div>
            <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              Ventana <span className="text-[#FACC15]">Termoacústica</span>
            </Heading>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl font-light">
              Sistema de doble o triple vidrio con cámara de aire o gas Argón. La solución premium para máximo confort, ahorro energético hasta el 70% y reducción de ruido hasta 47dB.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3"><span className="text-white font-extrabold text-lg">Desde S/ 750</span></div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="text-white/90 text-sm font-medium">Instalación: 1-2 días</span>
              </div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span className="text-white/90 text-sm font-medium">Garantía 10 años</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="bg-[#FACC15] text-[#110e08] px-8 py-3.5 rounded-full font-bold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2">Cotizar Ahora <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a>
              <a href="tel:+51929765802" className="bg-[#16130c]/80 text-white border border-[#2a2415] hover:border-[#FACC15]/50 px-8 py-3.5 rounded-full font-bold hover:bg-[#1f1a11] backdrop-blur-sm hover:-translate-y-1 transition-all">+51 929 765 802</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 px-6 bg-[#FACC15]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <ScrollRevealItem><div className="text-5xl font-extrabold text-[#110e08] mb-2">45 dB</div><div className="text-[#110e08]/70 font-semibold uppercase tracking-wider text-sm">Reducción de ruido máxima</div></ScrollRevealItem>
            <ScrollRevealItem><div className="text-5xl font-extrabold text-[#110e08] mb-2">70%</div><div className="text-[#110e08]/70 font-semibold uppercase tracking-wider text-sm">Ahorro energético</div></ScrollRevealItem>
            <ScrollRevealItem><div className="text-5xl font-extrabold text-[#110e08] mb-2">20+</div><div className="text-[#110e08]/70 font-semibold uppercase tracking-wider text-sm">Años de vida útil</div></ScrollRevealItem>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#FAFAFA]"><div className="max-w-5xl mx-auto"><ScrollReveal direction="up" className="text-center mb-16"><h3 className="bg-[#FACC15] text-[#110e08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">Características</h3><Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">Lo que incluye tu <span className="text-[#FACC15]">Ventana</span></Heading></ScrollReveal><ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{INCLUYE.map((item, idx) => (<ScrollRevealItem key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"><div className="w-10 h-10 shrink-0 bg-[#FACC15] rounded-xl flex items-center justify-center text-[#110e08]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-800 font-medium">{item}</span></ScrollRevealItem>))}</ScrollReveal></div></section>

      <section className="py-24 px-6 bg-[#0c0a07]"><div className="max-w-6xl mx-auto"><ScrollReveal direction="up" className="text-center mb-16"><h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Especificaciones</h3><Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">Datos <span className="text-[#FACC15]">Técnicos</span></Heading></ScrollReveal><ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">{DATOS.map((sec, idx) => (<ScrollRevealItem key={idx} className="bg-[#16130c] border border-[#2a2415] rounded-3xl p-8 hover:border-[#FACC15]/30 transition-colors"><h4 className="text-xl font-bold text-white mb-6 pb-4 border-b border-[#2a2415]">{sec.title}</h4><div className="space-y-4">{sec.items.map((item, i) => (<div key={i} className="flex justify-between items-center"><span className="text-white/50 text-sm">{item.label}</span><span className="text-white font-medium text-sm text-right">{item.value}</span></div>))}</div></ScrollRevealItem>))}</ScrollReveal></div></section>

      <section className="py-24 px-6 bg-white"><div className="max-w-7xl mx-auto"><ScrollReveal direction="up" className="text-center mb-16"><h3 className="bg-[#FACC15] text-[#110e08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">Beneficios</h3><Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">Ventajas de la <span className="text-[#FACC15]">Termoacústica</span></Heading></ScrollReveal><ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{VENTAJAS.map((v, idx) => (<ScrollRevealItem key={idx} className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)]"><div className="w-14 h-14 bg-[#FACC15] rounded-2xl flex items-center justify-center mb-6"><svg className="w-7 h-7 text-[#110e08]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div><h4 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h4><p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p></ScrollRevealItem>))}</ScrollReveal></div></section>

      <section className="py-24 px-6 bg-[#FAFAFA]"><div className="max-w-3xl mx-auto"><ScrollReveal direction="up" className="text-center mb-16"><h3 className="text-[#110e08] text-sm font-bold tracking-[0.2em] uppercase mb-3">Preguntas Frecuentes</h3><Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">Resolvemos tus <span className="text-[#FACC15]">Dudas</span></Heading></ScrollReveal><ScrollReveal staggerChildren={0.1} className="space-y-4">{FAQ.map((faq, idx) => (<ScrollRevealItem key={idx}><div className={`bg-white border ${openFaq === idx ? 'border-[#FACC15] shadow-md' : 'border-gray-200 hover:border-[#FACC15]/50'} rounded-2xl overflow-hidden transition-all duration-300`}><button onClick={() => toggleFaq(idx)} className="w-full text-left p-6 flex items-center justify-between"><span className={`font-bold md:text-lg pr-8 ${openFaq === idx ? 'text-[#110e08]' : 'text-gray-700'}`}>{faq.pregunta}</span><svg className={`w-5 h-5 text-[#FACC15] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/></svg></button><div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}><p className="p-6 pt-0 text-gray-600 leading-relaxed">{faq.respuesta}</p></div></div></ScrollRevealItem>))}</ScrollReveal></div></section>

      <section className="py-20 px-6 bg-[#110e08] border-y border-[#2a2415]"><div className="max-w-4xl mx-auto text-center"><ScrollReveal direction="up"><Heading level="h2" className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para tu <span className="text-[#FACC15]">Ventana Termoacústica</span>?</Heading><p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">Cotización gratuita y sin compromiso. Te contactamos en menos de 24 horas.</p><div className="flex flex-wrap items-center justify-center gap-4"><a href="#contacto" className="bg-[#FACC15] text-[#110e08] px-8 py-3.5 rounded-full font-bold hover:-translate-y-1 transition-all flex items-center gap-2">Cotizar Gratis <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a><a href="tel:+51929765802" className="text-white border border-[#2a2415] hover:border-[#FACC15]/50 px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-all">+51 929 765 802</a></div></ScrollReveal></div></section>
      <ContactSection /><Footer />
    </main>
  );
}
