import { createContext, ReactNode, useContext, useState } from 'react';

import theme from '../theme';
import { ColorsProps } from '../theme/ColorsProps';

export const PokemonContext = createContext({} as ContextProps);

export interface PokemonTypeProps {
  pokemonTypeColor: string;
}

interface ChildrenProps {
  children: ReactNode;
}

interface ContextProps {
  pokemonTypeColor: string;
}

export function PokemonProvider({ children }: ChildrenProps) {
  const type: ColorsProps = 'TYPE_WATER';

  const [pokemonTypeColor, setPokemonTypeColor] = useState<string>(theme.COLORS[type]);

  return <PokemonContext.Provider value={{ pokemonTypeColor }}>{children}</PokemonContext.Provider>;
}

export function usePokemon() {
  return useContext(PokemonContext);
}
