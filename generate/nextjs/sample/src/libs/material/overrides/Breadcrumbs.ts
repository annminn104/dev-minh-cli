/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Breadcrumbs = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {}
    }
  };
};

export default Breadcrumbs;
