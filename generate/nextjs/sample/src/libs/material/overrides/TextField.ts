/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const TextField = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiTextField: {
      styleOverrides: {}
    }
  };
};

export default TextField;
