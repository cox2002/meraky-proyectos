import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Opciones de configuración aquí */
  output: 'export',
  allowedDevOrigins: ["192.168.7.139", "localhost:3000"],
};

export default nextConfig;