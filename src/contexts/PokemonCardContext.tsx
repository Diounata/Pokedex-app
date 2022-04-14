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
  inputFilter: string;
  isPokemonFound: boolean;

  changePage(direction: 'back' | 'forward'): void;
  updateInputFilter(value: string): void;
  changeOrder(): void;
}

export function PokemonCardProvider({ children }: ChildrenProps) {
  const [currentPageData, setCurrentPageData] = useState<CurrentPageDataProps>([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState<OrderProps>('increasing');
  const [inputFilter, setInputFilter] = useState('');
  const [isPokemonFound, setIsPokemonFound] = useState(true);

  let pokemonList = pokemonData;

  function changePage(direction: 'back' | 'forward'): void {
    if (direction === 'back' && page === 1) return;

    setPage(prev => (direction === 'back' ? prev - 1 : prev + 1));
  }

  function changeOrder(): void {
    const newOrder: OrderProps = order === 'increasing' ? 'decreasing' : 'increasing';
    pokemonList = pokemonList.reverse();

    setPage(1);
    setInputFilter('');
    setOrder(newOrder);
  }

  function updateInputFilter(value: string): void {
    setInputFilter(value);
  }

  useEffect(() => {
    if (page === -1) return;

    const startIndex = (page - 1) * 8;
    const endIndex = startIndex + 8;

    const newPokemonData = pokemonList.slice(startIndex, endIndex);

    setCurrentPageData(newPokemonData);
  }, [page, order]);

  useEffect(() => {
    if (inputFilter.length < 3 && page === -1) {
      setIsPokemonFound(true);
      setPage(1);

      return;
    }

    if (inputFilter.length < 3) return;

    const newPokemonsArray = pokemonList.filter(pokemon => {
      const name = pokemon.name.toLowerCase();
      const input = inputFilter.toLowerCase();

      return name.includes(input);
    });

    setPage(-1); // disable page feature
    setIsPokemonFound(!!newPokemonsArray.length);
    setCurrentPageData(newPokemonsArray);
  }, [inputFilter]);

  return (
    <PokemonCardContext.Provider
      value={{
        currentPageData,
        page,
        order,
        inputFilter,
        isPokemonFound,
        changePage,
        updateInputFilter,
        changeOrder,
      }}
    >
      {children}
    </PokemonCardContext.Provider>
  );
}

export function usePokemonCard() {
  return useContext(PokemonCardContext);
}
