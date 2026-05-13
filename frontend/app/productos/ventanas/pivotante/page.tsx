"use client";
import React, { useState } from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import Footer from '@/src/widgets/Footer/Footer';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Heading from '@/src/shared/ui/Heading';
import ScrollReveal, { ScrollRevealItem } from '@/src/shared/ui/ScrollReveal';
import Link from 'next/link';

const INCLUYE = ["Diseño moderno","Limpieza desde interior","Giro 180°","Eje central oculto","Sellado perimetral","Manija ergonómica"];
const VENTAJAS = [
  { title: "Diseño Moderno", desc: "El eje central crea un efecto visual único y contemporáneo que destaca en cualquier fachada." },
  { title: "Limpieza Fácil", desc: "Al girar 180°, el exterior del vidrio queda accesible desde el interior para una limpieza segura." },
  { title: "Ventilación Eficiente", desc: "Permite ventilación cruzada efectiva al poder orientar la hoja hacia la dirección del viento." },
  { title: "Funcionalidad Única", desc: "Combina la ventilación de una batiente con la versatilidad de poder limpiar desde dentro." }
];
const DATOS = [
  { title: "Dimensiones", items: [{ label: "Ancho", value: "50 – 150 cm" }, { label: "Alto", value: "60 – 200 cm" }, { label: "Giro", value: "180°" }, { label: "Espesor vidrio", value: "6mm / 8mm" }] },
  { title: "Perfilería", items: [{ label: "Material", value: "Aluminio anodizado" }, { label: "Eje", value: "Oculto, central o excéntrico" }, { label: "Acabado", value: "Natural / Champagne / Negro" }, { label: "Herrajes", value: "Acero inoxidable" }] },
  { title: "Vidrio", items: [{ label: "Tipo", value: "Templado recomendado" }, { label: "Espesor", value: "6mm / 8mm" }, { label: "Acabados", value: "Transparente / Pavonado" }, { label: "Tratamiento", value: "Easy Clean disponible" }] },
  { title: "Rendimiento", items: [{ label: "Ciclos", value: "+50,000 rotaciones" }, { label: "Sellado", value: "Burlete perimetral doble" }, { label: "Bloqueo", value: "Posición abierta y cerrada" }, { label: "Garantía", value: "10 años perfilería" }] }
];
const FAQ = [
  { pregunta: "¿Qué es el eje central de una ventana pivotante?", respuesta: "El eje central es el punto de giro de la hoja. Puede ubicarse en el centro exacto de la ventana (eje central) o desplazado hacia un lado (eje excéntrico), cambiando la proporción de apertura en cada lado." },
  { pregunta: "¿Es segura para pisos altos?", respuesta: "Sí, con el seguro de posición que incluye nuestro sistema, la ventana puede fijarse en cualquier ángulo de apertura, evitando que el viento la abra o cierre bruscamente. Cumple con todas las normas de seguridad." },
  { pregunta: "¿Se puede instalar en cualquier tamaño de vano?", respuesta: "La ventana pivotante tiene un rango de instalación de 50 a 150 cm de ancho. Para vanos más grandes, recomendamos sistemas corredizos o fijos con secciones pivotantes." }
];

