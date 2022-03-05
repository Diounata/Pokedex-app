import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const Container = styled.View`
  width: ${(deviceWidth - 40) / 2}px;
  height: 140px;

  justify-content: space-between;

  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid #b8b8b8;
  border-radius: 8px;
`;

const PokemonID = styled.Text`
  padding: 4px 8px;

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 8px;
  color: #b8b8b8;
  text-align: right;
`;

const PokemonName = styled.Text`
  width: 100%;

  padding: 4px 8px;

  background-color: #b8b8b8;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  color: #fff;
`;

export { Container, PokemonID, PokemonName };
