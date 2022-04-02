import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../../screens/Home';
import { Pokemon } from '../../screens/Pokemon';

import { NavigationStackProps } from './types';

const { Navigator, Screen } = createNativeStackNavigator<NavigationStackProps>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
        <Screen name="HomeScreen" component={Home} />
        <Screen name="PokemonScreen" component={Pokemon} />
      </Navigator>
    </NavigationContainer>
  );
}
