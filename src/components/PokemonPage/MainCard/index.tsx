import { Container, Title } from './styles';

import { PokemonType } from '../PokemonType';
import { About } from '../About';
import { Description } from '../Description';
import { BaseStats } from '../BaseStats';

export function MainCard() {
  return (
    <Container>
      <PokemonType />

      <Title>About</Title>

      <About />
      <Description />

      <Title>Base Stats</Title>
      <BaseStats />
    </Container>
  );
}
