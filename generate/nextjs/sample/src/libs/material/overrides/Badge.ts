/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Badge = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiBadge: {
      styleOverrides: {}
    }
  };
};

export default Badge;
