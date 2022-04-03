import { Container } from './styles';
import { TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';

import ArrowLeftSVG from '../../../../assets/arrow-right.svg';

import { usePokemon } from '../../../../contexts/PokemonContext';

interface Props {
  id: number;
  isTurnToRight?: boolean;
}

function ChangePokemonButton({ id, isTurnToRight }: Props) {
  const { updatePokemonData, updatePokemonLoading } = usePokemon();

  const isButtonInvalid = (isTurnToRight && id + 1 === 1) || (!isTurnToRight && id + 1 === 898);

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

      <SvgUri
        uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={150}
        height={150}
      />

      <ChangePokemonButton id={pokemon.id + 1} />
    </Container>
  );
}
