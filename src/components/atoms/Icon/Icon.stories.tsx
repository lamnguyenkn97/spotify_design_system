import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { Stack } from '../Stack';
import { Typography } from '../Typography';
import { colors, spacing } from '../../../styles';
import {
  faPlay,
  faPause,
  faHeart,
  faPlus,
  faDownload,
  faShare,
  faEllipsisH,
  faShuffle,
  faRepeat,
  faBackward,
  faForward,
  faVolumeUp,
  faSearch,
  faHome,
  faMusic,
  faUser,
  faCog,
  faSpinner,
  faCheck,
  faTimes,
  faInfoCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible icon component using FontAwesome icons with Spotify design system styling. Supports various sizes, colors, backgrounds, and interactive states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the icon',
    },
    color: {
      control: 'select',
      options: ['primary', 'muted', 'brand', 'inherit'],
      description: 'Color theme or custom color value',
    },
    circular: {
      control: 'boolean',
      description: 'Adds circular background',
    },
    clickable: {
      control: 'boolean',
      description: 'Makes icon interactive with hover effects',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the icon',
    },
    spin: {
      control: 'boolean',
      description: 'Animates icon with spinning effect',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic sizes
export const Small: Story = {
  args: {
    icon: faPlay,
    size: 'sm',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    icon: faPlay,
    size: 'md',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    icon: faPlay,
    size: 'lg',
    color: 'primary',
  },
};

// Colors
export const Primary: Story = {
  args: {
    icon: faHeart,
    size: 'lg',
    color: 'primary',
  },
};

export const Muted: Story = {
  args: {
    icon: faHeart,
    size: 'lg',
    color: 'muted',
  },
};

export const Brand: Story = {
  args: {
    icon: faSpotify,
    size: 'lg',
    color: 'brand',
  },
};

// Circular background
export const Circular: Story = {
  args: {
    icon: faPlay,
    size: 'md',
    color: 'primary',
    backgroundColor: colors.primary.brand,
    circular: true,
  },
};

export const CircularClickable: Story = {
  args: {
    icon: faPlay,
    size: 'md',
    color: 'primary',
    backgroundColor: colors.primary.brand,
    circular: true,
    clickable: true,
    'aria-label': 'Play',
  },
};

// Interactive states
export const Clickable: Story = {
  args: {
    icon: faHeart,
    size: 'lg',
    color: 'muted',
    clickable: true,
    'aria-label': 'Like',
  },
};

export const Disabled: Story = {
  args: {
    icon: faPlay,
    size: 'lg',
    color: 'primary',
    clickable: true,
    disabled: true,
    'aria-label': 'Play (disabled)',
  },
};

export const Spinning: Story = {
  args: {
    icon: faSpinner,
    size: 'lg',
    color: 'primary',
    spin: true,
    'aria-label': 'Loading',
  },
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <Stack
      direction="column"
      spacing="lg"
      align="center"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
      }}
    >
      <Stack direction="row" spacing="lg" align="center">
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faPlay} size="sm" color="primary" />
          <Typography variant="caption" color="muted">
            Small
          </Typography>
        </Stack>
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faPlay} size="md" color="primary" />
          <Typography variant="caption" color="muted">
            Medium
          </Typography>
        </Stack>
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faPlay} size="lg" color="primary" />
          <Typography variant="caption" color="muted">
            Large
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  ),
};

// All colors showcase
export const AllColors: Story = {
  render: () => (
    <Stack
      direction="column"
      spacing="lg"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
      }}
    >
      <Stack direction="row" spacing="lg" align="center">
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faHeart} size="lg" color="primary" />
          <Typography variant="caption" color="muted">
            Primary
          </Typography>
        </Stack>
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faHeart} size="lg" color="muted" />
          <Typography variant="caption" color="muted">
            Muted
          </Typography>
        </Stack>
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faSpotify} size="lg" color="brand" />
          <Typography variant="caption" color="muted">
            Brand
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  ),
};

// Music player icons
export const MusicPlayerIcons: Story = {
  render: () => (
    <Stack
      direction="column"
      spacing="lg"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
      }}
    >
      <Typography variant="heading" size="lg" color="primary">
        Music Player Controls
      </Typography>
      <Stack direction="row" spacing="md" align="center">
        <Icon
          icon={faShuffle}
          size="md"
          color="muted"
          clickable
          aria-label="Shuffle"
        />
        <Icon
          icon={faBackward}
          size="md"
          color="primary"
          clickable
          aria-label="Previous"
        />
        <Icon
          icon={faPlay}
          size="md"
          color="primary"
          backgroundColor={colors.primary.brand}
          circular
          clickable
          aria-label="Play"
        />
        <Icon
          icon={faForward}
          size="md"
          color="primary"
          clickable
          aria-label="Next"
        />
        <Icon
          icon={faRepeat}
          size="md"
          color="muted"
          clickable
          aria-label="Repeat"
        />
      </Stack>
    </Stack>
  ),
};

