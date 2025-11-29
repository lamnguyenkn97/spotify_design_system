export type SidebarVariant = 'library' | 'queue';
export type SidebarPosition = 'left' | 'right';

export interface LibraryItem {
  id?: string;
  image: string;
  title: string;
  subtitle: string;
  type: 'playlist' | 'artist' | 'album' | 'podcast';
  pinned?: boolean;
}

export interface QueueItem {
  id: string;
  image: string;
  title: string;
  artist: string;
  album?: string;
  duration?: string;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Sidebar variant: library or queue */
  variant?: SidebarVariant;
  /** Sidebar position: left or right */
  position?: SidebarPosition;
  /** Custom title for the sidebar */
  title?: string;
  /** Library items (for library variant) */
  libraryItems?: LibraryItem[];
  /** Queue items (for queue variant) */
  queueItems?: QueueItem[];
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
  /** Callback when filter is clicked */
  onFilterClick?: (filter: string) => void;
  /** Callback when add button is clicked */
  onAddClick?: () => void;
  /** Callback when expand button is clicked */
  onExpandClick?: () => void;
  /** Callback when search is performed */
  onSearch?: (query: string) => void;
  /** Callback when library item is clicked */
  onLibraryItemClick?: (item: LibraryItem) => void;
  /** Callback when queue item is clicked */
  onQueueItemClick?: (item: QueueItem) => void;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Custom className */
  className?: string;
} 