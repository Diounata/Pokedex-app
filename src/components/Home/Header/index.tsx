import { Container, TitleContainer, Title, SortContainer } from './styles';
import { Text } from 'react-native';

import PokeballSVG from '../../../assets/pokeball.svg';
import ArrowDownSVG from '../../../assets/arrow-down.svg';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <PokeballSVG width={24} height={24} style={{ marginRight: 16 }} />

        <Title>Pokédex</Title>
      </TitleContainer>

      <SortContainer>
        <Text style={{ marginRight: 5 }}>#</Text>
        <ArrowDownSVG width={24} height={24} />
      </SortContainer>
    </Container>
  );
}
