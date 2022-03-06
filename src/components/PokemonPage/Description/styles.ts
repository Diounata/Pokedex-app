import styled from 'styled-components/native';

const Container = styled.View`
  margin: 5px 20px;
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 10px;
  line-height: 18px;
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.DARK_GRAY};
`;

export { Container, Text };
