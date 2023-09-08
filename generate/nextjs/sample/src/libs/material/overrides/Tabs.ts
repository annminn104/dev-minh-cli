/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Tabs = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiTabs: {
      styleOverrides: {}
    }
  };
};

export default Tabs;
