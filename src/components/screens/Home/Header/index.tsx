import { Container, TitleContainer, Title, SortContainer } from './styles';
import { Text } from 'react-native';

import PokeballSVG from '../../../../assets/pokeball.svg';
import ArrowDownSVG from '../../../../assets/arrow-down.svg';

import { usePokemonCard } from '../../../../contexts/PokemonCardContext';

export function Header() {
  const { order, changeOrder } = usePokemonCard();

  return (
    <Container>
      <TitleContainer>
        <PokeballSVG width={24} height={24} style={{ marginRight: 16 }} />

        <Title>Pokédex</Title>
      </TitleContainer>

      <SortContainer onPress={changeOrder}>
        <Text style={{ marginRight: 5 }}>#</Text>

        <ArrowDownSVG
          width={24}
          height={24}
          style={{ transform: order === 'decreasing' ? [{ rotate: '-180deg' }] : [] }}
        />
      </SortContainer>
    </Container>
  );
}
