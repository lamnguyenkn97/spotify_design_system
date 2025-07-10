# AppHeader

A comprehensive application header component providing **navigation, search, authentication, and user management** for Spotify-style applications. Serves as the primary navigation interface with **adaptive UI** based on authentication state.

## Overview

The AppHeader component creates a **consistent navigation experience** across the entire application, featuring Spotify branding, home navigation, search functionality, and context-aware user controls. It automatically adapts its interface based on user authentication status while maintaining **accessibility and performance**.

## Key Features

| Feature | Description | Example |
|---------|-------------|---------|
| **Authentication-Aware UI** | Displays different controls based on auth state | Guest links vs. User avatar |
| **Integrated Search** | Full-width search input with icon and keyboard support | "What do you want to play?" |
| **Spotify Branding** | Consistent brand presence with logo and colors | Spotify logo in top-left |
| **Responsive Navigation** | Adapts to different screen sizes and states | Mobile-friendly layout |
| **Performance Optimized** | Memoized sections and callbacks for smooth interactions | useMemo, useCallback |
| **Accessibility First** | Comprehensive ARIA labels and semantic HTML | WCAG compliant |
| **Error Resilient** | Graceful fallbacks for failed avatar loading | Placeholder avatar |
| **Design Token Integration** | Consistent styling using design system tokens | colors, spacing, sizes |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isAuthenticated` | `boolean` | - | **Required.** User authentication status |
| `onSearch` | `(value: string) => void` | - | **Required.** Search input handler |
| `onLogin` | `() => void` | - | **Required.** Login button handler |
| `onSignUp` | `() => void` | - | **Required.** Sign up button handler |
| `onInstallApp` | `() => void` | - | **Required.** Install app button handler |
| `onHomeClick` | `() => void` | - | *Optional.* Home icon click handler |
| `user` | `User` | - | *Optional.* User information when authenticated |
| `className` | `string` | - | *Optional.* Custom CSS class name |
| `...props` | `React.HTMLAttributes<HTMLElement>` | - | Additional HTML attributes |

### User Type
```tsx
interface User {
  name: string;    // User's display name
  avatar: string;  // User's avatar image URL
}
```

## Design Tokens Integration

The component uses design tokens for consistent styling:

### Container Styling
```tsx
const HEADER_STYLES = {
  container: {
    padding: `${spacing.sm} ${spacing.lg}`,        // Standard header padding
    backgroundColor: colors.primary.black,          // Spotify black background
    color: colors.primary.white,                   // White text
    width: '100%',                                 // Full width
    height: sizes.container.header,                // Standard header height
    borderBottom: `1px solid ${colors.grey.grey3}`, // Subtle border
  },
  // ... additional styles
};
```

### Component Sections
```tsx
// Left navigation section
leftSection: {
  flex: 1,
  maxWidth: '50%',  // Responsive constraint
}

// Right user controls section
rightSection: {
  flexShrink: 0,    // Prevent shrinking
}

// Search input constraints
searchInput: {
  maxWidth: '364px',  // Optimal search width
  width: '100%',
}
```

## Usage Patterns

### Basic Unauthenticated Header
```tsx
<AppHeader
  isAuthenticated={false}
  onSearch={(value) => console.log('Searching:', value)}
  onLogin={() => handleLogin()}
  onSignUp={() => handleSignUp()}
  onInstallApp={() => handleInstallApp()}
  onHomeClick={() => navigate('/')}
/>
```

### Authenticated Header with User
```tsx
<AppHeader
  isAuthenticated={true}
  user={{
    name: 'John Doe',
    avatar: 'https://example.com/avatar.jpg'
  }}
  onSearch={(value) => performSearch(value)}
  onLogin={() => {}}
  onSignUp={() => {}}
  onInstallApp={() => downloadApp()}
  onHomeClick={() => navigate('/home')}
/>
```

### Custom Header with Additional Props
```tsx
<AppHeader
  isAuthenticated={true}
  className="custom-header"
  data-testid="app-header"
  onSearch={handleSearch}
  onLogin={handleLogin}
  onSignUp={handleSignUp}
  onInstallApp={handleInstallApp}
  aria-label="Custom navigation header"
/>
```

## Authentication States

### Guest User Interface
When `isAuthenticated={false}`:
- **Premium**, **Support**, **Download** text links
- **Install App** button with download icon
- **Sign Up** button (primary white style)
- **Log In** button (primary white style)
- Vertical divider between sections

### Authenticated User Interface
When `isAuthenticated={true}`:
- **Install App** button with download icon
- **User avatar** (if user prop provided)
- **Avatar fallback** for broken images
- Simplified, focused interface

## Search Integration

### Search Input Features
```tsx
<Input
  type="search"
  placeholder="What do you want to play?"
  leftIcon={<Icon icon={faSearch} size="sm" />}
  onSearch={handleSearch}
  aria-label="Search for music"
