/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Alert = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiAlert: {
      styleOverrides: {}
    }
  };
};

export default Alert;
