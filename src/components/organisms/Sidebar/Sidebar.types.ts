export enum SidebarVariant {
  LIBRARY = 'library',
  QUEUE = 'queue',
}

export enum SidebarPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

// Type aliases for backward compatibility
export type SidebarVariantType = `${SidebarVariant}`;
export type SidebarPositionType = `${SidebarPosition}`;

// Base item interface that both Library and Queue items extend
export interface SidebarItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  /** Additional metadata (optional) */
  metadata?: Record<string, any>;
}

export enum LibraryItemType {
  PLAYLIST = 'playlist',
  ARTIST = 'artist',
  ALBUM = 'album',
  PODCAST = 'podcast',
}

// Library-specific item (extends base)
export interface LibraryItem extends SidebarItem {
  type: LibraryItemType | `${LibraryItemType}`;
  pinned?: boolean;
}

// Queue-specific item (extends base) 
export interface QueueItem extends SidebarItem {
  artist: string;
  album?: string;
  duration?: string;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Sidebar variant: library or queue */
  variant?: SidebarVariant | SidebarVariantType;
  /** Sidebar position: left or right */
  position?: SidebarPosition | SidebarPositionType;
  /** Custom title for the sidebar */
  title?: string;
  /** Generic items to display - can be LibraryItem[] or QueueItem[] */
  items?: SidebarItem[];
  /** Currently playing item (for queue variant) */
  nowPlaying?: QueueItem;
  /** Filter options (for library variant) */
  filters?: string[];
  /** Show search input */
  showSearch?: boolean;
  /** Show filters section */
  showFilters?: boolean;
  /** Show logo */
  showLogo?: boolean;
  /** Show close button */
  showCloseButton?: boolean;
  /** Enable drag and drop for items (useful for queue reordering) */
  enableDragDrop?: boolean;
  /** Callback when filter is clicked */
  onFilterClick?: (filter: string) => void;
  /** Callback when add button is clicked */
  onAddClick?: () => void;
  /** Callback when expand button is clicked */
  onExpandClick?: () => void;
  /** Callback when search is performed */
  onSearch?: (query: string) => void;
  /** Callback when item is clicked */
  onItemClick?: (item: SidebarItem, index: number) => void;
  /** Callback when items are reordered via drag and drop */
  onItemReorder?: (fromIndex: number, toIndex: number) => void;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Custom className */
  className?: string;
  
  // Deprecated props - kept for backward compatibility
  /** @deprecated Use items prop instead */
  libraryItems?: LibraryItem[];
  /** @deprecated Use items prop instead */
  queueItems?: QueueItem[];
  /** @deprecated Use onItemClick instead */
  onLibraryItemClick?: (item: LibraryItem) => void;
  /** @deprecated Use onItemClick instead */
  onQueueItemClick?: (item: QueueItem) => void;
  /** @deprecated Use onItemReorder instead */
  onQueueReorder?: (fromIndex: number, toIndex: number) => void;
  /** @deprecated Use enableDragDrop instead */
  enableQueueDragDrop?: boolean;
} 