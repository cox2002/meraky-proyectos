import ServiceCatalog from "@/components/sections/ServiceCatalog";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-[60vh] text-center px-4 bg-white">
        <h1 className="text-6xl font-extrabold text-slate-900 tracking-tight">
          Meraky <span className="text-blue-600">Proyectos</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-2xl">
          Ingeniería en vidrio y aluminio para proyectos residenciales y comerciales de alto nivel.
        </p>
      </section>

      {/* Catálogo desde la Base de Datos */}
      <ServiceCatalog />
    </main>
  );
}