// Action icons
export const ActionIcons: Story = {
  render: () => (
    <Stack
      direction="column"
      spacing="lg"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
      }}
    >
      <Typography variant="heading" size="lg" color="primary">
        Common Actions
      </Typography>
      <Stack direction="row" spacing="md" align="center" style={{ flexWrap: 'wrap' }}>
        <Icon icon={faHeart} size="md" color="muted" clickable aria-label="Like" />
        <Icon icon={faPlus} size="md" color="muted" clickable aria-label="Add" />
        <Icon
          icon={faDownload}
          size="md"
          color="muted"
          clickable
          aria-label="Download"
        />
        <Icon icon={faShare} size="md" color="muted" clickable aria-label="Share" />
        <Icon
          icon={faEllipsisH}
          size="md"
          color="muted"
          clickable
          aria-label="More options"
        />
        <Icon
          icon={faVolumeUp}
          size="md"
          color="muted"
          clickable
          aria-label="Volume"
        />
      </Stack>
    </Stack>
  ),
};

// Navigation icons
export const NavigationIcons: Story = {
  render: () => (
    <Stack
      direction="column"
      spacing="lg"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
      }}
    >
      <Typography variant="heading" size="lg" color="primary">
        Navigation
      </Typography>
      <Stack direction="row" spacing="md" align="center">
        <Stack direction="column" spacing="xs" align="center">
          <Icon icon={faHome} size="lg" color="primary" clickable aria-label="Home" />
          <Typography variant="caption" color="muted">
            Home
          </Typography>
        </Stack>
        <Stack direction="column" spacing="xs" align="center">
          <Icon
            icon={faSearch}
            size="lg"
            color="muted"
            clickable
            aria-label="Search"
          />
          <Typography variant="caption" color="muted">
            Search
          </Typography>
        </Stack>
        <Stack direction="column" spacing="xs" align="center">
          <Icon icon={faMusic} size="lg" color="muted" clickable aria-label="Library" />
          <Typography variant="caption" color="muted">
            Library
          </Typography>
        </Stack>
        <Stack direction="column" spacing="xs" align="center">
          <Icon icon={faUser} size="lg" color="muted" clickable aria-label="Profile" />
          <Typography variant="caption" color="muted">
            Profile
          </Typography>
        </Stack>
        <Stack direction="column" spacing="xs" align="center">
          <Icon
            icon={faCog}
            size="lg"
            color="muted"
            clickable
            aria-label="Settings"
          />
          <Typography variant="caption" color="muted">
            Settings
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  ),
};

// Status icons
export const StatusIcons: Story = {
  render: () => (
    <Stack
      direction="column"
      spacing="lg"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
      }}
    >
      <Typography variant="heading" size="lg" color="primary">
        Status Indicators
      </Typography>
      <Stack direction="row" spacing="lg" align="center">
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faCheck} size="lg" color="brand" />
          <Typography variant="caption" color="muted">
            Success
          </Typography>
        </Stack>
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faTimes} size="lg" color="primary" />
          <Typography variant="caption" color="muted">
            Error
          </Typography>
        </Stack>
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faInfoCircle} size="lg" color="primary" />
          <Typography variant="caption" color="muted">
            Info
          </Typography>
        </Stack>
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faExclamationTriangle} size="lg" color="brand" />
          <Typography variant="caption" color="muted">
            Warning
          </Typography>
        </Stack>
        <Stack direction="column" spacing="sm" align="center">
          <Icon icon={faSpinner} size="lg" color="primary" spin />
          <Typography variant="caption" color="muted">
            Loading
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  ),
};

// Interactive example
const LikeButtonComponent = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <Stack
      direction="column"
      spacing="md"
      align="center"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
      }}
    >
      <Icon
        icon={faHeart}
        size="lg"
        color={isLiked ? 'brand' : 'muted'}
        clickable
        onClick={() => setIsLiked(!isLiked)}
        aria-label={isLiked ? 'Unlike' : 'Like'}
      />
      <Typography variant="body" color="primary">
        {isLiked ? 'Liked!' : 'Click to like'}
      </Typography>
    </Stack>
  );
};

export const InteractiveLike: Story = {
  render: () => <LikeButtonComponent />,
  parameters: {
    docs: {
      description: {
        story: 'Click the heart icon to toggle between liked and unliked states.',
      },
    },
  },
};

