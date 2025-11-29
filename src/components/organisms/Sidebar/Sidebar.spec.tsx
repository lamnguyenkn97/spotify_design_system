import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { Sidebar } from './Sidebar';
import {
  SidebarProps,
  LibraryItem,
  QueueItem,
  SidebarVariant,
  SidebarPosition,
  LibraryItemType,
} from './Sidebar.types';
import { theme } from '../../../styles/theme';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

// Mock library items for testing
const mockLibraryItems: LibraryItem[] = [
  {
    id: '1',
    image: 'https://example.com/liked-songs.png',
    title: 'Liked Songs',
    subtitle: 'Playlist • 213 songs',
    type: LibraryItemType.PLAYLIST,
    pinned: true,
  },
  {
    id: '2',
    image: 'https://example.com/daily-mix.png',
    title: 'Daily Mix 2',
    subtitle: 'Playlist • Spotify',
    type: LibraryItemType.PLAYLIST,
    pinned: false,
  },
  {
    id: '3',
    image: 'https://example.com/artist.png',
    title: 'Favorite Artist',
    subtitle: 'Artist • 127 songs',
    type: LibraryItemType.ARTIST,
    pinned: false,
  },
];

// Mock queue items for testing
const mockQueueItems: QueueItem[] = [
  {
    id: 'q1',
    image: 'https://example.com/track1.png',
    title: 'Blinding Lights',
    subtitle: 'The Weeknd',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
  },
  {
    id: 'q2',
    image: 'https://example.com/track2.png',
    title: 'Levitating',
    subtitle: 'Dua Lipa',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
  },
  {
    id: 'q3',
    image: 'https://example.com/track3.png',
    title: 'Save Your Tears',
    subtitle: 'The Weeknd',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:35',
  },
];

const mockNowPlaying: QueueItem = {
  id: 'now',
  image: 'https://example.com/now-playing.png',
  title: 'Anti-Hero',
  subtitle: 'Taylor Swift',
  artist: 'Taylor Swift',
  album: 'Midnights',
  duration: '3:20',
};

// Default props for testing
const defaultProps: Partial<SidebarProps> = {
  libraryItems: mockLibraryItems,
  filters: ['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'],
  onFilterClick: jest.fn(),
  onAddClick: jest.fn(),
  onExpandClick: jest.fn(),
  onSearch: jest.fn(),
  onLibraryItemClick: jest.fn(),
  showLogo: true,
};

