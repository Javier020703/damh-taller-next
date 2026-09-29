export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
}

// Lo mínimo que guardamos en favoritos (localStorage)
export interface FavoriteCharacter {
  id: number;
  name: string;
  image: string;
}
