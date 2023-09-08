/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const ButtonGroup = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiButtonGroup: {
      styleOverrides: {}
    }
  };
};

export default ButtonGroup;
