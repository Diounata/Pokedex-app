import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { pokemonData } from '../data/pokemonData';

const PokemonCardContext = createContext({} as ContextProps);

type CurrentPageDataProps = typeof pokemonData;
type OrderProps = 'increasing' | 'decreasing';

interface ChildrenProps {
  children: ReactNode;
}
interface ContextProps {
  currentPageData: CurrentPageDataProps;
  page: number;
  order: OrderProps;

  changePage(direction: 'back' | 'forward'): void;
  changeOrder(): void;
}

export function PokemonCardProvider({ children }: ChildrenProps) {
  const [currentPageData, setCurrentPageData] = useState<CurrentPageDataProps>([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<OrderProps>('increasing');

  let pokemonList = pokemonData;

  function changePage(direction: 'back' | 'forward'): void {
    if (direction === 'back' && page === 1) return;

    setPage(prev => (direction === 'back' ? prev - 1 : prev + 1));
  }

  function changeOrder(): void {
    const newOrder: OrderProps = order === 'increasing' ? 'decreasing' : 'increasing';
    pokemonList = pokemonList.reverse();

    setOrder(newOrder);
  }

  useEffect(() => {
    const startIndex = (page - 1) * 8;
    const endIndex = startIndex + 8;

    const newPokemonData = pokemonList.slice(startIndex, endIndex);

    setCurrentPageData(newPokemonData);
  }, [page, order]);

  return (
    <PokemonCardContext.Provider value={{ currentPageData, page, order, changePage, changeOrder }}>
      {children}
    </PokemonCardContext.Provider>
  );
}

export function usePokemonCard() {
  return useContext(PokemonCardContext);
}
