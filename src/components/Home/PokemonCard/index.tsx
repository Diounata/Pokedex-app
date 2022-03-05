import { Container, PokemonID, PokemonName } from './styles';

import { SvgUri } from 'react-native-svg';

export function PokemonCard() {
  return (
    <Container>
      <PokemonID>#144</PokemonID>

      <SvgUri
        uri="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/144.svg"
        style={{ flex: 1, alignSelf: 'center' }}
        width={90}
        height={90}
      />

      <PokemonName>Articuno</PokemonName>
    </Container>
  );
}
