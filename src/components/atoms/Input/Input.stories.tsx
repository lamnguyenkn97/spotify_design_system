import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Input Component

Text input field with label, error states, and icon support.

## Features
- Optional label and helper message
- Error state with red styling
- Left icon support (e.g., search icon)
- Full width option
- Search functionality with \`onSearch\` callback (fires on Enter)
- Optimized with \`useCallback\` to prevent focus loss

## Usage

\`\`\`tsx
import { Input } from 'spotify-design-system';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Basic input
<Input 
  label="Username" 
  placeholder="Enter username"
  onChange={(e) => setValue(e.target.value)}
/>

// Search input
<Input 
  placeholder="Search songs..."
  leftIcon={<Icon icon={faSearch} />}
  onSearch={(value) => searchTracks(value)}
/>

// Error state
<Input 
  label="Email"
  error
  message="Invalid email format"
/>
\`\`\`

## Bug Fix (v1.2.1)
Event handlers wrapped in \`useCallback\` to prevent focus loss during re-renders (especially when inside Modal).
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    fullWidth: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
    leftIcon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
  },
};

export const WithMessage: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    message: 'We will never share your email',
  },
};

export const Error: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    message: 'Username is already taken',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read Only Field',
    placeholder: 'This field is disabled',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for songs, artists...',
    leftIcon: <FontAwesomeIcon icon={faSearch} />,
    onSearch: (value: string) => console.log('Search:', value),
  },
};

export const SearchInput: Story = {
  args: {
    type: 'search',
    placeholder: 'What do you want to listen to?',
    leftIcon: <FontAwesomeIcon icon={faSearch} />,
    fullWidth: true,
    onSearch: (value: string) => {
      console.log('Searching for:', value);
      alert(`Searching for: "${value}"`);
    },
    onValueChange: (value: string) => {
      console.log('Input value changed:', value);
    },
  },
};

// Interactive demo component (proper React component for hooks)
const InteractiveDemoComponent = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [lastSearch, setLastSearch] = React.useState('');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Input
        label="Interactive Search"
        placeholder="Type and press Enter to search..."
        leftIcon={<FontAwesomeIcon icon={faSearch} />}
        value={searchValue}
        onValueChange={setSearchValue}
        onSearch={(value) => {
          setLastSearch(value);
          setSearchValue(''); // Clear after search
        }}
        fullWidth
      />
      <div style={{ color: '#b3b3b3', fontSize: '14px' }}>
        <div>Current value: "{searchValue}"</div>
        <div>Last search: "{lastSearch}"</div>
      </div>
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: () => <InteractiveDemoComponent />,
};

export const FullWidth: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Complex Examples
export const LoginForm: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Input
        type="email"
        label="Email"
        placeholder="your@email.com"
        leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
        fullWidth
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        fullWidth
      />
    </div>
  ),
};

export const FormValidation: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        message="Please enter a valid email address"
        error
        defaultValue="invalid-email"
        fullWidth
      />
      <Input
        label="Username"
        placeholder="Choose a username"
        message="Username is available!"
        defaultValue="cool_user_123"
        fullWidth
      />
    </div>
  ),
};
