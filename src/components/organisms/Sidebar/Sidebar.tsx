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
import {
  SidebarProps,
  LibraryItem,
  LibraryItemType,
  QueueItem,
  SidebarItem,
  SidebarVariant,
  SidebarPosition,
} from './Sidebar.types';
import {
  SidebarContainer,
  LogoSection as LogoSectionStyled,
  HeaderSection as HeaderSectionStyled,
  FiltersSection as FiltersSectionStyled,
  ContentSection as ContentSectionStyled,
  NowPlayingSection as NowPlayingSectionStyled,
  QueueSectionTitle,
  DraggableItem,
  ItemListContainer,
  EmptyStateContainer,
  TruncatedText,
  FlexContainer,
  DragState,
} from './Sidebar.style';
import { spacing } from '../../../styles';

// Default configuration
const DEFAULT_FILTERS = ['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'];

const DEFAULT_LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: '1',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
    title: 'Liked Songs',
    subtitle: 'Playlist • 213 songs',
    type: LibraryItemType.PLAYLIST,
    pinned: true,
  },
  {
    id: '2',
    image: 'https://i.scdn.co/image/ab67616d0000b273e5e2e5e2e5e2e5e2e5e2e5e2',
    title: 'Daily Mix 2',
    subtitle: 'Playlist • Spotify',
    type: LibraryItemType.PLAYLIST,
    pinned: true,
  },
];

// Logo Section Component
const LogoSection: React.FC<{ showLogo: boolean }> = ({ showLogo }) => {
  if (!showLogo) return null;

  return (
    <LogoSectionStyled>
      <Stack direction="row" align="center" spacing="md">
        <Icon icon={faSpotify} size="lg" color="primary" aria-label="Spotify" />
      </Stack>
    </LogoSectionStyled>
  );
};

// Header Section Component (with optional close button)
const HeaderSection: React.FC<{
  title: string;
  showCloseButton?: boolean;
  onClose?: () => void;
}> = ({ title, showCloseButton, onClose }) => {
  return (
    <HeaderSectionStyled>
      <Stack direction="row" align="center" justify="space-between">
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
    </HeaderSectionStyled>
  );
};

// Now Playing Section Component (for Queue variant)
const NowPlayingSection: React.FC<{
  nowPlaying?: QueueItem;
}> = ({ nowPlaying }) => {
  if (!nowPlaying) return null;

  return (
    <div>
      <QueueSectionTitle>
        <Typography variant="body" size="sm" weight="bold" color="primary">
          Now playing
        </Typography>
      </QueueSectionTitle>
      <NowPlayingSectionStyled>
        <Stack direction="row" spacing="md" align="center">
          <Image
            src={nowPlaying.image}
            alt={nowPlaying.title}
            size="md"
            shape="square"
          />
          <FlexContainer>
            <Stack direction="column" spacing="xs">
              <TruncatedText>
                <Typography variant="body" size="sm" weight="bold" color="primary">
                  {nowPlaying.title}
                </Typography>
              </TruncatedText>
              <TruncatedText>
                <Typography variant="caption" color="secondary">
                  {nowPlaying.artist}
                </Typography>
              </TruncatedText>
            </Stack>
          </FlexContainer>
        </Stack>
      </NowPlayingSectionStyled>
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
}> = ({ filters, activeFilter, onFilterClick, onAddClick, onExpandClick }) => {
  return (
    <FiltersSectionStyled>
      <Stack direction="row" spacing="xs" style={{ flexWrap: 'wrap' }}>
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
    </FiltersSectionStyled>
  );
};

// Search Section Component
const SearchSection: React.FC<{
  onSearch?: (query: string) => void;
  placeholder?: string;
}> = ({ onSearch, placeholder = 'Search in Your Library' }) => {
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
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}
        leftIcon={<Icon icon={faSearch} size="sm" />}
        aria-label={placeholder}
      />
    </Stack>
  );
};

