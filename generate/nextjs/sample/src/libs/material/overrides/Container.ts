/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Container = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiContainer: {
      styleOverrides: {}
    }
  };
};

export default Container;
