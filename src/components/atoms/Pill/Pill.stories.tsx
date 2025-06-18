import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { 
  faMusic, 
  faHeart, 
  faPlay, 
  faDownload, 
  faStar,
  faUser,
  faTag,
  faHome,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Pill } from './Pill';
import { PillProps } from './Pill.types';
import { Stack } from '../Layout';

export default {
  title: 'Atoms/Pill',
  component: Pill,
  parameters: {
    docs: {
      description: {
        component: 'A versatile pill component with multiple variants, sizes, and interactive features.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'brand', 'outline', 'ghost'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'selected', 'disabled', 'loading', 'pressed'],
    },
    shape: {
      control: { type: 'select' },
      options: ['rounded', 'pill', 'square'],
    },
    badgePosition: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'inline'],
    },
  },
} as Meta<typeof Pill>;

const Template: StoryFn<PillProps> = (args) => <Pill {...args} />;

// Default Examples
export const Default = Template.bind({});
Default.args = {
  label: 'Music',
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'All',
  selected: true,
};

// Size Variations
export const SizeVariations: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Extra Small" size="xs" />
      <Pill label="Small" size="sm" />
      <Pill label="Medium" size="md" />
      <Pill label="Large" size="lg" />
      <Pill label="Extra Large" size="xl" />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="XS Selected" size="xs" selected />
      <Pill label="SM Selected" size="sm" selected />
      <Pill label="MD Selected" size="md" selected />
      <Pill label="LG Selected" size="lg" selected />
      <Pill label="XL Selected" size="xl" selected />
    </Stack>
  </Stack>
);

// Variant Showcase
export const VariantShowcase: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Default" variant="default" />
      <Pill label="Primary" variant="primary" />
      <Pill label="Secondary" variant="secondary" />
      <Pill label="Success" variant="success" />
      <Pill label="Warning" variant="warning" />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Error" variant="error" />
      <Pill label="Brand" variant="brand" />
      <Pill label="Outline" variant="outline" />
      <Pill label="Ghost" variant="ghost" />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Default Selected" variant="default" selected />
      <Pill label="Primary Selected" variant="primary" selected />
      <Pill label="Outline Selected" variant="outline" selected />
      <Pill label="Ghost Selected" variant="ghost" selected />
    </Stack>
  </Stack>
);

// Shape Options
export const ShapeOptions: StoryFn = () => (
  <Stack direction="row" spacing="md" align="center">
    <Pill label="Rounded" shape="rounded" />
    <Pill label="Pill" shape="pill" />
    <Pill label="Square" shape="square" />
  </Stack>
);

// With Icons
export const WithIcons: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Music" leftIcon={faMusic} />
      <Pill label="Favorite" leftIcon={faHeart} variant="error" />
      <Pill label="Play" rightIcon={faPlay} variant="primary" />
      <Pill label="Download" leftIcon={faDownload} rightIcon={faStar} variant="success" />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="User" leftIcon={faUser} selected />
      <Pill label="Tagged" rightIcon={faTag} variant="outline" />
      <Pill label="Home & Search" leftIcon={faHome} rightIcon={faSearch} variant="ghost" />
    </Stack>
  </Stack>
);

// States & Interactions
export const StatesAndInteractions: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Default" />
      <Pill label="Selected" selected />
      <Pill label="Disabled" disabled />
      <Pill label="Loading" loading />
    </Stack>
    <Stack direction="row" spacing="md" align="center">
      <Pill label="Dismissible" dismissible onDismiss={() => alert('Dismissed!')} />
      <Pill label="With Badge" badge="5" />
      <Pill label="Inline Badge" badge="NEW" badgePosition="inline" />
      <Pill label="Non-interactive" interactive={false} />
    </Stack>
  </Stack>
);