// Generic Item List Component
const ItemList: React.FC<{
  items: SidebarItem[];
  activeItemId?: string;
  onItemClick?: (item: SidebarItem, index: number) => void;
  enableDragDrop?: boolean;
  onItemReorder?: (fromIndex: number, toIndex: number) => void;
  emptyMessage?: string;
}> = ({ items, activeItemId, onItemClick, enableDragDrop, onItemReorder, emptyMessage }) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dropTargetIndex, setDropTargetIndex] = useState<number | null>(null);

  const handleItemClick = useCallback(
    (item: SidebarItem, index: number) => {
      onItemClick?.(item, index);
    },
    [onItemClick]
  );

  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    if (!enableDragDrop) return;
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
  }, [enableDragDrop]);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    if (!enableDragDrop || draggedIndex === null) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    if (index !== draggedIndex) {
      setDropTargetIndex(index);
    }
  }, [enableDragDrop, draggedIndex]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    if (!enableDragDrop) return;
    // Only clear if leaving the entire drag container
    if (e.currentTarget === e.target) {
      setDropTargetIndex(null);
    }
  }, [enableDragDrop]);

  const handleDrop = useCallback((e: React.DragEvent, dropIndex: number) => {
    if (!enableDragDrop || draggedIndex === null) return;
    e.preventDefault();
    
    if (draggedIndex !== dropIndex) {
      onItemReorder?.(draggedIndex, dropIndex);
    }
    
    setDraggedIndex(null);
    setDropTargetIndex(null);
  }, [enableDragDrop, draggedIndex, onItemReorder]);

  const handleDragEnd = useCallback(() => {
    if (!enableDragDrop) return;
    setDraggedIndex(null);
    setDropTargetIndex(null);
  }, [enableDragDrop]);

  const getDragState = useCallback((index: number): DragState => {
    if (draggedIndex === index) return DragState.DRAGGING;
    if (dropTargetIndex === index && draggedIndex !== index) return DragState.DROP_TARGET;
    return DragState.IDLE;
  }, [draggedIndex, dropTargetIndex]);

  if (items.length === 0) {
    return (
      <ContentSectionStyled>
        <EmptyStateContainer>
          <Typography variant="body" color="secondary">
            {emptyMessage || 'No items'}
          </Typography>
        </EmptyStateContainer>
      </ContentSectionStyled>
    );
  }

  return (
    <ContentSectionStyled>
      <ItemListContainer>
        {items.map((item, index) => {
          const dragState = getDragState(index);
          return (
            <DraggableItem
              key={item.id}
              draggable={enableDragDrop}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              $dragState={dragState}
              $isDraggable={!!enableDragDrop}
            >
              <HorizontalTileCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                width="100%"
                onClick={() => handleItemClick(item, index)}
                size="small"
                isActive={activeItemId === item.id}
              />
            </DraggableItem>
          );
        })}
      </ItemListContainer>
    </ContentSectionStyled>
  );
};


