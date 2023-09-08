import { IZIndex } from '@mui/material/styles/zIndex';

const DEFAULT_Z_INDEX: IZIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

export default function zIndex() {
  const zIndex = {
    ...DEFAULT_Z_INDEX
  } as const;

  return zIndex;
}
