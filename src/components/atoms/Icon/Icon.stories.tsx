import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { colorTokens, sizeTokens } from './Icon.style';
import { colors, spacing } from '../../../styles';
import {
  faPlay,
  faPause,
  faHeart,
  faDownload,
  faShare,
  faEllipsis,
  faCog,
  faUser,
  faHome,
  faSearch,
  faMusic,
  faMicrophone,
  faSpinner,
  faCheck,
  faExclamationTriangle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

// Reusable style objects using design tokens
const storyStyles = {
  container: {
    color: colors.primary.white,
    backgroundColor: colors.primary.black,
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.lg,
  },
  label: {
    color: colors.grey.grey6,
    fontSize: '14px',
    marginBottom: spacing.lg,
    display: 'block',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: spacing.md,
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.md,
    flexWrap: 'wrap' as const,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.lg,
  },
  card: {
    padding: spacing.lg,
    backgroundColor: colors.grey.grey1,
    borderRadius: '8px',
    textAlign: 'center' as const,
  },
};

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible icon component built on FontAwesome with multiple variants, sizes, and interaction states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(sizeTokens),
      description: 'Size of the icon using design tokens',
    },
    color: {
      control: 'select',
      options: [...Object.keys(colorTokens), 'custom'],
      description: 'Color from design tokens or custom hex value',
    },
    variant: {
      control: 'select',
      options: ['default', 'rounded', 'outlined', 'filled'],
      description: 'Visual variant of the icon',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the icon is clickable',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the icon is disabled',
    },
    spin: {
      control: 'boolean',
      description: 'FontAwesome spin animation',
    },
    pulse: {
      control: 'boolean',
      description: 'FontAwesome pulse animation',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    icon: faPlay,
  },
};

export const Clickable: Story = {
  args: {
    icon: faHeart,
    clickable: true,
    color: 'error',
    'aria-label': 'Like this song',
  },
};

// Size variations using design tokens
export const Sizes: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.flexRow}>
        {Object.keys(sizeTokens).map((size) => (
          <div key={size} style={storyStyles.card}>
            <div style={storyStyles.label}>{size.toUpperCase()}</div>
            <Icon icon={faMusic} size={size as any} />
          </div>
        ))}
      </div>
    </div>
  ),
};

// Color variations using design tokens
export const Colors: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.grid}>
        {Object.entries(colorTokens).map(([colorName, colorValue]) => (
          <div key={colorName} style={storyStyles.card}>
            <div style={storyStyles.label}>
              {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
            </div>
            <div style={storyStyles.label}>({colorValue})</div>
            <Icon icon={faHeart} color={colorName as any} size="large" />
          </div>
        ))}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Custom</div>
          <div style={storyStyles.label}>(#ff6b6b)</div>
          <Icon icon={faHeart} color="#ff6b6b" size="large" />
        </div>
      </div>
    </div>
  ),
};

// Variant demonstrations
export const Variants: Story = {
  render: () => {
    const variants = ['default', 'rounded', 'outlined', 'filled'] as const;
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {variants.map((variant) => (
            <div key={variant} style={storyStyles.card}>
              <div style={storyStyles.label}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </div>
              <Icon
                icon={faCog}
                variant={variant}
                size="large"
                backgroundColor={variant !== 'default' ? 'brand' : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Interactive states
export const InteractiveStates: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.flexColumn}>
        <div>
          <div style={storyStyles.label}>Default (Non-clickable)</div>
          <Icon icon={faUser} size="large" />
        </div>

        <div>
          <div style={storyStyles.label}>Clickable with Hover Color</div>
          <Icon
            icon={faHeart}
            size="large"
            clickable
            color="muted"
            hoverColor="error"
            aria-label="Like"
          />
        </div>

        <div>
          <div style={storyStyles.label}>Disabled</div>
          <Icon
            icon={faDownload}
            size="large"
            clickable
            disabled
            aria-label="Download (disabled)"
          />
        </div>
      </div>
    </div>
  ),
};

// FontAwesome animations
export const Animations: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.flexRow}>
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Spin</div>
          <Icon icon={faSpinner} size="large" spin />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Pulse</div>
          <Icon icon={faHeart} size="large" pulse color="error" />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Rotate 90°</div>
          <Icon icon={faShare} size="large" rotate={90} />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Flip Horizontal</div>
          <Icon icon={faSearch} size="large" flip="horizontal" />
        </div>
      </div>
    </div>
  ),
};

