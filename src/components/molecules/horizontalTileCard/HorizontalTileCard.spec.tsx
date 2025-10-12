import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../styles';
import { HorizontalTileCard } from './horizontalTileCard';
import { spacing, borderRadius } from '../../../styles';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('HorizontalTileCard Component', () => {
  const defaultProps = {
    title: 'Liked Songs',
    subtitle: 'Playlist • 207 songs',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
  };

  // TC1: Basic rendering with required props
  it('should render with basic props', () => {
    renderWithTheme(<HorizontalTileCard {...defaultProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Liked Songs')).toBeInTheDocument();
    expect(screen.getByText('Playlist • 207 songs')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps.image);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Liked Songs');
  });

  // TC2: Render without subtitle
  it('should render without subtitle', () => {
    renderWithTheme(
      <HorizontalTileCard
        title="My Album"
        image="https://example.com/album.jpg"
      />
    );

    expect(screen.getByText('My Album')).toBeInTheDocument();
    expect(screen.queryByText('Playlist • 207 songs')).not.toBeInTheDocument();
  });

  // TC3: Different sizes apply correct CSS using design tokens
  it('should apply different CSS styles for different sizes', () => {
    // Test small size
    const { rerender } = renderWithTheme(
      <HorizontalTileCard {...defaultProps} size="small" />
    );

    const smallButton = screen.getByRole('button');
    expect(smallButton).toHaveStyle({
      padding: spacing.xs, // '4px'
      borderRadius: borderRadius.sm, // '1rem'
    });

    // Test large size
    rerender(
      <ThemeProvider>
        <HorizontalTileCard {...defaultProps} size="large" />
      </ThemeProvider>
    );

    const largeButton = screen.getByRole('button');
    expect(largeButton).toHaveStyle({
      padding: spacing.sm, // '8px'
      borderRadius: borderRadius.md, // '2rem'
    });
  });

  // TC4: Click handler is called
  it('should handle click interactions', () => {
    const handleClick = jest.fn();

    renderWithTheme(
      <HorizontalTileCard {...defaultProps} onClick={handleClick} />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // TC5: Keyboard interactions work
  it('should handle keyboard interactions', () => {
    const handleClick = jest.fn();

    renderWithTheme(
      <HorizontalTileCard {...defaultProps} onClick={handleClick} />
    );

    const button = screen.getByRole('button');

    // Test Enter key
    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Test Space key
    fireEvent.keyDown(button, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);

    // Test other keys (should not trigger)
    fireEvent.keyDown(button, { key: 'Tab' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  // TC6: Disabled state prevents interactions
  it('should be disabled when disabled prop is true', () => {
    const handleClick = jest.fn();

    renderWithTheme(
      <HorizontalTileCard
        {...defaultProps}
        onClick={handleClick}
        disabled={true}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).toHaveAttribute('tabindex', '-1');

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();

    fireEvent.keyDown(button, { key: 'Enter' });
    expect(handleClick).not.toHaveBeenCalled();
  });

  // TC7: Progress bar displays when enabled
  it('should display progress bar when showProgress is true', () => {
    renderWithTheme(
      <HorizontalTileCard
        {...defaultProps}
        showProgress={true}
        progressValue={0.45}
      />
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute('aria-label', 'Progress: 45%');
  });

  // TC8: Progress bar hidden when disabled
  it('should not display progress bar when showProgress is false', () => {
    renderWithTheme(
      <HorizontalTileCard {...defaultProps} showProgress={false} />
    );

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });

  // TC9: Accessibility attributes are correct
  it('should have proper accessibility attributes', () => {
    renderWithTheme(
      <HorizontalTileCard
        {...defaultProps}
        title="My Playlist"
        subtitle="Custom subtitle"
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute(
      'aria-label',
      'My Playlist - Custom subtitle'
    );
    expect(button).toHaveAttribute('tabindex', '0');
    expect(button).toHaveAttribute('aria-disabled', 'false');
  });

  // TC10: Progress value formats correctly in aria-label
  it('should format progress value correctly in aria-label', () => {
    renderWithTheme(
      <HorizontalTileCard
        {...defaultProps}
        showProgress={true}
        progressValue={0.667}
      />
    );

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-label', 'Progress: 67%');
  });
});
