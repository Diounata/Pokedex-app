import styled from 'styled-components/native';

import { PokemonTypeProps } from '../../../contexts/PokemonContext';

const Container = styled.View`
  margin: 0 12px;
  margin-bottom: 40px;
  padding-bottom: 20px;

  background: #fff;
  border-radius: 8px;
`;

const Title = styled.Text<PokemonTypeProps>`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px;
  color: ${({ typeColor }) => typeColor};
  text-align: center;

  margin-top: 20px;
`;

export { Container, Title };
