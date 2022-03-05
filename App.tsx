import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components/native';
import THEME from './src/theme';

import { Home } from './src/screens/Home';
import { Pokemon } from './src/screens/Pokemon';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={THEME}>
      <Pokemon />

      <StatusBar style="light" backgroundColor="#6493EB" />
    </ThemeProvider>
  );
}
