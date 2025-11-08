import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from './index';

const meta: Meta<typeof Progress> = {
  title: 'Atoms/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['linear', 'circular'],
      description: 'Visual variant of the progress indicator',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
      description: 'Color theme of the progress indicator',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the progress indicator',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether progress is indeterminate (loading)',
    },
    showValue: {
      control: 'boolean',
      description: 'Whether to show the progress value',
    },
    buffer: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Buffer value for media progress',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'linear',
    value: 50,
    size: 'md',
    color: 'primary',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', minWidth: '200px' }}>
        <Progress variant="linear" value={65} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Linear</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress variant="circular" value={65} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Circular</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Primary:</span>
        <Progress variant="linear" value={75} color="primary" />
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Success:</span>
        <Progress variant="linear" value={85} color="success" />
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Warning:</span>
        <Progress variant="linear" value={45} color="warning" />
      </div>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%' }}>
        <span style={{ minWidth: '80px', fontSize: '0.875rem' }}>Error:</span>
        <Progress variant="linear" value={25} color="error" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Progress variant="linear" value={60} size="sm" />
        </div>
        <Progress variant="circular" value={60} size="sm" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Small</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Progress variant="linear" value={60} size="md" />
        </div>
        <Progress variant="circular" value={60} size="md" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Medium</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Progress variant="linear" value={60} size="lg" />
        </div>
        <Progress variant="circular" value={60} size="lg" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Large</div>
      </div>
    </div>
  ),
};

export const WithValues: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'column', minWidth: '300px' }}>
      <Progress variant="linear" value={25} showValue />
      <Progress variant="linear" value={50} showValue />
      <Progress variant="linear" value={75} showValue />
      <Progress variant="linear" value={100} showValue />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', minWidth: '200px' }}>
        <Progress variant="linear" indeterminate />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Linear Loading</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress variant="circular" indeterminate />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Circular Loading</div>
      </div>
    </div>
  ),
};

export const MediaProgress: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'column', minWidth: '300px' }}>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Song Progress (with buffer)</div>
        <Progress variant="linear" value={35} buffer={60} color="primary" />
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Download Progress</div>
        <Progress variant="linear" value={78} buffer={85} color="success" showValue />
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Upload Progress</div>
        <Progress variant="linear" value={42} color="primary" showValue />
      </div>
    </div>
  ),
};

export const ProgressStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'column', minWidth: '300px' }}>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Starting (0%)</div>
        <Progress variant="linear" value={0} color="primary" showValue />
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>In Progress (45%)</div>
        <Progress variant="linear" value={45} color="primary" showValue />
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Almost Done (90%)</div>
        <Progress variant="linear" value={90} color="warning" showValue />
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>Complete (100%)</div>
        <Progress variant="linear" value={100} color="success" showValue />
      </div>
    </div>
  ),
};

export const SpotifyUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexDirection: 'column', minWidth: '400px' }}>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>🎵 Song Progress</div>
                 <Progress variant="linear" value={42} buffer={65} color="primary" size="sm" />
        <div style={{ marginTop: '0.25rem', fontSize: '0.75rem', opacity: 0.7 }}>2:15 / 3:42</div>
      </div>
      
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>⬇️ Download Progress</div>
        <Progress variant="linear" value={78} color="success" showValue />
        <div style={{ marginTop: '0.25rem', fontSize: '0.75rem', opacity: 0.7 }}>Downloading "Bohemian Rhapsody"</div>
      </div>
      
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>🔄 Syncing Playlists</div>
        <Progress variant="circular" indeterminate size="sm" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>Syncing your music...</div>
      </div>
      
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 'bold' }}>📊 Profile Completion</div>
                 <Progress variant="linear" value={60} color="warning" showValue />
        <div style={{ marginTop: '0.25rem', fontSize: '0.75rem', opacity: 0.7 }}>Complete your profile to get better recommendations</div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    variant: 'linear',
    value: 50,
    max: 100,
    size: 'md',
    color: 'primary',
    indeterminate: false,
    showValue: true,
    // bufferValue: 70, // Not supported in current Progress component
  },
};

export const CircularIndeterminate = {
  args: {
    indeterminate: true,
    variant: 'circular',
    size: 'md',
    color: 'primary',
  },
}; 