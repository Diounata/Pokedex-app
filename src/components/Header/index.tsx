import { Container, TitleContainer, Title, PokeballImage } from './styles';

import pokeballImg from '../../assets/pokeball.png';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <PokeballImage source={pokeballImg} />

        <Title>Pokédex</Title>
      </TitleContainer>
    </Container>
  );
}
