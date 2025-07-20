/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  managerHead: (entry) => {
    if (typeof entry === 'string') {
      return entry + `<link rel="icon" type="image/svg+xml" href="/logo.svg" />`;
    }
    return entry;
  },
};

module.exports = config; 