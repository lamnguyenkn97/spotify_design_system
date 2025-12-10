import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { LibraryItem, QueueItem, SidebarProps, SidebarVariant } from './Sidebar.types';

// Documentation added inline below

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

// Sample queue items for stories
const sampleQueueItems: QueueItem[] = [
  {
    id: 'q1',
    image: 'https://i.scdn.co/image/ab67616d0000b273e319bbc6c28b28e8e17e0478',
    title: 'Blinding Lights',
    subtitle: 'The Weeknd',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
  },
  {
    id: 'q2',
    image: 'https://i.scdn.co/image/ab67616d0000b273a935e4689f15953311772cc4',
    title: 'Levitating',
    subtitle: 'Dua Lipa',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
  },
  {
    id: 'q3',
    image: 'https://i.scdn.co/image/ab67616d0000b273e5e2e5e2e5e2e5e2e5e2e5e2',
    title: 'Save Your Tears',
    subtitle: 'The Weeknd',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:35',
  },
  {
    id: 'q4',
    image: 'https://i.scdn.co/image/ab67616d0000b273f5e2e5e2e5e2e5e2e5e2e5e2',
    title: 'Good 4 U',
    subtitle: 'Olivia Rodrigo',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '2:58',
  },
];

const sampleNowPlaying: QueueItem = {
  id: 'now',
  image: 'https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5',
  title: 'Anti-Hero',
  subtitle: 'Taylor Swift',
  artist: 'Taylor Swift',
  album: 'Midnights',
  duration: '3:20',
};

const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Sidebar Component

Navigation sidebar for library and queue management with drag-and-drop reordering.

## Features
- 2 variants (Library, Queue)
- Search functionality
- Filter pills (Playlists, Albums, Artists, Podcasts)
- **Drag-and-drop reordering** with visual feedback
- Collapsible/expandable
- Conditional controls (search, add, expand buttons)

## Usage

\`\`\`tsx
import { Sidebar, SidebarVariant } from 'spotify-design-system';

<Sidebar
  variant={SidebarVariant.LIBRARY}
  items={libraryItems}
  onItemClick={(item) => openItem(item)}
  onSearch={(query) => searchLibrary(query)}
  onAddClick={() => createPlaylist()}
  onReorder={(reordered) => saveNewOrder(reordered)}
/>
\`\`\`

## Drag-and-Drop Implementation (Signature Feature!)

### Three-State System
1. **IDLE**: Normal state
2. **DRAGGING**: Item being dragged (reduced opacity, scale 1.05)
3. **DROP_TARGET**: Potential drop zone (green border, slight scale)

### Visual Feedback
- Dragging item: 50% opacity, cursor shows "grabbing"
- Drop target: Green border (\`colors.primary.brand\`), scale 1.02
- Smooth transitions (0.2s) for all state changes

### Implementation
\`\`\`tsx
// HTML5 Drag & Drop API
onDragStart={(e) => {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', item.id);
  setDraggedItemId(item.id);
}}

onDrop={(e) => {
  e.preventDefault();
  // Reorder items array
  const newItems = reorderArray(items, draggedId, dropTargetId);
  onReorder?.(newItems);
}}
\`\`\`

## Props Control
- \`showSearch\`: Toggle search input
- \`showAddButton\`: Toggle add button
- \`showExpandButton\`: Toggle expand button

## Use Cases
- Left sidebar navigation in Spotify
- Library management (playlists, albums, artists)
- Queue view with reordering
- Custom item ordering via drag-and-drop
        `,
      },
    },
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
    onFilterClick: { action: 'filter clicked' },
    onAddClick: { action: 'add clicked' },
    onExpandClick: { action: 'expand clicked' },
    onSearch: { action: 'search performed' },
    onLibraryItemClick: { action: 'library item clicked' },
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Default sidebar with all features enabled.',
      },
    },
  },
};

// Interactive component with state management
const InteractiveSidebar: React.FC<SidebarProps> = (args) => {
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

  const handleLibraryItemClick = (item: LibraryItem) => {
    console.log('Library item clicked:', item);
  };

  return (
    <Sidebar
      {...args}
      libraryItems={filteredItems}
      onFilterClick={handleFilterClick}
      onSearch={handleSearch}
      onLibraryItemClick={handleLibraryItemClick}
      onAddClick={() => console.log('Add new content')}
      onExpandClick={() => console.log('Expand sidebar')}
    />
  );
};

// Interactive story with state management
export const Interactive: Story = {
  render: (args) => <InteractiveSidebar {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive sidebar with working filters and search.',
      },
    },
  },
};

// Empty library state
export const EmptyLibrary: Story = {
  args: {
    libraryItems: [],
    showLogo: true,
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

// Queue variant - Default
export const QueueDefault: Story = {
  args: {
    variant: 'queue',
    position: 'right',
    queueItems: sampleQueueItems,
    nowPlaying: sampleNowPlaying,
    showCloseButton: true,
    onClose: () => console.log('Close queue'),
    onQueueItemClick: (item) => console.log('Queue item clicked:', item),
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue sidebar on the right showing now playing and upcoming tracks.',
      },
    },
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
        <Story />
      </div>
    ),
  ],
};