// Advanced Features
export const AdvancedFeatures: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <Stack direction="row" spacing="md" align="center">
      <Pill 
        label="Custom Colors" 
        customColor="#ff6b35" 
        customTextColor="#ffffff" 
      />
      <Pill 
        label="With Tooltip" 
        tooltip="This is a helpful tooltip" 
        variant="primary" 
      />
      <Pill 
        label="Animated" 
        animate 
        variant="success" 
        leftIcon={faStar} 
      />
    </Stack>
    
    <Stack direction="row" spacing="md" align="center">
      <Pill 
        label="Full Width" 
        fullWidth 
        variant="brand" 
        size="lg" 
      />
    </Stack>
    
    <Stack direction="row" spacing="md" align="center">
      <Pill 
        label="Complex Example" 
        variant="primary"
        size="lg"
        leftIcon={faMusic}
        badge="3"
        dismissible
        onDismiss={() => alert('Removed!')}
        onClick={() => alert('Clicked!')}
      />
    </Stack>
  </Stack>
);

// Real-world Examples
export const RealWorldExamples: StoryFn = () => (
  <Stack direction="column" spacing="xl">
    {/* Genre Tags */}
    <Stack direction="column" spacing="sm">
      <h4 style={{ margin: 0, color: '#ffffff' }}>Music Genres</h4>
      <Stack direction="row" spacing="sm" wrap="wrap">
        <Pill label="Pop" variant="default" />
        <Pill label="Rock" variant="default" selected />
        <Pill label="Hip-Hop" variant="default" />
        <Pill label="Electronic" variant="default" />
        <Pill label="Jazz" variant="default" />
        <Pill label="Classical" variant="default" />
      </Stack>
    </Stack>
    
    {/* User Preferences */}
    <Stack direction="column" spacing="sm">
      <h4 style={{ margin: 0, color: '#ffffff' }}>User Preferences</h4>
      <Stack direction="row" spacing="sm" wrap="wrap">
        <Pill label="Liked Songs" leftIcon={faHeart} variant="error" badge="247" />
        <Pill label="Recently Played" leftIcon={faPlay} variant="success" />
        <Pill label="Downloads" leftIcon={faDownload} variant="primary" badge="12" />
        <Pill label="My Playlists" leftIcon={faUser} variant="outline" />
      </Stack>
    </Stack>
    
    {/* Filter Tags */}
    <Stack direction="column" spacing="sm">
      <h4 style={{ margin: 0, color: '#ffffff' }}>Active Filters</h4>
      <Stack direction="row" spacing="sm" wrap="wrap">
        <Pill 
          label="2020s" 
          dismissible 
          variant="brand" 
          onDismiss={() => console.log('Remove 2020s filter')} 
        />
        <Pill 
          label="Upbeat" 
          dismissible 
          variant="success" 
          onDismiss={() => console.log('Remove upbeat filter')} 
        />
        <Pill 
          label="Popular" 
          dismissible 
          variant="warning" 
          badge="Hot"
          badgePosition="inline"
          onDismiss={() => console.log('Remove popular filter')} 
        />
      </Stack>
    </Stack>
    
    {/* Loading States */}
    <Stack direction="column" spacing="sm">
      <h4 style={{ margin: 0, color: '#ffffff' }}>Loading Content</h4>
      <Stack direction="row" spacing="sm" wrap="wrap">
        <Pill label="Discovering..." loading variant="primary" />
        <Pill label="Updating Playlist" loading variant="success" />
        <Pill label="Syncing" loading variant="outline" />
      </Stack>
    </Stack>
  </Stack>
);

// Interactive Playground
export const InteractivePlayground = Template.bind({});
InteractivePlayground.args = {
  label: 'Interactive Pill',
  size: 'md',
  variant: 'primary',
  shape: 'pill',
  selected: false,
  disabled: false,
  loading: false,
  dismissible: false,
  fullWidth: false,
  interactive: true,
  animate: false,
  badge: '',
  badgePosition: 'top-right',
  tooltip: 'Click me!',
};
