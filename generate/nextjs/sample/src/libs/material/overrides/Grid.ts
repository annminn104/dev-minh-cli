/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Grid = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiGrid: {
      styleOverrides: {}
    }
  };
};

export default Grid;
