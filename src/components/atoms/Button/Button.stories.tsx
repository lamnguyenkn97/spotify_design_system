import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
      description: 'The style variant of the button',
      table: {
        type: { summary: Object.values(ButtonVariant).join(' | ') },
        defaultValue: { summary: ButtonVariant.Primary },
      },
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSize),
      description: 'The size of the button',
      table: {
        type: { summary: Object.values(ButtonSize).join(' | ') },
        defaultValue: { summary: ButtonSize.Medium },
      },
    },
    text: {
      control: 'text',
      description: 'The text displayed in the button',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when the button is clicked',
      table: {
        type: { summary: 'MouseEventHandler<HTMLButtonElement>' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Medium,
    text: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    size: ButtonSize.Medium,
    text: 'Secondary Button',
  },
};

export const White: Story = {
  args: {
    variant: ButtonVariant.White,
    size: ButtonSize.Medium,
    text: 'White Button',
  },
};

export const Large: Story = {
  args: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Large,
    text: 'Large Button',
  },
};

export const Medium: Story = {
  args: {
    variant: ButtonVariant.Secondary,
    size: ButtonSize.Medium,
    text: 'Medium Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: ButtonVariant.Primary,
    size: ButtonSize.Medium,
    text: 'Disabled Button',
  },
};
