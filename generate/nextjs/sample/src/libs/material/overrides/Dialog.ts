/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Dialog = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiDialog: {
      styleOverrides: {}
    }
  };
};

export default Dialog;
