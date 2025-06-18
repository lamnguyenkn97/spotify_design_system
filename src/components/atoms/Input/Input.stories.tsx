import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from './Input';
import { sizeTokens, stateTokens } from './Input.style';
import { colors, spacing } from '../../../styles';
import { 
  faUser, 
  faLock, 
  faEnvelope, 
  faGlobe,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

// Reusable style objects using design tokens
const storyStyles = {
  container: {
    color: colors.primary.white,
    backgroundColor: colors.primary.black,
    padding: spacing.lg,
    minHeight: '100vh',
  },
  section: {
    marginBottom: spacing.xl,
  },
  label: {
    color: colors.grey.grey6,
    fontSize: '14px',
    marginBottom: spacing.sm,
    display: 'block',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: spacing.lg,
  },
  flexRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: spacing.lg,
    flexWrap: 'wrap' as const,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.lg,
  },
  demoContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.sm,
  },
};

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible input component with multiple variants, sizes, states, and FontAwesome icon integration.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(sizeTokens),
      description: 'Size of the input field',
    },
    variant: {
      control: 'select',
      options: ['default', 'search', 'password', 'number', 'email', 'url'],
      description: 'Type variant of the input',
    },
    state: {
      control: 'select',
      options: Object.keys(stateTokens),
      description: 'Visual state of the input',
    },
    label: {
      control: 'text',
      description: 'Label text for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether input takes full width',
    },
    clearable: {
      control: 'boolean',
      description: 'Whether to show clear button',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    label: 'Default Input',
    helperText: 'This is a helper text',
  },
};

export const Search: Story = {
  args: {
    variant: 'search',
    placeholder: 'Search for songs, artists, or playlists...',
    label: 'Search',
    onSearch: (value) => console.log('Searching for:', value),
  },
};

