import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import PokemonDemo from '../data/PokemonDemo.json';
import PokemonTypeColors from '../data/PokemonTypeColors';
import { PokemonTypeValues } from '../@types/PokemonTypeValues';

export const PokemonContext = createContext({} as ContextProps);

type PokemonDemoProps = typeof PokemonDemo;
interface PokemonProps extends PokemonDemoProps {
  types: {
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
}

export function PokemonProvider({ children }: ChildrenProps) {
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [typeColor, setTypeColor] = useState<string>('#fff');
  const [isPokemonLoading, setIsPokemonLoading] = useState(true);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/7').then(res => {
      const data: PokemonProps = res.data;

      const pokemonType: PokemonTypeValues = data.types[0].type.name;
      const colorValue = PokemonTypeColors[pokemonType];

      setPokemon(data);
      setTypeColor(colorValue);
      setIsPokemonLoading(false);
    });
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon, typeColor, isPokemonLoading }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
