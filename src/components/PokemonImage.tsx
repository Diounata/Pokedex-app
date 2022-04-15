import { Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

interface Props {
  id: number;
}

export function PokemonImage({ id }: Props) {
  return (
    <>
      {id < 650 ? (
        <SvgUri
          uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          style={{ flex: 1, alignSelf: 'center' }}
          width={90}
          height={90}
        />
      ) : (
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
          style={{
            width: 90,
            height: 90,
            alignSelf: 'center',
          }}
        />
      )}
    </>
  );
}