export const Password: Story = {
  args: {
    variant: 'password',
    placeholder: 'Enter your password',
    label: 'Password',
    helperText: 'Password must be at least 8 characters',
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Input Sizes</h3>
        <div style={storyStyles.flexColumn}>
          {Object.keys(sizeTokens).map((size) => (
            <div key={size} style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>{size.toUpperCase()}</div>
              <Input 
                size={size as any}
                placeholder={`${size} input`}
                label={`${size.charAt(0).toUpperCase() + size.slice(1)} Input`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// State variations
export const States: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Input States</h3>
        <div style={storyStyles.flexColumn}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Default</div>
            <Input 
              placeholder="Default state"
              label="Default Input"
              helperText="This is normal helper text"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Error</div>
            <Input 
              state="error"
              placeholder="Error state"
              label="Error Input"
              errorMessage="This field is required"
              value="Invalid input"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Success</div>
            <Input 
              state="success"
              placeholder="Success state"
              label="Success Input"
              successMessage="Input validated successfully"
              value="Valid input"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Warning</div>
            <Input 
              state="warning"
              placeholder="Warning state"
              label="Warning Input"
              warningMessage="Please double-check this value"
              value="Check this"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Disabled</div>
            <Input 
              disabled
              placeholder="Disabled state"
              label="Disabled Input"
              value="Cannot edit this"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Variant demonstrations
export const Variants: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Input Variants</h3>
        <div style={storyStyles.flexColumn}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Search (with automatic search icon)</div>
            <Input 
              variant="search"
              placeholder="Search Spotify..."
              label="Search"
              onSearch={(value) => console.log('Searching:', value)}
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Password (with toggle visibility)</div>
            <Input 
              variant="password"
              placeholder="Enter password"
              label="Password"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Email</div>
            <Input 
              variant="email"
              placeholder="user@spotify.com"
              label="Email Address"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Number</div>
            <Input 
              variant="number"
              placeholder="42"
              label="Favorite Number"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>URL</div>
            <Input 
              variant="url"
              placeholder="https://spotify.com"
              label="Website URL"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Icon demonstrations
export const WithIcons: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Icons & Features</h3>
        <div style={storyStyles.flexColumn}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Left Icon</div>
            <Input 
              leftIcon={faUser}
              placeholder="Username"
              label="Username"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Right Icon</div>
            <Input 
              rightIcon={faHeart}
              placeholder="Favorite song"
              label="Favorite Song"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Both Icons</div>
            <Input 
              leftIcon={faEnvelope}
              rightIcon={faGlobe}
              placeholder="email@domain.com"
              label="Email with Domain"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Clearable Input</div>
            <Input 
              clearable
              placeholder="Type something to see clear button"
              label="Clearable Input"
              helperText="Clear button appears when you type"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Loading State</div>
            <Input 
              loading
              placeholder="Loading..."
              label="Loading Input"
              value="Processing..."
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Interactive examples
export const Interactive: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.section}>
          <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Interactive Examples</h3>
          <div style={storyStyles.flexColumn}>
            <div style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>Controlled Search Input</div>
              <Input 
                variant="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={(value) => alert(`Searching for: "${value}"`)}
                placeholder="Search and press Enter"
                label="Search Songs"
                clearable
                onClear={() => setSearchValue('')}
              />
            </div>
            
            <div style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>Password with Validation</div>
              <Input 
                variant="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Enter secure password"
                label="Password"
                state={passwordValue.length > 0 && passwordValue.length < 8 ? 'error' : 'default'}
                errorMessage={passwordValue.length > 0 && passwordValue.length < 8 ? 'Password must be at least 8 characters' : ''}
                successMessage={passwordValue.length >= 8 ? 'Strong password!' : ''}
              />
            </div>
            
            <div style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>Email with Validation</div>
              <Input 
                variant="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="your@email.com"
                label="Email"
                state={emailValue && !emailValue.includes('@') ? 'error' : emailValue && emailValue.includes('@') ? 'success' : 'default'}
                errorMessage={emailValue && !emailValue.includes('@') ? 'Please enter a valid email' : ''}
                successMessage={emailValue && emailValue.includes('@') ? 'Valid email format' : ''}
                leftIcon={faEnvelope}
                clearable
                onClear={() => setEmailValue('')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Full width demonstration
export const FullWidth: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Full Width Examples</h3>
        <div style={storyStyles.flexColumn}>
          <Input 
            fullWidth
            variant="search"
            placeholder="Full width search input"
            label="Search Everything"
            size="lg"
          />
          
          <Input 
            fullWidth
            placeholder="Full width text input"
            label="Description"
            helperText="This input takes the full width of its container"
          />
        </div>
      </div>
    </div>
  ),
};

// Real-world form example
export const RealWorldForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      website: '',
    });
    
    const updateField = (field: string, value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.section}>
          <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Spotify Artist Registration Form</h3>
          <div style={{ maxWidth: '400px', ...storyStyles.flexColumn }}>
            <Input 
              leftIcon={faUser}
              value={formData.username}
              onChange={(e) => updateField('username', e.target.value)}
              placeholder="Artist name"
              label="Artist Name"
              clearable
              onClear={() => updateField('username', '')}
            />
            
            <Input 
              variant="email"
              leftIcon={faEnvelope}
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="artist@email.com"
              label="Email Address"
              state={formData.email && !formData.email.includes('@') ? 'error' : formData.email && formData.email.includes('@') ? 'success' : 'default'}
              errorMessage={formData.email && !formData.email.includes('@') ? 'Please enter a valid email' : ''}
              clearable
              onClear={() => updateField('email', '')}
            />
            
            <Input 
              variant="password"
              leftIcon={faLock}
              value={formData.password}
              onChange={(e) => updateField('password', e.target.value)}
              placeholder="Secure password"
              label="Password"
              state={formData.password.length > 0 && formData.password.length < 8 ? 'error' : 'default'}
              errorMessage={formData.password.length > 0 && formData.password.length < 8 ? 'Password must be at least 8 characters' : ''}
            />
            
            <Input 
              variant="password"
              leftIcon={faLock}
              value={formData.confirmPassword}
              onChange={(e) => updateField('confirmPassword', e.target.value)}
              placeholder="Confirm password"
              label="Confirm Password"
              state={
                formData.confirmPassword && formData.password !== formData.confirmPassword ? 'error' : 
                formData.confirmPassword && formData.password === formData.confirmPassword ? 'success' : 
                'default'
              }
              errorMessage={formData.confirmPassword && formData.password !== formData.confirmPassword ? 'Passwords do not match' : ''}
              successMessage={formData.confirmPassword && formData.password === formData.confirmPassword ? 'Passwords match' : ''}
            />
            
            <Input 
              variant="url"
              leftIcon={faGlobe}
              value={formData.website}
              onChange={(e) => updateField('website', e.target.value)}
              placeholder="https://yourwebsite.com"
              label="Website (Optional)"
              helperText="Your official website or social media profile"
              clearable
              onClear={() => updateField('website', '')}
            />
          </div>
        </div>
      </div>
    );
  },
}; 