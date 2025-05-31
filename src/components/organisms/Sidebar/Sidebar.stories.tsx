import React from 'react';
import { Sidebar } from './Sidebar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: () => <Sidebar />,
}; 