import React, { forwardRef, useCallback, useMemo } from 'react';
import { AppHeaderProps, User } from './AppHeader.types';
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

// Guest menu items
const GUEST_MENU_ITEMS = [
  { text: 'Premium', href: '#' },
  { text: 'Support', href: '#' },
  { text: 'Download', href: '#' },
] as const;

export const AppHeader = forwardRef<HTMLElement, AppHeaderProps>(
  (
    {
      isAuthenticated,
      onSearch,
      onLogin,
      onSignUp,
      onInstallApp,
      onHomeClick,
      user,
      className,
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

    const handleSignUp = useCallback(() => {
      onSignUp();
    }, [onSignUp]);

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
        <Button
          onClick={handleInstallApp}
          text="Install App"
          icon={<Icon icon={faDownload} size="sm" />}
          variant={ButtonVariant.Text}
          size={ButtonSize.Small}
          aria-label="Install Spotify app"
        />
        {userAvatarDisplay}
      </Stack>
    ), [handleInstallApp, userAvatarDisplay]);

    // Memoized guest user section
    const guestSection = useMemo(() => (
      <Stack direction="row" spacing="md" align="center">
        {GUEST_MENU_ITEMS.map((item, index) => (
          <TextLink 
            key={index}
            component="a"
            href={item.href}
            aria-label={item.text}
          >
            {item.text}
          </TextLink>
        ))}
        
        <Divider orientation="vertical" color="secondary" />
        
        <Button
          variant={ButtonVariant.Text}
          onClick={handleInstallApp}
          icon={<Icon icon={faDownload} size="sm" />}
          text="Install App"
          size={ButtonSize.Small}
          aria-label="Install Spotify app"
        />
        
        <Button
          onClick={handleSignUp}
          text="Sign Up"
          variant={ButtonVariant.White}
          size={ButtonSize.Small}
          aria-label="Sign up for Spotify"
        />
        
        <Button
          onClick={handleLogin}
          variant={ButtonVariant.White}
          text="Log In"
          size={ButtonSize.Small}
          aria-label="Log in to Spotify"
        />
      </Stack>
    ), [handleInstallApp, handleSignUp, handleLogin]);

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
