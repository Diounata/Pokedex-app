import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 24px;
`;

const PokeballImage = styled.Image`
  width: 24px;
  height: 24px;

  margin-right: 16px;
`;

const SortContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export { Container, TitleContainer, Title, PokeballImage, SortContainer };
