import AppLoading from 'expo-app-loading';

import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components/native';
import { PokemonProvider } from './src/contexts/PokemonContext';
import { PokemonCardProvider } from './src/contexts/PokemonCardContext';
import THEME from './src/theme';

import Routes from './src/components/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={THEME}>
      <PokemonProvider>
        <PokemonCardProvider>
          <Routes />
        </PokemonCardProvider>
      </PokemonProvider>
    </ThemeProvider>
  );
}
