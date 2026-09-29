import { fetchApi } from "./api";
import type { ApiResponse } from "@/interfaces/api";
import type { Episode } from "@/interfaces/episode";

export function getEpisodes(page = 1, name = "") {
  const params = new URLSearchParams({ page: String(page), name });
  return fetchApi<ApiResponse<Episode>>(`/episode?${params}`);
}

export function getEpisodeById(id: string) {
  return fetchApi<Episode>(`/episode/${id}`);
}
