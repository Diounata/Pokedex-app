import { PageContainer, Text } from './styles';
import { TouchableOpacity } from 'react-native';

import ArrowRightSVG from '../../../../assets/arrow-right-page.svg';

const ArrowLeftSVG: typeof ArrowRightSVG = props => (
  <ArrowRightSVG {...props} style={{ transform: [{ rotate: '-180deg' }] }} />
);

interface Props {
  page: number;
  changePage(direction: 'back' | 'forward'): void;
}

export function Page({ page, changePage }: Props) {
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
