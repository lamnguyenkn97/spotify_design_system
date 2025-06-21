import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './index';
import { Button, ButtonVariant } from '../Button';
import { Icon } from '../Icon';
import { faHeart, faStar, faBell, faMusic } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Badge component for displaying notification dots, counts, status indicators, and icons.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['dot', 'count', 'status', 'icon'],
      description: 'Visual variant of the badge',
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
      description: 'Color theme of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Position when used as overlay',
    },
    count: {
      control: 'number',
      description: 'Number to display (count variant)',
    },
    maxCount: {
      control: 'number',
      description: 'Maximum number before showing "99+"',
    },
    icon: {
      control: 'text',
      description: 'Icon name (icon variant)',
    },
    showZero: {
      control: 'boolean',
      description: 'Whether to show badge when count is 0',
    },
    visible: {
      control: 'boolean',
      description: 'Whether the badge is visible',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'dot',
    color: 'primary',
    size: 'md',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="dot" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Dot</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={5} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Count</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="status" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Status</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="icon" icon="check" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Icon</div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge variant="count" count={1} color="primary" />
      <Badge variant="count" count={2} color="success" />
      <Badge variant="count" count={3} color="warning" />
      <Badge variant="count" count={4} color="error" />
      <Badge variant="count" count={5} color="info" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={99} size="sm" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Small</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={99} size="md" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Medium</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={99} size="lg" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Large</div>
      </div>
    </div>
  ),
};

export const CountBehavior: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={0} showZero={false} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Count: 0 (hidden)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={0} showZero={true} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Count: 0 (shown)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={99} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Count: 99</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={100} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Count: 100 (99+)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={1000} maxCount={999} />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Count: 1000 (999+)</div>
      </div>
    </div>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Badge variant="dot" position="top-right">
        <Button variant={ButtonVariant.Primary}>Messages</Button>
      </Badge>
      <Badge variant="count" count={3} position="top-right" color="error">
        <Button variant={ButtonVariant.Secondary}>Notifications</Button>
      </Badge>
      <Badge variant="status" position="top-left" color="success">
        <Button variant={ButtonVariant.White}>Stream</Button>
      </Badge>
      <Badge variant="icon" icon="check" position="bottom-right" color="info">
        <Button variant={ButtonVariant.Primary}>Player</Button>
      </Badge>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={1} position="top-right" color="error">
          <Button variant={ButtonVariant.Primary}>Top Right</Button>
        </Badge>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={2} position="top-left" color="success">
          <Button variant={ButtonVariant.Primary}>Top Left</Button>
        </Badge>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={3} position="bottom-right" color="warning">
          <Button variant={ButtonVariant.Primary}>Bottom Right</Button>
        </Badge>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge variant="count" count={4} position="bottom-left" color="info">
          <Button variant={ButtonVariant.Primary}>Bottom Left</Button>
        </Badge>
      </div>
    </div>
  ),
};

export const Icons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Badge variant="icon" icon="check" color="error" size="sm" />
      <Badge variant="icon" icon="check" color="warning" size="md" />
      <Badge variant="icon" icon="check" color="info" size="lg" />
      <Badge variant="icon" icon="check" color="success" size="md" />
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge variant="status" color="success" />
      <Badge variant="status" color="error" />
      <Badge variant="status" color="warning" />
      <Badge variant="status" color="info" />
      <Badge variant="status" color="primary" />
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    variant: 'count',
    count: 5,
    color: 'primary',
    size: 'md',
    position: 'top-right',
    maxCount: 99,
    showZero: false,
    visible: true,
  },
  render: (args) => (
    <Badge {...args}>
      <Button variant={ButtonVariant.Primary}>Interactive Badge</Button>
    </Badge>
  ),
}; 