// Real-world usage examples
export const MusicPlayerControls: Story = {
  render: () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);

    return (
      <div style={{ ...storyStyles.container, textAlign: 'center' }}>
        <div style={storyStyles.label}>Music Player Controls</div>
        <div style={storyStyles.flexRow}>
          <Icon
            icon={isPlaying ? faPause : faPlay}
            size="small"
            clickable
            variant="rounded"
            backgroundColor="brand"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          />
          <Icon
            icon={faHeart}
            size="medium"
            clickable
            color={isLiked ? 'error' : 'muted'}
            hoverColor="error"
            onClick={() => setIsLiked(!isLiked)}
            aria-label={isLiked ? 'Unlike' : 'Like'}
          />
          <Icon
            icon={faDownload}
            size="medium"
            clickable
            color="muted"
            hoverColor="primary"
            aria-label="Download"
          />
          <Icon
            icon={faEllipsis}
            size="medium"
            clickable
            color="muted"
            hoverColor="primary"
            aria-label="More options"
          />
        </div>
      </div>
    );
  },
};

export const NavigationIcons: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.label}>Navigation Bar</div>
      <div style={storyStyles.flexRow}>
        <Icon
          icon={faHome}
          size="medium"
          clickable
          color="brand"
          aria-label="Home"
        />
        <Icon
          icon={faSearch}
          size="medium"
          clickable
          color="muted"
          hoverColor="primary"
          aria-label="Search"
        />
        <Icon
          icon={faMusic}
          size="medium"
          clickable
          color="muted"
          hoverColor="primary"
          aria-label="Your Library"
        />
        <Icon
          icon={faMicrophone}
          size="medium"
          clickable
          color="muted"
          hoverColor="primary"
          aria-label="Podcasts"
        />
      </div>
    </div>
  ),
};

export const StatusIcons: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.flexRow}>
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Success</div>
          <Icon
            icon={faCheck}
            variant="rounded"
            backgroundColor="success"
            color="primary"
            size="medium"
          />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Warning</div>
          <Icon
            icon={faExclamationTriangle}
            variant="rounded"
            backgroundColor="warning"
            color="primary"
            size="medium"
          />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Error</div>
          <Icon
            icon={faTimes}
            variant="rounded"
            backgroundColor="error"
            color="primary"
            size="medium"
          />
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Loading</div>
          <Icon
            icon={faSpinner}
            variant="rounded"
            backgroundColor="brand"
            color="primary"
            size="medium"
            spin
          />
        </div>
      </div>
    </div>
  ),
};

export const AllFeatures: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.flexColumn}>
        <div>
          <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>
            Sizes
          </h3>
          <div style={storyStyles.flexRow}>
            {Object.keys(sizeTokens).map((size) => (
              <Icon key={size} icon={faMusic} size={size as any} />
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>
            Variants
          </h3>
          <div style={storyStyles.flexRow}>
            <Icon icon={faCog} variant="default" />
            <Icon icon={faCog} variant="rounded" backgroundColor="brand" />
            <Icon icon={faCog} variant="outlined" backgroundColor="secondary" />
            <Icon icon={faCog} variant="filled" backgroundColor="muted" />
          </div>
        </div>

        <div>
          <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>
            Interactive
          </h3>
          <div style={storyStyles.flexRow}>
            <Icon icon={faHeart} clickable color="muted" hoverColor="error" />
            <Icon icon={faDownload} clickable variant="outlined" />
            <Icon
              icon={faShare}
              clickable
              variant="filled"
              backgroundColor="brand"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
