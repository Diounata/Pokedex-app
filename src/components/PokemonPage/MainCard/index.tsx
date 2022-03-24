import { Container, Title } from './styles';

import { PokemonType } from '../PokemonType';
import { About } from '../About';
import { Description } from '../Description';
import { BaseStats } from '../BaseStats';

import { usePokemon } from '../../../contexts/PokemonContext';

export function MainCard() {
  const { pokemonTypeColor } = usePokemon();

  return (
    <Container>
      <PokemonType />

      <Title pokemonTypeColor={pokemonTypeColor}>About</Title>

      <About />
      <Description />

      <Title pokemonTypeColor={pokemonTypeColor}>Base Stats</Title>
      <BaseStats />
    </Container>
  );
}
