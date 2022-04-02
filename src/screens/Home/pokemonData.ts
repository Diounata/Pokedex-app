import { ColorsProps } from '../../theme/ColorsProps';

interface PokemonProps {
  id: number;
  name: string;
  type: ColorsProps;
}

const pokemonData: PokemonProps[] = [
  { id: 1, name: 'Bulbasaur', type: 'TYPE_GRASS' },
  { id: 2, name: 'Ivysaur', type: 'TYPE_GRASS' },
  { id: 3, name: 'Venusaur', type: 'TYPE_GRASS' },
  { id: 4, name: 'Charmander', type: 'TYPE_FIRE' },
  { id: 5, name: 'Charmeleon', type: 'TYPE_FIRE' },
  { id: 6, name: 'Charizard', type: 'TYPE_FIRE' },
  { id: 7, name: 'Squirtle', type: 'TYPE_WATER' },
  { id: 8, name: 'Wartortle', type: 'TYPE_WATER' },
  { id: 9, name: 'Blastoise', type: 'TYPE_WATER' },
  { id: 10, name: 'Caterpie', type: 'TYPE_BUG' },
  { id: 11, name: 'Metapod', type: 'TYPE_BUG' },
  { id: 12, name: 'Butterfree', type: 'TYPE_BUG' },
  { id: 13, name: 'Weedle', type: 'TYPE_BUG' },
  { id: 14, name: 'Kakuna', type: 'TYPE_BUG' },
  { id: 15, name: 'Beedrill', type: 'TYPE_BUG' },
  { id: 16, name: 'Pidgey', type: 'TYPE_NORMAL' },
];

export { pokemonData };
