import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from './Divider';
import { colors } from '../../../styles';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A simple divider component for Spotify interfaces with solid and subtle variants.',
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
      options: ['solid', 'subtle'],
      description: 'Visual style variant',
    },
    color: {
      control: 'select',
      options: ['muted', 'subtle'],
      description: 'Color from design tokens',
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spacing around the divider',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether divider takes full available width',
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
    <div style={{ width: '300px', backgroundColor: colors.primary.black, padding: '16px' }}>
      <div style={{ color: colors.primary.white, padding: '8px' }}>Section 1</div>
      <Divider {...args} />
      <div style={{ color: colors.primary.white, padding: '8px' }}>Section 2</div>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      height: '60px', 
      backgroundColor: colors.primary.black, 
      padding: '16px' 
    }}>
      <div style={{ color: colors.primary.white, padding: '0 16px' }}>Left</div>
      <Divider {...args} />
      <div style={{ color: colors.primary.white, padding: '0 16px' }}>Right</div>
    </div>
  ),
};

// Variants
export const Variants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      backgroundColor: colors.primary.black,
      padding: '16px'
    }}>
      <div>
        <div style={{ color: colors.grey.grey6, fontSize: '14px', marginBottom: '8px' }}>Solid</div>
        <Divider variant="solid" />
      </div>
      <div>
        <div style={{ color: colors.grey.grey6, fontSize: '14px', marginBottom: '8px' }}>Subtle</div>
        <Divider variant="subtle" />
      </div>
    </div>
  ),
};

// Colors
export const Colors: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      backgroundColor: colors.primary.black,
      padding: '16px'
    }}>
      <div>
        <div style={{ color: colors.grey.grey6, fontSize: '14px', marginBottom: '8px' }}>Muted</div>
        <Divider color="muted" />
      </div>
      <div>
        <div style={{ color: colors.grey.grey6, fontSize: '14px', marginBottom: '8px' }}>Subtle</div>
        <Divider color="subtle" />
      </div>
    </div>
  ),
};

// Spacing
export const Spacing: Story = {
  render: () => (
    <div style={{ backgroundColor: colors.primary.black, padding: '16px' }}>
      <div style={{ color: colors.primary.white }}>Content above</div>
      
      <div style={{ color: colors.grey.grey6, fontSize: '12px', margin: '8px 0' }}>Small spacing</div>
      <Divider spacing="sm" />
      <div style={{ color: colors.primary.white }}>Content below</div>
      
      <div style={{ color: colors.grey.grey6, fontSize: '12px', margin: '8px 0' }}>Medium spacing</div>
      <Divider spacing="md" />
      <div style={{ color: colors.primary.white }}>Content below</div>
      
      <div style={{ color: colors.grey.grey6, fontSize: '12px', margin: '8px 0' }}>Large spacing</div>
      <Divider spacing="lg" />
      <div style={{ color: colors.primary.white }}>Content below</div>
    </div>
  ),
};

// Real-world usage
export const PlaylistSeparator: Story = {
  render: () => (
    <div style={{ 
      backgroundColor: colors.primary.black,
      padding: '16px',
      maxWidth: '400px'
    }}>
      <div style={{ color: colors.primary.white, padding: '12px 0' }}>Recently Played</div>
      <Divider variant="subtle" spacing="sm" />
      <div style={{ color: colors.primary.white, padding: '12px 0' }}>Made for You</div>
      <Divider variant="subtle" spacing="sm" />
      <div style={{ color: colors.primary.white, padding: '12px 0' }}>Your Library</div>
    </div>
  ),
};
