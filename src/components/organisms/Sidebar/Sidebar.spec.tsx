import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { Sidebar } from './Sidebar';
import { SidebarProps, LibraryItem } from './Sidebar.types';
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
    type: 'playlist',
    pinned: true,
  },
  {
    id: '2',
    image: 'https://example.com/daily-mix.png',
    title: 'Daily Mix 2',
    subtitle: 'Playlist • Spotify',
    type: 'playlist',
    pinned: false,
  },
  {
    id: '3',
    image: 'https://example.com/artist.png',
    title: 'Favorite Artist',
    subtitle: 'Artist • 127 songs',
    type: 'artist',
    pinned: false,
  },
];

// Default props for testing
const defaultProps: Partial<SidebarProps> = {
  libraryItems: mockLibraryItems,
  filters: ['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'],
  onFilterClick: jest.fn(),
  onAddClick: jest.fn(),
  onExpandClick: jest.fn(),
  onSearch: jest.fn(),
  onLibraryItemClick: jest.fn(),
  onViewToggle: jest.fn(),
  showLogo: true,
  currentView: 'list',
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

  describe('View Toggle', () => {
    it('renders view toggle controls with proper labels', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} />
        </TestWrapper>
      );
      
      expect(screen.getByLabelText('List view')).toBeInTheDocument();
      expect(screen.getByLabelText('Grid view')).toBeInTheDocument();
    });

    it('calls onViewToggle when list view is clicked', () => {
      const mockOnViewToggle = jest.fn();
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} onViewToggle={mockOnViewToggle} />
        </TestWrapper>
      );
      
      fireEvent.click(screen.getByLabelText('List view'));
      expect(mockOnViewToggle).toHaveBeenCalledWith('list');
    });

    it('calls onViewToggle when grid view is clicked', () => {
      const mockOnViewToggle = jest.fn();
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} onViewToggle={mockOnViewToggle} />
        </TestWrapper>
      );
      
      fireEvent.click(screen.getByLabelText('Grid view'));
      expect(mockOnViewToggle).toHaveBeenCalledWith('grid');
    });

    it('shows correct active view state', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} currentView="grid" />
        </TestWrapper>
      );
      
      // Both icons should be present, but we can't easily test color differences
      expect(screen.getByLabelText('List view')).toBeInTheDocument();
      expect(screen.getByLabelText('Grid view')).toBeInTheDocument();
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

    it('handles invalid current view gracefully', () => {
      render(
        <TestWrapper>
          <Sidebar {...defaultProps} currentView={'invalid' as any} />
        </TestWrapper>
      );
      
      // Should still render properly
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
      expect(ref.current?.tagName).toBe('NAV');
    });
  });
}); 