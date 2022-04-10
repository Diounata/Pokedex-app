import { Container, PokemonCardsContainer } from './styles';
import { StatusBar } from 'expo-status-bar';

import { Header } from '../../components/screens/Home/Header';
import { SearchInput } from '../../components/screens/Home/SearchInput';
import { PokemonCard } from '../../components/screens/Home/PokemonCard';
import { Page } from '../../components/screens/Home/Page';

import { usePokemonPage } from './usePokemonPage';

export function Home() {
  const { page, currentPageData, changePage } = usePokemonPage();

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header />
      <SearchInput />

      <PokemonCardsContainer>
        {currentPageData.map(pokemon => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}

        <Page page={page} changePage={changePage} />
      </PokemonCardsContainer>

      <StatusBar style="dark" backgroundColor="transparent" />
    </Container>
  );
}
