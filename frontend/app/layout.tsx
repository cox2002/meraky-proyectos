import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Importamos el Navbar desde la carpeta de componentes
import Navbar from "@/components/shared/Navbar";

// Configuramos la fuente Inter para todo el sitio
const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        {/* El Navbar se coloca aquí para que sea persistente. 
          No importa a qué página navegues, el menú siempre estará arriba.
        */}
        <Navbar />

        {/* El elemento <main> envuelve el contenido dinámico.
          Esto ayuda a que los buscadores identifiquen el contenido principal.
        */}
        <main>
          {children}
        </main>

        {/* Aquí podrías añadir un Footer más adelante */}
      </body>
    </html>
  );
}