import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Button } from '../../atoms/Button/Button';
import { Pill } from '../../atoms/Pill';
import { Icon } from '../../atoms/Icon/Icon';
import { Input } from '../../atoms/Input';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faExpand,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonSize, ButtonVariant } from '../../atoms/Button';
import { HorizontalTileCard } from '../../molecules/HorizontalTileCard';
import { SidebarProps, LibraryItem } from './Sidebar.types';
import { colors, spacing } from '../../../styles';

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
    flexWrap: 'wrap' as const,
    padding: `${spacing.sm} 0`,
  },
  librarySection: {
    flex: 1,
    overflowY: 'auto' as const,
    padding: `${spacing.sm} 0`,
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
    <Stack
      direction="row"
      align="center"
      spacing="md"
      style={SIDEBAR_STYLES.logoSection}
    >
      <Icon icon={faSpotify} size="lg" color="primary" aria-label="Spotify" />
    </Stack>
  );
};

// Filter Controls Component
const FilterControls: React.FC<{
  filters: string[];
  activeFilter?: string;
  onFilterClick?: (filter: string) => void;
  onAddClick?: () => void;
  onExpandClick?: () => void;
}> = ({ filters, activeFilter, onFilterClick, onAddClick, onExpandClick }) => {
  return (
    <Stack
      direction="row"
      spacing="xs"
      style={SIDEBAR_STYLES.filtersSection}
    >
      {filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          size="sm"
          variant="filter"
          selected={activeFilter === filter}
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
    </Stack>
  );
};

// Search Section Component
const SearchSection: React.FC<{
  onSearch?: (query: string) => void;
}> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchValue(value);
      onSearch?.(value);
    },
    [onSearch]
  );

  return (
    <Stack>
      <Input
        type="search"
        placeholder="Search in Your Library"
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        leftIcon={<Icon icon={faSearch} size="sm" />}
        aria-label="Search your library"
      />
    </Stack>
  );
};

// Library List Component
const LibraryList: React.FC<{
  libraryItems: LibraryItem[];
  activeItemId?: string;
  onLibraryItemClick?: (item: LibraryItem) => void;
}> = ({ libraryItems, activeItemId, onLibraryItemClick }) => {
  const handleItemClick = useCallback(
    (item: LibraryItem) => {
      onLibraryItemClick?.(item);
    },
    [onLibraryItemClick]
  );

  if (libraryItems.length === 0) {
    return (
      <Stack style={SIDEBAR_STYLES.librarySection}>
        <Typography variant="body" color="secondary">
          No items in your library
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack direction="column" spacing="xs" style={SIDEBAR_STYLES.librarySection}>
      {libraryItems.map((item) => (
        <HorizontalTileCard
          key={item.id || item.title}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          width="100%"
          onClick={() => handleItemClick(item)}
          size="small"
          isActive={activeItemId === (item.id || item.title)}
        />
      ))}
    </Stack>
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
      showLogo = true,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // State to track active filter and library item
    const [activeFilter, setActiveFilter] = useState<string | undefined>();
    const [activeItemId, setActiveItemId] = useState<string | undefined>();

    // Memoized default handlers to prevent unnecessary re-renders
    const defaultHandlers = useMemo(
      () => ({
        onFilterClick: () => {},
        onAddClick: () => {},
        onExpandClick: () => {},
        onSearch: () => {},
        onLibraryItemClick: () => {},
      }),
      []
    );

    // Memoized merged styles
    const mergedStyles = useMemo(
      () => ({
        ...SIDEBAR_STYLES.container,
        ...style,
      }),
      [style]
    );

    // Memoized event handlers
    const handleFilterClick = useCallback(
      (filter: string) => {
        setActiveFilter(filter);
        (onFilterClick || defaultHandlers.onFilterClick)(filter);
      },
      [onFilterClick, defaultHandlers.onFilterClick]
    );

    const handleAddClick = useCallback(() => {
      (onAddClick || defaultHandlers.onAddClick)();
    }, [onAddClick, defaultHandlers.onAddClick]);

    const handleExpandClick = useCallback(() => {
      (onExpandClick || defaultHandlers.onExpandClick)();
    }, [onExpandClick, defaultHandlers.onExpandClick]);

    const handleSearch = useCallback(
      (query: string) => {
        (onSearch || defaultHandlers.onSearch)(query);
      },
      [onSearch, defaultHandlers.onSearch]
    );

    const handleLibraryItemClick = useCallback(
      (item: LibraryItem) => {
        setActiveItemId(item.id || item.title);
        (onLibraryItemClick || defaultHandlers.onLibraryItemClick)(item);
      },
      [onLibraryItemClick, defaultHandlers.onLibraryItemClick]
    );


    // Memoized sections for performance
    const logoSection = useMemo(
      () => <LogoSection showLogo={showLogo} />,
      [showLogo]
    );

    const titleSection = useMemo(
      () => (
        <Stack style={SIDEBAR_STYLES.titleSection}>
          <Typography variant="heading" weight="bold" color="primary">
            Your Library
          </Typography>
        </Stack>
      ),
      []
    );

    const filterSection = useMemo(
      () => (
        <FilterControls
          filters={filters}
          activeFilter={activeFilter}
          onFilterClick={handleFilterClick}
          onAddClick={handleAddClick}
          onExpandClick={handleExpandClick}
        />
      ),
      [filters, activeFilter, handleFilterClick, handleAddClick, handleExpandClick]
    );

    const searchSection = useMemo(
      () => <SearchSection onSearch={handleSearch} />,
      [handleSearch]
    );


    const librarySection = useMemo(
      () => (
        <LibraryList
          libraryItems={libraryItems}
          activeItemId={activeItemId}
          onLibraryItemClick={handleLibraryItemClick}
        />
      ),
      [libraryItems, activeItemId, handleLibraryItemClick]
    );

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
            {librarySection}
      </nav>
    );
  }
);

Sidebar.displayName = 'Sidebar';
