import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationStackProps = {
  HomeScreen: undefined;
  PokemonScreen: undefined;
};

type StackProps = NativeStackNavigationProp<NavigationStackProps>;

export type { NavigationStackProps, StackProps };
