/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Menu = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiMenu: {
      styleOverrides: {}
    }
  };
};

export default Menu;