export default function VentanaPivotantePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (idx: number) => setOpenFaq(openFaq === idx ? null : idx);
  return (
    <main className="min-h-screen w-full bg-[#0c0a07] overflow-hidden flex flex-col">
      <Navigation />
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex items-center min-h-screen">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2000&auto=format&fit=crop" alt="Ventana Pivotante" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0c0a07]/70"></div>
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <ScrollReveal direction="left" className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <Link href="/productos/ventanas" className="text-white/60 hover:text-[#FACC15] transition-colors flex items-center gap-2 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
                Volver a tipos de ventanas
              </Link>
              <span className="bg-[#16130c] border border-[#FACC15]/30 text-[#FACC15] text-xs px-3 py-1 rounded-full font-medium">Pivotante</span>
            </div>
            <Heading level="h1" className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              Ventana <span className="text-[#FACC15]">Pivotante</span>
            </Heading>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl font-light">
              Gira sobre un eje central horizontal o vertical creando un efecto visual impresionante. Permite limpiar ambos lados del vidrio desde el interior con total seguridad.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3"><span className="text-white font-extrabold text-lg">Desde S/ 250</span></div>
              <div className="bg-[#16130c]/80 backdrop-blur-sm border border-[#2a2415] rounded-full px-6 py-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FACC15]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="text-white/90 text-sm font-medium">Instalación: 2-4 horas</span>
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

      <section className="py-24 px-6 bg-[#FAFAFA]"><div className="max-w-5xl mx-auto"><ScrollReveal direction="up" className="text-center mb-16"><h3 className="bg-[#FACC15] text-[#110e08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">Características</h3><Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">Lo que incluye tu <span className="text-[#FACC15]">Ventana</span></Heading></ScrollReveal><ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{INCLUYE.map((item, idx) => (<ScrollRevealItem key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"><div className="w-10 h-10 shrink-0 bg-[#FACC15] rounded-xl flex items-center justify-center text-[#110e08]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg></div><span className="text-gray-800 font-medium">{item}</span></ScrollRevealItem>))}</ScrollReveal></div></section>

      <section className="py-24 px-6 bg-[#0c0a07]"><div className="max-w-6xl mx-auto"><ScrollReveal direction="up" className="text-center mb-16"><h3 className="text-[#FACC15] text-sm font-bold tracking-[0.2em] uppercase mb-3">Especificaciones</h3><Heading level="h2" className="text-4xl md:text-5xl font-bold text-white">Datos <span className="text-[#FACC15]">Técnicos</span></Heading></ScrollReveal><ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">{DATOS.map((sec, idx) => (<ScrollRevealItem key={idx} className="bg-[#16130c] border border-[#2a2415] rounded-3xl p-8 hover:border-[#FACC15]/30 transition-colors"><h4 className="text-xl font-bold text-white mb-6 pb-4 border-b border-[#2a2415]">{sec.title}</h4><div className="space-y-4">{sec.items.map((item, i) => (<div key={i} className="flex justify-between items-center"><span className="text-white/50 text-sm">{item.label}</span><span className="text-white font-medium text-sm text-right">{item.value}</span></div>))}</div></ScrollRevealItem>))}</ScrollReveal></div></section>

      <section className="py-24 px-6 bg-white"><div className="max-w-7xl mx-auto"><ScrollReveal direction="up" className="text-center mb-16"><h3 className="bg-[#FACC15] text-[#110e08] inline-block px-5 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase mb-6">Beneficios</h3><Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">Ventajas de la <span className="text-[#FACC15]">Pivotante</span></Heading></ScrollReveal><ScrollReveal staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{VENTAJAS.map((v, idx) => (<ScrollRevealItem key={idx} className="bg-[#FAFAFA] border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)]"><div className="w-14 h-14 bg-[#FACC15] rounded-2xl flex items-center justify-center mb-6"><svg className="w-7 h-7 text-[#110e08]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div><h4 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h4><p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p></ScrollRevealItem>))}</ScrollReveal></div></section>

      <section className="py-24 px-6 bg-[#FAFAFA]"><div className="max-w-3xl mx-auto"><ScrollReveal direction="up" className="text-center mb-16"><h3 className="text-[#110e08] text-sm font-bold tracking-[0.2em] uppercase mb-3">Preguntas Frecuentes</h3><Heading level="h2" className="text-4xl md:text-5xl font-bold text-gray-900">Resolvemos tus <span className="text-[#FACC15]">Dudas</span></Heading></ScrollReveal><ScrollReveal staggerChildren={0.1} className="space-y-4">{FAQ.map((faq, idx) => (<ScrollRevealItem key={idx}><div className={`bg-white border ${openFaq === idx ? 'border-[#FACC15] shadow-md' : 'border-gray-200 hover:border-[#FACC15]/50'} rounded-2xl overflow-hidden transition-all duration-300`}><button onClick={() => toggleFaq(idx)} className="w-full text-left p-6 flex items-center justify-between"><span className={`font-bold md:text-lg pr-8 ${openFaq === idx ? 'text-[#110e08]' : 'text-gray-700'}`}>{faq.pregunta}</span><svg className={`w-5 h-5 text-[#FACC15] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7"/></svg></button><div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}><p className="p-6 pt-0 text-gray-600 leading-relaxed">{faq.respuesta}</p></div></div></ScrollRevealItem>))}</ScrollReveal></div></section>

      <section className="py-20 px-6 bg-[#110e08] border-y border-[#2a2415]"><div className="max-w-4xl mx-auto text-center"><ScrollReveal direction="up"><Heading level="h2" className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para tu <span className="text-[#FACC15]">Ventana Pivotante</span>?</Heading><p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">Cotización gratuita y sin compromiso. Te contactamos en menos de 24 horas.</p><div className="flex flex-wrap items-center justify-center gap-4"><a href="#contacto" className="bg-[#FACC15] text-[#110e08] px-8 py-3.5 rounded-full font-bold hover:-translate-y-1 transition-all flex items-center gap-2">Cotizar Gratis <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></a><a href="tel:+51929765802" className="text-white border border-[#2a2415] hover:border-[#FACC15]/50 px-8 py-3.5 rounded-full font-medium hover:bg-white/5 transition-all">+51 929 765 802</a></div></ScrollReveal></div></section>
      <ContactSection /><Footer />
    </main>
  );
}
