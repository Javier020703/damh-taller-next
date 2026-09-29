import FavoritesList from "@/components/characters/FavoritesList";

// La página es Server; solo la lista (que usa localStorage) es Client
export default function FavoritesPage() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Mis favoritos</h1>
      <FavoritesList />
    </section>
  );
}
