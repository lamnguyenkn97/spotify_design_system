# Sidebar Component

## Overview
A versatile sidebar navigation component supporting both **Library** and **Queue** variants. Provides user library management, search functionality, content organization, and queue display for Spotify-style applications.

## Key Features

| Feature | Description | Variants |
|---------|-------------|----------|
| **Two Variants** | Library (left) for content browsing, Queue (right) for playback queue | Library, Queue |
| **Flexible Positioning** | Can be positioned on left or right side | Left, Right |
| **Library Management** | Displays user's playlists, artists, albums, and podcasts | Library variant |
| **Queue Display** | Shows now playing and upcoming tracks | Queue variant |
| **Content Filtering** | Filter by content type with interactive buttons | Library variant |
| **Search Integration** | Search within user's library with real-time input | Library variant |
| **Action Controls** | Add new content and expand/collapse sidebar | Library variant |
| **Close Button** | Dismissible queue sidebar with close button | Queue variant |
| **Now Playing** | Dedicated section for currently playing track | Queue variant |
| **Spotify Branding** | Consistent brand presence with logo | Library variant |
| **Horizontal Tiles** | Rich display of items with images and metadata | Both variants |
| **Responsive Design** | Adapts to different screen sizes and states | Both variants |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'library' \| 'queue'` | `'library'` | Sidebar variant type |
| `position` | `'left' \| 'right'` | `'left'` | Sidebar position on screen |
| `title` | `string` | Auto | Custom sidebar title (defaults based on variant) |
| `items` | `SidebarItem[]` | `[]` | **Generic items array** - use this for both library and queue items |
| `nowPlaying` | `QueueItem` | - | Currently playing track (queue variant) |
| `filters` | `string[]` | `['Playlists', 'Artists', ...]` | Available filter options (library variant) |
| `showSearch` | `boolean` | `true` | Show search input (library variant) |
| `showFilters` | `boolean` | `true` | Show filter buttons (library variant) |
| `showAddButton` | `boolean` | `true` | Show add button in filters section (library variant) |
| `showExpandButton` | `boolean` | `true` | Show expand button in filters section (library variant) |
| `showLogo` | `boolean` | `true` | Show Spotify logo (library variant) |
| `showCloseButton` | `boolean` | `false` | Show close button in header |
| `enableDragDrop` | `boolean` | `false` | Enable drag-and-drop for item reordering (useful for queue) |
| `onFilterClick` | `(filter: string) => void` | - | Handler for filter button clicks |
| `onAddClick` | `() => void` | - | Handler for add button click |
| `onExpandClick` | `() => void` | - | Handler for expand button click |
| `onSearch` | `(query: string) => void` | - | Handler for search input changes |
| `onItemClick` | `(item: SidebarItem, index: number) => void` | - | **Generic handler** for item clicks (preferred) |
| `onItemReorder` | `(fromIndex: number, toIndex: number) => void` | - | Handler for drag-and-drop reordering |
| `onClose` | `() => void` | - | Handler for close button click |
| `className` | `string` | - | Custom CSS class name |
| `style` | `React.CSSProperties` | - | Custom inline styles |
| `libraryItems` | `LibraryItem[]` | `[]` | **Deprecated:** Use `items` prop instead |
| `queueItems` | `QueueItem[]` | `[]` | **Deprecated:** Use `items` prop instead |
| `onLibraryItemClick` | `(item: LibraryItem) => void` | - | **Deprecated:** Use `onItemClick` instead |
| `onQueueItemClick` | `(item: QueueItem) => void` | - | **Deprecated:** Use `onItemClick` instead |
| `onQueueReorder` | `(fromIndex: number, toIndex: number) => void` | - | **Deprecated:** Use `onItemReorder` instead |
| `enableQueueDragDrop` | `boolean` | `false` | **Deprecated:** Use `enableDragDrop` instead |

### SidebarItem Type (Base Generic Type)
```tsx
interface SidebarItem {
  id: string;           // Unique identifier (required)
  image: string;        // Item cover image URL
  title: string;        // Item title/name
  subtitle: string;     // Item description
  metadata?: Record<string, any>;  // Optional metadata for custom data
}
```

### LibraryItem Type (Extends SidebarItem)
```tsx
interface LibraryItem extends SidebarItem {
  type: 'playlist' | 'artist' | 'album' | 'podcast';  // Content type
  pinned?: boolean;     // Whether item is pinned to top
}
```

### QueueItem Type (Extends SidebarItem)
```tsx
interface QueueItem extends SidebarItem {
  artist: string;       // Artist name
  album?: string;       // Album name (optional)
  duration?: string;    // Track duration (e.g., "3:20")
}
```

## Generic API Design

The Sidebar component now supports a **generic `items` prop** for better flexibility and code reuse. Both `LibraryItem` and `QueueItem` extend the base `SidebarItem` interface, allowing you to use a consistent API regardless of variant.

### Why Use the Generic API?

1. **Consistent Interface**: Single prop (`items`) works for both variants
2. **Type Safety**: Full TypeScript support with proper type inference
3. **Easier Refactoring**: Change variants without changing prop names
4. **Future-Proof**: Easy to extend for new sidebar types

### Backward Compatibility

The component maintains full backward compatibility with the old `libraryItems` and `queueItems` props. Use whichever API suits your needs:

```tsx
// New generic API (recommended)
<Sidebar variant="library" items={myLibraryItems} />

