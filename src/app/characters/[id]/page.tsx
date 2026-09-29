import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FavoriteButton from "@/components/ui/FavoriteButton";
import { getCharacterById } from "@/services/characterService";

interface Props {
  params: Promise<{ id: string }>;
}

// Ruta dinámica: [id] cambia según la URL, ej: /characters/1
export default async function CharacterDetailPage({ params }: Props) {
  const { id } = await params;
  const character = await getCharacterById(id);

  if (!character) notFound();

  return (
    <section className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow md:flex-row">
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
        className="mx-auto rounded-lg md:mx-0"
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{character.name}</h1>
        <p><strong>Estado:</strong> {character.status}</p>
        <p><strong>Especie:</strong> {character.species}</p>
        <p><strong>Género:</strong> {character.gender}</p>
        <p><strong>Origen:</strong> {character.origin.name}</p>
        <p><strong>Ubicación:</strong> {character.location.name}</p>
        <p><strong>Aparece en:</strong> {character.episode.length} episodios</p>

        {/* Único componente Client de esta página */}
        <FavoriteButton character={{ id: character.id, name: character.name, image: character.image }} />

        <Link href="/characters" className="mt-4 text-green-700 underline">
          ← Volver a personajes
        </Link>
      </div>
    </section>
  );
}
