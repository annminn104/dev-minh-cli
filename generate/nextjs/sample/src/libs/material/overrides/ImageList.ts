/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme, Components } from '@mui/material/styles';

const ImageList = (theme: Theme): Components<Omit<Theme, 'components'>> => {
  return {
    MuiImageList: {
      styleOverrides: {}
    }
  };
};

export default ImageList;
