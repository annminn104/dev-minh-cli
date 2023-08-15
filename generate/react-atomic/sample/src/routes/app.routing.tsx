import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import ProtectedGuard from './protected.guard';
import RejectedGuard from './rejected.guard';

// Layouts
const ExampleLayout = React.lazy(() => import('~/containers/Example'));

// Page Private
const PrivatePage = React.lazy(() => import('~/pages/Private'));

// Page Public
const PublicPage = React.lazy(() => import('~/pages/Public'));

export const useAppRoutes = () => {
  const appRoutes = useRoutes([
    {
      path: '',
      element: (
        <Suspense>
          <ExampleLayout />
        </Suspense>
      ),
      children: [
        {
          path: '',
          element: (
            <Suspense>
              <RejectedGuard />
            </Suspense>
          ),
          children: [
            {
              path: 'public',
              element: (
                <Suspense>
                  <PublicPage />
                </Suspense>
              )
            }
          ]
        },
        {
          path: '',
          element: (
            <Suspense>
              <ProtectedGuard />
            </Suspense>
          ),
          children: [
            {
              path: 'private',
              element: (
                <Suspense>
                  <PrivatePage />
                </Suspense>
              )
            }
          ]
        }
      ]
    }
  ]);

  return appRoutes;
};
