import { PageContainer, Text } from './styles';
import { TouchableOpacity } from 'react-native';

import ArrowRightSVG from '../../../../assets/arrow-right-page.svg';
import { usePokemonCard } from '../../../../contexts/PokemonCardContext';

const ArrowLeftSVG: typeof ArrowRightSVG = props => (
  <ArrowRightSVG {...props} style={{ transform: [{ rotate: '-180deg' }] }} />
);

export function Page() {
  const { page, changePage } = usePokemonCard();

  return (
    <PageContainer>
      <TouchableOpacity onPress={() => changePage('back')}>
        <ArrowLeftSVG opacity={page === 1 ? 0.2 : 1} />
      </TouchableOpacity>

      <Text>Page {page}</Text>

      <TouchableOpacity onPress={() => changePage('forward')}>
        <ArrowRightSVG />
      </TouchableOpacity>
    </PageContainer>
  );
}
