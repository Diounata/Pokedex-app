import { Container, PokemonID, PokemonName } from './styles';

import { SvgUri } from 'react-native-svg';
import { ColorsProps } from '../../../theme/ColorsProps';

interface Props {
  pokemon: {
    id: number;
    name: string;
    type: ColorsProps;
  };
}

export function PokemonCard({ pokemon }: Props) {
  const { id, name, type } = pokemon;

  return (
    <Container TYPE={type}>
      <PokemonID TYPE={type}>#{String(id).padStart(3, '0')}</PokemonID>

      <SvgUri
        uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        style={{ flex: 1, alignSelf: 'center' }}
        width={90}
        height={90}
      />

      <PokemonName TYPE={type}>{name}</PokemonName>
    </Container>
  );
}
