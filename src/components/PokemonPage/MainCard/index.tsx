import { Container, AboutContainer, AboutTitle } from './styles';

import { PokemonType } from '../PokemonType';

export function MainCard() {
  return (
    <Container>
      <PokemonType />

      <AboutContainer>
        <AboutTitle>About</AboutTitle>
      </AboutContainer>
    </Container>
  );
}
