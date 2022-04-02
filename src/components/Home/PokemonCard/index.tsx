import { Container, PokemonID, PokemonName } from './styles';
import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SvgUri } from 'react-native-svg';
import { ColorsProps } from '../../../theme/ColorsProps';
import { StackProps } from '../../routes/types';

interface Props {
  pokemon: {
    id: number;
    name: string;
    type: ColorsProps;
  };
}

export function PokemonCard({ pokemon }: Props) {
  const { id, name, type } = pokemon;

  const navigation = useNavigation<StackProps>();

  return (
    <Container TYPE={type}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('PokemonScreen')}>
        <PokemonID TYPE={type}>#{String(id).padStart(3, '0')}</PokemonID>

        <SvgUri
          uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          style={{ flex: 1, alignSelf: 'center' }}
          width={90}
          height={90}
        />

        <PokemonName TYPE={type}>{name}</PokemonName>
      </TouchableOpacity>
    </Container>
  );
}