// Old specific API (still supported)
<Sidebar variant="library" libraryItems={myLibraryItems} />
```

## Variants

### Library Variant (`variant="library"`)
**Purpose**: Browse and manage user's saved content (playlists, albums, artists, podcasts)

**Features**:
- Positioned on the **left** side by default
- Includes Spotify logo
- Filter buttons for content types
- Search functionality
- Add and expand controls
- Persistent display

**Use when**: Building the main navigation/library browsing interface

### Queue Variant (`variant="queue"`)
**Purpose**: Display current playback queue and now playing information

**Features**:
- Positioned on the **right** side by default
- Shows "Now Playing" section with current track
- Lists upcoming tracks in queue
- Optional close button for toggle behavior
- No filters or search (focused on queue only)
- Can be toggled on/off

**Use when**: Showing playback queue, controlled by MusicPlayer queue button

## Design Tokens Integration

The component uses design tokens for consistent styling:

### Layout Structure
```tsx
const getSidebarStyles = (position: SidebarPosition = 'left') => ({
  container: {
    width: '360px',                                   // Wider for better content display
    height: '100vh',                                  // Full viewport height
    backgroundColor: colors.primary.black,            // Spotify black background
    color: colors.primary.white,                      // White text
    padding: spacing.md,                              // Standard padding
    // Dynamic border based on position
    ...(position === 'left'
      ? { borderRight: `1px solid ${colors.grey.grey3}` }
      : { borderLeft: `1px solid ${colors.grey.grey3}` }),
  },
  // ... additional styles
});
```

### Component Sections
```tsx
// Logo section
logoWrapper: {
  marginBottom: spacing.lg,    // Space below logo
  padding: spacing.sm,         // Logo padding
}

// Filters section
filtersWrapper: {
  marginBottom: spacing.md,    // Space below filters
  gap: spacing.xs,             // Space between filter buttons
}

// Search section
searchWrapper: {
  marginBottom: spacing.md,    // Space below search
  width: '100%',              // Full width search
}
```

## Drag and Drop Support

The Sidebar supports drag-and-drop for reordering items, particularly useful for queue management.

### Enabling Drag and Drop

```tsx
const [queueItems, setQueueItems] = useState(initialQueue);

const handleReorder = (fromIndex: number, toIndex: number) => {
  const newQueue = [...queueItems];
  const [movedItem] = newQueue.splice(fromIndex, 1);
  newQueue.splice(toIndex, 0, movedItem);
  setQueueItems(newQueue);
};

<Sidebar
  variant="queue"
  position="right"
  items={queueItems}
  enableDragDrop={true}
  onItemReorder={handleReorder}
/>
```

### Drag and Drop Features

- **Visual Feedback**: Items show opacity change when dragged
- **Drop Target Indicator**: Blue line indicates where item will be dropped
- **Cursor Changes**: Cursor changes to "grab" when hovering draggable items
- **Smooth Transitions**: Animated transitions for better UX
- **Touch Support**: Works with both mouse and touch inputs

### Use Cases

1. **Queue Reordering**: Let users rearrange upcoming tracks
2. **Playlist Management**: Reorder songs in a playlist
3. **Priority Lists**: Organize items by priority

## Usage Patterns

### Library Sidebar (Default)
```tsx
<Sidebar 
  variant="library"
  position="left"