/>
```

### Search Handler Pattern
```tsx
const handleSearch = useCallback((value: string) => {
  // Debounced search implementation
  if (value.trim()) {
    performSearch(value);
  }
}, []);
```

## Performance Optimizations

### Memoized Sections
```tsx
// Navigation section memoization
const navigationSection = useMemo(() => (
  <Stack direction="row" spacing="md" align="center">
    <Icon icon={faSpotify} size="lg" />
    <Icon icon={faHome} size="md" clickable onClick={handleHomeClick} />
    <SearchInput />
  </Stack>
), [handleHomeClick, handleSearch]);

// Authentication-specific sections
const authenticatedSection = useMemo(() => (
  <Stack direction="row" spacing="md" align="center">
    <InstallButton />
    {userAvatarDisplay}
  </Stack>
), [handleInstallApp, userAvatarDisplay]);
```

### Callback Optimization
```tsx
// Memoized event handlers prevent unnecessary re-renders
const handleLogin = useCallback(() => {
  onLogin();
}, [onLogin]);

const handleSearch = useCallback((value: string) => {
  onSearch(value);
}, [onSearch]);
```

## Error Handling & Resilience

### Avatar Error Handling
```tsx
const userAvatarDisplay = useMemo(() => {
  if (!user) return null;
  
  return (
    <Image
      src={user.avatar}
      alt={`${user.name}'s profile`}
      onError={(e) => {
        // Graceful fallback for broken images
        e.currentTarget.src = 'https://via.placeholder.com/32x32/333333/ffffff?text=U';
      }}
    />
  );
}, [user]);
```

### Safe Prop Handling
```tsx
// Optional handlers with safe defaults
const handleHomeClick = useCallback(() => {
  onHomeClick?.(); // Safe optional chaining
}, [onHomeClick]);
```

## Accessibility Features

### Semantic HTML Structure
```tsx
<header
  role="banner"
  aria-label="Spotify main navigation"
>
  {/* Navigation content */}
</header>
```

### ARIA Labels
- **Spotify logo**: `aria-label="Spotify"`
- **Home icon**: `aria-label="Home"`
- **Search input**: `aria-label="Search for music"`
- **User avatar**: `aria-label="John Doe's profile"`
- **Install button**: `aria-label="Install Spotify app"`
- **Auth buttons**: `aria-label="Sign up for Spotify"`

### Keyboard Navigation
- **Focusable elements**: All interactive elements support keyboard navigation
- **Tab order**: Logical tab sequence from left to right
- **Icon buttons**: Clickable icons have proper focus states

## Architecture & Component Design

### Organism Classification
The AppHeader is correctly classified as an **organism** because it:
- **Integrates multiple atoms**: Button, Icon, Image, Input, Stack, Typography
- **Manages complex state**: Authentication status, user data, search state
- **Multiple responsibilities**: Navigation, search, authentication, user management
- **Complete functional unit**: Represents entire application header

### forwardRef Implementation
```tsx
export const AppHeader = forwardRef<HTMLElement, AppHeaderProps>(
  ({ isAuthenticated, onSearch, ...props }, ref) => {
    // Component implementation
  }
);
```

### Pure Token-Based Styling
```tsx
// ✅ Design token integration
const HEADER_STYLES = {
  container: {
    padding: `${spacing.sm} ${spacing.lg}`,
    backgroundColor: colors.primary.black,
    height: sizes.container.header,
  }
};

// ❌ Avoided: Custom styled-components
// const HeaderContainer = styled.header`...`;
```

## Integration Patterns

### With React Router
```tsx
const Header = () => {
  const navigate = useNavigate();
  
  return (
    <AppHeader
      isAuthenticated={user.isAuthenticated}
      user={user.profile}
      onSearch={(value) => navigate(`/search?q=${value}`)}
      onHomeClick={() => navigate('/')}
      onLogin={() => navigate('/login')}
      onSignUp={() => navigate('/signup')}
      onInstallApp={() => window.open('/download')}
    />
  );
};
```

### With State Management
```tsx
const Header = () => {
  const { user, login, signup } = useAuth();
  const { search } = useSearch();
  
  return (
    <AppHeader
      isAuthenticated={user.isAuthenticated}
      user={user.profile}
      onSearch={search}
      onLogin={login}
      onSignUp={signup}
      onInstallApp={() => trackEvent('install_app')}
    />
  );
};
```

## Testing

The component includes comprehensive tests covering:
- **Rendering**: Basic component rendering and structure
- **Authentication states**: Guest vs. authenticated interfaces
- **User interactions**: Click handlers, search input, button clicks
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Error handling**: Avatar fallback, safe prop handling

Test coverage: **15 test cases** across all functionality areas. 