import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Equalizer } from './Equalizer';
import { Stack } from '../Stack';
import { Typography } from '../Typography';
import { colors } from '../../../styles';

const meta: Meta<typeof Equalizer> = {
  title: 'Atoms/Equalizer',
  component: Equalizer,
  parameters: {
    docs: {
      description: {
        component: `
# Equalizer Component

Animated audio equalizer bars that indicate active playback.

## Features
- 3 animated bars with wave effect when playing
- 3 sizes (sm, md, lg)
- Customizable color (defaults to Spotify brand green)
- Paused state shows static bars

## Usage

\`\`\`tsx
import { Equalizer } from 'spotify-design-system';

// Show playing animation
<Equalizer isPlaying={true} size="md" />

// Static bars (paused)
<Equalizer isPlaying={false} size="sm" />

// Custom color
<Equalizer isPlaying={true} color="#FF0000" />
\`\`\`

## Common Use Cases
- Next to currently playing track in playlist
- In now playing bar
- Track list to show active song
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isPlaying: {
      control: 'boolean',
      description: 'Whether the equalizer is active/playing',
    },
    color: {
      control: 'color',
      description: 'Color of the bars',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the equalizer',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isPlaying: true,
    size: 'md',
  },
};

export const Playing: Story = {
  args: {
    isPlaying: true,
    size: 'md',
  },
};

export const Paused: Story = {
  args: {
    isPlaying: false,
    size: 'md',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="column" spacing="lg" align="start">
      <Stack direction="row" spacing="md" align="center">
        <Equalizer isPlaying={true} size="sm" />
        <Typography variant="body" color="primary">
          Small
        </Typography>
      </Stack>
      <Stack direction="row" spacing="md" align="center">
        <Equalizer isPlaying={true} size="md" />
        <Typography variant="body" color="primary">
          Medium (default)
        </Typography>
      </Stack>
      <Stack direction="row" spacing="md" align="center">
        <Equalizer isPlaying={true} size="lg" />
        <Typography variant="body" color="primary">
          Large
        </Typography>
      </Stack>
    </Stack>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <Stack direction="column" spacing="lg" align="start">
      <Stack direction="row" spacing="md" align="center">
        <Equalizer isPlaying={true} color={colors.primary.brand} />
        <Typography variant="body" color="primary">
          Brand Green (default)
        </Typography>
      </Stack>
      <Stack direction="row" spacing="md" align="center">
        <Equalizer isPlaying={true} color={colors.primary.brandHighlight} />
        <Typography variant="body" color="primary">
          Brand Highlight
        </Typography>
      </Stack>
      <Stack direction="row" spacing="md" align="center">
        <Equalizer isPlaying={true} color={colors.primary.white} />
        <Typography variant="body" color="primary">
          White
        </Typography>
      </Stack>
    </Stack>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: colors.primary.black, 
      padding: '16px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    }}>
      <Equalizer isPlaying={true} size="sm" />
      <div>
        <Typography variant="body" color="primary" style={{ color: colors.primary.brand }}>
          My Boy Only Breaks His Favorite To...
        </Typography>
        <Typography variant="caption" color="secondary" style={{ color: colors.grey.grey6 }}>
          Taylor Swift
        </Typography>
      </div>
    </div>
  ),
};

