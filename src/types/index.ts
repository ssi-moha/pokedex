export interface RootState {
  pokemonList?: PokemonListState;
  pokemonObject?: PokemonObjectState;
  specieObject?: PokemonSpecieState;
  evolutionChainObject?: EvolutionChainState;
}

export interface EvolutionChainState {
  evolutionChain: EvolutionChain | null;
  error: Error | null;
  loading: boolean;
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

export interface PokemonSpecieState {
  specie: Specie | {};
  error: Error | null;
  loading: boolean;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}
export interface EvolutionDetails {
  gender: number;
  item: NamedAPIResource;
  known_move: NamedAPIResource;
  known_move_type: NamedAPIResource;
  location: NamedAPIResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource;
  party_type: NamedAPIResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedAPIResource;
  turn_upside_down: boolean;
}

export interface EvolutionChain {
  id: number;
  baby_trigger_item: NamedAPIResource;
  chain: ChainLink;
}

export interface ChainLink {
  is_baby: boolean;
  species: NamedAPIResource;
  evolution_details: EvolutionDetails[];
  evolves_to: ChainLink[];
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NamedAPIResource[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: NamedAPIResource[];
  name: string;
  order: number;
  species: NamedAPIResource;
  sprites: Sprites;
  weight: number;
  types: Type[];
  stats: Stat[];
}

export interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
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
  type: NamedAPIResource;
}

export interface Specie {
  id: number;
  color: NamedAPIResource;
  evolution_chain: NamedAPIResource;
  flavor_text_entries: FlavorTextEntries[];
  genera: Genera[];
}

export interface FlavorTextEntries {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

export interface Genera {
  genus: string;
  language: NamedAPIResource;
}