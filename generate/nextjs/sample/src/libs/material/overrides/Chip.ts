/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Chip = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiChip: {
      styleOverrides: {}
    }
  };
};

export default Chip;
