import { Servicio } from "@/types";

const API_URL = "http://192.168.7.139:8000";

export const getServicios = async (): Promise<Servicio[]> => {
  const response = await fetch(`${API_URL}/servicios/`, {
    cache: 'no-store' // Para que siempre traiga datos frescos de la DB
  });
  
  if (!response.ok) {
    throw new Error("Error al obtener los servicios");
  }
  
  return response.json();
};
