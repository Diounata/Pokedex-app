import { Container, TypeContainer } from './styles';

import PokemonTypeColors from '../../../../data/PokemonTypeColors';

import { usePokemon } from '../../../../contexts/PokemonContext';
import { PokemonTypeValues } from '../../../../@types/PokemonTypeValues';

export function PokemonType() {
  const { pokemon, uppercaseFirstLetter } = usePokemon();

  function getTypeColor(typeName: PokemonTypeValues): string {
    const colorValue = PokemonTypeColors[typeName];

    return colorValue;
  }

  return (
    <Container>
      {pokemon.types.map(({ type, slot }) => (
        <TypeContainer typeColor={getTypeColor(type.name)} key={slot}>
          {uppercaseFirstLetter(type.name)}
        </TypeContainer>
      ))}
    </Container>
  );
}
