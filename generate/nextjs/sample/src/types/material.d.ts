import { PaletteColor, Breakpoints, ZIndex, Typography, Transitions } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface IPaletteColor extends PaletteColor {}
  interface IPalette extends Palette {}
}

declare module '@mui/system' {
  interface IBreakpoints extends Breakpoints {}
}

declare module '@mui/material/styles/zIndex' {
  interface IZIndex extends ZIndex {}
}

declare module '@mui/material/styles/createTypography' {
  interface ITypography extends Typography {}
}

declare module '@mui/material/styles/createTransitions' {
  interface ITransitions extends Transitions {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {}
}
