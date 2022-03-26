import { Container, Title } from './styles';

import { PokemonType } from '../PokemonType';
import { About } from '../About';
import { Description } from '../Description';
import { BaseStats } from '../BaseStats';

import { usePokemon } from '../../../contexts/PokemonContext';

export function MainCard() {
  const { typeColor } = usePokemon();

  return (
    <Container>
      <PokemonType />

      <Title typeColor={typeColor}>About</Title>

      <About />
      <Description />

      <Title typeColor={typeColor}>Base Stats</Title>
      <BaseStats />
    </Container>
  );
}
