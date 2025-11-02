export interface User {
  name: string;
  avatar: string;
}

export interface HeaderAction {
  id: string;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'text' | 'white';
  icon?: React.ReactNode;
  href?: string;
  type?: 'button' | 'link';
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
  onInstallApp: () => void;
  onHomeClick?: () => void;
  user?: User;
  className?: string;
  
  // Dynamic configuration options
  customActions?: HeaderAction[];
  customLinks?: HeaderLink[];
  showInstallApp?: boolean;
  showAuthButtons?: boolean;
  showCustomLinks?: boolean;
} 