import { Container, AboutContainer, AboutTitle } from './styles';

import { PokemonType } from '../PokemonType';
import { About } from '../About';

export function MainCard() {
  return (
    <Container>
      <PokemonType />

      <AboutContainer>
        <AboutTitle>About</AboutTitle>
      </AboutContainer>

      <About />
    </Container>
  );
}
