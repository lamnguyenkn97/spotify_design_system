export interface User {
  name: string;
  avatar: string;
}

export interface AppHeaderProps extends React.HTMLAttributes<HTMLElement> {
  isAuthenticated: boolean;
  onSearch: (value: string) => void;
  onLogin: () => void;
  onSignUp: () => void;
  onInstallApp: () => void;
  onHomeClick?: () => void;
  user?: User;
  className?: string;
} 