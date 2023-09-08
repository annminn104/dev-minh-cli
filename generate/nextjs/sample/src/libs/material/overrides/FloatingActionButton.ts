/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const FloatingActionButton = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiFab: {
      styleOverrides: {}
    }
  };
};

export default FloatingActionButton;
