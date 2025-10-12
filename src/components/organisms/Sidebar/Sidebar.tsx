import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { Input } from '../../atoms/Input';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faExpand,
  faList,
  faGripHorizontal,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonSize, ButtonVariant } from '../../atoms/Button';
import { HorizontalTileCard } from '../../molecules/horizontalTIleCard';
import { SidebarProps, LibraryItem } from './Sidebar.types';
import { colors, spacing, sizes, animations } from '../../../styles';

// Sidebar configuration using design tokens
const SIDEBAR_STYLES = {
  container: {
    width: '280px',
    height: '100vh',
    backgroundColor: colors.primary.black,
    color: colors.primary.white,
    padding: spacing.md,
    borderRight: `1px solid ${colors.grey.grey3}`,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.md,
  },
  logoSection: {
    padding: spacing.sm,
    borderBottom: `1px solid ${colors.grey.grey3}`,
  },
  titleSection: {
    padding: `${spacing.sm} 0`,
  },
  filtersSection: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: spacing.xs,
    padding: `${spacing.sm} 0`,
  },
  searchSection: {
    width: '100%',
  },
  recentsSection: {
    padding: `${spacing.sm} 0`,
    borderBottom: `1px solid ${colors.grey.grey3}`,
  },
  librarySection: {
    flex: 1,
    overflowY: 'auto' as const,
    padding: `${spacing.sm} 0`,
  },
  viewToggleGroup: {
    display: 'flex',
    gap: spacing.xs,
  },
} as const;

// Default configuration
const DEFAULT_FILTERS = ['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'];

const DEFAULT_LIBRARY_ITEMS: LibraryItem[] = [
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
    image: 'https://i.scdn.co/image/ab67616d0000b273e5e2e5e2e5e2e5e2e5e2e5e2',
    title: 'Daily Mix 2',
    subtitle: 'Playlist • Spotify',
    type: 'playlist',
    pinned: true,
  },
];

// Logo Section Component
const LogoSection: React.FC<{ showLogo: boolean }> = ({ showLogo }) => {
  if (!showLogo) return null;
  
  return (
    <div style={SIDEBAR_STYLES.logoSection}>
      <Stack direction="row" align="center" spacing="md">
        <Icon icon={faSpotify} size="lg" color="primary" aria-label="Spotify" />
      </Stack>
    </div>
  );
};

// Filter Controls Component
const FilterControls: React.FC<{
  filters: string[];
  onFilterClick?: (filter: string) => void;
  onAddClick?: () => void;
  onExpandClick?: () => void;
}> = ({ filters, onFilterClick, onAddClick, onExpandClick }) => {
  return (
    <div style={SIDEBAR_STYLES.filtersSection}>
      {filters.map((filter) => (
        <Button
          key={filter}
          text={filter}
          size={ButtonSize.Small}
          variant={ButtonVariant.Secondary}
          onClick={() => onFilterClick?.(filter)}
          aria-label={`Filter by ${filter}`}
        />
      ))}
      <Button
        icon={<Icon icon={faPlus} size="sm" />}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        onClick={() => onAddClick?.()}
        aria-label="Add new content"
      />
      <Button
        icon={<Icon icon={faExpand} size="sm" />}
        size={ButtonSize.Small}
        variant={ButtonVariant.Secondary}
        onClick={() => onExpandClick?.()}
        aria-label="Expand sidebar"
      />
    </div>
  );
};

// Search Section Component
const SearchSection: React.FC<{
  onSearch?: (query: string) => void;
}> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);
    onSearch?.(value);
  }, [onSearch]);

  return (
    <div style={SIDEBAR_STYLES.searchSection}>
      <Input
        type="search"
        placeholder="Search in Your Library"
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        leftIcon={<Icon icon={faSearch} size="sm" />}
        aria-label="Search your library"
      />
    </div>
  );
};

// View Toggle Component
const ViewToggle: React.FC<{
  currentView: 'list' | 'grid';
  onViewToggle?: (viewType: 'list' | 'grid') => void;
}> = ({ currentView, onViewToggle }) => {
  const handleListView = useCallback(() => {
    onViewToggle?.('list');
  }, [onViewToggle]);

  const handleGridView = useCallback(() => {
    onViewToggle?.('grid');
  }, [onViewToggle]);

  return (
    <div style={SIDEBAR_STYLES.viewToggleGroup}>
      <Icon 
        icon={faList} 
        size="sm" 
        clickable 
        onClick={handleListView}
        aria-label="List view"
        color={currentView === 'list' ? 'primary' : 'secondary'}
      />
      <Icon 
        icon={faGripHorizontal} 
        size="sm" 
        clickable 
        onClick={handleGridView}
        aria-label="Grid view"
        color={currentView === 'grid' ? 'primary' : 'secondary'}
      />
    </div>
  );
};

