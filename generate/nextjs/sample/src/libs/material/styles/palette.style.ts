import { colorVariables } from './variables.style';
import { alpha } from '@mui/material/styles';
import {
  CommonColors,
  IPalette,
  IPaletteColor,
  PaletteAugmentColorOptions
} from '@mui/material/styles/createPalette';

const COMMON: CommonColors = {
  black: colorVariables.black,
  white: colorVariables.white
};

const PRIMARY: IPaletteColor = {
  main: '#1976d2',
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: colorVariables.white
};

const SECONDARY: IPaletteColor = {
  main: '#9c27b0',
  light: '#ba68c8',
  dark: '#7b1fa2',
  contrastText: colorVariables.white
};

const ERROR: IPaletteColor = {
  main: '#d32f2f',
  light: '#ef5350',
  dark: '#c62828',
  contrastText: colorVariables.white
};

const WARNING: IPaletteColor = {
  main: '#ed6c02',
  light: '#ff9800',
  dark: '#e65100',
  contrastText: colorVariables.white
};

const INFO: IPaletteColor = {
  main: '#0288d1',
  light: '#03a9f4',
  dark: '#01579b',
  contrastText: colorVariables.white
};

const SUCCESS: IPaletteColor = {
  main: '#2e7d32',
  light: '#4caf50',
  dark: '#1b5e20',
  contrastText: colorVariables.white
};

const GREY = {
  0: '#fff',
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};

const DEFAULT_PALETTE: IPalette = {
  common: COMMON,
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  text: {
    primary: alpha(COMMON['black'], 0.087),
    secondary: alpha(COMMON['black'], 0.6),
    disabled: alpha(COMMON['black'], 0.38)
  },
  divider: alpha(COMMON['black'], 0.12),
  action: {
    active: alpha(COMMON['black'], 0.54),
    hover: alpha(COMMON['black'], 0.04),
    hoverOpacity: 0.04,
    selected: alpha(COMMON['black'], 0.08),
    selectedOpacity: 0.08,
    disabled: alpha(COMMON['black'], 0.26),
    disabledBackground: alpha(COMMON['black'], 0.12),
    disabledOpacity: 0.38,
    focus: alpha(COMMON['black'], 0.12),
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  },
  mode: 'light',
  contrastThreshold: 0,
  tonalOffset: 0,
  background: {
    paper: COMMON['white'],
    default: COMMON['white']
  },
  getContrastText: function (background: string): string {
    return background;
  },
  augmentColor: function (options: PaletteAugmentColorOptions): IPaletteColor {
    return options.color as IPaletteColor;
  }
};

export default function palette(themeMode: 'light' | 'dark') {
  const light = {
    ...DEFAULT_PALETTE,
    mode: 'light'
  } as const;

  const dark = {
    ...DEFAULT_PALETTE,
    mode: 'dark'
  } as const;

  return themeMode === 'light' ? light : dark;
}
