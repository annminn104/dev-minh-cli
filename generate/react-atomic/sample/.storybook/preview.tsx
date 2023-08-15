import '@storybook/addon-controls/register';
import type { Parameters, Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { withRouter } from 'storybook-addon-react-router-v6';
import { store } from '../src/stores';

const customViewPorts = {
  DesktopBig: {
    name: 'Desktop Big',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1366px',
      height: '768px'
    }
  },
  Desktop13inch: {
    name: 'Desktop 13inch',
    styles: {
      width: '1280px',
      height: '800px'
    }
  },
  IpadPro13inch: {
    name: 'Ipad Pro 12.9inch',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  },
  IpadPro11inch: {
    name: 'Ipad Pro 11inch',
    styles: {
      width: '834px',
      height: '1194px'
    }
  },
  IPad10inch: {
    name: 'Apple iPad 10.2',
    styles: {
      width: '810px',
      height: '1080px'
    }
  },
  Ipad: {
    name: 'Ipad',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  Iphone11ProMax: {
    name: 'Iphone 11 Pro Max',
    styles: {
      width: '414px',
      height: '896px'
    }
  },
  Iphone11Pro: {
    name: 'Iphone 11 Pro',
    styles: {
      width: '375px',
      height: '812px'
    }
  },
  Iphone5: {
    name: 'Iphone 5',
    styles: {
      width: '320px',
      height: '568px'
    }
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    },
    mutations: {
      retry: false
    }
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => null
  }
});

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    current: 'dark'
  },
  layout: 'Desktop Big',
  viewport: { viewports: { ...customViewPorts } }
};

const preview: Preview = {
  parameters: parameters,
  decorators: [
    withRouter,
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <HelmetProvider>
            <Story />
          </HelmetProvider>
        </Provider>
      </QueryClientProvider>
    )
  ]
};

export default preview;