/>
```

### Queue Sidebar (Right Side)
```tsx
// Using generic API
<Sidebar
  variant="queue"
  position="right"
  items={upcomingTracks}
  nowPlaying={currentTrack}
  showCloseButton={true}
  onClose={() => setQueueOpen(false)}
  onItemClick={(item, index) => playTrack(item, index)}
/>

// With drag-and-drop
<Sidebar
  variant="queue"
  position="right"
  items={upcomingTracks}
  nowPlaying={currentTrack}
  showCloseButton={true}
  enableDragDrop={true}
  onItemReorder={(from, to) => handleQueueReorder(from, to)}
  onClose={() => setQueueOpen(false)}
  onItemClick={(item, index) => playTrack(item, index)}
/>
```

### Library Sidebar with Customization
```tsx
// Using generic API (recommended)
<Sidebar
  variant="library"
  items={userLibrary}
  filters={['Playlists', 'Albums', 'Artists']}
  onFilterClick={(filter) => handleFilterChange(filter)}
  onAddClick={() => handleAddContent()}
  onExpandClick={() => toggleSidebarExpansion()}
  onSearch={(query) => handleLibrarySearch(query)}
  onItemClick={(item, index) => navigateToItem(item, index)}
  showLogo={true}
/>
```

### Complete App Layout with Library + Queue
```tsx
function SpotifyApp() {
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [queue, setQueue] = useState(tracks.slice(1));

  // Handle queue reordering
  const handleQueueReorder = (fromIndex: number, toIndex: number) => {
    const newQueue = [...queue];
    const [movedItem] = newQueue.splice(fromIndex, 1);
    newQueue.splice(toIndex, 0, movedItem);
    setQueue(newQueue);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Library Sidebar - Left */}
      <Sidebar
        variant="library"
        position="left"
        items={myLibrary}
        onItemClick={(item) => playPlaylist(item)}
      />
      
      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* Your main content */}
      </main>
      
      {/* Queue Sidebar - Right (conditional) */}
      {isQueueOpen && (
        <Sidebar
          variant="queue"
          position="right"
          nowPlaying={{
            id: currentTrack.id,
            image: currentTrack.coverUrl,
            title: currentTrack.title,
            subtitle: currentTrack.artist,
            artist: currentTrack.artist,
            album: currentTrack.album,
            duration: currentTrack.duration,
          }}
          items={queue.map(track => ({
            id: track.id,
            image: track.coverUrl,
            title: track.title,
            subtitle: track.artist,
            artist: track.artist,
            album: track.album,
            duration: track.duration,
          }))}
          showCloseButton={true}
          enableDragDrop={true}
          onClose={() => setIsQueueOpen(false)}
          onItemClick={(item) => playTrack(item.id)}
          onItemReorder={handleQueueReorder}
        />
      )}
      
      {/* Music Player - Bottom */}
      <MusicPlayer
        currentTrack={currentTrack}
        isQueueOpen={isQueueOpen}
        onQueue={() => setIsQueueOpen(!isQueueOpen)}
        {...otherPlayerProps}
      />
    </div>
  );
}
```

### Queue Sidebar Only
```tsx
<Sidebar
  variant="queue"
  position="right"
  title="Up Next"
  nowPlaying={{
    id: '1',
    image: 'https://example.com/cover.jpg',
    title: 'Anti-Hero',
    subtitle: 'Taylor Swift',
    artist: 'Taylor Swift',
    album: 'Midnights',
    duration: '3:20',
  }}
  items={[
    {
      id: '2',
      image: 'https://example.com/track2.jpg',
      title: 'Lavender Haze',
      subtitle: 'Taylor Swift',
      artist: 'Taylor Swift',
      duration: '3:22',
    },
    // ... more tracks
  ]}
  showCloseButton={true}
  enableDragDrop={true}
  onClose={() => console.log('Close queue')}
  onItemClick={(item, index) => console.log('Play:', item.title, 'at index', index)}
  onItemReorder={(from, to) => console.log('Reorder:', from, '->', to)}
/>
```

### Sidebar with Custom Library Items
```tsx
const customLibraryItems: LibraryItem[] = [
  {
    id: '1',
    image: 'https://example.com/playlist-cover.jpg',
    title: 'My Awesome Playlist',
    subtitle: 'Playlist • 42 songs',
    type: 'playlist',
    pinned: true,
  },
  {
    id: '2',
    image: 'https://example.com/artist-photo.jpg',
    title: 'Favorite Artist',
    subtitle: 'Artist • 127 songs',
    type: 'artist',
    pinned: false,
  },
];

