import { Container, Input } from './styles';

import { usePokemonCard } from '../../../../contexts/PokemonCardContext';

export function SearchInput() {
  const { inputFilter, updateInputFilter } = usePokemonCard();

  return (
    <Container>
      <Input
        placeholder="Search"
        autoCapitalize="sentences"
        value={inputFilter}
        onChangeText={updateInputFilter}
      />
    </Container>
  );
}
