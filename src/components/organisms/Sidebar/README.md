# Sidebar Component

## Overview
A comprehensive sidebar navigation component providing **user library management, search functionality, and content organization** for Spotify-style applications. Serves as the primary library navigation interface with **adaptive filtering and view controls**.

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Library Management** | Displays user's playlists, artists, albums, and podcasts | "Your Library" section with items |
| **Content Filtering** | Filter by content type with interactive buttons | Playlists, Artists, Albums, Podcasts & Shows |
| **Search Integration** | Search within user's library with real-time input | "Search in Your Library" input |
| **View Toggle** | Switch between list and grid views | List/Grid icon controls |
| **Action Controls** | Add new content and expand/collapse sidebar | Plus and expand icons |
| **Spotify Branding** | Consistent brand presence with logo | Spotify logo at top |
| **Horizontal Tiles** | Rich display of library items with images | Song/playlist cards with metadata |
| **Responsive Design** | Adapts to different screen sizes and states | Mobile-friendly layout |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `libraryItems` | `LibraryItem[]` | `[]` | *Optional.* Array of library items to display |
| `filters` | `string[]` | `['Playlists', 'Artists', 'Albums', 'Podcasts & Shows']` | *Optional.* Available filter options |
| `onFilterClick` | `(filter: string) => void` | - | *Optional.* Handler for filter button clicks |
| `onAddClick` | `() => void` | - | *Optional.* Handler for add button click |
| `onExpandClick` | `() => void` | - | *Optional.* Handler for expand button click |
| `onSearch` | `(query: string) => void` | - | *Optional.* Handler for search input changes |
| `onLibraryItemClick` | `(item: LibraryItem) => void` | - | *Optional.* Handler for library item clicks |
| `onViewToggle` | `(viewType: 'list' \| 'grid') => void` | - | *Optional.* Handler for view toggle clicks |
| `showLogo` | `boolean` | `true` | *Optional.* Whether to show Spotify logo |
| `currentView` | `'list' \| 'grid'` | `'list'` | *Optional.* Current view type |
| `className` | `string` | - | *Optional.* Custom CSS class name |
| `...props` | `React.HTMLAttributes<HTMLElement>` | - | Additional HTML attributes |

### LibraryItem Type
```tsx
interface LibraryItem {
  id?: string;
  image: string;         // Item cover image URL
  title: string;         // Item title/name
  subtitle: string;      // Item description (e.g., "Playlist • 213 songs")
  type: 'playlist' | 'artist' | 'album' | 'podcast';  // Content type
  pinned?: boolean;      // Whether item is pinned to top
}
```

## Design Tokens Integration

The component uses design tokens for consistent styling:

### Layout Structure
```tsx
const SIDEBAR_STYLES = {
  container: {
    width: '280px',                                    // Standard sidebar width
    height: '100vh',                                   // Full viewport height
    backgroundColor: colors.primary.black,            // Spotify black background
    color: colors.primary.white,                      // White text
    padding: spacing.md,                              // Standard padding
    borderRight: `1px solid ${colors.grey.grey3}`,   // Subtle border
  },
  // ... additional styles
};
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

## Usage Patterns

### Basic Sidebar
```tsx
<Sidebar />
```

### Customized Sidebar with Handlers
```tsx
<Sidebar
  libraryItems={userLibrary}
  filters={['Playlists', 'Albums', 'Artists']}
  onFilterClick={(filter) => handleFilterChange(filter)}
  onAddClick={() => handleAddContent()}
  onExpandClick={() => toggleSidebarExpansion()}
  onSearch={(query) => handleLibrarySearch(query)}
  onLibraryItemClick={(item) => navigateToItem(item)}
  onViewToggle={(view) => setCurrentView(view)}
  currentView="grid"
  showLogo={true}
/>
```

### Sidebar with Custom Library Items
```tsx
const customLibraryItems = [
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

<Sidebar
  libraryItems={customLibraryItems}
  onLibraryItemClick={(item) => playContent(item)}
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