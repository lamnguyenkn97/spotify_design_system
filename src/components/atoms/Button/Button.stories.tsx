import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonSize, ButtonVariant } from './Button.types';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import {
  faPlay,
  faPause,
  faHeart,
  faPlus,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
    },
    size: {
      control: 'select',
      options: Object.values(ButtonSize),
    },
    fullWidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    text: 'Play',
    variant: ButtonVariant.Primary,
    size: ButtonSize.Medium,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Follow',
    variant: ButtonVariant.Secondary,
    size: ButtonSize.Medium,
  },
};

export const White: Story = {
  args: {
    text: 'Sign up free',
    variant: ButtonVariant.White,
    size: ButtonSize.Medium,
  },
};

export const FlatWhite: Story = {
  args: {
    text: 'Log in',
    variant: ButtonVariant.FlatWhite,
    size: ButtonSize.Medium,
  },
};

export const Text: Story = {
  args: {
    text: 'Show all',
    variant: ButtonVariant.Text,
    size: ButtonSize.Medium,
  },
};

// With icons (always positioned left)
export const WithIcon: Story = {
  args: {
    text: 'Play',
    icon: <Icon icon={faPlay} size="sm" />,
    variant: ButtonVariant.Primary,
    size: ButtonSize.Medium,
  },
};



// Sizes
export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing="md" align="center">
      <Button text="Small" size={ButtonSize.Small} />
      <Button text="Medium" size={ButtonSize.Medium} />
      <Button text="Large" size={ButtonSize.Large} />
    </Stack>
  ),
};

// States
export const Loading: Story = {
  args: {
    text: 'Loading...',
    loading: true,
    variant: ButtonVariant.Primary,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    disabled: true,
    variant: ButtonVariant.Primary,
  },
};

export const FullWidth: Story = {
  args: {
    text: 'Full Width Button',
    fullWidth: true,
    variant: ButtonVariant.Primary,
  },
  parameters: {
    layout: 'padded',
  },
};

// Interactive examples
const PlayPauseComponent = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <Button
      text={isPlaying ? 'Pause' : 'Play'}
      icon={<Icon icon={isPlaying ? faPause : faPlay} size="sm" />}
      onClick={() => setIsPlaying(!isPlaying)}
      variant={ButtonVariant.Primary}
    />
  );
};

export const PlayPause: Story = {
  render: () => <PlayPauseComponent />,
};



export const AllVariants: Story = {
  render: () => (
    <Stack
      spacing="lg"
      style={{
        padding: '20px',
        backgroundColor: '#121212',
      }}
    >
      <Stack direction="row" spacing="md" style={{ flexWrap: 'wrap' }}>
        <Button text="Primary" variant={ButtonVariant.Primary} />
        <Button text="Secondary" variant={ButtonVariant.Secondary} />
        <Button text="White" variant={ButtonVariant.White} />
        <Button text="Flat White" variant={ButtonVariant.FlatWhite} />
        <Button text="Text" variant={ButtonVariant.Text} />
      </Stack>

      <Stack direction="row" spacing="md" style={{ flexWrap: 'wrap' }}>
        <Button
          text="With Icon"
          icon={<Icon icon={faPlay} size="sm" />}
          variant={ButtonVariant.Primary}
        />
        <Button
          text="Different Icon"
          icon={<Icon icon={faHeart} size="sm" />}
          variant={ButtonVariant.Secondary}
        />
      </Stack>

      <Stack direction="row" spacing="md" style={{ flexWrap: 'wrap' }}>
        <Button text="Loading..." loading variant={ButtonVariant.Primary} />
        <Button text="Disabled" disabled variant={ButtonVariant.Secondary} />
      </Stack>
    </Stack>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
