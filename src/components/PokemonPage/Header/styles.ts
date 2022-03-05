import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 24px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 3px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: #fff;
`;

const IDText = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: #fff;
`;

export { Container, TitleContainer, Title, IDText };
