import CharacterCard from "@/components/characters/CharacterCard";
import Pagination from "@/components/ui/Pagination";
import { getCharacters } from "@/services/characterService";

interface Props {
  searchParams: Promise<{ page?: string; name?: string }>;
}

// Server Component: pide los datos en el servidor y envía el HTML listo
export default async function CharactersPage({ searchParams }: Props) {
  const { page = "1", name = "" } = await searchParams;
  const currentPage = Number(page);
  const data = await getCharacters(currentPage, name);

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Personajes {name && `· "${name}"`}</h1>

      {!data ? (
        <p>No se encontraron personajes.</p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {data.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={data.info.pages} basePath="/characters" name={name} />
        </>
      )}
    </section>
  );
}
