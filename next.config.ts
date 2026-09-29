import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Las imágenes se cargan directo desde la API (sin pasar por el servidor de Next).
    // Así evitamos el error 429 (demasiadas peticiones) de la Rick and Morty API.
    unoptimized: true,
  },
};

export default nextConfig;
