import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-10 text-center">
      <h1 className="mb-4 text-2xl font-bold">Página no encontrada</h1>
      <Link href="/" className="text-green-700 underline">
        Volver al inicio
      </Link>
    </section>
  );
}
