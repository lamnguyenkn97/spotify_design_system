import { Meta, StoryObj } from '@storybook/react';
import { DividerProps } from './Divider.types';
import { Divider } from './Divider';

const meta: Meta<DividerProps> = {
  title: 'Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    thickness: { control: { type: 'number', min: 1, max: 10 } },
    color: { control: 'color' },
    margin: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'dashed', 'dotted', 'double'],
      },
    },
    vertical: { control: 'boolean' },
    height: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<DividerProps>;

export const Default: Story = {
  args: {
    thickness: 1,
    color: 'rgba(255, 255, 255, 0.1)',
    margin: '8px 0',
    variant: 'solid',
    vertical: false,
  },
};

export const VerticalDivider: Story = {
  args: {
    thickness: 2,
    color: 'rgba(255, 255, 255, 0.3)',
    variant: 'solid',
    vertical: true,
    height: '50px',
  },
};

export const DashedDivider: Story = {
  args: {
    thickness: 2,
    color: 'rgba(255, 255, 255, 0.3)',
    margin: '16px 0',
    variant: 'dashed',
    vertical: false,
  },
};

export const DottedDivider: Story = {
  args: {
    thickness: 3,
    color: 'rgba(255, 255, 255, 0.5)',
    margin: '12px 0',
    variant: 'dotted',
    vertical: false,
  },
};

export const DoubleDivider: Story = {
  args: {
    thickness: 4,
    color: 'rgba(255, 255, 255, 0.7)',
    margin: '20px 0',
    variant: 'double',
    vertical: false,
  },
};
