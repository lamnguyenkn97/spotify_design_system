import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/styles';
import React from 'react';

const preview: Preview = {
  parameters: {
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
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
};

export default preview;
