import Link from "next/link";
import { notFound } from "next/navigation";
import CharacterCard from "@/components/characters/CharacterCard";
import { getEpisodeById } from "@/services/episodeService";
import { getCharactersByIds } from "@/services/characterService";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EpisodeDetailPage({ params }: Props) {
  const { id } = await params;
  const episode = await getEpisodeById(id);

  if (!episode) notFound();

  // Las URLs terminan en el id del personaje: ".../character/5" -> "5"
  const characterIds = episode.characters.map((url) => url.split("/").pop()!);
  const characters = await getCharactersByIds(characterIds);

  return (
    <section>
      <div className="mb-6 rounded-lg bg-white p-6 shadow">
        <p className="font-semibold text-green-700">{episode.episode}</p>
        <h1 className="text-3xl font-bold">{episode.name}</h1>
        <p className="text-gray-600">Fecha de emisión: {episode.air_date}</p>
        <Link href="/episodes" className="mt-4 inline-block text-green-700 underline">
          ← Volver a episodios
        </Link>
      </div>

      <h2 className="mb-4 text-xl font-bold">Personajes ({characters.length})</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