// Circular buttons showcase
export const CircularButtons: Story = {
  render: () => (
    <Stack
      direction="column"
      spacing="lg"
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
      }}
    >
      <Typography variant="heading" size="lg" color="primary">
        Circular Icon Buttons
      </Typography>
      <Stack direction="row" spacing="md" align="center">
        <Icon
          icon={faPlay}
          size="md"
          color="primary"
          backgroundColor={colors.primary.brand}
          circular
          clickable
          aria-label="Play"
        />
        <Icon
          icon={faPause}
          size="md"
          color="primary"
          backgroundColor={colors.grey.grey2}
          circular
          clickable
          aria-label="Pause"
        />
        <Icon
          icon={faPlus}
          size="md"
          color="muted"
          backgroundColor={colors.grey.grey1}
          circular
          clickable
          aria-label="Add"
        />
        <Icon
          icon={faShare}
          size="md"
          color="muted"
          backgroundColor="transparent"
          circular
          clickable
          aria-label="Share"
        />
      </Stack>
    </Stack>
  ),
};

// Complete showcase
export const CompleteShowcase: Story = {
  render: () => (
    <Stack
      direction="column"
      spacing="lg"
      style={{
        padding: spacing.xl,
        backgroundColor: colors.primary.black,
        minHeight: '100vh',
      }}
    >
      <Typography variant="title" size="xl" color="primary">
        Icon Component Showcase
      </Typography>

      {/* Sizes */}
      <Stack direction="column" spacing="md">
        <Typography variant="heading" size="lg" color="primary">
          Sizes
        </Typography>
        <Stack direction="row" spacing="lg" align="center">
          <Stack direction="column" spacing="xs" align="center">
            <Icon icon={faPlay} size="sm" color="primary" />
            <Typography variant="caption" color="muted">
              Small
            </Typography>
          </Stack>
          <Stack direction="column" spacing="xs" align="center">
            <Icon icon={faPlay} size="md" color="primary" />
            <Typography variant="caption" color="muted">
              Medium
            </Typography>
          </Stack>
          <Stack direction="column" spacing="xs" align="center">
            <Icon icon={faPlay} size="lg" color="primary" />
            <Typography variant="caption" color="muted">
              Large
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Colors */}
      <Stack direction="column" spacing="md">
        <Typography variant="heading" size="lg" color="primary">
          Colors
        </Typography>
        <Stack direction="row" spacing="lg" align="center">
          <Stack direction="column" spacing="xs" align="center">
            <Icon icon={faHeart} size="lg" color="primary" />
            <Typography variant="caption" color="muted">
              Primary
            </Typography>
          </Stack>
          <Stack direction="column" spacing="xs" align="center">
            <Icon icon={faHeart} size="lg" color="muted" />
            <Typography variant="caption" color="muted">
              Muted
            </Typography>
          </Stack>
          <Stack direction="column" spacing="xs" align="center">
            <Icon icon={faSpotify} size="lg" color="brand" />
            <Typography variant="caption" color="muted">
              Brand
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* States */}
      <Stack direction="column" spacing="md">
        <Typography variant="heading" size="lg" color="primary">
          States
        </Typography>
        <Stack direction="row" spacing="lg" align="center">
          <Stack direction="column" spacing="xs" align="center">
            <Icon icon={faPlay} size="lg" color="muted" clickable aria-label="Play" />
            <Typography variant="caption" color="muted">
              Clickable
            </Typography>
          </Stack>
          <Stack direction="column" spacing="xs" align="center">
            <Icon
              icon={faPlay}
              size="lg"
              color="muted"
              clickable
              disabled
              aria-label="Play (disabled)"
            />
            <Typography variant="caption" color="muted">
              Disabled
            </Typography>
          </Stack>
          <Stack direction="column" spacing="xs" align="center">
            <Icon
              icon={faSpinner}
              size="lg"
              color="primary"
              spin
              aria-label="Loading"
            />
            <Typography variant="caption" color="muted">
              Spinning
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      {/* Circular */}
      <Stack direction="column" spacing="md">
        <Typography variant="heading" size="lg" color="primary">
          Circular Backgrounds
        </Typography>
        <Stack direction="row" spacing="md" align="center">
          <Icon
            icon={faPlay}
            size="md"
            color="primary"
            backgroundColor={colors.primary.brand}
            circular
            clickable
            aria-label="Play"
          />
          <Icon
            icon={faPause}
            size="md"
            color="primary"
            backgroundColor={colors.grey.grey2}
            circular
            clickable
            aria-label="Pause"
          />
          <Icon
            icon={faPlus}
            size="md"
            color="muted"
            backgroundColor={colors.grey.grey1}
            circular
            clickable
            aria-label="Add"
          />
        </Stack>
      </Stack>
    </Stack>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

