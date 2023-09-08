/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Popover = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiPopover: {
      styleOverrides: {}
    }
  };
};

export default Popover;
