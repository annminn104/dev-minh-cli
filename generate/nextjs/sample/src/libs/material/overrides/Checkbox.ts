/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Checkbox = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiCheckbox: {
      styleOverrides: {}
    }
  };
};

export default Checkbox;
