import type { Preview } from '@storybook/react';
import { ThemeProvider, GlobalStyle } from '../src/styles';
import React from 'react';

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        state: 'open', // Show code snippets by default
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    sorting: {
      method: 'configure',
      order: [
        'Atoms',
        ['Button', ['Button', 'TextButton']],
        ['Typography', ['Text', 'TextLink']],
        ['Input', ['SearchInput']],
        ['Icon', ['Icon']],
        'Molecules',
        ['Card', ['Card']],
        ['Footer', ['Footer']],
        ['Banner', ['Banner']],
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
