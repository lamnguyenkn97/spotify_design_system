export interface User {
  name: string;
  avatar: string;
}

export interface HeaderLink {
  id: string;
  label: string;
  href: string;
  onClick?: () => void;
}

export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  isAuthenticated: boolean;
  onSearch: (value: string) => void;
  onLogin: () => void;
  onSignUp?: () => void;
  onInstallApp: () => void;
  onHomeClick?: () => void;
  onBack?: () => void;
  onForward?: () => void;
  user?: User;
  className?: string;
  
  // Dynamic configuration options
  /**
   * Custom links to display in the header (replaces default Premium, Support, Download links)
   * Each link can have custom id, label, href, and optional onClick handler
   */
  customLinks?: HeaderLink[];
  showInstallApp?: boolean;
  showAuthButtons?: boolean;
  showCustomLinks?: boolean;
  showNavigationControls?: boolean;
  canGoBack?: boolean;
  canGoForward?: boolean;
} 