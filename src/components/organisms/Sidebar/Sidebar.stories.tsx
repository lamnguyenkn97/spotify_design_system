import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { LibraryItem } from './Sidebar.types';

// Sample library items for stories
const sampleLibraryItems: LibraryItem[] = [
  {
    id: '1',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
    title: 'Liked Songs',
    subtitle: 'Playlist • 213 songs',
    type: 'playlist',
    pinned: true,
  },
  {
    id: '2',
    image: 'https://i.scdn.co/image/ab67616d0000b273e319bbc6c28b28e8e17e0478',
    title: 'Daily Mix 1',
    subtitle: 'Made for you • Spotify',
    type: 'playlist',
    pinned: true,
  },
  {
    id: '3',
    image: 'https://i.scdn.co/image/ab67616d0000b273a935e4689f15953311772cc4',
    title: 'Discover Weekly',
    subtitle: 'Made for you • Spotify',
    type: 'playlist',
    pinned: false,
  },
  {
    id: '4',
    image: 'https://i.scdn.co/image/ab67616d0000b273e5e2e5e2e5e2e5e2e5e2e5e2',
    title: 'The Weeknd',
    subtitle: 'Artist • 127 songs',
    type: 'artist',
    pinned: false,
  },
  {
    id: '5',
    image: 'https://i.scdn.co/image/ab67616d0000b273f5e2e5e2e5e2e5e2e5e2e5e2',
    title: 'After Hours',
    subtitle: 'Album • The Weeknd • 2020',
    type: 'album',
    pinned: false,
  },
  {
    id: '6',
    image: 'https://i.scdn.co/image/ab67656300005f1f123456789012345678901234',
    title: 'The Joe Rogan Experience',
    subtitle: 'Podcast • Joe Rogan',
    type: 'podcast',
    pinned: false,
  },
];

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          backgroundColor: '#121212',
        }}
      >
        <Story />
        <div
          style={{
            flex: 1,
            padding: '2rem',
            backgroundColor: '#1e1e1e',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2>Main Content Area</h2>
        </div>
      </div>
    ),
  ],
  argTypes: {
    libraryItems: {
      control: 'object',
      description: 'Array of library items to display',
    },
    filters: {
      control: 'object',
      description: 'Available filter options',
    },
    showLogo: {
      control: 'boolean',
      description: 'Whether to show the Spotify logo',
    },
    currentView: {
      control: 'radio',
      options: ['list', 'grid'],
      description: 'Current view type',
    },
    onFilterClick: { action: 'filter clicked' },
    onAddClick: { action: 'add clicked' },
    onExpandClick: { action: 'expand clicked' },
    onSearch: { action: 'search performed' },
    onLibraryItemClick: { action: 'library item clicked' },
    onViewToggle: { action: 'view toggled' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

// Default story
export const Default: Story = {
  args: {
    libraryItems: sampleLibraryItems,
    showLogo: true,
    currentView: 'list',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default sidebar with all features enabled.',
      },
    },
  },
};

// Interactive story with state management
export const Interactive: Story = {
  render: (args) => {
    const [currentView, setCurrentView] = useState<'list' | 'grid'>('list');
    const [filteredItems, setFilteredItems] = useState(sampleLibraryItems);
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const handleFilterClick = (filter: string) => {
      console.log('Filter clicked:', filter);
      setActiveFilter(activeFilter === filter ? null : filter);

      if (activeFilter === filter) {
        setFilteredItems(sampleLibraryItems);
      } else {
        const filterMap: Record<string, LibraryItem['type']> = {
          Playlists: 'playlist',
          Artists: 'artist',
          Albums: 'album',
          'Podcasts & Shows': 'podcast',
        };

        const filtered = sampleLibraryItems.filter(
          (item) => item.type === filterMap[filter]
        );
        setFilteredItems(filtered);
      }
    };

    const handleSearch = (query: string) => {
      console.log('Search:', query);
      if (!query.trim()) {
        setFilteredItems(sampleLibraryItems);
        return;
      }

      const searched = sampleLibraryItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(searched);
    };

    const handleViewToggle = (viewType: 'list' | 'grid') => {
      console.log('View toggled:', viewType);
      setCurrentView(viewType);
    };

    const handleLibraryItemClick = (item: LibraryItem) => {
      console.log('Library item clicked:', item);
    };

    return (
      <Sidebar
        {...args}
        libraryItems={filteredItems}
        currentView={currentView}
        onFilterClick={handleFilterClick}
        onSearch={handleSearch}
        onViewToggle={handleViewToggle}
        onLibraryItemClick={handleLibraryItemClick}
        onAddClick={() => console.log('Add new content')}
        onExpandClick={() => console.log('Expand sidebar')}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive sidebar with working filters, search, and view toggle.',
      },
    },
  },
};

// Empty library state
export const EmptyLibrary: Story = {
  args: {
    libraryItems: [],
    showLogo: true,
    currentView: 'list',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar with empty library showing the empty state message.',
      },
    },
  },
};

// Without logo
export const WithoutLogo: Story = {
  args: {
    libraryItems: sampleLibraryItems,
    showLogo: false,
    currentView: 'list',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar without the Spotify logo for cleaner look.',
      },
    },
  },
};

// Custom filters
export const CustomFilters: Story = {
  args: {
    libraryItems: sampleLibraryItems,
    filters: ['My Music', 'Recently Played', 'Favorites'],
    showLogo: true,
    currentView: 'list',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar with custom filter options.',
      },
    },
  },
};

// Grid view
export const GridView: Story = {
  args: {
    libraryItems: sampleLibraryItems,
    showLogo: true,
    currentView: 'grid',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar in grid view mode.',
      },
    },
  },
};

// Large library
export const LargeLibrary: Story = {
  args: {
    libraryItems: Array.from({ length: 50 }, (_, index) => ({
      id: `item-${index}`,
      image: `https://picsum.photos/640/640?random=${index}`,
      title: `Library Item ${index + 1}`,
      subtitle: `${['Playlist', 'Artist', 'Album', 'Podcast'][index % 4]} • ${Math.floor(Math.random() * 200) + 1} songs`,
      type: ['playlist', 'artist', 'album', 'podcast'][
        index % 4
      ] as LibraryItem['type'],
      pinned: index < 5,
    })),
    showLogo: true,
    currentView: 'list',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Sidebar with a large library to test scrolling and performance.',
      },
    },
  },
};

// Customized styling
export const CustomStyling: Story = {
  args: {
    libraryItems: sampleLibraryItems,
    showLogo: true,
    currentView: 'list',
    style: {
      width: '320px',
      backgroundColor: '#2D2D2D',
      borderRight: '2px solid #1DB954',
    },
    className: 'custom-sidebar',
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar with custom styling applied.',
      },
    },
  },
};
