import {
  Container,
  StatusContainer,
  Title,
  Value,
  ProgressBar,
  FilledProgressBar,
  UnfilledProgressBar,
} from './styles';

import { usePokemon } from '../../../contexts/PokemonContext';

interface ProgressBarProps {
  percentage: number;
}

function ProgressBarContainer({ percentage }: ProgressBarProps) {
  const { pokemonTypeColor } = usePokemon();

  return (
    <ProgressBar pokemonTypeColor={pokemonTypeColor}>
      <FilledProgressBar percentage={percentage} />
      <UnfilledProgressBar />
    </ProgressBar>
  );
}

export function BaseStats() {
  const { pokemonTypeColor } = usePokemon();

  return (
    <Container>
      <StatusContainer>
        <Title pokemonTypeColor={pokemonTypeColor}>HP</Title>
        <Value>044</Value>
        <ProgressBarContainer percentage={44} />
      </StatusContainer>

      <StatusContainer>
        <Title pokemonTypeColor={pokemonTypeColor}>ATK</Title>
        <Value>048</Value>
        <ProgressBarContainer percentage={48} />
      </StatusContainer>

      <StatusContainer>
        <Title pokemonTypeColor={pokemonTypeColor}>DEF</Title>
        <Value>065</Value>
        <ProgressBarContainer percentage={65} />
      </StatusContainer>

      <StatusContainer>
        <Title pokemonTypeColor={pokemonTypeColor}>SATAK</Title>
        <Value>050</Value>
        <ProgressBarContainer percentage={50} />
      </StatusContainer>

      <StatusContainer>
        <Title pokemonTypeColor={pokemonTypeColor}>SDEF</Title>
        <Value>064</Value>
        <ProgressBarContainer percentage={64} />
      </StatusContainer>

      <StatusContainer>
        <Title pokemonTypeColor={pokemonTypeColor}>SPD</Title>
        <Value>043</Value>
        <ProgressBarContainer percentage={43} />
      </StatusContainer>
    </Container>
  );
}
