/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const ToggleButton = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiToggleButton: {
      styleOverrides: {}
    }
  };
};

export default ToggleButton;
