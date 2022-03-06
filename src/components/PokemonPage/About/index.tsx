import { Container, DataContainer, MiddleDataContainer, DataField, MovesText, Data, Title } from './styles';
import { View } from 'react-native';

import BalanceSVG from '../../../assets/balance.svg';
import RulerSVG from '../../../assets/ruler.svg';

export function About() {
  return (
    <Container>
      <DataContainer>
        <DataField>
          <BalanceSVG />
          <Data>9.0 kg</Data>
        </DataField>

        <Title>Weight</Title>
      </DataContainer>

      <MiddleDataContainer>
        <DataField>
          <RulerSVG />
          <Data>0.5 m</Data>
        </DataField>

        <Title>Height</Title>
      </MiddleDataContainer>

      <DataContainer>
        <View>
          <MovesText>Torrent</MovesText>
          <MovesText>Rain-Dish</MovesText>
        </View>

        <Title>Moves</Title>
      </DataContainer>
    </Container>
  );
}
