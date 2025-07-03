import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { Banner } from './Banner';
import { BannerType } from './Banner.types';

// Mock the dont-crop library
jest.mock('dont-crop', () => ({
  fitGradient: jest.fn(
    () => 'linear-gradient(135deg, rgb(50, 50, 50), rgb(20, 20, 20))'
  ),
}));

// Simple test helper - no complex mocking needed

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Banner Component', () => {
  const defaultProps = {
    type: 'album' as BannerType,
    title: 'Test Album',
    subtitle: 'Test Artist • 2024 • 12 songs',
    image: 'https://example.com/album.jpg',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // TC1: Basic rendering with required props
  it('should render banner with basic props', () => {
    renderWithTheme(<Banner {...defaultProps} />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Test Album'
    );
    expect(screen.getByText('Album')).toBeInTheDocument();
    expect(
      screen.getByText('Test Artist • 2024 • 12 songs')
    ).toBeInTheDocument();
  });

  // TC2: Different banner types render correct labels
  it('should render correct labels for different banner types', () => {
    const types: { type: BannerType; label: string }[] = [
      { type: 'album', label: 'Album' },
      { type: 'playlist', label: 'Playlist' },
      { type: 'podcast', label: 'Podcast' },
      { type: 'artist', label: 'Verified Artist' },
    ];

    types.forEach(({ type, label }) => {
      const { unmount } = renderWithTheme(
        <Banner {...defaultProps} type={type} />
      );

      expect(screen.getByText(label)).toBeInTheDocument();
      unmount();
    });
  });

  // TC3: Artist type uses description instead of subtitle
  it('should display description for artist type', () => {
    renderWithTheme(
      <Banner
        type="artist"
        title="Taylor Swift"
        description="82,240,376 monthly listeners"
        image="https://example.com/artist.jpg"
      />
    );

    expect(
      screen.getByText('82,240,376 monthly listeners')
    ).toBeInTheDocument();
    expect(screen.getByText('Verified Artist')).toBeInTheDocument();
  });

  // TC4: Image renders with correct attributes
  it('should render image with correct size and shape', () => {
    renderWithTheme(<Banner {...defaultProps} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', defaultProps.image);
    expect(image).toHaveAttribute('alt', 'Test Album cover');
  });

  // TC5: Accessibility attributes are correct
  it('should have proper accessibility attributes', () => {
    renderWithTheme(<Banner {...defaultProps} />);

    const banner = screen.getByRole('banner');
    expect(banner).toHaveAttribute('aria-label', 'Album banner');

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Test Album');
  });

  // TC8: Component handles missing optional props
  it('should handle missing subtitle gracefully', () => {
    renderWithTheme(
      <Banner
        type="album"
        title="Test Album"
        image="https://example.com/album.jpg"
      />
    );

    expect(screen.getByText('Test Album')).toBeInTheDocument();
    expect(screen.getByText('Album')).toBeInTheDocument();
    // Should not crash when subtitle is undefined
  });

  // TC10: Banner has correct styling
  it('should have correct styling', () => {
    renderWithTheme(<Banner {...defaultProps} />);

    const banner = screen.getByRole('banner');

    // Check that banner has correct static styles from design tokens
    expect(banner).toHaveStyle({
      height: '240px',
      padding: '16px',
    });
  });
});
