import { Container, TitleContainer, Title, IDText } from './styles';

import ArrowLeftSVG from '../../../../assets/arrow-left.svg';

import { NavigationButton } from '../../../NavigationButton';
import { usePokemon } from '../../../../contexts/PokemonContext';

export function Header() {
  const { pokemon, uppercaseFirstLetter } = usePokemon();

  const id = String(pokemon.id).padStart(3, '0');

  return (
    <Container>
      <TitleContainer>
        <NavigationButton screen="HomeScreen">
          <ArrowLeftSVG width={24} height={24} style={{ marginRight: 16 }} />
        </NavigationButton>

        <Title>{uppercaseFirstLetter(pokemon.name)}</Title>
      </TitleContainer>

      <IDText>#{id}</IDText>
    </Container>
  );
}
