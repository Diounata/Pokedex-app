import { Container, TitleContainer, Title } from './styles';

import SearchSVG from '../../assets/search.svg';

export function SearchInput() {
  return (
    <Container>
      <TitleContainer>
        <SearchSVG width={12} height={12} style={{ marginRight: 10 }} />

        <Title>Search</Title>
      </TitleContainer>
    </Container>
  );
}
