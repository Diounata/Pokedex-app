import {
  Container,
  StatusContainer,
  Title,
  Value,
  ProgressBar,
  FilledProgressBar,
  UnfilledProgressBar,
} from './styles';

interface ProgressBarProps {
  percentage: number;
}

function ProgressBarContainer({ percentage }: ProgressBarProps) {
  return (
    <ProgressBar>
      <FilledProgressBar percentage={percentage} />
      <UnfilledProgressBar />
    </ProgressBar>
  );
}

export function BaseStats() {
  return (
    <Container>
      <StatusContainer>
        <Title>HP</Title>
        <Value>044</Value>
        <ProgressBarContainer percentage={44} />
      </StatusContainer>

      <StatusContainer>
        <Title>ATK</Title>
        <Value>048</Value>
        <ProgressBarContainer percentage={48} />
      </StatusContainer>

      <StatusContainer>
        <Title>DEF</Title>
        <Value>065</Value>
        <ProgressBarContainer percentage={65} />
      </StatusContainer>

      <StatusContainer>
        <Title>SATAK</Title>
        <Value>050</Value>
        <ProgressBarContainer percentage={50} />
      </StatusContainer>

      <StatusContainer>
        <Title>SDEF</Title>
        <Value>064</Value>
        <ProgressBarContainer percentage={64} />
      </StatusContainer>

      <StatusContainer>
        <Title>SPD</Title>
        <Value>043</Value>
        <ProgressBarContainer percentage={43} />
      </StatusContainer>
    </Container>
  );
}
