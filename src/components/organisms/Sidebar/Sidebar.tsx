import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Button } from '../../atoms/Button/Button';
import { Pill } from '../../atoms/Pill';
import { Icon } from '../../atoms/Icon/Icon';
import { Input } from '../../atoms/Input';
import { Image } from '../../atoms/Image';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faExpand,
  faSearch,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonSize, ButtonVariant } from '../../atoms/Button';
import { HorizontalTileCard } from '../../molecules/HorizontalTileCard';
import { SidebarProps, LibraryItem, QueueItem, SidebarPosition } from './Sidebar.types';
import { colors, spacing } from '../../../styles';

// Sidebar configuration using design tokens
const getSidebarStyles = (position: SidebarPosition = 'left') => ({
  container: {
    width: '360px',
    height: '100vh',
    backgroundColor: colors.primary.black,
    color: colors.primary.white,
    padding: spacing.md,
    ...(position === 'left'
      ? { borderRight: `1px solid ${colors.grey.grey3}` }
      : { borderLeft: `1px solid ${colors.grey.grey3}` }),
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.md,
  },
  logoSection: {
    padding: spacing.sm,
    borderBottom: `1px solid ${colors.grey.grey3}`,
  },
  headerSection: {
    padding: `${spacing.sm} 0`,
  },
  filtersSection: {
    flexWrap: 'wrap' as const,
    padding: `${spacing.sm} 0`,
  },
  contentSection: {
    flex: 1,
    overflowY: 'auto' as const,
    padding: `${spacing.sm} 0`,
  },
  nowPlayingSection: {
    padding: spacing.md,
    backgroundColor: colors.grey.grey0,
    borderRadius: '8px',
    marginBottom: spacing.md,
  },
});

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
const LogoSection: React.FC<{ showLogo: boolean; styles: any }> = ({ showLogo, styles }) => {
  if (!showLogo) return null;

  return (
    <Stack
      direction="row"
      align="center"
      spacing="md"
      style={styles.logoSection}
    >
      <Icon icon={faSpotify} size="lg" color="primary" aria-label="Spotify" />
    </Stack>
  );
};

// Header Section Component (with optional close button)
const HeaderSection: React.FC<{
  title: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  styles: any;
}> = ({ title, showCloseButton, onClose, styles }) => {
  return (
    <Stack
      direction="row"
      align="center"
      justify="space-between"
      style={styles.headerSection}
    >
      <Typography variant="heading" weight="bold" color="primary">
        {title}
      </Typography>
      {showCloseButton && onClose && (
        <Button
          icon={<Icon icon={faXmark} size="md" />}
          size={ButtonSize.Small}
          variant={ButtonVariant.Text}
          onClick={onClose}
          aria-label="Close sidebar"
        />
      )}
    </Stack>
  );
};

