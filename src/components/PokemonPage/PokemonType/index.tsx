import { Container, TypeContainer } from './styles';

import { usePokemon } from '../../../contexts/PokemonContext';

export function PokemonType() {
  const { pokemonTypeColor } = usePokemon();

  return (
    <Container>
      <TypeContainer pokemonTypeColor={pokemonTypeColor}>Water</TypeContainer>
    </Container>
  );
}
