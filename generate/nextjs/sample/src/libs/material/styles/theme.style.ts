import { createTheme } from '@mui/material/styles';
import typography from './typography.style';
import palette from './palette.style';
import zIndex from './z-index.style';
import breakpoints from './breakpoints.style';
import { colorVariables } from './variables.style';

export const themeMaterial = createTheme({
  palette: {
    mode: 'light',
    ...palette
  },
  breakpoints: { ...breakpoints },
  typography: { ...typography },
  zIndex: { ...zIndex }
});

export const themeStyledComponent = {
  colors: colorVariables
} as const;
