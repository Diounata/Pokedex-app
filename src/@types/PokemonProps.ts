interface TypesProps {
  type: { name: string };
}

interface MovesProps {
  move: { name: string };
}

interface StatsProps {
  base_stat: number;
}

interface PokemonProps {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: TypesProps[];
  moves: MovesProps[];
  stats: StatsProps[];
}

export type { PokemonProps };
