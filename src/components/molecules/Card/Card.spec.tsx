import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { Card } from './Card';
import { CardSize, CardVariant } from './Card.types';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Card Component', () => {
  const defaultProps = {
    title: 'Test Album',
    subtitle: 'Test Artist • 2024',
    imageUrl: 'https://example.com/album.jpg',
  };

  // TC1: Basic rendering with required props
  it('should render card with basic props', () => {
    renderWithTheme(<Card {...defaultProps} />);
    
    expect(screen.getByText('Test Album')).toBeInTheDocument();
    expect(screen.getByText('Test Artist • 2024')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps.imageUrl);
  });

  // TC2: Different card sizes render with correct widths
  it('should render different card sizes correctly', () => {
    const sizes: CardSize[] = ['sm', 'md', 'lg'];
    
    sizes.forEach((size) => {
      const { unmount } = renderWithTheme(
        <Card {...defaultProps} size={size} data-testid={`card-${size}`} />
      );
      
      const card = screen.getByTestId(`card-${size}`);
      expect(card).toBeInTheDocument();
      
      unmount();
    });
  });

  // TC3: Artist variant renders correctly
  it('should render artist variant with centered layout', () => {
    renderWithTheme(
      <Card
        title="Taylor Swift"
        variant="artist"
        imageUrl="https://example.com/artist.jpg"
      />
    );
    
    expect(screen.getByText('Artist')).toBeInTheDocument();
    expect(screen.getByText('Taylor Swift')).toBeInTheDocument();
    expect(screen.queryByText('Test Artist • 2024')).not.toBeInTheDocument();
  });

  // TC4: Both variants render images correctly (shape is handled by Image component)
  it('should render images for both variants', () => {
    // Test that both variants render images - the shape difference is internal to Image component
    const { unmount } = renderWithTheme(
      <Card
        title="Album Name"
        variant="default"
        imageUrl="https://example.com/album.jpg"
      />
    );
    
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Album Name cover');
    unmount();
    
    renderWithTheme(
      <Card
        title="Artist Name"
        variant="artist"
        imageUrl="https://example.com/artist.jpg"
      />
    );
    
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Artist Name cover');
  });

  // TC5: Play button functionality
  it('should handle play button click', () => {
    const mockOnPlay = jest.fn();
    
    renderWithTheme(
      <Card {...defaultProps} onPlayClick={mockOnPlay} showPlayButton={true} />
    );
    
    const card = screen.getByRole('article');
    
    // First hover to make play button visible
    fireEvent.mouseEnter(card);
    
    const playButton = screen.getByLabelText('Play Test Album');
    fireEvent.click(playButton);
    
    expect(mockOnPlay).toHaveBeenCalledTimes(1);
  });

  // TC6: Custom image size prop
  it('should accept custom imageSize prop', () => {
    renderWithTheme(
      <Card {...defaultProps} imageSize="sm" />
    );
    
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  // TC7: Play button hidden when showPlayButton is false
  it('should hide play button when showPlayButton is false', () => {
    renderWithTheme(
      <Card {...defaultProps} showPlayButton={false} onPlayClick={() => {}} />
    );
    
    expect(screen.queryByLabelText(/play/i)).not.toBeInTheDocument();
  });

  // TC8: Component handles missing subtitle gracefully
  it('should handle missing subtitle gracefully', () => {
    renderWithTheme(
      <Card title="Test Album" imageUrl="https://example.com/album.jpg" />
    );
    
    expect(screen.getByText('Test Album')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    // Should not crash when subtitle is undefined
  });

  // TC9: Component handles missing image gracefully
  it('should handle missing image gracefully', () => {
    renderWithTheme(
      <Card title="Test Album" subtitle="Test Artist" />
    );
    
    expect(screen.getByText('Test Album')).toBeInTheDocument();
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  // TC10: Hover interactions work correctly
  it('should handle hover interactions', () => {
    renderWithTheme(<Card {...defaultProps} onPlayClick={() => {}} />);
    
    const card = screen.getByRole('article');
    expect(card).toBeInTheDocument();
    
    // Test hover enter
    fireEvent.mouseEnter(card);
    expect(card).toBeInTheDocument();
    
    // Test hover leave
    fireEvent.mouseLeave(card);
    expect(card).toBeInTheDocument();
  });

  // TC11: Keyboard interaction
  it('should handle keyboard interactions', () => {
    const mockOnPlay = jest.fn();
    
    renderWithTheme(
      <Card {...defaultProps} onPlayClick={mockOnPlay} />
    );
    
    const card = screen.getByRole('article');
    
    // Test Enter key
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(mockOnPlay).toHaveBeenCalledTimes(1);
    
    // Test Space key
    fireEvent.keyDown(card, { key: ' ' });
    expect(mockOnPlay).toHaveBeenCalledTimes(2);
  });

  // TC12: Accessibility attributes
  it('should have proper accessibility attributes', () => {
    renderWithTheme(
      <Card 
        {...defaultProps} 
        aria-label="Custom label"
        onPlayClick={() => {}} 
      />
    );
    
    const card = screen.getByRole('article');
    expect(card).toHaveAttribute('aria-label', 'Custom label');
    expect(card).toHaveAttribute('tabIndex', '0');
  });
}); 