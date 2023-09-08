/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Progress = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiCircularProgress: {
      styleOverrides: {}
    },
    MuiLinearProgress: {
      styleOverrides: {}
    }
  };
};

export default Progress;
