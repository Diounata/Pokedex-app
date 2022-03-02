import { Container, TitleContainer, Title, PokeballImage, SortContainer } from './styles';

import pokeballImg from '../../assets/pokeball.png';

import { AntDesign } from '@expo/vector-icons';
import { Text } from 'react-native';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <PokeballImage source={pokeballImg} />

        <Title>Pokédex</Title>
      </TitleContainer>

      <SortContainer>
        <Text style={{ marginRight: 5 }}>#</Text>
        <AntDesign name="arrowdown" size={24} color="black" />
      </SortContainer>
    </Container>
  );
}
