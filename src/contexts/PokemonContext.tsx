import axios from 'axios';
import { createContext, ReactNode, useContext, useState } from 'react';

import PokemonDemo from '../data/PokemonDemo.json';
import PokemonTypeColors from '../data/PokemonTypeColors';
import { PokemonTypeValues } from '../@types/PokemonTypeValues';

export const PokemonContext = createContext({} as ContextProps);

type PokemonDemoProps = typeof PokemonDemo;
interface PokemonProps extends PokemonDemoProps {
  types: {
    slot: number;
    type: {
      name: PokemonTypeValues;
    };
  }[];
}

export interface PokemonTypeProps {
  typeColor: string;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  pokemon: PokemonProps;
  typeColor: string;
  isPokemonLoading: boolean;

  updatePokemonData(id: number): void;
  updatePokemonLoading(value: boolean): void;
  uppercaseFirstLetter(str: string): string;
}

export function PokemonProvider({ children }: ChildrenProps) {
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [typeColor, setTypeColor] = useState<string>('#fff');
  const [isPokemonLoading, setIsPokemonLoading] = useState(true);

  function updatePokemonData(id: number): void {
    axios.get<PokemonProps>(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
      const data: PokemonProps = res.data;

      const pokemonType: PokemonTypeValues = data.types[0].type.name;
      const colorValue = PokemonTypeColors[pokemonType];

      setPokemon(data);
      setTypeColor(colorValue);
      setIsPokemonLoading(false);
    });
  }

  function updatePokemonLoading(value: boolean): void {
    setIsPokemonLoading(value);
  }

  function uppercaseFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        typeColor,
        isPokemonLoading,
        updatePokemonData,
        updatePokemonLoading,
        uppercaseFirstLetter,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
