import { FONT_SIZE_ENUM } from '@common/enums';
import { createGlobalStyle, css } from 'styled-components';
import { StylesUtils } from '@common/utils';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

${({ theme }) => css`
  html {
    font-size: ${StylesUtils.pxToRem(FONT_SIZE_ENUM.DEFAULT)};
    color: ${theme.colors.white};
    &::view-transition-group(*) {
      position: absolute;
      top: 0;
      left: 0;
      animation-duration: 0.25s;
      animation-fill-mode: both;
    }
  }
`}
`;
