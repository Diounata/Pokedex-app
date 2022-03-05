import { Container, PokemonCardsContainer } from './styles';
import { ScrollView } from 'react-native';

import { Header } from '../../components/Home/Header';
import { SearchInput } from '../../components/Home/SearchInput';
import { PokemonCard } from '../../components/Home/PokemonCard';

export function Home() {
  return (
    <Container>
      <Header />
      <SearchInput />

      <ScrollView style={{ marginTop: 16 }} showsVerticalScrollIndicator={false}>
        <PokemonCardsContainer>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </PokemonCardsContainer>
      </ScrollView>
    </Container>
  );
}
