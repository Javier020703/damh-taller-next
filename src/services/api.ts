const BASE_URL = "https://rickandmortyapi.com/api";

// Función base para pedir datos a la API.
// Devuelve null si la API responde con error (ej: búsqueda sin resultados).
export async function fetchApi<T>(path: string): Promise<T | null> {
  const res = await fetch(`${BASE_URL}${path}`, {
    next: { revalidate: 3600 }, // guarda la respuesta en caché 1 hora
  });

  if (!res.ok) return null;
  return res.json();
}
