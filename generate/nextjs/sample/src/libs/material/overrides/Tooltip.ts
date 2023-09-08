/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Tooltip = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiTooltip: {
      styleOverrides: {}
    }
  };
};

export default Tooltip;
