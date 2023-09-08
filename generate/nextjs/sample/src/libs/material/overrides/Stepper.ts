/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Stepper = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiStepper: {
      styleOverrides: {}
    }
  };
};

export default Stepper;