// Main Sidebar Component
export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      variant = SidebarVariant.LIBRARY,
      position = SidebarPosition.LEFT,
      title,
      items,
      nowPlaying,
      filters = DEFAULT_FILTERS,
      showSearch = true,
      showFilters = true,
      showLogo = true,
      showCloseButton = false,
      enableDragDrop = false,
      onFilterClick,
      onAddClick,
      onExpandClick,
      onSearch,
      onItemClick,
      onItemReorder,
      onClose,
      // Deprecated props for backward compatibility
      libraryItems,
      queueItems,
      onLibraryItemClick,
      onQueueItemClick,
      onQueueReorder,
      enableQueueDragDrop,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Backward compatibility: merge deprecated props with new generic props
    const resolvedItems = useMemo(() => {
      if (items) return items;
      if (libraryItems) return libraryItems;
      if (queueItems) return queueItems;
      return DEFAULT_LIBRARY_ITEMS;
    }, [items, libraryItems, queueItems]);

    const resolvedOnItemClick = useCallback(
      (item: SidebarItem, index: number) => {
        if (onItemClick) {
          onItemClick(item, index);
        } else {
          // Convert variant to string for comparison (enum values are strings)
          const variantStr = String(variant);
          
          if (onLibraryItemClick && variantStr === 'library') {
            onLibraryItemClick(item as LibraryItem);
          } else if (onQueueItemClick && variantStr === 'queue') {
            onQueueItemClick(item as QueueItem);
          }
        }
      },
      [onItemClick, onLibraryItemClick, onQueueItemClick, variant]
    );

    const resolvedOnItemReorder = onItemReorder || onQueueReorder;
    const resolvedEnableDragDrop = enableDragDrop || enableQueueDragDrop || false;
    
    // State to track active filter and active item
    const [activeFilter, setActiveFilter] = useState<string | undefined>();
    const [activeItemId, setActiveItemId] = useState<string | undefined>();

    // Determine title based on variant
    const sidebarTitle = useMemo(() => {
      if (title) return title;
      return variant === SidebarVariant.LIBRARY ? 'Your Library' : 'Queue';
    }, [title, variant]);

    // Memoized default handlers to prevent unnecessary re-renders
    const defaultHandlers = useMemo(
      () => ({
        onFilterClick: () => {},
        onAddClick: () => {},
        onExpandClick: () => {},
        onSearch: () => {},
        onItemClick: () => {},
        onClose: () => {},
      }),
      []
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

    const handleItemClick = useCallback(
      (item: SidebarItem, index: number) => {
        setActiveItemId(item.id);
        resolvedOnItemClick(item, index);
      },
      [resolvedOnItemClick]
    );

    const handleClose = useCallback(() => {
      (onClose || defaultHandlers.onClose)();
    }, [onClose, defaultHandlers.onClose]);

    // Memoized sections for performance
    const logoSection = useMemo(
      () => showLogo && variant === SidebarVariant.LIBRARY ? (
        <LogoSection showLogo={showLogo} />
      ) : null,
      [showLogo, variant]
    );

    const headerSection = useMemo(
      () => (
        <HeaderSection
          title={sidebarTitle}
          showCloseButton={showCloseButton}
          onClose={handleClose}
        />
      ),
      [sidebarTitle, showCloseButton, handleClose]
    );

    const filterSection = useMemo(
      () =>
        showFilters && variant === SidebarVariant.LIBRARY ? (
          <FilterControls
            filters={filters}
            activeFilter={activeFilter}
            onFilterClick={handleFilterClick}
            onAddClick={handleAddClick}
            onExpandClick={handleExpandClick}
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
      ]
    );

    const searchSection = useMemo(() => {
      if (!showSearch || variant !== SidebarVariant.LIBRARY) return null;
      return (
        <SearchSection 
          onSearch={handleSearch}
          placeholder="Search in Your Library"
        />
      );
    }, [showSearch, variant, handleSearch]);

    const nowPlayingSection = useMemo(
      () =>
        variant === SidebarVariant.QUEUE ? (
          <NowPlayingSection nowPlaying={nowPlaying} />
        ) : null,
      [variant, nowPlaying]
    );

    const contentSection = useMemo(() => {
      const emptyMessage = variant === SidebarVariant.LIBRARY
        ? 'No items in your library' 
        : 'No songs in queue';

      const showSectionTitle = variant === SidebarVariant.QUEUE;

      return (
        <>
          {showSectionTitle && (
            <QueueSectionTitle>
              <Typography variant="body" size="sm" weight="bold" color="primary">
                Next in queue
              </Typography>
            </QueueSectionTitle>
          )}
          <ItemList
            items={resolvedItems}
            activeItemId={activeItemId}
            onItemClick={handleItemClick}
            enableDragDrop={resolvedEnableDragDrop}
            onItemReorder={resolvedOnItemReorder}
            emptyMessage={emptyMessage}
          />
        </>
      );
    }, [
      variant,
      resolvedItems,
      activeItemId,
      handleItemClick,
      resolvedEnableDragDrop,
      resolvedOnItemReorder,
    ]);

    return (
      <SidebarContainer
        ref={ref}
        className={className}
        style={style}
        role="navigation"
        aria-label={`${sidebarTitle} navigation`}
        $position={position as SidebarPosition}
        {...props}
      >
        {logoSection}
        {headerSection}
        {filterSection}
        {searchSection}
        {nowPlayingSection}
        {contentSection}
      </SidebarContainer>
    );
  }
);

Sidebar.displayName = 'Sidebar';
