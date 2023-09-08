/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Slack = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiStack: {
      styleOverrides: {}
    }
  };
};

export default Slack;
