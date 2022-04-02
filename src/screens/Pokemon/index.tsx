import {
  Container,
  HeaderContainer,
  LoadingContainer,
  LoadingText,
  PokemonImgContainer,
} from './styles';
import { SvgUri } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';

import { Header } from '../../components/screens/Pokemon/Header';
import { MainCard } from '../../components/screens/Pokemon/MainCard';

import PokeballPNG from '../../assets/pokeball-background.png';
import ArrowLeftSVG from '../../assets/arrow-right.svg';

import { usePokemon } from '../../contexts/PokemonContext';

export function Pokemon() {
  const { pokemon, typeColor, isPokemonLoading } = usePokemon();

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
          <Image source={PokeballPNG} style={{ position: 'absolute', right: 0 }} />
          <Header />

          <PokemonImgContainer>
            <ArrowLeftSVG style={{ transform: [{ rotate: '-180deg' }] }} />

            <SvgUri
              uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={150}
              height={150}
            />

            <ArrowLeftSVG />
          </PokemonImgContainer>
        </HeaderContainer>

        <MainCard />
      </Container>

      <StatusBar style="light" backgroundColor="transparent" />
    </>
  );
}