// Queue variant - Empty queue
export const QueueEmpty: Story = {
  args: {
    variant: 'queue',
    position: 'right',
    queueItems: [],
    nowPlaying: sampleNowPlaying,
    showCloseButton: true,
    onClose: () => console.log('Close queue'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue sidebar with no upcoming tracks, only now playing.',
      },
    },
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
        <Story />
      </div>
    ),
  ],
};

// Queue variant - Large queue
export const QueueLarge: Story = {
  args: {
    variant: 'queue',
    position: 'right',
    queueItems: Array.from({ length: 20 }, (_, index) => ({
      id: `q-${index}`,
      image: `https://picsum.photos/64/64?random=${index}`,
      title: `Track ${index + 1}`,
      subtitle: `Artist ${index + 1}`,
      artist: `Artist ${index + 1}`,
      album: `Album ${index + 1}`,
      duration: `${Math.floor(Math.random() * 3) + 2}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    })),
    nowPlaying: sampleNowPlaying,
    showCloseButton: true,
    onClose: () => console.log('Close queue'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue sidebar with many tracks to test scrolling.',
      },
    },
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
        <Story />
      </div>
    ),
  ],
};

// Queue variant - Without close button
export const QueueWithoutClose: Story = {
  args: {
    variant: 'queue',
    position: 'right',
    queueItems: sampleQueueItems,
    nowPlaying: sampleNowPlaying,
    showCloseButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue sidebar without close button for persistent display.',
      },
    },
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
        <Story />
      </div>
    ),
  ],
};

// Queue variant with drag and drop
const QueueWithDragDrop: React.FC<SidebarProps> = (args) => {
  const [queueItems, setQueueItems] = useState(sampleQueueItems);

  const handleReorder = (fromIndex: number, toIndex: number) => {
    console.log(`Reordering: ${fromIndex} → ${toIndex}`);
    const newQueue = [...queueItems];
    const [movedItem] = newQueue.splice(fromIndex, 1);
    newQueue.splice(toIndex, 0, movedItem);
    setQueueItems(newQueue);
  };

  return (
    <Sidebar
      {...args}
      items={queueItems}
      onItemReorder={handleReorder}
      onItemClick={(item, index) => console.log('Clicked:', item.title, 'at index', index)}
    />
  );
};

export const QueueDragDrop: Story = {
  render: (args) => <QueueWithDragDrop {...args} />,
  args: {
    variant: 'queue',
    position: 'right',
    nowPlaying: sampleNowPlaying,
    showCloseButton: true,
    enableDragDrop: true,
    onClose: () => console.log('Close queue'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Queue sidebar with drag-and-drop enabled for reordering tracks. Try dragging items to reorder them!',
      },
    },
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
          <h2>Try dragging queue items to reorder!</h2>
        </div>
        <Story />
      </div>
    ),
  ],
};

// Generic items prop example - Library
export const GenericLibraryItems: Story = {
  args: {
    variant: 'library',
    position: 'left',
    items: sampleLibraryItems,
    showLogo: true,
    onItemClick: (item, index) => console.log('Item clicked:', item.title, 'at index', index),
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the generic items prop instead of libraryItems for better flexibility.',
      },
    },
  },
};

// Generic items prop example - Queue
export const GenericQueueItems: Story = {
  args: {
    variant: 'queue',
    position: 'right',
    items: sampleQueueItems,
    nowPlaying: sampleNowPlaying,
    showCloseButton: true,
    onItemClick: (item, index) => console.log('Item clicked:', item.title, 'at index', index),
    onClose: () => console.log('Close queue'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Using the generic items prop instead of queueItems for consistent API.',
      },
    },
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
        <Story />
      </div>
    ),
  ],
};

// Without search
export const WithoutSearch: Story = {
  args: {
    variant: SidebarVariant.LIBRARY,
    items: sampleLibraryItems,
    showSearch: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar without search functionality.',
      },
    },
  },
};

// Without add button
export const WithoutAddButton: Story = {
  args: {
    variant: SidebarVariant.LIBRARY,
    items: sampleLibraryItems,
    showAddButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar without the add button in the filters section.',
      },
    },
  },
};

// Without expand button
export const WithoutExpandButton: Story = {
  args: {
    variant: SidebarVariant.LIBRARY,
    items: sampleLibraryItems,
    showExpandButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Sidebar without the expand button in the filters section.',
      },
    },
  },
};

// Minimal sidebar (no search, no add, no expand)
export const MinimalControls: Story = {
  args: {
    variant: SidebarVariant.LIBRARY,
    items: sampleLibraryItems,
    showSearch: false,
    showAddButton: false,
    showExpandButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal sidebar with only filters and items, no search or action buttons.',
      },
    },
  },
};
