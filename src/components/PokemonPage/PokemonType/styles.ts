import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: center;

  margin: 56px 0;
`;

const TypeContainer = styled.Text`
  padding: 2px 16px;
  padding-top: 4px;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 10px;
  text-align: center;
  color: #fff;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.TYPE_WATER};
`;

export { Container, TypeContainer };
