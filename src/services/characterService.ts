import { fetchApi } from "./api";
import type { ApiResponse } from "@/interfaces/api";
import type { Character } from "@/interfaces/character";

export function getCharacters(page = 1, name = "") {
  const params = new URLSearchParams({ page: String(page), name });
  return fetchApi<ApiResponse<Character>>(`/character?${params}`);
}

export function getCharacterById(id: string) {
  return fetchApi<Character>(`/character/${id}`);
}

// Recibe varios ids y devuelve una lista de personajes
export async function getCharactersByIds(ids: string[]) {
  if (ids.length === 0) return [];
  const data = await fetchApi<Character | Character[]>(`/character/${ids.join(",")}`);
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}
