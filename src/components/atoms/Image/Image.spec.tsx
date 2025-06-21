import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { Image } from './Image';

// Mock FontAwesome to avoid import issues
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, size }: any) => (
    <div data-testid="placeholder-icon" data-icon={icon.iconName} data-size={size} />
  ),
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Image Component', () => {
  const mockSrc = 'https://example.com/image.jpg';
  const mockAlt = 'Test image';

  it('renders image with correct src and alt', () => {
    renderWithTheme(<Image src={mockSrc} alt={mockAlt} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', mockSrc);
    expect(image).toHaveAttribute('alt', mockAlt);
  });

  it('shows correct placeholder icon for each variant', () => {
    const variants = [
      { variant: 'album', expectedIcon: 'compact-disc' },
      { variant: 'avatar', expectedIcon: 'user' },
      { variant: 'playlist', expectedIcon: 'list' },
      { variant: 'default', expectedIcon: 'image' },
    ] as const;

    variants.forEach(({ variant, expectedIcon }) => {
      const { unmount } = renderWithTheme(<Image src="" alt={mockAlt} variant={variant} />);
      
      const placeholder = screen.getByTestId('placeholder-icon');
      expect(placeholder).toHaveAttribute('data-icon', expectedIcon);
      
      unmount();
    });
  });

  it('handles image load error and shows placeholder', async () => {
    renderWithTheme(<Image src={mockSrc} alt={mockAlt} variant="album" />);
    
    const image = screen.getByRole('img');
    fireEvent.error(image);
    
    await waitFor(() => {
      const placeholder = screen.getByTestId('placeholder-icon');
      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveAttribute('data-icon', 'compact-disc');
    });
  });

  it('tries fallback image before showing placeholder', async () => {
    const fallbackSrc = 'https://example.com/fallback.jpg';
    renderWithTheme(
      <Image src={mockSrc} alt={mockAlt} fallbackSrc={fallbackSrc} variant="album" />
    );
    
    const image = screen.getByRole('img');
    fireEvent.error(image);
    
    await waitFor(() => {
      expect(image).toHaveAttribute('src', fallbackSrc);
    });
  });

  it('applies lazy loading by default', () => {
    renderWithTheme(<Image src={mockSrc} alt={mockAlt} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('forwards ref to image element', () => {
    const ref = React.createRef<HTMLImageElement>();
    renderWithTheme(<Image ref={ref} src={mockSrc} alt={mockAlt} />);
    
    expect(ref.current).toBeInstanceOf(HTMLImageElement);
    expect(ref.current).toHaveAttribute('src', mockSrc);
  });
}); 