import type { Metadata } from "next";
import { Poppins, Lato, Inter } from "next/font/google";
import "./globals.css";

// Configuramos la fuente Lato para texto base
const lato = Lato({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

// Configuramos Poppins para titulares
const poppins = Poppins({ 
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// Configuramos Inter para el estilo tecnológico
const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// --- Metadatos Globales (SEO) ---
// Esta información se inyecta en el <head> del HTML.
// Ayuda a que los buscadores (Google) y redes sociales entiendan de qué trata la página.
export const metadata: Metadata = {
  title: "Meraki Proyectos",
  description: "Soluciones integrales en vidriería, carpintería de aluminio y gestión de proyectos técnicos.",
  keywords: ["vidriería", "aluminio", "proyectos", "construcción", "espejos", "mamparas"],
};

// --- Root Layout (Plantilla Principal) ---
// Todo proyecto Next.js App Router DEBE tener este archivo.
// Envuelve todas las páginas del sitio. Aquí se define la estructura HTML básica.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 'scroll-smooth' habilita animaciones suaves al hacer clic en enlaces como href="#contacto"
    <html lang="es" className="scroll-smooth">
      {/* 
        Aplicamos las variables de nuestras fuentes y configuramos Tailwind.
        'antialiased' suaviza los bordes de las letras.
        'bg-surface' y 'text-on-surface' aplican nuestros colores base globales definidos en globals.css.
      */}
      <body className={`${lato.variable} ${poppins.variable} ${inter.variable} font-sans antialiased bg-surface text-on-surface overflow-x-hidden`}>
        
        {/* 
          'children' representa la página actual que el usuario está visitando (por ejemplo, page.tsx).
          Next.js inyectará dinámicamente el contenido aquí sin recargar toda la página.
        */}
        {children}
      </body>
    </html>
  );
}