"use client";

import Image from "next/image";
import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";

// Client Component: los favoritos viven en localStorage (solo en el navegador)
export default function FavoritesList() {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return <p>Aún no tienes favoritos. Agrega algunos desde el detalle de un personaje.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {favorites.map((fav) => (
        <div key={fav.id} className="overflow-hidden rounded-lg bg-white shadow">
          <Link href={`/characters/${fav.id}`}>
            <Image src={fav.image} alt={fav.name} width={300} height={300} className="w-full" />
            <h3 className="p-3 font-bold">{fav.name}</h3>
          </Link>
          <button onClick={() => toggleFavorite(fav)} className="w-full bg-red-100 py-2 text-sm text-red-700">
            Quitar
          </button>
        </div>
      ))}
    </div>
  );
}
