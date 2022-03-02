import { Container, PokemonID, PokemonName } from './styles';
import { Image } from 'react-native';

export function PokemonCard() {
  return (
    <Container>
      <PokemonID>#144</PokemonID>

      <Image
        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png' }}
        style={{ flex: 1, width: '100%', resizeMode: 'contain' }}
      />

      <PokemonName>Articuno</PokemonName>
    </Container>
  );
}
