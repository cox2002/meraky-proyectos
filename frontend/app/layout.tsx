import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Configuramos la fuente Inter para texto base (Body & Labels)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configuramos Space Grotesk para titulares (Display & Headlines)
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meraky Proyectos",
  description: "Soluciones integrales en vidriería, carpintería de aluminio y gestión de proyectos técnicos.",
  keywords: ["vidriería", "aluminio", "proyectos", "construcción", "espejos", "mamparas"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-surface text-on-surface`}>
        {/* El Navbar ahora se maneja dentro de page.tsx (o en futuros layouts específicos) */}
        
        {/* El elemento <main> envuelve el contenido dinámico. */}
        {children}
      </body>
    </html>
  );
}