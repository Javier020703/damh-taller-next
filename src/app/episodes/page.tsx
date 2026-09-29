import EpisodeCard from "@/components/episodes/EpisodeCard";
import Pagination from "@/components/ui/Pagination";
import { getEpisodes } from "@/services/episodeService";

interface Props {
  searchParams: Promise<{ page?: string; name?: string }>;
}

export default async function EpisodesPage({ searchParams }: Props) {
  const { page = "1", name = "" } = await searchParams;
  const currentPage = Number(page);
  const data = await getEpisodes(currentPage, name);

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Episodios {name && `· "${name}"`}</h1>

      {!data ? (
        <p>No se encontraron episodios.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.results.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={data.info.pages} basePath="/episodes" name={name} />
        </>
      )}
    </section>
  );
}
