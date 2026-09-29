import Link from "next/link";

// Página estática: no pide datos, Next la genera una sola vez en el build
export default function Home() {
  return (
    <section className="py-10 text-center">
      <h1 className="mb-4 text-3xl font-bold md:text-5xl">Universo Rick and Morty</h1>
      <p className="mb-8 text-gray-600">Consulta personajes y episodios de la serie.</p>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link href="/characters" className="rounded bg-green-700 px-6 py-3 text-white">
          Ver personajes
        </Link>
        <Link href="/episodes" className="rounded bg-green-700 px-6 py-3 text-white">
          Ver episodios
        </Link>
      </div>
    </section>
  );
}
