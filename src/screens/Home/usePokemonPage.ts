import { useEffect, useState } from 'react';

import { pokemonData } from './pokemonData';

export function usePokemonPage() {
  const [currentPageData, setCurrentPageData] = useState<typeof pokemonData>([]);
  const [page, setPage] = useState(1);

  function changePage(direction: 'back' | 'forward') {
    if (direction === 'back' && page === 1) return;

    setPage(prev => (direction === 'back' ? prev - 1 : prev + 1));
  }

  useEffect(() => {
    const startIndex = (page - 1) * 8;
    const endIndex = startIndex + 8;

    const newPokemonData = pokemonData.slice(startIndex, endIndex);

    setCurrentPageData(newPokemonData);
  }, [page]);

  return { currentPageData, page, changePage };
}
