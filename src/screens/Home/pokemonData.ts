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
  { id: 17, name: 'Pidgeotto', type: 'TYPE_NORMAL' },
  { id: 18, name: 'Pidgeot', type: 'TYPE_NORMAL' },
  { id: 19, name: 'Rattata', type: 'TYPE_NORMAL' },
  { id: 20, name: 'Raticate', type: 'TYPE_NORMAL' },
  { id: 21, name: 'Spearow', type: 'TYPE_NORMAL' },
  { id: 22, name: 'Fearow', type: 'TYPE_NORMAL' },
  { id: 23, name: 'Ekans', type: 'TYPE_POISON' },
  { id: 24, name: 'Arbok', type: 'TYPE_POISON' },
  { id: 25, name: 'Pikachu', type: 'TYPE_ELECTRIC' },
  { id: 26, name: 'Raichu', type: 'TYPE_ELECTRIC' },
  { id: 27, name: 'Sandshrew', type: 'TYPE_GROUND' },
  { id: 28, name: 'Sandslash', type: 'TYPE_GROUND' },
  { id: 29, name: 'Nidoran-f', type: 'TYPE_POISON' },
  { id: 30, name: 'Nidorina', type: 'TYPE_POISON' },
  { id: 31, name: 'Nidoqueen', type: 'TYPE_POISON' },
  { id: 32, name: 'Nidoran-m', type: 'TYPE_POISON' },
  { id: 33, name: 'Nidorino', type: 'TYPE_POISON' },
  { id: 34, name: 'Nidoking', type: 'TYPE_POISON' },
  { id: 35, name: 'Clefairy', type: 'TYPE_FAIRY' },
  { id: 36, name: 'Clefable', type: 'TYPE_FAIRY' },
  { id: 37, name: 'Vulpix', type: 'TYPE_FIRE' },
  { id: 38, name: 'Ninetales', type: 'TYPE_FIRE' },
  { id: 39, name: 'Jigglypuff', type: 'TYPE_NORMAL' },
  { id: 40, name: 'Wigglytuff', type: 'TYPE_NORMAL' },
  { id: 41, name: 'Zubat', type: 'TYPE_POISON' },
  { id: 42, name: 'Golbat', type: 'TYPE_POISON' },
  { id: 43, name: 'Oddish', type: 'TYPE_GRASS' },
  { id: 44, name: 'Gloom', type: 'TYPE_GRASS' },
  { id: 45, name: 'Vileplume', type: 'TYPE_GRASS' },
  { id: 46, name: 'Paras', type: 'TYPE_BUG' },
  { id: 47, name: 'Parasect', type: 'TYPE_BUG' },
  { id: 48, name: 'Venonat', type: 'TYPE_BUG' },
  { id: 49, name: 'Venomoth', type: 'TYPE_BUG' },
  { id: 50, name: 'Diglett', type: 'TYPE_GROUND' },
];

export { pokemonData };
