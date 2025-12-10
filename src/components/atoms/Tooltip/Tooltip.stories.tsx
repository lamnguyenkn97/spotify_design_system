import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './index';
import { Button, ButtonVariant } from '../Button';
import { Icon } from '../Icon';
import { faInfo, faQuestion, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tooltip Component

Contextual information that appears on hover, focus, or click.

## Features
- 4 positions (top, bottom, left, right)
- 3 trigger modes (hover, click, focus)
- Configurable delay before showing
- Customizable max-width
- Accessible with keyboard focus

## Usage

\`\`\`tsx
import { Tooltip } from 'spotify-design-system';

// Basic tooltip
<Tooltip content="Add to Liked Songs" position="top">
  <Icon icon={faHeart} />
</Tooltip>

// Click to show
<Tooltip content="More info..." trigger="click">
  <Button>Info</Button>
</Tooltip>

// Delayed appearance
<Tooltip content="Helpful tip" delay={500}>
  <Icon icon={faQuestion} />
</Tooltip>
\`\`\`

## Common Use Cases
- Icon button labels
- Feature descriptions
- Disabled button explanations
- Player control labels
        `,
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Content to display in the tooltip',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip relative to the trigger',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus', 'manual'],
      description: 'How the tooltip is triggered',
    },
    delay: {
      control: 'number',
      description: 'Delay in milliseconds before showing tooltip',
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width of the tooltip (string or number)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
    trigger: 'hover',
  },
  render: (args) => (
    <Tooltip content={args.content} position={args.position} trigger={args.trigger}>
      <Button variant={ButtonVariant.Primary}>Hover me</Button>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', alignItems: 'center', padding: '4rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Tooltip on top" position="top">
          <Button variant={ButtonVariant.Primary}>Top</Button>
        </Tooltip>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Tooltip on bottom" position="bottom">
          <Button variant={ButtonVariant.Primary}>Bottom</Button>
        </Tooltip>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Tooltip on left" position="left">
          <Button variant={ButtonVariant.Primary}>Left</Button>
        </Tooltip>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Tooltip content="Tooltip on right" position="right">
          <Button variant={ButtonVariant.Primary}>Right</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const Triggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Appears on hover" trigger="hover">
        <Button variant={ButtonVariant.Primary}>Hover</Button>
      </Tooltip>
      <Tooltip content="Appears on click" trigger="click">
        <Button variant={ButtonVariant.Secondary}>Click</Button>
      </Tooltip>
      <Tooltip content="Appears on focus" trigger="focus">
        <Button variant={ButtonVariant.White}>Focus (Tab)</Button>
      </Tooltip>
    </div>
  ),
};



export const DifferentContent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Short tip">
        <Button variant={ButtonVariant.Primary}>Short</Button>
      </Tooltip>
      <Tooltip content="This is a longer tooltip with more detailed information">
        <Button variant={ButtonVariant.Primary}>Long</Button>
      </Tooltip>
      <Tooltip content="This is an extremely long tooltip that demonstrates how the component handles very lengthy content that might wrap to multiple lines" maxWidth="200px">
        <Button variant={ButtonVariant.Primary}>Very Long</Button>
      </Tooltip>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Tooltip content="Get more information about this feature">
        <Icon icon={faInfo} size="lg" />
      </Tooltip>
      <Tooltip content="Need help with this?" position="bottom">
        <Icon icon={faQuestion} size="lg" />
      </Tooltip>
      <Tooltip content="Add to favorites" position="left">
        <Icon icon={faHeart} size="lg" />
      </Tooltip>
      <Tooltip content="Share with friends" position="right">
        <Icon icon={faShare} size="lg" />
      </Tooltip>
    </div>
  ),
};

export const DelayedTooltips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Tooltip content="No delay" delay={0}>
        <Button variant={ButtonVariant.Primary}>Instant</Button>
      </Tooltip>
      <Tooltip content="500ms delay" delay={500}>
        <Button variant={ButtonVariant.Primary}>Delayed</Button>
      </Tooltip>
      <Tooltip content="1 second delay" delay={1000}>
        <Button variant={ButtonVariant.Primary}>Very Delayed</Button>
      </Tooltip>
    </div>
  ),
};

export const SpotifyUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexDirection: 'column', minWidth: '400px' }}>
      <div style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem' }}>🎵 Spotify Interface Examples</div>
      
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Tooltip content="Add to Liked Songs" position="top">
          <button style={{ 
            padding: '0.5rem', 
            background: 'transparent', 
            border: '1px solid #333', 
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon icon={faHeart} />
          </button>
        </Tooltip>
        
        <Tooltip content="Share this track" position="top">
          <button style={{ 
            padding: '0.5rem', 
            background: 'transparent', 
            border: '1px solid #333', 
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon icon={faShare} />
          </button>
        </Tooltip>
        
        <Tooltip content="More options for this track" position="top">
          <button style={{ 
            padding: '0.5rem', 
            background: 'transparent', 
            border: '1px solid #333', 
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'white'
          }}>
            ⋯
          </button>
        </Tooltip>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #333', borderRadius: '8px', width: '100%' }}>
        <div style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 'bold' }}>Player Controls</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
          <Tooltip content="Previous track" position="top">
            <button style={{ padding: '0.75rem', background: 'transparent', border: 'none', color: 'white', fontSize: '1.25rem', cursor: 'pointer' }}>
              ⏮
            </button>
          </Tooltip>
          
          <Tooltip content="Play/Pause" position="top">
            <button style={{ 
              padding: '1rem', 
              background: '#1DB954', 
              border: 'none', 
              borderRadius: '50%',
              color: 'white', 
              fontSize: '1.5rem', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              ⏸
            </button>
          </Tooltip>
          
          <Tooltip content="Next track" position="top">
            <button style={{ padding: '0.75rem', background: 'transparent', border: 'none', color: 'white', fontSize: '1.25rem', cursor: 'pointer' }}>
              ⏭
            </button>
          </Tooltip>
        </div>
      </div>
      
      <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #333', borderRadius: '8px', width: '100%' }}>
        <div style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: 'bold' }}>Settings & Features</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Tooltip content="Enable shuffle mode to randomize your playlist" position="bottom" maxWidth="200px">
            <Button variant={ButtonVariant.Secondary}>🔀 Shuffle</Button>
          </Tooltip>
          
          <Tooltip content="Repeat current track or playlist" position="bottom">
            <Button variant={ButtonVariant.Secondary}>🔁 Repeat</Button>
          </Tooltip>
          
          <Tooltip content="View current queue and upcoming tracks" position="bottom" maxWidth="180px">
            <Button variant={ButtonVariant.White}>📋 Queue</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    content: 'Interactive tooltip content',
    position: 'top',
    trigger: 'hover',
    delay: 300,
    maxWidth: '200px',
  },
  render: (args) => (
    <Tooltip content={args.content} position={args.position} trigger={args.trigger} delay={args.delay} maxWidth={args.maxWidth}>
      <Button variant={ButtonVariant.Primary}>Interactive Tooltip</Button>
    </Tooltip>
  ),
}; 