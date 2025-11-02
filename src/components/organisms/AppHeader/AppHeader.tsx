import React, { forwardRef, useCallback, useMemo } from 'react';
import { AppHeaderProps, User, HeaderAction, HeaderLink } from './AppHeader.types';
import {
  Button,
  Divider,
  Icon,
  Image,
  Input,
  Stack,
  TextLink,
} from '../../atoms';
import { ButtonSize, ButtonVariant } from '../../atoms/Button';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSearch, faDownload } from '@fortawesome/free-solid-svg-icons';
import { colors, spacing, sizes, animations } from '../../../styles';

// Header configuration using design tokens
const HEADER_STYLES = {
  container: {
    padding: `${spacing.sm} ${spacing.lg}`,
    backgroundColor: colors.primary.black,
    color: colors.primary.white,
    width: '100%',
    height: sizes.container.header,
    borderBottom: `1px solid ${colors.grey.grey3}`,
  },
  leftSection: {
    flex: 1,
    maxWidth: '50%',
  },
  rightSection: {
    flexShrink: 0,
  },
  searchInput: {
    maxWidth: '364px',
    width: '100%',
  },
  userAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover' as const,
  },
} as const;

// Navigation items configuration
const NAVIGATION_ITEMS = [
  { icon: faSpotify, size: 'lg' as const, label: 'Spotify Home' },
  { icon: faHome, size: 'md' as const, label: 'Home' },
] as const;

// Default guest menu items (fallback)
const DEFAULT_GUEST_LINKS: HeaderLink[] = [
  { id: 'premium', label: 'Premium', href: '#' },
  { id: 'support', label: 'Support', href: '#' },
  { id: 'download', label: 'Download', href: '#' },
];

export const AppHeader = forwardRef<HTMLElement, AppHeaderProps>(
  (
    {
      isAuthenticated,
      onSearch,
      onLogin,
      onInstallApp,
      onHomeClick,
      user,
      className,
      customActions = [],
      customLinks,
      showInstallApp = true,
      showAuthButtons = true,
      showCustomLinks = true,
      ...props
    },
    ref
  ) => {
    // Memoized search handler
    const handleSearch = useCallback(
      (value: string) => {
        onSearch(value);
      },
      [onSearch]
    );

    // Memoized home click handler
    const handleHomeClick = useCallback(() => {
      onHomeClick?.();
    }, [onHomeClick]);

    // Memoized install app handler
    const handleInstallApp = useCallback(() => {
      onInstallApp();
    }, [onInstallApp]);

    // Memoized auth handlers
    const handleLogin = useCallback(() => {
      onLogin();
    }, [onLogin]);

    // Helper function to render custom actions
    const renderCustomActions = useCallback((actions: HeaderAction[]) => {
      return actions.map((action) => {
        if (action.type === 'link' && action.href) {
          return (
            <TextLink
              key={action.id}
              component="a"
              href={action.href}
              aria-label={action.label}
            >
              {action.label}
            </TextLink>
          );
        }

        return (
          <Button
            key={action.id}
            onClick={action.onClick}
            text={action.label}
            icon={action.icon}
            variant={action.variant as ButtonVariant || ButtonVariant.Text}
            size={ButtonSize.Small}
            aria-label={action.label}
          />
        );
      });
    }, []);

    // Helper function to render custom links
    const renderCustomLinks = useCallback((links: HeaderLink[]) => {
      return links.map((link) => (
        <TextLink
          key={link.id}
          component="a"
          href={link.href}
          aria-label={link.label}
        >
          {link.label}
        </TextLink>
      ));
    }, []);

    // Memoized user avatar display
    const userAvatarDisplay = useMemo(() => {
      if (!user) return null;
      
      return (
        <Image
          src={user.avatar}
          alt={`${user.name}'s profile`}
          size="sm"
          shape="circle"
          style={HEADER_STYLES.userAvatar}
          onError={(e) => {
            // Fallback to default avatar if image fails
            e.currentTarget.src = 'https://via.placeholder.com/32x32/333333/ffffff?text=U';
          }}
        />
      );
    }, [user]);

    // Memoized navigation section
    const navigationSection = useMemo(() => (
      <Stack direction="row" spacing="md" align="center" style={HEADER_STYLES.leftSection}>
        <Icon 
          icon={faSpotify} 
          size="lg" 
          color="primary"
          aria-label="Spotify"
        />
        <Icon 
          icon={faHome} 
          size="md" 
          color="primary"
          clickable
          onClick={handleHomeClick}
          aria-label="Home"
          style={{ cursor: 'pointer' }}
        />
        <div style={HEADER_STYLES.searchInput}>
          <Input
            type="search"
            placeholder="What do you want to play?"
            leftIcon={<Icon icon={faSearch} size="sm" />}
            onSearch={handleSearch}
            aria-label="Search for music"
          />
        </div>
      </Stack>
    ), [handleHomeClick, handleSearch]);

    // Memoized authenticated user section
    const authenticatedSection = useMemo(() => (
      <Stack direction="row" spacing="md" align="center">
        {showInstallApp && (
          <Button
            onClick={handleInstallApp}
            text="Install App"
            icon={<Icon icon={faDownload} size="sm" />}
            variant={ButtonVariant.Text}
            size={ButtonSize.Small}
            aria-label="Install Spotify app"
          />
        )}
        {renderCustomActions(customActions)}
        {userAvatarDisplay}
      </Stack>
    ), [handleInstallApp, userAvatarDisplay, showInstallApp, customActions, renderCustomActions]);

    // Memoized guest user section
    const guestSection = useMemo(() => {
      const linksToShow = customLinks || DEFAULT_GUEST_LINKS;
      const hasLinks = showCustomLinks && linksToShow.length > 0;
      const hasInstallApp = showInstallApp;
      const hasAuthButtons = showAuthButtons;
      
      return (
        <Stack direction="row" spacing="md" align="center">
          {hasLinks && renderCustomLinks(linksToShow)}
          
          {(hasLinks && (hasInstallApp || hasAuthButtons)) && (
            <Divider orientation="vertical" color="secondary" />
          )}
          
          {hasInstallApp && (
            <Button
              variant={ButtonVariant.Text}
              onClick={handleInstallApp}
              icon={<Icon icon={faDownload} size="sm" />}
              text="Install App"
              size={ButtonSize.Small}
              aria-label="Install Spotify app"
            />
          )}
          
          {hasAuthButtons && (
            <Button
              onClick={handleLogin}
              variant={ButtonVariant.White}
              text="Log In"
              size={ButtonSize.Small}
              aria-label="Log in to Spotify"
            />
          )}
        </Stack>
      );
    }, [handleInstallApp, handleLogin, customLinks, showCustomLinks, showInstallApp, showAuthButtons, renderCustomLinks]);

    return (
      <header
        ref={ref}
        className={className}
        style={HEADER_STYLES.container}
        role="banner"
        aria-label="Spotify main navigation"
        {...props}
      >
        <Stack direction="row" justify="space-between" align="center" style={{ height: '100%' }}>
          {navigationSection}
          <div style={HEADER_STYLES.rightSection}>
            {isAuthenticated ? authenticatedSection : guestSection}
          </div>
        </Stack>
      </header>
    );
  }
);

AppHeader.displayName = 'AppHeader';
