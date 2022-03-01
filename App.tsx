import AppLoading from 'expo-app-loading';

import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { ThemeProvider } from 'styled-components';
import THEME from './src/theme';

import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={THEME}>
      <Home />
    </ThemeProvider>
  );
}
