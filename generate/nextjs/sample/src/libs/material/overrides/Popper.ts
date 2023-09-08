/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Popper = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiPopper: {
      defaultProps: {}
    }
  };
};

export default Popper;
