import {
  Container,
  HeaderContainer,
  LoadingContainer,
  LoadingText,
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import { Header } from '../../components/screens/Pokemon/Header';
import { MainCard } from '../../components/screens/Pokemon/MainCard';

import PokeballPNG from '../../assets/pokeball-background.png';

import { usePokemon } from '../../contexts/PokemonContext';
import { PokemonImg } from '../../components/screens/Pokemon/PokemonImg';

export function Pokemon() {
  const { typeColor, isPokemonLoading } = usePokemon();

  if (isPokemonLoading)
    return (
      <LoadingContainer>
        <LoadingText>Loading data...</LoadingText>

        <StatusBar style="dark" />
      </LoadingContainer>
    );

  return (
    <>
      <Container typeColor={typeColor} showsVerticalScrollIndicator={false}>
        <HeaderContainer>
          <Header />
          <PokemonImg />

          <Image source={PokeballPNG} style={{ position: 'absolute', right: 0 }} />
        </HeaderContainer>

        <MainCard />
      </Container>

      <StatusBar style="light" backgroundColor="transparent" />
    </>
  );
}
