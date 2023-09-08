/** @type {import('@storybook/nextjs').StorybookConfig} */
const config = {
  stories: ['../src/documents/*.mdx', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    'storybook-dark-mode',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true, transcludeMarkdown: true }
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass')
        }
      }
    },
    '@storybook/addon-actions',
    '@storybook/addon-controls'
  ],
  docs: { autodocs: 'tag' },
  features: {
    storyStoreV7: true
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  }
};

export default config;