describe('Sidebar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the sidebar component with navigation role', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByLabelText('Library navigation')).toBeInTheDocument();
    });

    it('renders the Spotify logo when showLogo is true', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} showLogo={true} />
        </TestWrapper>
      );
      
      expect(screen.getByLabelText('Spotify')).toBeInTheDocument();
    });

    it('hides the Spotify logo when showLogo is false', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} showLogo={false} />
        </TestWrapper>
      );
      
      expect(screen.queryByLabelText('Spotify')).not.toBeInTheDocument();
    });

    it('renders the "Your Library" section title', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByText('Your Library')).toBeInTheDocument();
    });

    it('renders search input with correct placeholder', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByPlaceholderText('Search in Your Library')).toBeInTheDocument();
      expect(screen.getByLabelText('Search your library')).toBeInTheDocument();
    });

    it('renders "Recents" section', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByText('Recents')).toBeInTheDocument();
    });
  });

  describe('Filter Buttons', () => {
    it('renders all filter buttons with proper labels', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByText('Playlists')).toBeInTheDocument();
      expect(screen.getByText('Artists')).toBeInTheDocument();
      expect(screen.getByText('Albums')).toBeInTheDocument();
      expect(screen.getByText('Podcasts & Shows')).toBeInTheDocument();
      
      // Check ARIA labels
      expect(screen.getByLabelText('Filter by Playlists')).toBeInTheDocument();
      expect(screen.getByLabelText('Filter by Artists')).toBeInTheDocument();
    });

    it('calls onFilterClick when filter button is clicked', () => {
      const mockOnFilterClick = jest.fn();
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} onFilterClick={mockOnFilterClick} />
        </TestWrapper>
      );
      
      fireEvent.click(screen.getByText('Playlists'));
      expect(mockOnFilterClick).toHaveBeenCalledWith('Playlists');
    });

    it('renders custom filters when provided', () => {
      const customFilters = ['Custom Filter 1', 'Custom Filter 2'];
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} filters={customFilters} />
        </TestWrapper>
      );
      
      expect(screen.getByText('Custom Filter 1')).toBeInTheDocument();
      expect(screen.getByText('Custom Filter 2')).toBeInTheDocument();
      expect(screen.queryByText('Playlists')).not.toBeInTheDocument();
    });
  });

  describe('Action Controls', () => {
    it('renders add button with proper label', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByLabelText('Add new content')).toBeInTheDocument();
    });

    it('renders expand button with proper label', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByLabelText('Expand sidebar')).toBeInTheDocument();
    });

    it('calls onAddClick when add button is clicked', () => {
      const mockOnAddClick = jest.fn();
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} onAddClick={mockOnAddClick} />
        </TestWrapper>
      );
      
      fireEvent.click(screen.getByLabelText('Add new content'));
      expect(mockOnAddClick).toHaveBeenCalledTimes(1);
    });

    it('calls onExpandClick when expand button is clicked', () => {
      const mockOnExpandClick = jest.fn();
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} onExpandClick={mockOnExpandClick} />
        </TestWrapper>
      );
      
      fireEvent.click(screen.getByLabelText('Expand sidebar'));
      expect(mockOnExpandClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Search Functionality', () => {
    it('calls onSearch when search input is used', () => {
      const mockOnSearch = jest.fn();
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} onSearch={mockOnSearch} />
        </TestWrapper>
      );
      
      const searchInput = screen.getByPlaceholderText('Search in Your Library');
      fireEvent.change(searchInput, { target: { value: 'test search' } });
      
      expect(searchInput).toHaveValue('test search');
      expect(mockOnSearch).toHaveBeenCalledWith('test search');
    });

    it('handles empty search input', () => {
      const mockOnSearch = jest.fn();
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} onSearch={mockOnSearch} />
        </TestWrapper>
      );
      
      const searchInput = screen.getByPlaceholderText('Search in Your Library');
      
      // First set a value to test clearing it
      fireEvent.change(searchInput, { target: { value: 'test' } });
      expect(mockOnSearch).toHaveBeenCalledWith('test');
      
      // Then clear it to empty
      fireEvent.change(searchInput, { target: { value: '' } });
      
      expect(searchInput).toHaveValue('');
      expect(mockOnSearch).toHaveBeenCalledWith('');
    });
  });

  describe('Library Items', () => {
    it('renders library items when provided', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} libraryItems={mockLibraryItems} />
        </TestWrapper>
      );
      
      expect(screen.getByText('Liked Songs')).toBeInTheDocument();
      expect(screen.getByText('Daily Mix 2')).toBeInTheDocument();
      expect(screen.getByText('Favorite Artist')).toBeInTheDocument();
    });

    it('renders correct subtitles for library items', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} libraryItems={mockLibraryItems} />
        </TestWrapper>
      );
      
      expect(screen.getByText('Playlist • 213 songs')).toBeInTheDocument();
      expect(screen.getByText('Playlist • Spotify')).toBeInTheDocument();
      expect(screen.getByText('Artist • 127 songs')).toBeInTheDocument();
    });

    it('handles empty library items array', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} libraryItems={[]} />
        </TestWrapper>
      );
      
      expect(screen.getByText('No items in your library')).toBeInTheDocument();
    });

    it('calls onLibraryItemClick when library item is clicked', () => {
      const mockOnLibraryItemClick = jest.fn();
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} onLibraryItemClick={mockOnLibraryItemClick} />
        </TestWrapper>
      );
      
      fireEvent.click(screen.getByText('Liked Songs'));
      expect(mockOnLibraryItemClick).toHaveBeenCalledWith(mockLibraryItems[0]);
    });
  });

  describe('Conditional Rendering', () => {
    it('applies custom className when provided', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} className="custom-sidebar" />
        </TestWrapper>
      );
      
      expect(screen.getByRole('navigation')).toHaveClass('custom-sidebar');
    });

    it('applies custom styles when provided', () => {
      const customStyle = { backgroundColor: 'red' };
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} style={customStyle} />
        </TestWrapper>
      );
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveStyle('background-color: red');
    });
  });

  describe('Accessibility', () => {
    it('has proper semantic HTML structure', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByLabelText('Library navigation')).toBeInTheDocument();
    });

    it('has proper ARIA labels for interactive elements', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByLabelText('Add new content')).toBeInTheDocument();
      expect(screen.getByLabelText('Expand sidebar')).toBeInTheDocument();
      expect(screen.getByLabelText('Search your library')).toBeInTheDocument();
      expect(screen.getByLabelText('List view')).toBeInTheDocument();
      expect(screen.getByLabelText('Grid view')).toBeInTheDocument();
    });

    it('handles keyboard navigation', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      const searchInput = screen.getByPlaceholderText('Search in Your Library');
      
      // Test keyboard interaction
      fireEvent.keyDown(searchInput, { key: 'Enter' });
      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('handles undefined library items gracefully', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} libraryItems={undefined} />
        </TestWrapper>
      );
      
      // Should render with default empty array
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('handles missing handlers gracefully', () => {
      render(
        <TestWrapper>
          <Sidebar />
        </TestWrapper>
      );
      
      // Should render without errors even without handlers
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

  });

  describe('Performance', () => {
    it('renders efficiently with large library items array', () => {
      const largeLibraryItems = Array.from({ length: 100 }, (_, index) => ({
        id: `${index}`,
        image: `https://example.com/image${index}.jpg`,
        title: `Item ${index}`,
        subtitle: `Subtitle ${index}`,
        type: 'playlist' as const,
        pinned: false,
      }));

      render(
        <TestWrapper>
          <Sidebar {...defaultProps} libraryItems={largeLibraryItems} />
        </TestWrapper>
      );
      
      // Should render without performance issues
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
  });

  describe('forwardRef Implementation', () => {
    it('forwards ref to the navigation element', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(
        <TestWrapper>
          <Sidebar ref={ref} {...defaultProps} />
        </TestWrapper>
      );
      
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current?.tagName).toBe('ASIDE');
    });
  });

  describe('Queue Variant', () => {
    it('renders queue variant with correct title', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            position={SidebarPosition.RIGHT}
            items={mockQueueItems}
            nowPlaying={mockNowPlaying}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Queue')).toBeInTheDocument();
      expect(screen.getByLabelText('Queue navigation')).toBeInTheDocument();
    });

    it('renders now playing section', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            nowPlaying={mockNowPlaying}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Now playing')).toBeInTheDocument();
      expect(screen.getByText('Anti-Hero')).toBeInTheDocument();
      expect(screen.getByText('Taylor Swift')).toBeInTheDocument();
    });

    it('renders queue items section', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            nowPlaying={mockNowPlaying}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Next in queue')).toBeInTheDocument();
      expect(screen.getByText('Blinding Lights')).toBeInTheDocument();
      expect(screen.getByText('Levitating')).toBeInTheDocument();
      expect(screen.getByText('Save Your Tears')).toBeInTheDocument();
    });

    it('does not render search and filters in queue variant', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            nowPlaying={mockNowPlaying}
          />
        </TestWrapper>
      );
      
      expect(screen.queryByPlaceholderText('Search in Your Library')).not.toBeInTheDocument();
      expect(screen.queryByText('Playlists')).not.toBeInTheDocument();
    });

    it('renders close button when showCloseButton is true', () => {
      const mockOnClose = jest.fn();
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            showCloseButton={true}
            onClose={mockOnClose}
          />
        </TestWrapper>
      );
      
      const closeButton = screen.getByLabelText('Close sidebar');
      expect(closeButton).toBeInTheDocument();
      
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('handles empty queue', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={[]}
            nowPlaying={mockNowPlaying}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('No songs in queue')).toBeInTheDocument();
    });
  });

  describe('Generic Items API', () => {
    it('accepts items prop instead of libraryItems', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.LIBRARY}
            items={mockLibraryItems}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Liked Songs')).toBeInTheDocument();
      expect(screen.getByText('Daily Mix 2')).toBeInTheDocument();
    });

    it('accepts items prop instead of queueItems', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            nowPlaying={mockNowPlaying}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Blinding Lights')).toBeInTheDocument();
      expect(screen.getByText('Levitating')).toBeInTheDocument();
    });

    it('calls onItemClick with item and index', () => {
      const mockOnItemClick = jest.fn();
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.LIBRARY}
            items={mockLibraryItems}
            onItemClick={mockOnItemClick}
          />
        </TestWrapper>
      );
      
      fireEvent.click(screen.getByText('Liked Songs'));
      expect(mockOnItemClick).toHaveBeenCalledWith(mockLibraryItems[0], 0);
    });

    it('maintains backward compatibility with libraryItems prop', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.LIBRARY}
            libraryItems={mockLibraryItems}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Liked Songs')).toBeInTheDocument();
    });

    it('maintains backward compatibility with queueItems prop', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            queueItems={mockQueueItems}
            nowPlaying={mockNowPlaying}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Blinding Lights')).toBeInTheDocument();
    });
  });

  describe('Drag and Drop Functionality', () => {
    it('renders items as draggable when enableDragDrop is true', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            enableDragDrop={true}
          />
        </TestWrapper>
      );
      
      const firstItem = screen.getByText('Blinding Lights').closest('div');
      expect(firstItem?.parentElement).toHaveAttribute('draggable', 'true');
    });

    it('renders items as non-draggable when enableDragDrop is false', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            enableDragDrop={false}
          />
        </TestWrapper>
      );
      
      const firstItem = screen.getByText('Blinding Lights').closest('div');
      expect(firstItem?.parentElement).toHaveAttribute('draggable', 'false');
    });

    it('handles drag start event', () => {
      const mockOnItemReorder = jest.fn();
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            enableDragDrop={true}
            onItemReorder={mockOnItemReorder}
          />
        </TestWrapper>
      );
      
      const firstItem = screen.getByText('Blinding Lights').closest('div')?.parentElement;
      if (firstItem) {
        fireEvent.dragStart(firstItem);
        expect(firstItem).toBeInTheDocument();
      }
    });

    it('handles drag over event', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            enableDragDrop={true}
          />
        </TestWrapper>
      );
      
      const secondItem = screen.getByText('Levitating').closest('div')?.parentElement;
      if (secondItem) {
        fireEvent.dragOver(secondItem);
        expect(secondItem).toBeInTheDocument();
      }
    });

    it('calls onItemReorder when item is dropped', () => {
      const mockOnItemReorder = jest.fn();
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            enableDragDrop={true}
            onItemReorder={mockOnItemReorder}
          />
        </TestWrapper>
      );
      
      const firstItem = screen.getByText('Blinding Lights').closest('div')?.parentElement;
      const secondItem = screen.getByText('Levitating').closest('div')?.parentElement;
      
      if (firstItem && secondItem) {
        // Simulate drag and drop
        fireEvent.dragStart(firstItem);
        fireEvent.dragOver(secondItem);
        fireEvent.drop(secondItem);
        
        expect(mockOnItemReorder).toHaveBeenCalledWith(0, 1);
      }
    });

    it('handles drag end event', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            enableDragDrop={true}
          />
        </TestWrapper>
      );
      
      const firstItem = screen.getByText('Blinding Lights').closest('div')?.parentElement;
      if (firstItem) {
        fireEvent.dragStart(firstItem);
        fireEvent.dragEnd(firstItem);
        expect(firstItem).toBeInTheDocument();
      }
    });

    it('does not call onItemReorder when dropping on same position', () => {
      const mockOnItemReorder = jest.fn();
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            enableDragDrop={true}
            onItemReorder={mockOnItemReorder}
          />
        </TestWrapper>
      );
      
      const firstItem = screen.getByText('Blinding Lights').closest('div')?.parentElement;
      
      if (firstItem) {
        // Simulate drag and drop on same item
        fireEvent.dragStart(firstItem);
        fireEvent.dragOver(firstItem);
        fireEvent.drop(firstItem);
        
        expect(mockOnItemReorder).not.toHaveBeenCalled();
      }
    });

    it('maintains backward compatibility with enableQueueDragDrop', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            enableQueueDragDrop={true}
          />
        </TestWrapper>
      );
      
      const firstItem = screen.getByText('Blinding Lights').closest('div');
      expect(firstItem?.parentElement).toHaveAttribute('draggable', 'true');
    });
  });

  describe('Enums', () => {
    it('accepts SidebarVariant enum values', () => {
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.LIBRARY}
            items={mockLibraryItems}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Your Library')).toBeInTheDocument();
      
      const { rerender } = render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            items={mockQueueItems}
            nowPlaying={mockNowPlaying}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Queue')).toBeInTheDocument();
    });

    it('accepts SidebarPosition enum values', () => {
      const { container } = render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.LIBRARY}
            position={SidebarPosition.LEFT}
            items={mockLibraryItems}
          />
        </TestWrapper>
      );
      
      expect(container.querySelector('aside')).toBeInTheDocument();
      
      const { container: rightContainer } = render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            position={SidebarPosition.RIGHT}
            items={mockQueueItems}
          />
        </TestWrapper>
      );
      
      expect(rightContainer.querySelector('aside')).toBeInTheDocument();
    });

    it('accepts LibraryItemType enum values', () => {
      const itemsWithEnum: LibraryItem[] = [
        {
          id: '1',
          image: 'https://example.com/playlist.png',
          title: 'Test Playlist',
          subtitle: 'Playlist',
          type: LibraryItemType.PLAYLIST,
          pinned: false,
        },
        {
          id: '2',
          image: 'https://example.com/artist.png',
          title: 'Test Artist',
          subtitle: 'Artist',
          type: LibraryItemType.ARTIST,
          pinned: false,
        },
        {
          id: '3',
          image: 'https://example.com/album.png',
          title: 'Test Album',
          subtitle: 'Album',
          type: LibraryItemType.ALBUM,
          pinned: false,
        },
        {
          id: '4',
          image: 'https://example.com/podcast.png',
          title: 'Test Podcast',
          subtitle: 'Podcast',
          type: LibraryItemType.PODCAST,
          pinned: false,
        },
      ];
      
      render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.LIBRARY}
            items={itemsWithEnum}
          />
        </TestWrapper>
      );
      
      expect(screen.getByText('Test Playlist')).toBeInTheDocument();
      expect(screen.getByText('Test Artist')).toBeInTheDocument();
      expect(screen.getByText('Test Album')).toBeInTheDocument();
      expect(screen.getByText('Test Podcast')).toBeInTheDocument();
    });
  });

  describe('Positioning', () => {
    it('renders on left side by default', () => {
      const { container } = render(
        <TestWrapper>
          <Sidebar variant={SidebarVariant.LIBRARY} items={mockLibraryItems} />
        </TestWrapper>
      );
      
      expect(container.querySelector('aside')).toBeInTheDocument();
    });

    it('renders on right side when position is right', () => {
      const { container } = render(
        <TestWrapper>
          <Sidebar
            variant={SidebarVariant.QUEUE}
            position={SidebarPosition.RIGHT}
            items={mockQueueItems}
          />
        </TestWrapper>
      );
      
      expect(container.querySelector('aside')).toBeInTheDocument();
    });
  });
}); 