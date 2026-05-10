import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// --- Fuentes Optimizadas de Next.js ---
// Next.js descarga estas fuentes en tiempo de compilación y las sirve desde 
// nuestro propio dominio, lo que evita que la página parpadee al cargar (layout shift)
// y mejora el rendimiento porque no hacemos peticiones externas a Google Fonts.

// Configuramos la fuente Inter para texto base (Párrafos, botones)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter", // Creamos una variable CSS personalizada
  display: "swap",
});

// Configuramos Space Grotesk para titulares (H1, H2, Logos)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// --- Metadatos Globales (SEO) ---
// Esta información se inyecta en el <head> del HTML.
// Ayuda a que los buscadores (Google) y redes sociales entiendan de qué trata la página.
export const metadata: Metadata = {
  title: "Meraky Proyectos",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-surface text-on-surface`}>
        
        {/* 
          'children' representa la página actual que el usuario está visitando (por ejemplo, page.tsx).
          Next.js inyectará dinámicamente el contenido aquí sin recargar toda la página.
        */}
        {children}
      </body>
    </html>
  );
}