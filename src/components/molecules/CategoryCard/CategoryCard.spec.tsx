import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { CategoryCard } from './CategoryCard';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('CategoryCard Component', () => {
  const defaultProps = {
    title: 'Test Category',
    backgroundColor: '#1e3264',
  };

  // TC1: Basic rendering with required props
  it('should render category card with basic props', () => {
    renderWithTheme(<CategoryCard {...defaultProps} />);
    
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // TC2: Renders with overlay image
  it('should render with overlay image when provided', () => {
    renderWithTheme(
      <CategoryCard 
        {...defaultProps} 
        overlayImageUrl="https://example.com/category.jpg" 
      />
    );
    
    const overlayImage = screen.getByAltText('Test Category category');
    expect(overlayImage).toBeInTheDocument();
    expect(overlayImage).toHaveAttribute('src', 'https://example.com/category.jpg');
    // Raw img tag should be present
    expect(overlayImage.tagName).toBe('IMG');
  });

  // TC3: Handles click events
  it('should handle click events', () => {
    const mockOnClick = jest.fn();
    
    renderWithTheme(
      <CategoryCard {...defaultProps} onClick={mockOnClick} />
    );
    
    const card = screen.getByRole('button');
    fireEvent.click(card);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // TC4: Handles keyboard events
  it('should handle keyboard events', () => {
    const mockOnClick = jest.fn();
    
    renderWithTheme(
      <CategoryCard {...defaultProps} onClick={mockOnClick} />
    );
    
    const card = screen.getByRole('button');
    
    // Test Enter key
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    
    // Test Space key
    fireEvent.keyDown(card, { key: ' ' });
    expect(mockOnClick).toHaveBeenCalledTimes(2);
  });

  // TC5: Accessibility attributes
  it('should have proper accessibility attributes', () => {
    renderWithTheme(
      <CategoryCard 
        {...defaultProps} 
        aria-label="Custom category label"
      />
    );
    
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('aria-label', 'Custom category label');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  // TC6: Handles missing overlay image gracefully
  it('should handle missing overlay image gracefully', () => {
    renderWithTheme(<CategoryCard {...defaultProps} />);
    
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.queryByAltText(/category/)).not.toBeInTheDocument();
  });

  // TC7: Handles empty overlay image URL
  it('should handle empty overlay image URL gracefully', () => {
    renderWithTheme(
      <CategoryCard 
        {...defaultProps} 
        overlayImageUrl="" 
      />
    );
    
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.queryByAltText(/category/)).not.toBeInTheDocument();
  });

  // TC8: Different background colors
  it('should render with different background colors', () => {
    const colors = ['#1e3264', '#8d67ab', '#ba5d07', '#e8115b'];
    
    colors.forEach((color) => {
      const { unmount } = renderWithTheme(
        <CategoryCard 
          {...defaultProps} 
          backgroundColor={color}
          data-testid={`card-${color}`}
        />
      );
      
      const card = screen.getByTestId(`card-${color}`);
      expect(card).toBeInTheDocument();
      
      unmount();
    });
  });

  // TC9: Long titles wrap properly
  it('should handle long titles properly', () => {
    renderWithTheme(
      <CategoryCard 
        {...defaultProps} 
        title="Very Long Category Name That Should Wrap"
      />
    );
    
    expect(screen.getByText('Very Long Category Name That Should Wrap')).toBeInTheDocument();
  });

  // TC10: Component forwards ref correctly
  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    
    renderWithTheme(
      <CategoryCard {...defaultProps} ref={ref} />
    );
    
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
