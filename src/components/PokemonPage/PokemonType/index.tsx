import { Container, TypeContainer } from './styles';

import { usePokemon } from '../../../contexts/PokemonContext';

export function PokemonType() {
  const { typeColor } = usePokemon();

  return (
    <Container>
      <TypeContainer typeColor={typeColor}>Water</TypeContainer>
    </Container>
  );
}
