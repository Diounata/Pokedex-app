import { Container, TitleContainer, Title, IDText } from './styles';

import ArrowLeftSVG from '../../../../assets/arrow-left.svg';

import { usePokemon } from '../../../../contexts/PokemonContext';
import { useNavigation } from '@react-navigation/native';

import { StackProps } from '../../../routes/types';
import { TouchableOpacity } from 'react-native';

export function Header() {
  const { pokemon, uppercaseFirstLetter } = usePokemon();
  const navigation = useNavigation<StackProps>();

  const id = String(pokemon.id).padStart(3, '0');

  return (
    <Container>
      <TitleContainer>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('HomeScreen')}>
          <ArrowLeftSVG width={24} height={24} style={{ marginRight: 16 }} />
        </TouchableOpacity>

        <Title>{uppercaseFirstLetter(pokemon.name)}</Title>
      </TitleContainer>

      <IDText>#{id}</IDText>
    </Container>
  );
}
