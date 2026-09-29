"use client";

import { useFavorites } from "@/hooks/useFavorites";
import type { FavoriteCharacter } from "@/interfaces/character";

// Client Component: responde a clics y usa localStorage
export default function FavoriteButton({ character }: { character: FavoriteCharacter }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(character.id);

  return (
    <button
      onClick={() => toggleFavorite(character)}
      className={`rounded px-3 py-1 text-sm font-semibold ${
        active ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-700"
      }`}
    >
      {active ? "★ Favorito" : "☆ Agregar a favoritos"}
    </button>
  );
}
