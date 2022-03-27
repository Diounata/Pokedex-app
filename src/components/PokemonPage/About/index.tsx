import {
  Container,
  DataContainer,
  MiddleDataContainer,
  DataField,
  MovesText,
  Data,
  Title,
} from './styles';
import { View } from 'react-native';

import BalanceSVG from '../../../assets/balance.svg';
import RulerSVG from '../../../assets/ruler.svg';

import { convert } from '../../../utils/ConvertUnit';
import { usePokemon } from '../../../contexts/PokemonContext';

export function About() {
  const { pokemon, uppercaseFirstLetter } = usePokemon();

  const height = convert.decimeterToMeter(pokemon.height);
  const weight = convert.hectogramToKilogram(pokemon.weight);

  const [move1, move2] = pokemon.moves.map(move => move.move.name);

  return (
    <Container>
      <DataContainer>
        <DataField>
          <BalanceSVG />
          <Data>{weight} kg</Data>
        </DataField>

        <Title>Weight</Title>
      </DataContainer>

      <MiddleDataContainer>
        <DataField>
          <RulerSVG />
          <Data>{height} m</Data>
        </DataField>

        <Title>Height</Title>
      </MiddleDataContainer>

      <DataContainer>
        <View>
          <MovesText>{uppercaseFirstLetter(move1)}</MovesText>
          <MovesText>{uppercaseFirstLetter(move2)}</MovesText>
        </View>

        <Title>Moves</Title>
      </DataContainer>
    </Container>
  );
}
