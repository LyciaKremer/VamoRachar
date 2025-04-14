import 'styled-components';
import { ThemeType } from './themes';

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */