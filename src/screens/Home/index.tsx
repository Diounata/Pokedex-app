import { Container, PokemonCardsContainer } from './styles';
import { StatusBar } from 'expo-status-bar';

import { Header } from '../../components/screens/Home/Header';
import { SearchInput } from '../../components/screens/Home/SearchInput';
import { PokemonCard } from '../../components/screens/Home/PokemonCard';
import { Page } from '../../components/screens/Home/Page';

import { usePokemonCard } from '../../contexts/PokemonCardContext';
import { Text } from 'react-native';

export function Home() {
  const { currentPageData, inputFilter, isPokemonFound } = usePokemonCard();

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header />
      <SearchInput />

      <PokemonCardsContainer>
        {!isPokemonFound
          ? (
            <Text>
              Pokémon <Text style={{ fontStyle: 'italic' }}>{inputFilter}</Text> wasn't found ;(
            </Text>
          )
          : currentPageData.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)
        }

        <Page />
      </PokemonCardsContainer>

      <StatusBar style="dark" backgroundColor="transparent" />
    </Container>
  );
}
