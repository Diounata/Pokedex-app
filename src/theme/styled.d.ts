import 'styled-components';
import theme from '.';

declare module 'styled-components' {
  type ThemeProps = typeof theme;

  export interface DefaultTheme extends ThemeProps {}
}
