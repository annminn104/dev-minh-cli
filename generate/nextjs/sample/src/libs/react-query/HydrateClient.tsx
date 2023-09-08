'use client';

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query';

export const Hydrate = (props: HydrateProps) => {
  return <RQHydrate {...props} />;
};
