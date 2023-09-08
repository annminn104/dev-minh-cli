import { StylesUtils } from '@common/utils';
import { ITransitions } from '@mui/material/styles/createTransitions';

export default function transitions() {
  const transitions: ITransitions = {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
    create: (props, options) => StylesUtils.transitions(props, options),
    getAutoHeightDuration: (height) => StylesUtils.autoHeightDurationTransition(height)
  };

  return transitions;
}
