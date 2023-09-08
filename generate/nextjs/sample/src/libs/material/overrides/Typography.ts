/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Typography = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiTypography: {}
  };
};

export default Typography;
