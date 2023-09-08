/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Skeleton = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiSkeleton: {
      styleOverrides: {}
    }
  };
};

export default Skeleton;
