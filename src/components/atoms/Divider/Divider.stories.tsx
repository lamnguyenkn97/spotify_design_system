import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from './Divider';
import { colorTokens, spacingTokens } from './Divider.style';
import { colors } from '../../../styles';

// Reusable style objects using design tokens
const flexRowStyle = {
  display: 'flex' as const,
  alignItems: 'center' as const,
};

const storyStyles = {
  container: {
    color: colors.primary.white,
    backgroundColor: colors.primary.black,
  },
  section: {
    padding: spacingTokens.sm,
  },
  label: {
    color: colors.grey.grey6,
    fontSize: '14px',
    marginBottom: spacingTokens.xs,
  },
  smallLabel: {
    color: colors.grey.grey6,
    fontSize: '12px',
  },
  flexRow: flexRowStyle,
  flexColumn: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: spacingTokens.lg,
  },
  centeredContainer: {
    textAlign: 'center' as const,
  },
  navigationContainer: {
    width: '200px',
    padding: spacingTokens.md,
    backgroundColor: colors.grey.grey1,
    color: colors.primary.white,
  },
  headerContainer: {
    ...flexRowStyle,
    padding: spacingTokens.md,
    backgroundColor: colors.grey.grey1,
    color: colors.primary.white,
  },
  showcaseContainer: {
    padding: spacingTokens.lg,
    backgroundColor: colors.primary.black,
    color: colors.primary.white,
  },
};

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible divider component that supports both horizontal and vertical orientations with customizable styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted', 'double'],
      description: 'Line style variant',
    },
    color: {
      control: 'select',
      options: [...Object.keys(colorTokens), 'custom'],
      description: 'Color from design tokens or custom hex value',
    },
    spacing: {
      control: 'select',
      options: Object.keys(spacingTokens),
      description: 'Spacing around the divider using design tokens',
    },
    thickness: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
      description: 'Thickness of the divider line in pixels',
    },
    fullSize: {
      control: 'boolean',
      description: 'Whether divider takes full available space',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {},
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div style={{ width: '300px', ...storyStyles.container }}>
      <div style={storyStyles.section}>Section 1</div>
      <Divider {...args} />
      <div style={storyStyles.section}>Section 2</div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ ...storyStyles.flexRow, height: '60px', ...storyStyles.container }}>
      <div style={{ padding: `0 ${spacingTokens.md}` }}>Left</div>
      <Divider {...args} />
      <div style={{ padding: `0 ${spacingTokens.md}` }}>Right</div>
    </div>
  ),
};

// Color variants using design tokens
export const Colors: Story = {
  render: () => (
    <div style={storyStyles.flexColumn}>
      {Object.entries(colorTokens).map(([colorName, colorValue]) => (
        <div key={colorName}>
          <div style={storyStyles.label}>{colorName.charAt(0).toUpperCase() + colorName.slice(1)} ({colorValue})</div>
          <Divider color={colorName as keyof typeof colorTokens} />
        </div>
      ))}
      <div>
        <div style={storyStyles.label}>Custom Color (#ff0000)</div>
        <Divider color="#ff0000" />
      </div>
    </div>
  ),
};

// Variants
export const Variants: Story = {
  render: () => {
    const variants = ['solid', 'dashed', 'dotted', 'double'] as const;
    return (
      <div style={storyStyles.flexColumn}>
        {variants.map((variant) => (
          <div key={variant}>
            <div style={storyStyles.label}>{variant.charAt(0).toUpperCase() + variant.slice(1)}</div>
            <Divider variant={variant} />
          </div>
        ))}
      </div>
    );
  },
};

// Thickness variations
export const Thickness: Story = {
  render: () => {
    const thicknesses = [1, 2, 4, 8];
    return (
      <div style={storyStyles.flexColumn}>
        {thicknesses.map((thickness) => (
          <div key={thickness}>
            <div style={storyStyles.label}>{thickness}px {thickness === 1 ? '(Default)' : ''}</div>
            <Divider thickness={thickness} />
          </div>
        ))}
      </div>
    );
  },
};

// Spacing variations using design tokens
export const Spacing: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div>Content above</div>
      {Object.entries(spacingTokens).map(([spacingName, spacingValue]) => (
        <React.Fragment key={spacingName}>
          <div style={storyStyles.smallLabel}>{spacingName.toUpperCase()} ({spacingValue})</div>
          <Divider spacing={spacingName as keyof typeof spacingTokens} />
          <div>Content below</div>
        </React.Fragment>
      ))}
    </div>
  ),
};

// Custom length
export const CustomLength: Story = {
  render: () => (
    <div style={storyStyles.flexColumn}>
      <div style={storyStyles.centeredContainer}>
        <div style={storyStyles.label}>50% Width</div>
        <Divider length="50%" />
      </div>
      <div style={storyStyles.centeredContainer}>
        <div style={storyStyles.label}>200px Width</div>
        <Divider length={200} />
      </div>
      <div style={{ ...storyStyles.flexRow, height: '80px', justifyContent: 'center' }}>
        <div style={{ ...storyStyles.label, marginRight: spacingTokens.xs }}>50px Height</div>
        <Divider orientation="vertical" length={50} />
        <div style={{ ...storyStyles.label, marginLeft: spacingTokens.xs }}>Vertical</div>
      </div>
    </div>
  ),
};

// Real-world usage examples
export const InNavigation: Story = {
  render: () => (
    <div style={storyStyles.navigationContainer}>
      <div style={storyStyles.section}>Home</div>
      <Divider spacing="sm" />
      <div style={storyStyles.section}>Search</div>
      <Divider spacing="sm" />
      <div style={storyStyles.section}>Your Library</div>
      <Divider spacing="md" color="secondary" />
      <div style={{ ...storyStyles.section, ...storyStyles.label }}>Playlists</div>
      <Divider spacing="sm" />
      <div style={storyStyles.section}>Liked Songs</div>
    </div>
  ),
};

export const InHeader: Story = {
  render: () => (
    <div style={storyStyles.headerContainer}>
      <div>Premium</div>
      <Divider orientation="vertical" spacing="md" length="20px" />
      <div>Support</div>
      <Divider orientation="vertical" spacing="md" length="20px" />
      <div>Download</div>
    </div>
  ),
};

export const AllFeatures: Story = {
  render: () => (
    <div style={storyStyles.showcaseContainer}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacingTokens.xl }}>
        <div>
          <h3 style={{ color: colors.primary.white, marginBottom: spacingTokens.md }}>Horizontal Dividers</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacingTokens.md }}>
            <Divider />
            <Divider color="brand" thickness={2} />
            <Divider variant="dashed" color="secondary" />
            <Divider variant="dotted" color="primary" thickness={3} />
          </div>
        </div>
        
        <div>
          <h3 style={{ color: colors.primary.white, marginBottom: spacingTokens.md }}>Vertical Dividers</h3>
          <div style={{ ...storyStyles.flexRow, height: '60px' }}>
            <div style={{ padding: `0 ${spacingTokens.md}` }}>Item 1</div>
            <Divider orientation="vertical" />
            <div style={{ padding: `0 ${spacingTokens.md}` }}>Item 2</div>
            <Divider orientation="vertical" color="brand" thickness={2} />
            <div style={{ padding: `0 ${spacingTokens.md}` }}>Item 3</div>
            <Divider orientation="vertical" variant="dashed" />
            <div style={{ padding: `0 ${spacingTokens.md}` }}>Item 4</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
