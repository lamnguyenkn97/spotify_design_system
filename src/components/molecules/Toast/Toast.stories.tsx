import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { ToastProvider, useToast } from './index';
import { Button, ButtonVariant, ButtonSize } from '../../atoms/Button';
import { Stack } from '../../atoms/Stack';
import { ToastType } from './Toast.types';
import { Icon } from '../../atoms/Icon';
import { faHeart, faMusic, faList } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Toast> = {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Toast Component

Temporary notification messages that appear at the bottom center of the screen.

## Features
- 4 types (success, error, warning, info) with color coding
- Auto-dismiss with configurable duration
- Manual dismiss with close button
- Smooth slide-in/out animations
- Queue management (max 5 toasts)
- Uses React Context + Provider pattern

## Usage

\`\`\`tsx
import { ToastProvider, useToast } from 'spotify-design-system';

// Wrap app with provider
function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  );
}

// Use in components
function LikeButton() {
  const { success, error } = useToast();
  
  const handleLike = async () => {
    try {
      await likeSong();
      success('Added to Liked Songs');
    } catch (err) {
      error('Failed to like song');
    }
  };
  
  return <Button onClick={handleLike}>Like</Button>;
}
\`\`\`

## Technical Details
- **Context API**: Global toast state across app
- **Portal**: Renders outside parent DOM for proper z-index
- **Animation**: CSS keyframes (slideInFromBottom, slideOutToBottom)
- **Position**: Fixed bottom-center only (simplified for consistency)

## Design Decisions
- Max 5 toasts to avoid screen clutter
- 3s default duration (tested for readability)
- Bottom-center position (less intrusive than top)
        `,
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Toast message content',
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast type/variant',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds (0 = no auto-dismiss)',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

// Basic toast types
export const Success: Story = {
  args: {
    message: 'Track added to Liked Songs',
    type: ToastType.SUCCESS,
    duration: 3000,
    showCloseButton: true,
  },
};

export const Error: Story = {
  args: {
    message: 'Failed to load playlist',
    type: ToastType.ERROR,
    duration: 3000,
    showCloseButton: true,
  },
};

export const Warning: Story = {
  args: {
    message: 'Feature not implemented yet',
    type: ToastType.WARNING,
    duration: 3000,
    showCloseButton: true,
  },
};

export const Info: Story = {
  args: {
    message: 'Track added to queue',
    type: ToastType.INFO,
    duration: 3000,
    showCloseButton: true,
  },
};

// Long message
export const LongMessage: Story = {
  args: {
    message: 'This is a very long toast message that wraps to multiple lines. It demonstrates how the toast component handles longer content gracefully.',
    type: ToastType.INFO,
    duration: 5000,
    showCloseButton: true,
  },
};

// No auto-dismiss
export const NoAutoDismiss: Story = {
  args: {
    message: 'This toast will stay until you close it',
    type: ToastType.WARNING,
    duration: 0,
    showCloseButton: true,
  },
};

// No close button
export const NoCloseButton: Story = {
  args: {
    message: 'This toast auto-dismisses without close button',
    type: ToastType.SUCCESS,
    duration: 3000,
    showCloseButton: false,
  },
};

// Custom icon
export const CustomIcon: Story = {
  args: {
    message: 'Track liked!',
    type: ToastType.SUCCESS,
    duration: 3000,
    showCloseButton: true,
    icon: <Icon icon={faHeart} size="md" />,
  },
};

// Interactive demo with ToastProvider
const InteractiveDemo: React.FC = () => {
  const { toast } = useToast();

  return (
    <div style={{ padding: '40px', minHeight: '400px' }}>
      <Stack direction="column" spacing="lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ color: 'white', marginBottom: '20px' }}>🎵 Spotify-style Notifications</h2>
        
        <Stack direction="column" spacing="md">
          <h3 style={{ color: '#b3b3b3', fontSize: '14px', textTransform: 'uppercase' }}>Common Actions</h3>
          
          <Stack direction="row" spacing="md" style={{ flexWrap: 'wrap' }}>
            <Button
              variant={ButtonVariant.Primary}
              size={ButtonSize.Medium}
              onClick={() => toast.success('Liked!')}
            >
              💚 Like Track
            </Button>
            
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              onClick={() => toast.info('Track added to queue')}
            >
              <Icon icon={faList} size="sm" /> Add to Queue
            </Button>
            
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              onClick={() => toast.error('Failed to load playlist')}
            >
              ❌ Simulate Error
            </Button>
            
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              onClick={() => toast.warning('Feature not implemented yet')}
            >
              ⚠️ Show Warning
            </Button>
          </Stack>
        </Stack>

        <Stack direction="column" spacing="md">
          <h3 style={{ color: '#b3b3b3', fontSize: '14px', textTransform: 'uppercase' }}>User Actions</h3>
          
          <Stack direction="row" spacing="md" style={{ flexWrap: 'wrap' }}>
            <Button
              variant={ButtonVariant.Primary}
              size={ButtonSize.Medium}
              onClick={() => toast.success('Logged in successfully')}
            >
              Login Success
            </Button>
            
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              onClick={() => toast.info('Logged out')}
            >
              Logout
            </Button>
            
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              onClick={() => toast.success('Playlist created')}
            >
              Create Playlist
            </Button>
          </Stack>
        </Stack>

        <Stack direction="column" spacing="md">
          <h3 style={{ color: '#b3b3b3', fontSize: '14px', textTransform: 'uppercase' }}>Custom Options</h3>
          
          <Stack direction="row" spacing="md" style={{ flexWrap: 'wrap' }}>
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              onClick={() => toast.success('This toast stays longer', { duration: 10000 })}
            >
              Long Duration (10s)
            </Button>
            
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              onClick={() => toast.warning('No auto-dismiss', { duration: 0 })}
            >
              No Auto-Dismiss
            </Button>
            
            <Button
              variant={ButtonVariant.Secondary}
              size={ButtonSize.Medium}
              onClick={() => toast.success('Custom icon!', { icon: <Icon icon={faMusic} size="md" /> })}
            >
              <Icon icon={faMusic} size="sm" /> Custom Icon
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export const Interactive: Story = {
  render: () => (
    <ToastProvider defaultDuration={3000} maxToasts={5}>
      <InteractiveDemo />
    </ToastProvider>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Interactive demo with ToastProvider. Click buttons to trigger different toast notifications at bottom-center.',
      },
    },
  },
};

// Multiple toasts stacking
const MultipleToastsDemo: React.FC = () => {
  const { toast } = useToast();
  const [count, setCount] = useState(1);

  const addMultipleToasts = () => {
    toast.success(`Notification ${count}`);
    toast.info(`Notification ${count + 1}`);
    toast.warning(`Notification ${count + 2}`);
    setCount(count + 3);
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <Button
        variant={ButtonVariant.Primary}
        size={ButtonSize.Large}
        onClick={addMultipleToasts}
      >
        Add Multiple Toasts
      </Button>
      <p style={{ color: '#b3b3b3', marginTop: '20px' }}>
        Click to see multiple toasts stacking
      </p>
    </div>
  );
};

export const MultipleToasts: Story = {
  render: () => (
    <ToastProvider maxToasts={10}>
      <MultipleToastsDemo />
    </ToastProvider>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Demonstration of multiple toasts stacking at bottom-center. The provider limits the maximum number of visible toasts.',
      },
    },
  },
};

