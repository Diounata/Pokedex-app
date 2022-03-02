import { Container, TitleContainer, Title } from './styles';

import { AntDesign } from '@expo/vector-icons';

export function SearchInput() {
  return (
    <Container>
      <TitleContainer>
        <AntDesign name="search1" size={12} color="#666" style={{ marginRight: 10 }} />

        <Title>Search</Title>
      </TitleContainer>
    </Container>
  );
}
