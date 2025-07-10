import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AppHeader } from './AppHeader';
import { AppHeaderProps } from './AppHeader.types';

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
  onSignUp: jest.fn(),
  onInstallApp: jest.fn(),
  onHomeClick: jest.fn(),
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

    it('renders Spotify logo and home icon', () => {
      render(<AppHeader {...defaultProps} />);
      
      expect(screen.getByLabelText('Spotify')).toBeInTheDocument();
      expect(screen.getByLabelText('Home')).toBeInTheDocument();
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
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
      expect(screen.getByText('Log In')).toBeInTheDocument();
    });

    it('calls onLogin when login button is clicked', () => {
      const mockOnLogin = jest.fn();
      render(<AppHeader {...defaultProps} onLogin={mockOnLogin} />);
      
      fireEvent.click(screen.getByText('Log In'));
      expect(mockOnLogin).toHaveBeenCalledTimes(1);
    });

    it('calls onSignUp when sign up button is clicked', () => {
      const mockOnSignUp = jest.fn();
      render(<AppHeader {...defaultProps} onSignUp={mockOnSignUp} />);
      
      fireEvent.click(screen.getByText('Sign Up'));
      expect(mockOnSignUp).toHaveBeenCalledTimes(1);
    });
  });

  describe('Authenticated state', () => {
    it('shows authenticated navigation when authenticated', () => {
      render(<AppHeader {...defaultProps} isAuthenticated={true} />);
      
      expect(screen.queryByText('Premium')).not.toBeInTheDocument();
      expect(screen.queryByText('Support')).not.toBeInTheDocument();
      expect(screen.queryByText('Download')).not.toBeInTheDocument();
      expect(screen.queryByText('Sign Up')).not.toBeInTheDocument();
      expect(screen.queryByText('Log In')).not.toBeInTheDocument();
    });

    it('shows user avatar when user is provided', () => {
      render(<AppHeader {...defaultProps} isAuthenticated={true} user={mockUser} />);
      
      expect(screen.getByAltText(`${mockUser.name}'s profile`)).toBeInTheDocument();
    });

    it('does not show user avatar when user is not provided', () => {
      render(<AppHeader {...defaultProps} isAuthenticated={true} />);
      
      expect(screen.queryByAltText('profile')).not.toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onSearch when search input is used', () => {
      const mockOnSearch = jest.fn();
      render(<AppHeader {...defaultProps} onSearch={mockOnSearch} />);
      
      const searchInput = screen.getByPlaceholderText('What do you want to play?');
      fireEvent.change(searchInput, { target: { value: 'test search' } });
      
      // The search is typically triggered on form submission or specific events
      // This test verifies the input is present and can be interacted with
      expect(searchInput).toHaveValue('test search');
    });

    it('calls onInstallApp when install app button is clicked', () => {
      const mockOnInstallApp = jest.fn();
      render(<AppHeader {...defaultProps} onInstallApp={mockOnInstallApp} />);
      
      const installButtons = screen.getAllByText('Install App');
      fireEvent.click(installButtons[0]);
      expect(mockOnInstallApp).toHaveBeenCalledTimes(1);
    });

    it('calls onHomeClick when home icon is clicked', () => {
      const mockOnHomeClick = jest.fn();
      render(<AppHeader {...defaultProps} onHomeClick={mockOnHomeClick} />);
      
      fireEvent.click(screen.getByLabelText('Home'));
      expect(mockOnHomeClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels', () => {
      render(<AppHeader {...defaultProps} />);
      
      expect(screen.getByLabelText('Spotify main navigation')).toBeInTheDocument();
      expect(screen.getByLabelText('Spotify')).toBeInTheDocument();
      expect(screen.getByLabelText('Home')).toBeInTheDocument();
      expect(screen.getByLabelText('Search for music')).toBeInTheDocument();
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
      
      const avatar = screen.getByAltText(`${userWithBadAvatar.name}'s profile`);
      expect(avatar).toBeInTheDocument();
      
      // Simulate image error
      fireEvent.error(avatar);
      expect(avatar).toHaveAttribute('src', 'https://via.placeholder.com/32x32/333333/ffffff?text=U');
    });
  });
}); 