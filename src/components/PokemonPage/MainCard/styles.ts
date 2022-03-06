import styled from 'styled-components/native';

const Container = styled.View`
  /* flex: 1; */

  margin: 0 12px;
  margin-bottom: 40px;
  padding-bottom: 20px;

  background: #fff;
  border-radius: 8px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TYPE_WATER};
  text-align: center;

  margin-top: 20px;
`;

export { Container, Title };
