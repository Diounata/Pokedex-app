import { Container, TitleContainer, Title, IDText } from './styles';

import ArrowLeftSVG from '../../../assets/arrow-left.svg';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <ArrowLeftSVG width={24} height={24} style={{ marginRight: 16 }} />
        <Title>Squirtle</Title>
      </TitleContainer>

      <IDText>#007</IDText>
    </Container>
  );
}
