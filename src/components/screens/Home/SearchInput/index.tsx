import { Container, Input } from './styles';

import SearchSVG from '../../../../assets/search.svg';

import { usePokemonCard } from '../../../../contexts/PokemonCardContext';

export function SearchInput() {
  const { inputFilter, updateInputFilter } = usePokemonCard();

  return (
    <Container>
      <SearchSVG />

      <Input
        placeholder="Search"
        autoCapitalize="sentences"
        selectionColor="#212121"
        value={inputFilter}
        onChangeText={updateInputFilter}
      />
    </Container>
  );
}
