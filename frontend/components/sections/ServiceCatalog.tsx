// frontend/components/sections/ServiceCatalog.tsx
"use client"; // Lo hacemos client component para manejar el estado
import { useEffect, useState } from "react";
import { Servicio } from "@/types";
import { getServicios } from "@/services/serviceApi";

export default function ServiceCatalog() {
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServicios()
      .then(setServicios)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-10">Cargando catálogo de Meraky...</p>;

  return (
    <section id="servicios" className="py-20 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
          Nuestros <span className="text-blue-600">Servicios Especializados</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((s) => (
            <div key={s.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">{s.nombre}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.descripcion}</p>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-blue-600 font-semibold">Desde S/ {s.precio_base_m2} m²</span>
                <button className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-blue-600">
                  Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}