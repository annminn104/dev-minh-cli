/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Autocomplete = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiAutocomplete: {
      styleOverrides: {}
    }
  };
};

export default Autocomplete;
