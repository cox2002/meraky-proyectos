import { Servicio } from "@/types";

// La URL base donde está corriendo nuestro servidor de FastAPI.
const API_URL = "http://192.168.7.139:8000";

// --- Funciones de Servicio (API Layer) ---
// Separar las llamadas a la API en esta carpeta ("services") es una excelente práctica.
// Si mañana cambia la URL del backend o la forma en que obtenemos datos,
// solo cambiamos este archivo y no tenemos que tocar los componentes visuales de React.

export const getServicios = async (): Promise<Servicio[]> => {
  // Promise<Servicio[]> indica a TypeScript que esta función devolverá un Arreglo de objetos 'Servicio' 
  // (definidos en los types del frontend) en el futuro (asíncrono).
  
  // Usamos el 'fetch' nativo para hacer una petición GET a FastAPI.
  const response = await fetch(`${API_URL}/servicios/`, {
    // En Next.js, 'fetch' suele cachear la respuesta para hacer la web más rápida.
    // 'no-store' obliga a Next.js a ir siempre al backend a pedir datos frescos.
    // Útil para datos dinámicos como precios de servicios.
    cache: 'no-store' 
  });
  
  // Manejo básico de errores: Si FastAPI no devuelve un código 200 OK.
  if (!response.ok) {
    throw new Error("Error al obtener los servicios desde la API");
  }
  
  // Convertimos la respuesta cruda de red a un objeto JSON (un arreglo) y lo devolvemos.
  return response.json();
};
