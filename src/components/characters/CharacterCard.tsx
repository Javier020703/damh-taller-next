import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/interfaces/character";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link
      href={`/characters/${character.id}`}
      className="overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
    >
      <Image src={character.image} alt={character.name} width={300} height={300} className="w-full" />
      <div className="p-3">
        <h3 className="font-bold">{character.name}</h3>
        <p className="text-sm text-gray-600">
          {character.species} · {character.status}
        </p>
      </div>
    </Link>
  );
}
