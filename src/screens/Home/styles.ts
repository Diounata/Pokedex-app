import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Container = styled.ScrollView`
  flex: 1;

  padding: 0 16px;
  padding-top: ${getStatusBarHeight() + 24}px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

const PokemonCardsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 24px 0;
  margin-bottom: 60px;
`;

export { Container, PokemonCardsContainer };
