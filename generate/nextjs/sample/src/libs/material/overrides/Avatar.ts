/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Avatar = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiAvatar: {
      styleOverrides: {}
    }
  };
};

export default Avatar;
