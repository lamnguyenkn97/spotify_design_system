import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StoryFn } from '@storybook/react';
import { Pill } from './Pill';
import { PillProps } from './Pill.types';
import { Stack } from '../Layout';

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
    onDismiss: () => console.log('Filter removed'),
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
        <Pill label="Dismissible Filter" variant="filter" dismissible onDismiss={() => console.log('Dismissed')} />
        <Pill label="Disabled State" disabled />
      </Stack>
    </div>
  </Stack>
);

// Real Spotify Use Cases
export const SpotifyExamples: StoryFn = () => (
  <Stack direction="column" spacing="xl">
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        🎵 Genre Selection
      </h3>
             <Stack direction="row" spacing="sm" align="center" wrap="wrap">
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
      <Stack direction="row" spacing="sm" align="center" wrap="wrap">
        <Pill 
          label="2020s" 
          variant="filter" 
          dismissible 
          onDismiss={() => console.log('Year filter removed')} 
        />
        <Pill 
          label="Upbeat" 
          variant="filter" 
          dismissible 
          onDismiss={() => console.log('Mood filter removed')} 
        />
        <Pill 
          label="< 4 min" 
          variant="filter" 
          dismissible 
          onDismiss={() => console.log('Duration filter removed')} 
        />
        <Pill 
          label="Explicit" 
          variant="filter" 
          dismissible 
          onDismiss={() => console.log('Explicit filter removed')} 
        />
      </Stack>
    </div>
    
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        📚 Playlist Categories
      </h3>
      <Stack direction="row" spacing="sm" align="center" wrap="wrap">
        <Pill label="Made For You" size="sm" />
        <Pill label="Recently Played" size="sm" />
        <Pill label="Your Top Songs" size="sm" selected />
        <Pill label="Discover Weekly" size="sm" />
        <Pill label="Release Radar" size="sm" />
        <Pill label="Daily Mix" size="sm" />
      </Stack>
    </div>
    
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        🎧 Podcast Topics
      </h3>
      <Stack direction="row" spacing="sm" align="center" wrap="wrap">
        <Pill label="Technology" size="lg" />
        <Pill label="Comedy" size="lg" selected />
        <Pill label="True Crime" size="lg" />
        <Pill label="Business" size="lg" />
      </Stack>
    </div>
  </Stack>
);

// Interactive Demo
export const InteractiveDemo: StoryFn = () => {
  const [selectedGenres, setSelectedGenres] = React.useState<string[]>(['Pop', 'Electronic']);
  const [activeFilters, setActiveFilters] = React.useState<string[]>(['2020s', 'Upbeat']);
  
  const availableGenres = ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Electronic', 'Country', 'R&B', 'Classical'];
  const availableFilters = ['2020s', '2010s', '90s', 'Upbeat', 'Chill', 'Acoustic', 'Live', 'Remix'];
  
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
    <Stack direction="column" spacing="xl">
      <div>
        <h3 style={{ color: '#fff', marginBottom: '8px', fontSize: '16px', fontWeight: 'bold' }}>
          🎵 Select Your Favorite Genres
        </h3>
        <p style={{ color: '#b3b3b3', marginBottom: '16px', fontSize: '14px' }}>
          Click to toggle selection ({selectedGenres.length} selected)
        </p>
        <Stack direction="row" spacing="sm" align="center" wrap="wrap">
          {availableGenres.map(genre => (
            <Pill
              key={genre}
              label={genre}
              selected={selectedGenres.includes(genre)}
              onClick={() => toggleGenre(genre)}
            />
          ))}
        </Stack>
      </div>
      
      <div>
        <h3 style={{ color: '#fff', marginBottom: '8px', fontSize: '16px', fontWeight: 'bold' }}>
          🔍 Available Filters
        </h3>
        <p style={{ color: '#b3b3b3', marginBottom: '16px', fontSize: '14px' }}>
          Click to add filter
        </p>
        <Stack direction="row" spacing="sm" align="center" wrap="wrap">
          {availableFilters
            .filter(filter => !activeFilters.includes(filter))
            .map(filter => (
              <Pill
                key={filter}
                label={filter}
                variant="filter"
                onClick={() => addFilter(filter)}
              />
            ))}
        </Stack>
      </div>
      
      {activeFilters.length > 0 && (
        <div>
          <h3 style={{ color: '#fff', marginBottom: '8px', fontSize: '16px', fontWeight: 'bold' }}>
            ✅ Active Filters
          </h3>
          <p style={{ color: '#b3b3b3', marginBottom: '16px', fontSize: '14px' }}>
            Click × to remove filter ({activeFilters.length} active)
          </p>
          <Stack direction="row" spacing="sm" align="center" wrap="wrap">
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
        </div>
      )}
      
      <div style={{ 
        padding: '16px', 
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        borderRadius: '8px',
        marginTop: '16px'
      }}>
        <h4 style={{ color: '#1db954', marginBottom: '8px', fontSize: '14px', fontWeight: 'bold' }}>
          Current Selection Summary
        </h4>
        <p style={{ color: '#fff', fontSize: '14px', marginBottom: '4px' }}>
          <strong>Genres:</strong> {selectedGenres.length > 0 ? selectedGenres.join(', ') : 'None selected'}
        </p>
        <p style={{ color: '#fff', fontSize: '14px' }}>
          <strong>Filters:</strong> {activeFilters.length > 0 ? activeFilters.join(', ') : 'None active'}
        </p>
      </div>
    </Stack>
  );
};

// Accessibility Demo
export const AccessibilityDemo: StoryFn = () => (
  <Stack direction="column" spacing="lg">
    <div>
      <h3 style={{ color: '#fff', marginBottom: '16px', fontSize: '16px', fontWeight: 'bold' }}>
        ♿ Accessibility Features
      </h3>
      <p style={{ color: '#b3b3b3', marginBottom: '16px', fontSize: '14px' }}>
        All pills support keyboard navigation (Tab, Enter, Space) and screen readers
      </p>
    </div>
    
    <div>
      <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '14px' }}>
        Focus Management
      </h4>
      <Stack direction="row" spacing="sm" align="center">
        <Pill label="Tab to focus" onClick={() => console.log('Clicked via keyboard')} />
        <Pill label="Enter to activate" selected onClick={() => console.log('Activated')} />
        <Pill label="Space works too" variant="filter" onClick={() => console.log('Spaced')} />
      </Stack>
    </div>
    
    <div>
      <h4 style={{ color: '#fff', marginBottom: '12px', fontSize: '14px' }}>
        Screen Reader Support
      </h4>
      <Stack direction="row" spacing="sm" align="center">
        <Pill 
          label="Accessible pill" 
          aria-label="Pop music genre, not selected"
          onClick={() => console.log('Accessible click')} 
        />
        <Pill 
          label="Selected genre" 
          selected
          aria-label="Rock music genre, currently selected"
        />
        <Pill 
          label="Remove filter" 
          variant="filter"
          dismissible
          aria-label="Year 2020s filter, click to remove"
          onDismiss={() => console.log('Filter removed via screen reader')}
        />
      </Stack>
    </div>
  </Stack>
);
