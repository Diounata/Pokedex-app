import { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

import { StackProps } from './routes/types';
import { useNavigation } from '@react-navigation/native';

interface Props {
  children: ReactNode;
  screen: 'HomeScreen' | 'PokemonScreen';
}

export function NavigationButton({ screen, children }: Props) {
  const navigation = useNavigation<StackProps>();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate(screen)}>
      {children}
    </TouchableOpacity>
  );
}
