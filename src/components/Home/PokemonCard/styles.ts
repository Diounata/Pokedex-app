import styled from 'styled-components/native';
import { ColorsProps } from '../../../theme/ColorsProps';

import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const Container = styled.View<{ TYPE: ColorsProps }>`
  width: ${(deviceWidth - 40) / 2}px;
  height: 140px;

  justify-content: space-between;

  margin-bottom: 10px;

  border: 1px solid ${({ theme, TYPE }) => theme.COLORS[TYPE]};
  border-radius: 8px;
`;

const PokemonID = styled.Text<{ TYPE: ColorsProps }>`
  padding: 4px 8px;

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 8px;
  color: ${({ theme, TYPE }) => theme.COLORS[TYPE]};
  text-align: right;
`;

const PokemonName = styled.Text<{ TYPE: ColorsProps }>`
  width: 100%;

  padding: 4px 8px;

  background-color: ${({ theme, TYPE }) => theme.COLORS[TYPE]};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 11px;
  color: #fff;
  text-align: center;
`;

export { Container, PokemonID, PokemonName };
