import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { PokemonTypeProps } from '../../contexts/PokemonContext';

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 20px;
`;

const Container = styled.ScrollView<PokemonTypeProps>`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;

  background-color: ${({ typeColor }) => typeColor};
`;

const HeaderContainer = styled.View`
  justify-content: space-between;

  height: 180px;

  margin: 24px;
`;

const PokemonImgContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: relative;
  top: 50px;
  z-index: 2;
`;

export { LoadingContainer, LoadingText, Container, HeaderContainer, PokemonImgContainer };