// Library List Component
const LibraryList: React.FC<{
  libraryItems: LibraryItem[];
  onLibraryItemClick?: (item: LibraryItem) => void;
}> = ({ libraryItems, onLibraryItemClick }) => {
  const handleItemClick = useCallback((item: LibraryItem) => {
    onLibraryItemClick?.(item);
  }, [onLibraryItemClick]);

  if (libraryItems.length === 0) {
    return (
      <div style={SIDEBAR_STYLES.librarySection}>
        <Typography variant="body" color="secondary">
          No items in your library
        </Typography>
      </div>
    );
  }

  return (
    <div style={SIDEBAR_STYLES.librarySection}>
      <Stack direction="column" spacing="xs">
        {libraryItems.map((item) => (
          <HorizontalTileCard
            key={item.id || item.title}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            width="100%"
            onClick={() => handleItemClick(item)}
            size="small"
          />
        ))}
      </Stack>
    </div>
  );
};

// Main Sidebar Component
export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      libraryItems = DEFAULT_LIBRARY_ITEMS,
      filters = DEFAULT_FILTERS,
      onFilterClick,
      onAddClick,
      onExpandClick,
      onSearch,
      onLibraryItemClick,
      onViewToggle,
      showLogo = true,
      currentView = 'list',
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Memoized default handlers to prevent unnecessary re-renders
    const defaultHandlers = useMemo(() => ({
      onFilterClick: () => {},
      onAddClick: () => {},
      onExpandClick: () => {},
      onSearch: () => {},
      onLibraryItemClick: () => {},
      onViewToggle: () => {},
    }), []);

    // Memoized merged styles
    const mergedStyles = useMemo(() => ({
      ...SIDEBAR_STYLES.container,
      ...style,
    }), [style]);

    // Memoized event handlers
    const handleFilterClick = useCallback((filter: string) => {
      (onFilterClick || defaultHandlers.onFilterClick)(filter);
    }, [onFilterClick, defaultHandlers.onFilterClick]);

    const handleAddClick = useCallback(() => {
      (onAddClick || defaultHandlers.onAddClick)();
    }, [onAddClick, defaultHandlers.onAddClick]);

    const handleExpandClick = useCallback(() => {
      (onExpandClick || defaultHandlers.onExpandClick)();
    }, [onExpandClick, defaultHandlers.onExpandClick]);

    const handleSearch = useCallback((query: string) => {
      (onSearch || defaultHandlers.onSearch)(query);
    }, [onSearch, defaultHandlers.onSearch]);

    const handleLibraryItemClick = useCallback((item: LibraryItem) => {
      (onLibraryItemClick || defaultHandlers.onLibraryItemClick)(item);
    }, [onLibraryItemClick, defaultHandlers.onLibraryItemClick]);

    const handleViewToggle = useCallback((viewType: 'list' | 'grid') => {
      (onViewToggle || defaultHandlers.onViewToggle)(viewType);
    }, [onViewToggle, defaultHandlers.onViewToggle]);

    // Memoized sections for performance
    const logoSection = useMemo(() => (
      <LogoSection showLogo={showLogo} />
    ), [showLogo]);

    const titleSection = useMemo(() => (
      <div style={SIDEBAR_STYLES.titleSection}>
        <Typography variant="heading" weight="bold" color="primary">
          Your Library
        </Typography>
      </div>
    ), []);

    const filterSection = useMemo(() => (
      <FilterControls
        filters={filters}
        onFilterClick={handleFilterClick}
        onAddClick={handleAddClick}
        onExpandClick={handleExpandClick}
      />
    ), [filters, handleFilterClick, handleAddClick, handleExpandClick]);

    const searchSection = useMemo(() => (
      <SearchSection onSearch={handleSearch} />
    ), [handleSearch]);

    const recentsSection = useMemo(() => (
      <div style={SIDEBAR_STYLES.recentsSection}>
        <Stack direction="row" align="center" justify="space-between">
          <Typography variant="body" color="secondary">
            Recents
          </Typography>
          <ViewToggle 
            currentView={currentView} 
            onViewToggle={handleViewToggle}
          />
        </Stack>
      </div>
    ), [currentView, handleViewToggle]);

    const librarySection = useMemo(() => (
      <LibraryList 
        libraryItems={libraryItems}
        onLibraryItemClick={handleLibraryItemClick}
      />
    ), [libraryItems, handleLibraryItemClick]);

    return (
      <nav
        ref={ref}
        className={className}
        style={mergedStyles}
        role="navigation"
        aria-label="Library navigation"
        {...props}
      >
        {logoSection}
        {titleSection}
        {filterSection}
        {searchSection}
        {recentsSection}
        {librarySection}
      </nav>
    );
  }
);

Sidebar.displayName = 'Sidebar';
