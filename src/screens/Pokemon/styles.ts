import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { PokemonTypeProps } from '../../contexts/PokemonContext';

const Container = styled.ScrollView<PokemonTypeProps>`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;

  background-color: ${({ pokemonTypeColor }) => pokemonTypeColor};
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

export { Container, HeaderContainer, PokemonImgContainer };
