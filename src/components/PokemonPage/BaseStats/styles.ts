import styled from 'styled-components/native';

import { PokemonTypeProps } from '../../../contexts/PokemonContext';

const Container = styled.View`
  margin: 0 20px;
`;

const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text<PokemonTypeProps>`
  width: 53px;

  margin-right: 8px;
  padding: 6px 8px;
  padding-left: 0px;

  border-width: 0px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 13px;
  color: ${({ typeColor }) => typeColor};
  text-align: right;
`;

const Value = styled.Text`
  width: 35px;

  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

const ProgressBar = styled.View<PokemonTypeProps>`
  flex: 1;
  flex-direction: row;

  height: 5px;

  background-color: ${({ typeColor }) => typeColor};
  border-radius: 4px;
`;

const FilledProgressBar = styled.View<{ percentage: number }>`
  width: ${props => props.percentage}%;
  height: 5px;
`;

const UnfilledProgressBar = styled.View`
  flex: 1;
  height: 5px;

  background-color: #fff;
  opacity: 0.7;
`;

export {
  Container,
  StatusContainer,
  Title,
  Value,
  ProgressBar,
  FilledProgressBar,
  UnfilledProgressBar,
};
