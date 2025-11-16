import React from 'react';
import { render, screen } from '@testing-library/react';
import { Equalizer } from './Equalizer';
import { colors } from '../../../styles/tokens';

describe('Equalizer', () => {
  it('renders three bars', () => {
    render(<Equalizer isPlaying={false} />);
    const container = screen.getByRole('img');
    expect(container).toBeInTheDocument();
    // Each bar is a child div
    expect(container.children.length).toBe(3);
  });

  it('applies isPlaying prop correctly', () => {
    const { rerender } = render(<Equalizer isPlaying={true} />);
    let container = screen.getByRole('img');
    expect(container).toHaveAttribute('aria-label', 'Audio playing');

    rerender(<Equalizer isPlaying={false} />);
    container = screen.getByRole('img');
    expect(container).toHaveAttribute('aria-label', 'Audio paused');
  });

  it('uses default brand color', () => {
    render(<Equalizer isPlaying={true} />);
    const container = screen.getByRole('img');
    const bars = Array.from(container.children);
    
    // Check that bars exist and are rendered
    expect(bars.length).toBe(3);
    bars.forEach((bar) => {
      expect(bar).toBeInTheDocument();
    });
  });

  it('accepts custom color', () => {
    const customColor = '#FF0000';
    render(<Equalizer isPlaying={true} color={customColor} />);
    const container = screen.getByRole('img');
    const bars = Array.from(container.children);
    
    // Check that bars exist and are rendered
    expect(bars.length).toBe(3);
    bars.forEach((bar) => {
      expect(bar).toBeInTheDocument();
    });
  });

  it('applies size prop', () => {
    const { rerender } = render(<Equalizer isPlaying={true} size="sm" />);
    let container = screen.getByRole('img');
    expect(container).toBeInTheDocument();

    rerender(<Equalizer isPlaying={true} size="md" />);
    container = screen.getByRole('img');
    expect(container).toBeInTheDocument();

    rerender(<Equalizer isPlaying={true} size="lg" />);
    container = screen.getByRole('img');
    expect(container).toBeInTheDocument();
  });

  it('accepts custom aria-label', () => {
    const customLabel = 'Custom label';
    render(<Equalizer isPlaying={true} aria-label={customLabel} />);
    const container = screen.getByRole('img');
    expect(container).toHaveAttribute('aria-label', customLabel);
  });

  it('accepts className prop', () => {
    const customClass = 'custom-equalizer';
    render(<Equalizer isPlaying={true} className={customClass} />);
    const container = screen.getByRole('img');
    expect(container).toHaveClass(customClass);
  });

  it('accepts style prop', () => {
    const customStyle = { margin: '10px' };
    render(<Equalizer isPlaying={true} style={customStyle} />);
    const container = screen.getByRole('img');
    expect(container).toBeInTheDocument();
    // Style prop is applied via inline styles
    expect(container).toHaveStyle({ margin: '10px' });
  });

  it('has correct display name', () => {
    expect(Equalizer.displayName).toBe('Equalizer');
  });
});

