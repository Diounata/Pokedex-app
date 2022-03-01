import styled from 'styled-components/native';

const Container = styled.View`
  margin-top: 16px;
  padding: 4px 8px;

  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  border-radius: 8px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.MEDIUM_GRAY};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 12px;
`;

const Image = styled.Image`
  margin-right: 8px;
`;

export { Container, TitleContainer, Title, Image };