// Using generic API (recommended)
<Sidebar
  variant="library"
  items={customLibraryItems}
  onItemClick={(item, index) => playContent(item, index)}
/>
```

## Content Organization

### Filter System
The sidebar provides filtering capabilities for different content types:
- **Playlists**: User-created and followed playlists
- **Artists**: Followed artists and their content
- **Albums**: Saved albums and releases
- **Podcasts & Shows**: Subscribed podcasts and shows

### Action Controls
```tsx
// Add new content
<Button
  icon={<Icon icon={faPlus} size="small" />}
  variant={ButtonVariant.Secondary}
  onClick={handleAddContent}
  aria-label="Add new content"
/>

// Expand/collapse sidebar
<Button
  icon={<Icon icon={faExpand} size="small" />}
  variant={ButtonVariant.Secondary}
  onClick={handleExpand}
  aria-label="Expand sidebar"
/>
```

### View Toggle Controls
```tsx
<Stack direction="row" spacing="sm">
  <Icon 
    icon={faList} 
    size="small" 
    clickable
    onClick={() => onViewToggle('list')}
    aria-label="List view"
  />
  <Icon 
    icon={faGripHorizontal} 
    size="small" 
    clickable
    onClick={() => onViewToggle('grid')}
    aria-label="Grid view"
  />
</Stack>
```

## Search Integration

### Library Search Features
```tsx
<Input
  type="search"
  placeholder="Search in Your Library"
  leftIcon={<FontAwesomeIcon icon={faSearch} />}
  onSearch={handleLibrarySearch}
  aria-label="Search your library"
/>
```

### Search Handler Pattern
```tsx
const handleLibrarySearch = useCallback((query: string) => {
  // Filter library items based on search query
  const filteredItems = libraryItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredLibraryItems(filteredItems);
}, [libraryItems]);
```

## Library Item Display

### Horizontal Tile Cards
Each library item is displayed using the `HorizontalTileCard` component:
```tsx
<HorizontalTileCard
  image={item.image}
  title={item.title}
  subtitle={item.subtitle}
  width="100%"
  onClick={() => handleItemClick(item)}
  size="small"
/>
```

### Item Types and Metadata
- **Playlists**: Show song count and creator
- **Artists**: Show artist name and song count
- **Albums**: Show artist name and release year
- **Podcasts**: Show episode count and publisher

## Accessibility

- **Semantic HTML**: Uses proper landmark roles and structure
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Comprehensive ARIA labels and descriptions
- **Focus Management**: Proper focus indicators and navigation
- **Color Contrast**: Meets WCAG guidelines for text contrast

## Performance Optimizations

### Virtualization
For large library collections, consider implementing virtualization:
```tsx
// Large library handling
const virtualizedLibrary = useMemo(() => {
  return libraryItems.slice(0, visibleItemCount);
}, [libraryItems, visibleItemCount]);
```

### Search Debouncing
```tsx
const debouncedSearch = useCallback(
  debounce((query: string) => {
    onSearch?.(query);
  }, 300),
  [onSearch]
);
```

### Memoized Components
```tsx
const memoizedLibraryItems = useMemo(() => 
  libraryItems.map(item => (
    <HorizontalTileCard
      key={item.id}
      {...item}
      onClick={() => onLibraryItemClick?.(item)}
    />
  )), [libraryItems, onLibraryItemClick]
);
```

## Error Handling

- **Image Loading**: Fallback placeholders for failed image loads
- **Empty States**: Graceful handling of empty library
- **Search Errors**: Error boundaries for search functionality
- **Network Issues**: Offline state management

## Integration Notes

The Sidebar component is designed to work seamlessly with:
- **AppHeader**: For consistent navigation experience
- **MusicPlayer**: For playback controls and now playing display
- **Content Views**: For displaying selected library items
- **Search Results**: For library-specific search functionality 
- **Search Results**: For library-specific search functionality 
### Minimal Sidebar (No Search, No Action Buttons)
```tsx
// Perfect for apps that don't need search or add/expand functionality
<Sidebar
  variant="library"
  items={myLibraryItems}
  showSearch={false}
  showAddButton={false}
  showExpandButton={false}
  onItemClick={(item) => handleItemClick(item)}
/>
```

### Hide Specific Controls
```tsx
// Hide only search
<Sidebar items={items} showSearch={false} />

// Hide only add button
<Sidebar items={items} showAddButton={false} />

// Hide only expand button
<Sidebar items={items} showExpandButton={false} />
```
