/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Radio = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiRadio: {
      styleOverrides: {}
    }
  };
};

export default Radio;
