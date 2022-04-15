import { Container, PokemonID, PokemonName } from './styles';

import { NavigationButton } from '../../../NavigationButton';
import { PokemonImage } from '../../../PokemonImage';

import { ColorsProps } from '../../../../theme/ColorsProps';

interface Props {
  pokemon: {
    id: number;
    name: string;
    type: ColorsProps;
  };
}

export function PokemonCard({ pokemon }: Props) {
  const { id, name, type } = pokemon;

  return (
    <Container TYPE={type}>
      <NavigationButton screen="PokemonScreen" pokemonId={id}>
        <PokemonID TYPE={type}>#{String(id).padStart(3, '0')}</PokemonID>

        <PokemonImage id={id} />

        <PokemonName TYPE={type}>{name}</PokemonName>
      </NavigationButton>
    </Container>
  );
}
