import { Meta, StoryObj } from '@storybook/react';
import { TextButton } from './TextButton';
import { FaCoins } from 'react-icons/fa';
import React from 'react';

const meta: Meta<typeof TextButton> = {
  title: 'Atoms/Buttons/TextButton',
  component: TextButton,
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    text: 'Click Me',
    onClick: () => console.log('Clicked'),
  },
};

export const DefaultWithIcon: Story = {
  args: {
    text: 'Click Me',
    onClick: () => console.log('Clicked'),
    icon: <FaCoins />,
  },
};
