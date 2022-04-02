import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

import { StackProps } from './routes/types';
import { useNavigation } from '@react-navigation/native';
import { usePokemon } from '../contexts/PokemonContext';

interface Props {
  children: ReactNode;
  screen: 'HomeScreen' | 'PokemonScreen';
  pokemonId?: number;
}

export function NavigationButton({ screen, children, pokemonId }: Props) {
  const navigation = useNavigation<StackProps>();
  const { updatePokemonData, updatePokemonLoading } = usePokemon();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate(screen);

        if (pokemonId) updatePokemonData(pokemonId);
        else updatePokemonLoading(true);
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
