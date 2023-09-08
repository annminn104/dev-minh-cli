/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const SpeedDial = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiSpeedDial: {
      styleOverrides: {}
    }
  };
};

export default SpeedDial;
