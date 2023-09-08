/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Divider = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiDivider: {
      styleOverrides: {}
    }
  };
};

export default Divider;