// Real-world use case: Music app notifications
const MusicAppDemo: React.FC = () => {
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      toast.success('Added to Liked Songs', {
        icon: <Icon icon={faHeart} size="md" />,
        duration: 2000,
      });
    } else {
      toast.info('Removed from Liked Songs', {
        duration: 2000,
      });
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <Stack direction="column" spacing="lg" align="center">
        <div style={{ 
          width: '200px', 
          height: '200px', 
          backgroundColor: '#282828',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px'
        }}>
          🎵
        </div>
        
        <h2 style={{ color: 'white' }}>Blinding Lights</h2>
        <p style={{ color: '#b3b3b3' }}>The Weeknd • After Hours</p>
        
        <Stack direction="row" spacing="md">
          <Button
            variant={isLiked ? ButtonVariant.Primary : ButtonVariant.Secondary}
            size={ButtonSize.Medium}
            onClick={handleLikeToggle}
          >
            {isLiked ? '💚' : '🤍'} {isLiked ? 'Liked' : 'Like'}
          </Button>
          
          <Button
            variant={ButtonVariant.Secondary}
            size={ButtonSize.Medium}
            onClick={() => toast.info('Track added to queue')}
          >
            <Icon icon={faList} size="sm" /> Add to Queue
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export const MusicAppUseCase: Story = {
  render: () => (
    <ToastProvider>
      <MusicAppDemo />
    </ToastProvider>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Real-world use case: Spotify-style music app with like/unlike and add to queue notifications.',
      },
    },
  },
};

