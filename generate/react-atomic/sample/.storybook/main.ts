import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true, transcludeMarkdown: true }
    },
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/preset-create-react-app',
    'storybook-addon-react-router-v6',
  ],
  core: {
    builder: '@storybook/builder-vite'
  },
  typescript: { reactDocgen: 'react-docgen' },
  framework: { name: '@storybook/react-vite', options: {} },
  docs: { autodocs: 'tag' },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: { additionalData: `@import "~/App.scss";` }
        }
      },
      resolve: {
        alias: { '~': path.resolve(__dirname, '../src') }
      }
    });
  }
};
export default config;
