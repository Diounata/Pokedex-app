import { Container, PokemonID, PokemonName } from './styles';
import { Image } from 'react-native';

export function PokemonCard() {
  return (
    <Container>
      <PokemonID>#999</PokemonID>

      <Image
        source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' }}
        style={{ flex: 1, width: '80%', alignSelf: 'center' }}
      />

      <PokemonName>Pokémon</PokemonName>
    </Container>
  );
}
