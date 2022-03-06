import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;

  margin: 12px;
  margin-top: 0;

  background: #fff;
  border-radius: 8px;
`;

const AboutContainer = styled.View`
  margin-top: 20px;
`;

const AboutTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TYPE_WATER};
  text-align: center;
`;

export { Container, AboutContainer, AboutTitle };
