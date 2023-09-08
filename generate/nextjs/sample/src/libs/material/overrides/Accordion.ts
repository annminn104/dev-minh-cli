/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const Accordion = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiAccordion: {
      styleOverrides: {}
    }
  };
};

export default Accordion;
