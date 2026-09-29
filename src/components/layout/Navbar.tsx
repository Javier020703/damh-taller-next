import Link from "next/link";
import SearchBox from "./SearchBox";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/characters", label: "Personajes" },
  { href: "/episodes", label: "Episodios" },
  { href: "/favorites", label: "Favoritos" },
];

// Server Component: no tiene interacción, solo el SearchBox (Client) adentro
export default function Navbar() {
  return (
    <header className="bg-green-700 text-white">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="text-xl font-bold">
          Rick &amp; Morty
        </Link>

        <ul className="flex flex-wrap gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <SearchBox />
      </nav>
    </header>
  );
}
