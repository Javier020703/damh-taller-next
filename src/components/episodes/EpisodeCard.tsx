import Link from "next/link";
import type { Episode } from "@/interfaces/episode";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link href={`/episodes/${episode.id}`} className="rounded-lg bg-white p-4 shadow transition hover:shadow-lg">
      <p className="text-sm font-semibold text-green-700">{episode.episode}</p>
      <h3 className="font-bold">{episode.name}</h3>
      <p className="text-sm text-gray-600">{episode.air_date}</p>
    </Link>
  );
}
