import { PageContainer, Text } from './styles';

import ArrowRightSVG from '../../../../assets/arrow-right-page.svg';

export function Page() {
  return (
    <PageContainer>
      <ArrowRightSVG style={{ transform: [{ rotate: '-180deg' }] }} />

      <Text>Page 1</Text>

      <ArrowRightSVG />
    </PageContainer>
  );
}
