import { Container, HeaderContainer, PokemonImgContainer } from './styles';
import { Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { Header } from '../../components/PokemonPage/Header';
import { MainCard } from '../../components/PokemonPage/MainCard';

import PokeballPNG from '../../assets/pokeball-background.png';
import ArrowLeftSVG from '../../assets/arrow-right.svg';

export function Pokemon() {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <HeaderContainer>
        <Image source={PokeballPNG} style={{ position: 'absolute', right: 0 }} />
        <Header />

        <PokemonImgContainer>
          <ArrowLeftSVG style={{ transform: [{ rotate: '-180deg' }] }} />

          <SvgUri
            uri="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
            width={150}
            height={150}
          />

          <ArrowLeftSVG />
        </PokemonImgContainer>
      </HeaderContainer>

      <MainCard />
    </Container>
  );
}
