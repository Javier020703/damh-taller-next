"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Client Component: necesita guardar lo que escribe el usuario y reaccionar al envío
export default function SearchBox() {
  const [text, setText] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Si estás en episodios busca episodios; en cualquier otro lugar busca personajes
    const section = pathname.startsWith("/episodes") ? "/episodes" : "/characters";
    router.push(`${section}?name=${encodeURIComponent(text)}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Buscar..."
        className="w-full rounded px-3 py-1 text-black bg-white md:w-56"
      />
      <button type="submit" className="rounded bg-lime-400 px-3 py-1 font-semibold text-black">
        Buscar
      </button>
    </form>
  );
}
