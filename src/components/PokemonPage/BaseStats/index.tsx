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
  const { typeColor } = usePokemon();

  return (
    <ProgressBar typeColor={typeColor}>
      <FilledProgressBar percentage={percentage} />
      <UnfilledProgressBar />
    </ProgressBar>
  );
}

export function BaseStats() {
  const { typeColor } = usePokemon();

  return (
    <Container>
      <StatusContainer>
        <Title typeColor={typeColor}>HP</Title>
        <Value>044</Value>
        <ProgressBarContainer percentage={44} />
      </StatusContainer>

      <StatusContainer>
        <Title typeColor={typeColor}>ATK</Title>
        <Value>048</Value>
        <ProgressBarContainer percentage={48} />
      </StatusContainer>

      <StatusContainer>
        <Title typeColor={typeColor}>DEF</Title>
        <Value>065</Value>
        <ProgressBarContainer percentage={65} />
      </StatusContainer>

      <StatusContainer>
        <Title typeColor={typeColor}>SATAK</Title>
        <Value>050</Value>
        <ProgressBarContainer percentage={50} />
      </StatusContainer>

      <StatusContainer>
        <Title typeColor={typeColor}>SDEF</Title>
        <Value>064</Value>
        <ProgressBarContainer percentage={64} />
      </StatusContainer>

      <StatusContainer>
        <Title typeColor={typeColor}>SPD</Title>
        <Value>043</Value>
        <ProgressBarContainer percentage={43} />
      </StatusContainer>
    </Container>
  );
}
