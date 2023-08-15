import { Suspense } from 'react';

import { useAppRoutes } from './app.routing';

import './index.scss';

export default function AppRoute() {
  const appRoutes = useAppRoutes();

  return <Suspense fallback={<>loading...</>}>{appRoutes}</Suspense>;
}
