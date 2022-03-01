import { Container, TitleContainer, Title, Image } from './styles';

import searchImg from '../../assets/search.png';

export function SearchInput() {
  return (
    <Container>
      <TitleContainer>
        <Image source={searchImg} />

        <Title>Search</Title>
      </TitleContainer>
    </Container>
  );
}
