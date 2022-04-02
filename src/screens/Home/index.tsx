import { Container, PokemonCardsContainer } from './styles';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';

import { Header } from '../../components/screens/Home/Header';
import { SearchInput } from '../../components/screens/Home/SearchInput';
import { PokemonCard } from '../../components/screens/Home/PokemonCard';

import { pokemonData } from './pokemonData';

export function Home() {
  return (
    <Container>
      <Header />
      <SearchInput />

      <ScrollView style={{ marginTop: 16 }} showsVerticalScrollIndicator={false}>
        <PokemonCardsContainer>
          {pokemonData.map(pokemon => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </PokemonCardsContainer>
      </ScrollView>

      <StatusBar style="dark" backgroundColor="#F7F7F7" />
    </Container>
  );
}
