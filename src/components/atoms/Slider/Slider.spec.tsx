import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../styles';
import { Slider } from './Slider';
import { SliderProps } from './Slider.types';

const renderSlider = (props: Partial<SliderProps> = {}) => {
  const defaultProps = {
    value: 50,
    onChange: jest.fn(),
    'aria-label': 'Test slider',
    ...props,
  };

  return render(
    <ThemeProvider>
      <Slider {...defaultProps} />
    </ThemeProvider>
  );
};

describe('Slider', () => {
  it('renders with correct value', () => {
    renderSlider({ value: 75 });
    const slider = screen.getByRole('slider');
    expect(slider).toHaveValue('75');
  });

  it('calls onChange when value changes', () => {
    const mockOnChange = jest.fn();
    renderSlider({ onChange: mockOnChange });
    
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '80' } });
    
    expect(mockOnChange).toHaveBeenCalledWith(80);
  });

  it('respects min and max values', () => {
    renderSlider({ min: 10, max: 90, value: 50 });
    const slider = screen.getByRole('slider');
    
    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '90');
  });

  it('handles disabled state', () => {
    renderSlider({ disabled: true });
    const slider = screen.getByRole('slider');
    expect(slider).toBeDisabled();
  });

  it('has proper accessibility attributes', () => {
    renderSlider({ 'aria-label': 'Volume control' });
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-label', 'Volume control');
  });

  it('renders circular marker with correct positioning', () => {
    const { container } = renderSlider({ value: 25, min: 0, max: 100 });
    
    // Check that the thumb is positioned at 25% (25/100 * 100%)
    const thumb = container.querySelector('[style*="left: 25%"]');
    expect(thumb).toBeInTheDocument();
  });

  it('renders default circular marker', () => {
    const { container } = renderSlider({ 'aria-label': 'Default slider' });
    
    // Check that the thumb element is rendered
    const thumb = container.querySelector('[style*="left:"]');
    expect(thumb).toBeInTheDocument();
  });
}); 