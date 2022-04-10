import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { pokemonData } from '../data/pokemonData';

const PokemonCardContext = createContext({} as ContextProps);

type CurrentPageDataProps = typeof pokemonData;

interface ChildrenProps {
  children: ReactNode;
}
interface ContextProps {
  currentPageData: CurrentPageDataProps;
  page: number;

  changePage(direction: 'back' | 'forward'): void;
}

export function PokemonCardProvider({ children }: ChildrenProps) {
  const [currentPageData, setCurrentPageData] = useState<CurrentPageDataProps>([]);
  const [page, setPage] = useState(1);

  function changePage(direction: 'back' | 'forward'): void {
    if (direction === 'back' && page === 1) return;

    setPage(prev => (direction === 'back' ? prev - 1 : prev + 1));
  }

  useEffect(() => {
    const startIndex = (page - 1) * 8;
    const endIndex = startIndex + 8;

    const newPokemonData = pokemonData.slice(startIndex, endIndex);

    setCurrentPageData(newPokemonData);
  }, [page]);

  return (
    <PokemonCardContext.Provider value={{ currentPageData, page, changePage }}>
      {children}
    </PokemonCardContext.Provider>
  );
}

export function usePokemonCard() {
  return useContext(PokemonCardContext);
}
