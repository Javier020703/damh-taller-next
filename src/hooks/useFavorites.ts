"use client";

import { useEffect, useState } from "react";
import type { FavoriteCharacter } from "@/interfaces/character";

const STORAGE_KEY = "favorites";

// Hook para leer, agregar y quitar favoritos guardados en localStorage
export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteCharacter[]>([]);

  // localStorage solo existe en el navegador, por eso se lee dentro de useEffect
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  function save(list: FavoriteCharacter[]) {
    setFavorites(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function isFavorite(id: number) {
    return favorites.some((fav) => fav.id === id);
  }

  function toggleFavorite(character: FavoriteCharacter) {
    if (isFavorite(character.id)) {
      save(favorites.filter((fav) => fav.id !== character.id));
    } else {
      save([...favorites, character]);
    }
  }

  return { favorites, isFavorite, toggleFavorite };
}
