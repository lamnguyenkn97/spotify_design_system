export interface LibraryItem {
  id?: string;
  image: string;
  title: string;
  subtitle: string;
  type: 'playlist' | 'artist' | 'album' | 'podcast';
  pinned?: boolean;
}

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  libraryItems?: LibraryItem[];
  filters?: string[];
  onFilterClick?: (filter: string) => void;
  onAddClick?: () => void;
  onExpandClick?: () => void;
  onSearch?: (query: string) => void;
  onLibraryItemClick?: (item: LibraryItem) => void;
  onViewToggle?: (viewType: 'list' | 'grid') => void;
  showLogo?: boolean;
  className?: string;
  currentView?: 'list' | 'grid';
} 