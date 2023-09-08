import { BREAK_POINT_ENUM } from '@common/enums';
import { Breakpoint, IBreakpoints } from '@mui/system';

const DEFAULT_BREAKPOINTS: IBreakpoints = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],

  values: {
    xs: BREAK_POINT_ENUM.XS,
    sm: BREAK_POINT_ENUM.SM,
    md: BREAK_POINT_ENUM.MD,
    lg: BREAK_POINT_ENUM.LG,
    xl: BREAK_POINT_ENUM.XL
  },

  up: (key: number | Breakpoint): string => {
    const value = typeof key === 'number' ? key : DEFAULT_BREAKPOINTS.values[key];
    return `@media screen and (min-width: ${value}px)`;
  },

  down: function (key: number | Breakpoint): string {
    const value = typeof key === 'number' ? key : DEFAULT_BREAKPOINTS.values[key];
    return `@media screen and (max-width: ${value - 1}px)`;
  },

  between: (start: number | Breakpoint, end: number | Breakpoint): string => {
    const startValue = typeof start === 'number' ? start : DEFAULT_BREAKPOINTS.values[start];
    const endValue = typeof end === 'number' ? end : DEFAULT_BREAKPOINTS.values[end];
    return `@media screen and (min-width: ${startValue}px) and (max-width: ${endValue - 1}px)`;
  },

  only: (key: Breakpoint): string => {
    return DEFAULT_BREAKPOINTS.between(key, key);
  },

  not: (key: Breakpoint): string => {
    return `@media not all and ${DEFAULT_BREAKPOINTS.up(
      key
    )}, not all and ${DEFAULT_BREAKPOINTS.down(key)}`;
  }
};

export default function breakpoints() {
  const breakpoints = {
    ...DEFAULT_BREAKPOINTS
  } as const;

  return breakpoints;
}
