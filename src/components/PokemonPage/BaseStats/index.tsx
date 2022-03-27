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
  typeColor: string;
}

function ProgressBarContainer({ percentage, typeColor }: ProgressBarProps) {
  return (
    <ProgressBar typeColor={typeColor}>
      <FilledProgressBar percentage={percentage} />
      <UnfilledProgressBar />
    </ProgressBar>
  );
}

export function BaseStats() {
  const { pokemon, typeColor } = usePokemon();

  const BASESTATS_NAME = ['HP', 'ATK', 'DEF', 'SATAK', 'SDEF', 'SPD'];

  const showBaseStat = (stat: number) => String(stat).padStart(3, '0');

  return (
    <Container>
      {pokemon.stats.map(({ base_stat }, key) => (
        <StatusContainer key={key}>
          <Title typeColor={typeColor}>{BASESTATS_NAME[key]}</Title>

          <Value>{showBaseStat(base_stat)}</Value>

          <ProgressBarContainer percentage={base_stat} typeColor={typeColor} />
        </StatusContainer>
      ))}
    </Container>
  );
}
