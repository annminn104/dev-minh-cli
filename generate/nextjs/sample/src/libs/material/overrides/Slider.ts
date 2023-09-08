/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Slider = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiSlider: {
      styleOverrides: {}
    }
  };
};

export default Slider;
