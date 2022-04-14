import { PageContainer, Button, Text } from './styles';

import ArrowRightSVG from '../../../../assets/arrow-right-page.svg';

import { usePokemonCard } from '../../../../contexts/PokemonCardContext';

const ArrowLeftSVG: typeof ArrowRightSVG = props => (
  <ArrowRightSVG {...props} style={{ transform: [{ rotate: '-180deg' }] }} />
);

export function Page() {
  const { page, changePage } = usePokemonCard();

  return (
    <>
      {page !== -1 && (
        <PageContainer>
          <Button onPress={() => changePage('back')}>
            <ArrowLeftSVG opacity={page === 1 ? 0.2 : 1} />
            <Text>Back</Text>
          </Button>

          <Text>Page {page}</Text>

          <Button onPress={() => changePage('forward')}>
            <Text>Next</Text>
            <ArrowRightSVG />
          </Button>
        </PageContainer>
      )}
    </>
  );
}
