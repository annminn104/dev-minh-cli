/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Link = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiLink: {
      styleOverrides: {}
    }
  };
};

export default Link;
