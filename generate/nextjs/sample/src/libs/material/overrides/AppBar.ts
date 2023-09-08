/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const AppBar = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiAppBar: {
      styleOverrides: {}
    }
  };
};

export default AppBar;
