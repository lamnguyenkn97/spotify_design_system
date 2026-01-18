import React, { forwardRef, useCallback, useState } from 'react';
import { AppHeaderProps, HeaderLink } from './AppHeader.types';
import { Icon, Input, Button } from '../../atoms';
import { ButtonSize, ButtonVariant, ButtonFontWeight } from '../../atoms/Button';
import { colors } from '../../../styles';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { 
  faHome, 
  faSearch, 
  faDownload, 
  faChevronLeft, 
  faChevronRight,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import {
  HeaderContainer,
  LeftSection,
  NavigationControls,
  NavButton,
  SearchContainer,
  RightSection,
  GuestActions,
  GuestLinks,
  GuestLink,
  Divider,
  AuthenticatedActions,
  UserProfile,
  UserAvatar,
  UserName,
  IconButton,
} from './AppHeader.style';

// Default guest menu items (fallback)
const DEFAULT_GUEST_LINKS: HeaderLink[] = [
  { id: 'premium', label: 'Premium', href: '#premium' },
  { id: 'support', label: 'Support', href: '#support' },
  { id: 'download', label: 'Download', href: '#download' },
];

export const AppHeader = forwardRef<HTMLElement, AppHeaderProps>(
  (
    {
      isAuthenticated,
      onSearch,
      onLogin,
      onSignUp,
      onInstallApp,
      onHomeClick,
      onBack,
      onForward,
      user,
      className,
      customLinks,
      showInstallApp = true,
      showAuthButtons = true,
      showCustomLinks = true,
      showNavigationControls = true,
      canGoBack = false,
      canGoForward = false,
      ...props
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = useState('');

    // Search handler
    const handleSearch = useCallback(
      (value: string) => {
        setSearchValue(value);
        onSearch(value);
      },
      [onSearch]
    );

    // Navigation handlers
    const handleBack = useCallback(() => {
      onBack?.();
    }, [onBack]);

    const handleForward = useCallback(() => {
      onForward?.();
    }, [onForward]);

    const handleHomeClick = useCallback(() => {
      onHomeClick?.();
    }, [onHomeClick]);

    // Auth handlers
    const handleLogin = useCallback(() => {
      onLogin();
    }, [onLogin]);

    const handleSignUp = useCallback(() => {
      onSignUp?.();
    }, [onSignUp]);

    const handleInstallApp = useCallback(() => {
      onInstallApp();
    }, [onInstallApp]);

    // Render custom links for guest users
    const renderGuestLinks = () => {
      const linksToShow = customLinks || DEFAULT_GUEST_LINKS;
      if (!showCustomLinks || linksToShow.length === 0) return null;

      return (
        <GuestLinks>
          {linksToShow.map((link) => (
            <GuestLink
              key={link.id}
              href={link.href}
              onClick={link.onClick}
              aria-label={link.label}
            >
              {link.label}
            </GuestLink>
          ))}
        </GuestLinks>
      );
    };

    return (
      <HeaderContainer
        ref={ref}
        className={className}
        role="banner"
        aria-label="Spotify main navigation"
        {...props}
      >
        <LeftSection>
          {showNavigationControls && (
            <NavigationControls>
              <NavButton
                onClick={handleBack}
                disabled={!canGoBack}
                aria-label="Go back"
                title="Go back"
              >
                <Icon icon={faChevronLeft} size="sm" />
              </NavButton>
              <NavButton
                onClick={handleForward}
                disabled={!canGoForward}
                aria-label="Go forward"
                title="Go forward"
              >
                <Icon icon={faChevronRight} size="sm" />
              </NavButton>
            </NavigationControls>
          )}
          
          <SearchContainer>
            <Input
              type="search"
              placeholder="What do you want to play?"
              leftIcon={<Icon icon={faSearch} size="sm" />}
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
              onSearch={handleSearch}
              aria-label="Search for music"
            />
          </SearchContainer>
        </LeftSection>

        <RightSection>
          {isAuthenticated ? (
            <AuthenticatedActions>
              {showInstallApp && (
                <Button
                  onClick={handleInstallApp}
                  variant={ButtonVariant.Text}
                  size={ButtonSize.Small}
                  fontWeight={ButtonFontWeight.Bold}
                  icon={<Icon icon={faDownload} size="sm" />}
                  text="Install App"
                  aria-label="Install Spotify app"
                  title="Install App"
                  style={{
                    color: colors.grey.grey4,
                  }}
                />
              )}
              
              <IconButton
                variant="default"
                aria-label="Notifications"
                title="Notifications"
              >
                <Icon icon={faBell} size="sm" />
              </IconButton>

              <UserProfile
                aria-label={user ? `${user.name}'s profile` : 'User profile'}
                title={user?.name || 'User'}
              >
                <UserAvatar>
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/28x28/333333/ffffff?text=U';
                      }}
                    />
                  ) : (
                    <Icon icon={faHome} size="sm" color="white" />
                  )}
                </UserAvatar>
                {user?.name && <UserName>{user.name}</UserName>}
              </UserProfile>
            </AuthenticatedActions>
          ) : (
            <GuestActions>
              {renderGuestLinks()}
              
              {showCustomLinks && customLinks && customLinks.length > 0 && (
                <Divider />
              )}

              {showAuthButtons && (
                <>
                  {onSignUp && (
                    <Button
                      onClick={handleSignUp}
                      variant={ButtonVariant.White}
                      size={ButtonSize.Small}
                      fontWeight={ButtonFontWeight.Bold}
                      text="Sign up"
                      aria-label="Sign up for Spotify"
                      style={{
                        borderRadius: '500px',
                        padding: '8px 32px',
                        letterSpacing: '-0.01em',
                      }}
                    />
                  )}
                  <Button
                    onClick={handleLogin}
                    variant={ButtonVariant.Text}
                    size={ButtonSize.Small}
                    fontWeight={ButtonFontWeight.Bold}
                    text="Log in"
                    aria-label="Log in to Spotify"
                    style={{
                      padding: '8px 16px',
                    }}
                  />
                </>
              )}
              
              {showInstallApp && (
                <>
                  {showAuthButtons && <Divider />}
                  <Button
                    onClick={handleInstallApp}
                    variant={ButtonVariant.Text}
                    size={ButtonSize.Small}
                    fontWeight={ButtonFontWeight.Bold}
                    icon={<Icon icon={faDownload} size="sm" />}
                    text="Install App"
                    aria-label="Install Spotify app"
                    title="Install App"
                    style={{
                      color: colors.grey.grey4,
                    }}
                  />
                </>
              )}
            </GuestActions>
          )}
        </RightSection>
      </HeaderContainer>
    );
  }
);

AppHeader.displayName = 'AppHeader';
