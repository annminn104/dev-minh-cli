import 'styled-components';
import { themeStyledComponent } from '@libs/material/styles';

type Theme = typeof themeStyledComponent;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
