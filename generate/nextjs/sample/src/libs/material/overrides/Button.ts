/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Button = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '12px 20px'
        }
      }
    }
  };
};

export default Button;
