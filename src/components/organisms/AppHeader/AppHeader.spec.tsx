import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppHeader } from './AppHeader';
import { AppHeaderProps, HeaderLink } from './AppHeader.types';

// Mock user data for testing
const mockUser = {
  name: 'Test User',
  avatar: 'https://example.com/avatar.jpg',
};

// Default props for testing
const defaultProps: AppHeaderProps = {
  isAuthenticated: false,
  onSearch: jest.fn(),
  onLogin: jest.fn(),
  onInstallApp: jest.fn(),
};

describe('AppHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders the AppHeader component', () => {
      render(<AppHeader {...defaultProps} />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
      expect(screen.getByLabelText('Spotify main navigation')).toBeInTheDocument();
    });

    it('renders navigation controls (back/forward buttons)', () => {
      render(<AppHeader {...defaultProps} />);
      
      expect(screen.getByLabelText('Go back')).toBeInTheDocument();
      expect(screen.getByLabelText('Go forward')).toBeInTheDocument();
    });

    it('renders search input', () => {
      render(<AppHeader {...defaultProps} />);
      
      expect(screen.getByLabelText('Search for music')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('What do you want to play?')).toBeInTheDocument();
    });
  });

  describe('Unauthenticated state', () => {
    it('shows guest navigation when not authenticated', () => {
      render(<AppHeader {...defaultProps} isAuthenticated={false} />);
      
      expect(screen.getByText('Premium')).toBeInTheDocument();
      expect(screen.getByText('Support')).toBeInTheDocument();
      expect(screen.getByText('Download')).toBeInTheDocument();
      expect(screen.getByText('Log in')).toBeInTheDocument();
    });

    it('shows Sign up button when onSignUp is provided', () => {
      const mockOnSignUp = jest.fn();
      render(<AppHeader {...defaultProps} onSignUp={mockOnSignUp} />);
      
      expect(screen.getByText('Sign up')).toBeInTheDocument();
    });

    it('calls onLogin when login button is clicked', () => {
      const mockOnLogin = jest.fn();
      render(<AppHeader {...defaultProps} onLogin={mockOnLogin} />);
      
      fireEvent.click(screen.getByText('Log in'));
      expect(mockOnLogin).toHaveBeenCalledTimes(1);
    });

    it('calls onSignUp when sign up button is clicked', () => {
      const mockOnSignUp = jest.fn();
      render(<AppHeader {...defaultProps} onSignUp={mockOnSignUp} />);
      
      fireEvent.click(screen.getByText('Sign up'));
      expect(mockOnSignUp).toHaveBeenCalledTimes(1);
    });
  });

  describe('Authenticated state', () => {
    it('shows authenticated navigation when authenticated', () => {
      render(<AppHeader {...defaultProps} isAuthenticated={true} />);
      
      expect(screen.queryByText('Premium')).not.toBeInTheDocument();
      expect(screen.queryByText('Support')).not.toBeInTheDocument();
      expect(screen.queryByText('Download')).not.toBeInTheDocument();
      expect(screen.queryByText('Log in')).not.toBeInTheDocument();
      expect(screen.queryByText('Sign up')).not.toBeInTheDocument();
    });

    it('shows user avatar and name when user is provided', () => {
      render(<AppHeader {...defaultProps} isAuthenticated={true} user={mockUser} />);
      
      expect(screen.getByAltText(mockUser.name)).toBeInTheDocument();
      expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    });

    it('shows notifications button when authenticated', () => {
      render(<AppHeader {...defaultProps} isAuthenticated={true} />);
      
      expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
    });

    it('shows user profile button even without user data', () => {
      render(<AppHeader {...defaultProps} isAuthenticated={true} />);
      
      expect(screen.getByLabelText('User profile')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onSearch when search input changes', () => {
      const mockOnSearch = jest.fn();
      render(<AppHeader {...defaultProps} onSearch={mockOnSearch} />);
      
      const searchInput = screen.getByPlaceholderText('What do you want to play?');
      fireEvent.change(searchInput, { target: { value: 'test search' } });
      
      expect(searchInput).toHaveValue('test search');
      expect(mockOnSearch).toHaveBeenCalledWith('test search');
    });

    it('calls onInstallApp when install app button is clicked', () => {
      const mockOnInstallApp = jest.fn();
      render(<AppHeader {...defaultProps} onInstallApp={mockOnInstallApp} />);
      
      const installButton = screen.getByLabelText('Install Spotify app');
      fireEvent.click(installButton);
      expect(mockOnInstallApp).toHaveBeenCalledTimes(1);
    });

    it('calls onBack when back button is clicked', () => {
      const mockOnBack = jest.fn();
      render(<AppHeader {...defaultProps} onBack={mockOnBack} canGoBack={true} />);
      
      fireEvent.click(screen.getByLabelText('Go back'));
      expect(mockOnBack).toHaveBeenCalledTimes(1);
    });

    it('calls onForward when forward button is clicked', () => {
      const mockOnForward = jest.fn();
      render(<AppHeader {...defaultProps} onForward={mockOnForward} canGoForward={true} />);
      
      fireEvent.click(screen.getByLabelText('Go forward'));
      expect(mockOnForward).toHaveBeenCalledTimes(1);
    });

    it('disables back button when canGoBack is false', () => {
      render(<AppHeader {...defaultProps} canGoBack={false} />);
      
      const backButton = screen.getByLabelText('Go back');
      expect(backButton).toBeDisabled();
    });

    it('disables forward button when canGoForward is false', () => {
      render(<AppHeader {...defaultProps} canGoForward={false} />);
      
      const forwardButton = screen.getByLabelText('Go forward');
      expect(forwardButton).toBeDisabled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      render(<AppHeader {...defaultProps} />);
      
      expect(screen.getByLabelText('Spotify main navigation')).toBeInTheDocument();
      expect(screen.getByLabelText('Search for music')).toBeInTheDocument();
      expect(screen.getByLabelText('Go back')).toBeInTheDocument();
      expect(screen.getByLabelText('Go forward')).toBeInTheDocument();
    });

    it('has proper semantic HTML structure', () => {
      render(<AppHeader {...defaultProps} />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
  });

  describe('Error handling', () => {
    it('handles missing user avatar gracefully', () => {
      const userWithBadAvatar = {
        name: 'Test User',
        avatar: 'invalid-url',
      };
      
      render(<AppHeader {...defaultProps} isAuthenticated={true} user={userWithBadAvatar} />);
      
      const avatar = screen.getByAltText(userWithBadAvatar.name);
      expect(avatar).toBeInTheDocument();
      
      // Simulate image error
      fireEvent.error(avatar);
      expect(avatar).toHaveAttribute('src', 'https://via.placeholder.com/28x28/333333/ffffff?text=U');
    });
  });

  describe('Dynamic Configuration', () => {
    describe('Custom Links', () => {
      it('renders custom links for guest users', () => {
        const customLinks: HeaderLink[] = [
          { id: 'about', label: 'About', href: '/about' },
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'pricing', label: 'Pricing', href: '/pricing' },
        ];

        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            customLinks={customLinks}
            showAuthButtons={false}
            showInstallApp={false}
          />
        );

        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
        expect(screen.getByText('Pricing')).toBeInTheDocument();
      });

      it('renders correct href for custom links', () => {
        const customLinks: HeaderLink[] = [
          { id: 'about', label: 'About', href: '/about' },
          { id: 'pricing', label: 'Pricing', href: '/pricing' },
        ];

        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            customLinks={customLinks}
            showAuthButtons={false}
            showInstallApp={false}
          />
        );

        const aboutLink = screen.getByText('About').closest('a');
        const pricingLink = screen.getByText('Pricing').closest('a');

        expect(aboutLink).toHaveAttribute('href', '/about');
        expect(pricingLink).toHaveAttribute('href', '/pricing');
      });

      it('calls onClick handler when custom link is clicked', () => {
        const mockOnAbout = jest.fn();
        const customLinks: HeaderLink[] = [
          { id: 'about', label: 'About', href: '#about', onClick: mockOnAbout },
        ];

        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            customLinks={customLinks}
            showAuthButtons={false}
            showInstallApp={false}
          />
        );

        const aboutLink = screen.getByText('About');
        fireEvent.click(aboutLink);
        expect(mockOnAbout).toHaveBeenCalledTimes(1);
      });

      it('allows external URLs in custom links', () => {
        const customLinks: HeaderLink[] = [
          { id: 'blog', label: 'Blog', href: 'https://blog.example.com' },
          { id: 'docs', label: 'Documentation', href: 'https://docs.example.com' },
        ];

        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            customLinks={customLinks}
            showAuthButtons={false}
            showInstallApp={false}
          />
        );

        const blogLink = screen.getByText('Blog').closest('a');
        const docsLink = screen.getByText('Documentation').closest('a');

        expect(blogLink).toHaveAttribute('href', 'https://blog.example.com');
        expect(docsLink).toHaveAttribute('href', 'https://docs.example.com');
      });
    });

    describe('Visibility Controls', () => {
      it('hides install app button when showInstallApp is false', () => {
        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            showInstallApp={false}
          />
        );

        expect(screen.queryByLabelText('Install Spotify app')).not.toBeInTheDocument();
      });

      it('hides auth buttons when showAuthButtons is false', () => {
        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            showAuthButtons={false}
            showCustomLinks={false}
            showInstallApp={false}
          />
        );

        expect(screen.queryByText('Log in')).not.toBeInTheDocument();
        expect(screen.queryByText('Sign up')).not.toBeInTheDocument();
      });

      it('hides custom links when showCustomLinks is false', () => {
        const customLinks: HeaderLink[] = [
          { id: 'about', label: 'About', href: '#about' },
        ];

        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            customLinks={customLinks}
            showCustomLinks={false}
            showAuthButtons={false}
            showInstallApp={false}
          />
        );

        expect(screen.queryByText('About')).not.toBeInTheDocument();
      });

      it('hides navigation controls when showNavigationControls is false', () => {
        render(
          <AppHeader 
            {...defaultProps} 
            showNavigationControls={false}
          />
        );

        expect(screen.queryByLabelText('Go back')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Go forward')).not.toBeInTheDocument();
      });

      it('shows default links when customLinks is not provided', () => {
        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            showAuthButtons={false}
            showInstallApp={false}
          />
        );

        expect(screen.getByText('Premium')).toBeInTheDocument();
        expect(screen.getByText('Support')).toBeInTheDocument();
        expect(screen.getByText('Download')).toBeInTheDocument();
      });
    });

    describe('Minimal Configuration', () => {
      it('renders minimal header with only search when all features are disabled', () => {
        render(
          <AppHeader 
            {...defaultProps} 
            isAuthenticated={false} 
            showInstallApp={false}
            showAuthButtons={false}
            showCustomLinks={false}
            showNavigationControls={false}
          />
        );

        // Should show search
        expect(screen.getByLabelText('Search for music')).toBeInTheDocument();
        
        // Should not show any buttons, links, or navigation controls
        expect(screen.queryByLabelText('Install Spotify app')).not.toBeInTheDocument();
        expect(screen.queryByText('Log in')).not.toBeInTheDocument();
        expect(screen.queryByText('Premium')).not.toBeInTheDocument();
        expect(screen.queryByLabelText('Go back')).not.toBeInTheDocument();
      });
    });
  });
}); 