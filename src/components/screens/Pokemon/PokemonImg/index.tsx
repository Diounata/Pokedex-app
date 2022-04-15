import { Container } from './styles';
import { TouchableOpacity } from 'react-native';

import ArrowLeftSVG from '../../../../assets/arrow-right.svg';

import { usePokemon } from '../../../../contexts/PokemonContext';
import { PokemonImage } from '../../../PokemonImage';

interface Props {
  id: number;
  isTurnToRight?: boolean;
}

function ChangePokemonButton({ id, isTurnToRight }: Props) {
  const { updatePokemonData, updatePokemonLoading } = usePokemon();

  const isButtonInvalid = (isTurnToRight && id + 1 === 1) || (!isTurnToRight && id + 1 === 900);

  function changePokemon(id: number): void {
    updatePokemonLoading(true);
    updatePokemonData(id);
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => changePokemon(id)}
      disabled={isButtonInvalid}
    >
      <ArrowLeftSVG
        style={{ transform: [{ rotate: isTurnToRight ? '-180deg' : '0deg' }] }}
        opacity={isButtonInvalid ? 0 : 1}
      />
    </TouchableOpacity>
  );
}

export function PokemonImg() {
  const { pokemon } = usePokemon();

  return (
    <Container>
      <ChangePokemonButton id={pokemon.id - 1} isTurnToRight />

      <PokemonImage id={pokemon.id} />

      <ChangePokemonButton id={pokemon.id + 1} />
    </Container>
  );
}
