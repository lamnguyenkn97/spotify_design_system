import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Divider } from './Divider';

describe('Divider Component', () => {
  it('should render with default props', () => {
    const { container } = render(<Divider />);
    const divider = container.querySelector('hr');
    
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('role', 'separator');
  });

  it('should render different variants', () => {
    const { container: solidContainer } = render(<Divider variant="solid" />);
    const { container: subtleContainer } = render(<Divider variant="subtle" />);
    
    const solidDivider = solidContainer.querySelector('hr');
    const subtleDivider = subtleContainer.querySelector('hr');
    
    expect(solidDivider).toBeInTheDocument();
    expect(subtleDivider).toBeInTheDocument();
    
    // Check that they have different styling (they should have different computed styles)
    expect(solidDivider).not.toEqual(subtleDivider);
  });

  it('should render with different orientations and correct styling', () => {
    const { container: horizontalContainer } = render(<Divider orientation="horizontal" />);
    const { container: verticalContainer } = render(<Divider orientation="vertical" />);
    
    const horizontalDivider = horizontalContainer.querySelector('hr');
    const verticalDivider = verticalContainer.querySelector('hr');
    
    expect(horizontalDivider).toBeInTheDocument();
    expect(verticalDivider).toBeInTheDocument();
    
    // Check accessibility attributes are different
    expect(horizontalDivider).toHaveAttribute('aria-orientation', 'horizontal');
    expect(verticalDivider).toHaveAttribute('aria-orientation', 'vertical');
    
    // Check that they have different computed styles
    const horizontalStyles = window.getComputedStyle(horizontalDivider!);
    const verticalStyles = window.getComputedStyle(verticalDivider!);
    
    // The key difference: horizontal uses block display, vertical uses inline-block
    expect(horizontalStyles.display).toBe('block');
    expect(verticalStyles.display).toBe('inline-block');
    
    // Horizontal should have border-top, vertical should have border-left
    expect(horizontalStyles.borderTopWidth).not.toBe('0px');
    expect(verticalStyles.borderLeftWidth).not.toBe('0px');
  });
}); 