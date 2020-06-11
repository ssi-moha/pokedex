export interface RootState {
  pokemon?: {
    pokemonList: PokemonListState;
    pokemonObject: PokemonObjectState;
  };
}

export interface PokemonListState {
  pokemons: Pokemon[];
  error: Error | null;
  loading: boolean;
}

export interface PokemonObjectState {
  pokemon: Pokemon | {};
  error: Error | null;
  loading: boolean;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: { name: string; url: string }[];
  height: number;
  id: 21;
  is_default: boolean;
  location_area_encounters: string;
  moves: { name: string; url: string }[];
  name: string;
  order: number;
  species: { name: string; url: string };
  sprites: Sprites;
  weight: number;
  types: Type[];
  stats: Stat[];
}

export interface Ability {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Type {
  slot: number;
  type: { name: string; url: string };
}
