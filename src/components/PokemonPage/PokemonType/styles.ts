import styled from 'styled-components/native';

import { PokemonTypeProps } from '../../../contexts/PokemonContext';

const Container = styled.View`
  flex-direction: row;
  justify-content: center;

  margin-top: 56px;
`;

const TypeContainer = styled.Text<PokemonTypeProps>`
  margin: 0 8px;
  padding: 2px 16px;
  padding-top: 4px;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 10px;
  text-align: center;
  color: #fff;

  border-radius: 20px;
  background-color: ${({ pokemonTypeColor }) => pokemonTypeColor};
`;

export { Container, TypeContainer };
