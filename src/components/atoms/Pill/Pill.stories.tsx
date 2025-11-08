import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { Pill } from './Pill';
import { Stack } from '../Stack';

export default {
  title: 'Atoms/Pill',
  component: Pill,
  parameters: {
    docs: {
      description: {
        component: `
A standalone pill component for Spotify-style tags, filters, and categories.

**Key Features:**
- 🎯 **Standalone Architecture**: No dependencies on Button component for better maintainability
- 🎨 **Design Token Integration**: Uses consistent spacing, colors, and transitions
- 📱 **Responsive Sizes**: Small, medium, and large variants
- 🔄 **Interactive States**: Default, selected, and filter variants
- ❌ **Dismissible**: Optional close functionality for filters
- ♿ **Accessible**: Full keyboard navigation and screen reader support

**Best Practices:**
- Use \`default\` variant for genre tags and categories
- Use \`selected\` state for active selections
- Use \`filter\` variant with \`dismissible\` for active filters
- Prefer \`sm\` size for compact layouts, \`md\` for general use
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Text content displayed in the pill',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant affecting padding and font size',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'selected', 'filter'],
      description: 'Visual style variant',
    },
    selected: {
      control: { type: 'boolean' },
      description: 'Whether the pill is in selected state',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the pill is disabled',
    },
    dismissible: {
      control: { type: 'boolean' },
      description: 'Whether to show dismiss button (typically for filters)',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback fired when pill is clicked',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback fired when dismiss button is clicked',
    },
  },
} as Meta<typeof Pill>;

type Story = StoryObj<typeof Pill>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Pop',
  },
};

export const Selected: Story = {
  args: {
    label: 'Rock',
    selected: true,
  },
};

export const Filter: Story = {
  args: {
    label: 'Hip-Hop',
    variant: 'filter',
    dismissible: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

// Size Showcase
export const AllSizes: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <div>
      <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '14px' }}>
        Default Pills
      </h4>
      <Stack direction="row" spacing="md" align="center">
        <Pill label="Small" size="sm" />
        <Pill label="Medium" size="md" />
        <Pill label="Large" size="lg" />
      </Stack>
    </div>
    
    <div>
      <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '14px' }}>
        Selected Pills
      </h4>
      <Stack direction="row" spacing="md" align="center">
        <Pill label="Small" size="sm" selected />
        <Pill label="Medium" size="md" selected />
        <Pill label="Large" size="lg" selected />
      </Stack>
    </div>
    
    <div>
      <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '14px' }}>
        Filter Pills
      </h4>
      <Stack direction="row" spacing="md" align="center">
        <Pill label="Small" size="sm" variant="filter" />
        <Pill label="Medium" size="md" variant="filter" />
        <Pill label="Large" size="lg" variant="filter" />
      </Stack>
    </div>
  </Stack>
);

// Variant Showcase
export const AllVariants: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <div>
      <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '14px' }}>
        Basic Variants
      </h4>
      <Stack direction="row" spacing="md" align="center">
        <Pill label="Default" variant="default" />
        <Pill label="Selected" variant="selected" />
        <Pill label="Filter" variant="filter" />
      </Stack>
    </div>
    
    <div>
      <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '14px' }}>
        Interactive States
      </h4>
      <Stack direction="row" spacing="md" align="center">
        <Pill label="Active Selection" variant="default" selected />
        <Pill label="Dismissible Filter" variant="filter" dismissible />
        <Pill label="Disabled State" disabled />
      </Stack>
    </div>
  </Stack>
);

// Real Spotify Use Cases
export const SpotifyExamples: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        🎵 Genre Selection
      </h3>
      <Stack direction="row" spacing="sm" align="center" style={{ flexWrap: 'wrap' }}>
        <Pill label="Pop" />
        <Pill label="Rock" />
        <Pill label="Hip-Hop" selected />
        <Pill label="Jazz" />
        <Pill label="Electronic" />
        <Pill label="R&B" />
        <Pill label="Country" />
      </Stack>
    </div>
    
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        🔍 Active Search Filters
      </h3>
      <Stack direction="row" spacing="sm" align="center" style={{ flexWrap: 'wrap' }}>
        <Pill 
          label="2020s" 
          variant="filter" 
          dismissible 
        />
        <Pill 
          label="Upbeat" 
          variant="filter" 
          dismissible 
        />
        <Pill 
          label="Under 4 min" 
          variant="filter" 
          dismissible 
        />
        <Pill 
          label="Explicit" 
          variant="filter" 
          dismissible 
        />
      </Stack>
    </div>
    
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        🏷️ Playlist Categories
      </h3>
      <Stack direction="row" spacing="sm" align="center" style={{ flexWrap: 'wrap' }}>
        <Pill label="Workout" size="sm" />
        <Pill label="Chill" size="sm" />
        <Pill label="Focus" size="sm" />
        <Pill label="Party" size="sm" />
        <Pill label="Sleep" size="sm" />
        <Pill label="Commute" size="sm" />
      </Stack>
    </div>
    
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        🎨 Mood Tags
      </h3>
      <Stack direction="row" spacing="sm" align="center" style={{ flexWrap: 'wrap' }}>
        <Pill label="Happy" variant="default" />
        <Pill label="Energetic" variant="default" />
        <Pill label="Relaxed" variant="default" selected />
        <Pill label="Melancholic" variant="default" />
        <Pill label="Romantic" variant="default" />
      </Stack>
    </div>
  </Stack>
);

// Interactive Demo Component
const InteractiveDemoComponent = () => {
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>(['Hip-Hop']);
  const [activeFilters, setActiveFilters] = React.useState<string[]>(['2020s', 'Upbeat']);
  
  const genres = ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Electronic', 'R&B', 'Country', 'Classical'];
  const availableFilters = ['2020s', '2010s', '90s', 'Upbeat', 'Chill', 'Explicit', 'Under 4 min'];

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters(prev => [...prev, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  return (
    <Stack direction="column" spacing="lg">
      <div>
        <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
          🎵 Interactive Genre Selection
        </h3>
        <Stack direction="row" spacing="sm" align="center" style={{ flexWrap: 'wrap' }}>
          {genres.map(genre => (
            <Pill
              key={genre}
              label={genre}
              selected={selectedGenres.includes(genre)}
              onClick={() => toggleGenre(genre)}
            />
          ))}
        </Stack>
        <p style={{ color: '#b3b3b3', fontSize: '12px', marginTop: '8px' }}>
          Selected: {selectedGenres.join(', ') || 'None'}
        </p>
      </div>
      
      <div>
        <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
          🔍 Active Filters
        </h3>
        <Stack direction="row" spacing="sm" align="center" style={{ flexWrap: 'wrap' }}>
          {activeFilters.map(filter => (
            <Pill
              key={filter}
              label={filter}
              variant="filter"
              dismissible
              onDismiss={() => removeFilter(filter)}
            />
          ))}
        </Stack>
        <p style={{ color: '#b3b3b3', fontSize: '12px', marginTop: '8px' }}>
          Active filters: {activeFilters.length}
        </p>
      </div>
      
      <div>
        <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
          ➕ Available Filters
        </h3>
        <Stack direction="row" spacing="sm" align="center" style={{ flexWrap: 'wrap' }}>
          {availableFilters
            .filter(filter => !activeFilters.includes(filter))
            .map(filter => (
              <Pill
                key={filter}
                label={filter}
                variant="default"
                onClick={() => addFilter(filter)}
              />
            ))
          }
        </Stack>
        <p style={{ color: '#b3b3b3', fontSize: '12px', marginTop: '8px' }}>
          Click to add filters
        </p>
      </div>
    </Stack>
  );
};

export const InteractiveDemo: StoryFn = () => <InteractiveDemoComponent />;

// Accessibility Demo
export const AccessibilityDemo: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        ♿ Keyboard Navigation
      </h3>
      <Stack direction="row" spacing="md" align="center">
        <Pill label="Tab to focus" />
        <Pill label="Enter to activate" selected />
        <Pill label="Space works too" variant="filter" />
      </Stack>
      <p style={{ color: '#b3b3b3', fontSize: '12px', marginTop: '8px' }}>
        Use Tab to navigate, Enter or Space to activate
      </p>
    </div>
    
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        🔊 Screen Reader Support
      </h3>
      <Stack direction="row" spacing="md" align="center">
        <Pill 
          label="Accessible pill"
          aria-label="Genre: Pop music"
        />
        <Pill 
          label="With description"
          variant="filter"
          dismissible
          aria-label="Active filter: Released in 2020s. Press to remove filter"
        />
      </Stack>
      <p style={{ color: '#b3b3b3', fontSize: '12px', marginTop: '8px' }}>
        Includes proper ARIA labels and descriptions
      </p>
    </div>
  </Stack>
);