// Now Playing Section Component (for Queue variant)
const NowPlayingSection: React.FC<{
  nowPlaying?: QueueItem;
  styles: any;
}> = ({ nowPlaying, styles }) => {
  if (!nowPlaying) return null;

  return (
    <div>
      <Typography
        variant="body"
        size="sm"
        weight="bold"
        color="primary"
        style={{ marginBottom: spacing.sm }}
      >
        Now playing
      </Typography>
      <Stack
        direction="row"
        spacing="md"
        align="center"
        style={styles.nowPlayingSection}
      >
        <Image
          src={nowPlaying.image}
          alt={nowPlaying.title}
          size="md"
          shape="square"
        />
        <Stack direction="column" spacing="xs" style={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="body"
            size="sm"
            weight="bold"
            color="primary"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {nowPlaying.title}
          </Typography>
          <Typography
            variant="caption"
            color="secondary"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {nowPlaying.artist}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

// Filter Controls Component
const FilterControls: React.FC<{
  filters: string[];
  activeFilter?: string;
  onFilterClick?: (filter: string) => void;
  onAddClick?: () => void;
  onExpandClick?: () => void;
  styles: any;
}> = ({ filters, activeFilter, onFilterClick, onAddClick, onExpandClick, styles }) => {
  return (
    <Stack
      direction="row"
      spacing="xs"
      style={styles.filtersSection}
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
  styles: any;
}> = ({ libraryItems, activeItemId, onLibraryItemClick, styles }) => {
  const handleItemClick = useCallback(
    (item: LibraryItem) => {
      onLibraryItemClick?.(item);
    },
    [onLibraryItemClick]
  );

  if (libraryItems.length === 0) {
    return (
      <Stack style={styles.contentSection}>
        <Typography variant="body" color="secondary">
          No items in your library
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack direction="column" spacing="xs" style={styles.contentSection}>
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

// Queue List Component
const QueueList: React.FC<{
  queueItems: QueueItem[];
  activeItemId?: string;
  onQueueItemClick?: (item: QueueItem) => void;
  styles: any;
}> = ({ queueItems, activeItemId, onQueueItemClick, styles }) => {
  const handleItemClick = useCallback(
    (item: QueueItem) => {
      onQueueItemClick?.(item);
    },
    [onQueueItemClick]
  );

  if (queueItems.length === 0) {
    return (
      <Stack style={styles.contentSection}>
        <Typography variant="body" color="secondary">
          No songs in queue
        </Typography>
      </Stack>
    );
  }

  return (
    <div>
      <Typography
        variant="body"
        size="sm"
        weight="bold"
        color="primary"
        style={{ marginBottom: spacing.sm }}
      >
        Next in queue
      </Typography>
      <Stack direction="column" spacing="xs" style={styles.contentSection}>
        {queueItems.map((item) => (
          <HorizontalTileCard
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.artist}
            width="100%"
            onClick={() => handleItemClick(item)}
            size="small"
            isActive={activeItemId === item.id}
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
      variant = 'library',
      position = 'left',
      title,
      libraryItems = DEFAULT_LIBRARY_ITEMS,
      queueItems = [],
      nowPlaying,
      filters = DEFAULT_FILTERS,
      showSearch = true,
      showFilters = true,
      showLogo = true,
      showCloseButton = false,
      onFilterClick,
      onAddClick,
      onExpandClick,
      onSearch,
      onLibraryItemClick,
      onQueueItemClick,
      onClose,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // State to track active filter and active item
    const [activeFilter, setActiveFilter] = useState<string | undefined>();
    const [activeItemId, setActiveItemId] = useState<string | undefined>();

    // Get styles based on position
    const sidebarStyles = useMemo(() => getSidebarStyles(position), [position]);

    // Determine title based on variant
    const sidebarTitle = useMemo(() => {
      if (title) return title;
      return variant === 'library' ? 'Your Library' : 'Queue';
    }, [title, variant]);

    // Memoized default handlers to prevent unnecessary re-renders
    const defaultHandlers = useMemo(
      () => ({
        onFilterClick: () => {},
        onAddClick: () => {},
        onExpandClick: () => {},
        onSearch: () => {},
        onLibraryItemClick: () => {},
        onQueueItemClick: () => {},
        onClose: () => {},
      }),
      []
    );

    // Memoized merged styles
    const mergedStyles = useMemo(
      () => ({
        ...sidebarStyles.container,
        ...style,
      }),
      [sidebarStyles.container, style]
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

    const handleQueueItemClick = useCallback(
      (item: QueueItem) => {
        setActiveItemId(item.id);
        (onQueueItemClick || defaultHandlers.onQueueItemClick)(item);
      },
      [onQueueItemClick, defaultHandlers.onQueueItemClick]
    );

    const handleClose = useCallback(() => {
      (onClose || defaultHandlers.onClose)();
    }, [onClose, defaultHandlers.onClose]);

    // Memoized sections for performance
    const logoSection = useMemo(
      () => showLogo && variant === 'library' ? (
        <LogoSection showLogo={showLogo} styles={sidebarStyles} />
      ) : null,
      [showLogo, variant, sidebarStyles]
    );

    const headerSection = useMemo(
      () => (
        <HeaderSection
          title={sidebarTitle}
          showCloseButton={showCloseButton}
          onClose={handleClose}
          styles={sidebarStyles}
        />
      ),
      [sidebarTitle, showCloseButton, handleClose, sidebarStyles]
    );

    const filterSection = useMemo(
      () =>
        showFilters && variant === 'library' ? (
          <FilterControls
            filters={filters}
            activeFilter={activeFilter}
            onFilterClick={handleFilterClick}
            onAddClick={handleAddClick}
            onExpandClick={handleExpandClick}
            styles={sidebarStyles}
          />
        ) : null,
      [
        showFilters,
        variant,
        filters,
        activeFilter,
        handleFilterClick,
        handleAddClick,
        handleExpandClick,
        sidebarStyles,
      ]
    );

    const searchSection = useMemo(
      () => showSearch && variant === 'library' ? <SearchSection onSearch={handleSearch} /> : null,
      [showSearch, variant, handleSearch]
    );

    const nowPlayingSection = useMemo(
      () =>
        variant === 'queue' ? (
          <NowPlayingSection nowPlaying={nowPlaying} styles={sidebarStyles} />
        ) : null,
      [variant, nowPlaying, sidebarStyles]
    );

    const contentSection = useMemo(() => {
      if (variant === 'library') {
        return (
          <LibraryList
            libraryItems={libraryItems}
            activeItemId={activeItemId}
            onLibraryItemClick={handleLibraryItemClick}
            styles={sidebarStyles}
          />
        );
      } else if (variant === 'queue') {
        return (
          <QueueList
            queueItems={queueItems}
            activeItemId={activeItemId}
            onQueueItemClick={handleQueueItemClick}
            styles={sidebarStyles}
          />
        );
      }
      return null;
    }, [
      variant,
      libraryItems,
      queueItems,
      activeItemId,
      handleLibraryItemClick,
      handleQueueItemClick,
      sidebarStyles,
    ]);

    return (
      <nav
        ref={ref}
        className={className}
        style={mergedStyles}
        role="navigation"
        aria-label={`${sidebarTitle} navigation`}
        {...props}
      >
        {logoSection}
        {headerSection}
        {filterSection}
        {searchSection}
        {nowPlayingSection}
        {contentSection}
      </nav>
    );
  }
);

Sidebar.displayName = 'Sidebar';
