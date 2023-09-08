import { FONT_FAMILY_ENUM, FONT_SIZE_ENUM } from '@common/enums';
import { StylesUtils } from '@common/utils';
import { ITypography } from '@mui/material/styles/createTypography';

export default function typography() {
  const typography: ITypography = {
    h1: {
      ...StylesUtils.fontBase(56, 56 * 1.2)
    },
    h2: {
      ...StylesUtils.fontBase(48, 48 * 1.2)
    },
    h3: {
      ...StylesUtils.fontBase(40, 40 * 1.2)
    },
    h4: {
      ...StylesUtils.fontBase(32, 32 * 1.2)
    },
    h5: {
      ...StylesUtils.fontBase(24, 24 * 1.2)
    },
    h6: {
      ...StylesUtils.fontBase(16, 16 * 1.2)
    },
    subtitle1: {
      ...StylesUtils.fontBase(16, 16 * 1.2)
    },
    subtitle2: {
      ...StylesUtils.fontBase(16, 16 * 1.2)
    },
    body1: {
      ...StylesUtils.fontBase(16, 16 * 1.2)
    },
    body2: {
      ...StylesUtils.fontBase(14, 14 * 1.2)
    },
    caption: {
      ...StylesUtils.fontBase(24, 24 * 1.2)
    },
    button: {
      ...StylesUtils.fontBase(16, 16 * 1.2)
    },
    overline: {
      ...StylesUtils.fontBase(16, 16 * 1.2)
    },
    fontFamily: FONT_FAMILY_ENUM.PRIMARY,
    fontSize: FONT_SIZE_ENUM.DEFAULT,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    htmlFontSize: FONT_SIZE_ENUM.DEFAULT,
    pxToRem: (px: number): string => StylesUtils.pxToRem(px)
  } as const;

  return typography;
}
