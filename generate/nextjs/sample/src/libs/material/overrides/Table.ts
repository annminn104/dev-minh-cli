/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Table = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiTable: {
      styleOverrides: {}
    }
  };
};

export default Table;
