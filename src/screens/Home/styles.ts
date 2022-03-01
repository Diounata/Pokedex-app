import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
`;

export { Container };
