import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Container = styled.ScrollView`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;

  background-color: ${({ theme }) => theme.COLORS.TYPE_WATER};
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
