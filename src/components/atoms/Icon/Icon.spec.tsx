import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icon } from './Icon';
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons';

describe('Icon Component', () => {
  it('should render with default props', () => {
    const { container } = render(<Icon icon={faPlay} />);
    const iconContainer = container.querySelector('span');
    const svg = container.querySelector('svg');
    
    expect(iconContainer).toBeInTheDocument();
    expect(svg).toBeInTheDocument();
    expect(iconContainer).not.toHaveAttribute('role'); // Not clickable by default
  });

  it('should render different sizes', () => {
    const { container: smContainer } = render(<Icon icon={faPlay} size="sm" />);
    const { container: mdContainer } = render(<Icon icon={faPlay} size="md" />);
    const { container: lgContainer } = render(<Icon icon={faPlay} size="lg" />);
    
    const smIcon = smContainer.querySelector('span');
    const mdIcon = mdContainer.querySelector('span');
    const lgIcon = lgContainer.querySelector('span');
    
    expect(smIcon).toBeInTheDocument();
    expect(mdIcon).toBeInTheDocument();
    expect(lgIcon).toBeInTheDocument();
    
    // Check that they have different computed styles (sizes)
    const smStyles = window.getComputedStyle(smIcon!);
    const lgStyles = window.getComputedStyle(lgIcon!);
    expect(smStyles.fontSize).not.toBe(lgStyles.fontSize);
  });

  it('should handle clickable state with proper accessibility', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Icon 
        icon={faHeart} 
        clickable 
        onClick={handleClick}
        aria-label="Like this song"
      />
    );
    
    const iconContainer = container.querySelector('span');
    
    expect(iconContainer).toHaveAttribute('role', 'button');
    expect(iconContainer).toHaveAttribute('tabIndex', '0');
    expect(iconContainer).toHaveAttribute('aria-label', 'Like this song');
    
    // Test click interaction
    fireEvent.click(iconContainer!);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should handle keyboard interactions for clickable icons', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Icon icon={faHeart} clickable onClick={handleClick} />
    );
    
    const iconContainer = container.querySelector('span');
    
    // Test Enter key
    fireEvent.keyDown(iconContainer!, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    
    // Test Space key
    fireEvent.keyDown(iconContainer!, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
    
    // Test other keys (should not trigger)
    fireEvent.keyDown(iconContainer!, { key: 'Escape' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should handle disabled state correctly', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Icon 
        icon={faHeart} 
        clickable 
        disabled 
        onClick={handleClick}
      />
    );
    
    const iconContainer = container.querySelector('span');
    
    expect(iconContainer).toHaveAttribute('aria-disabled', 'true');
    expect(iconContainer).not.toHaveAttribute('tabIndex'); // Should not be focusable when disabled
    
    // Click should not work when disabled
    fireEvent.click(iconContainer!);
    expect(handleClick).not.toHaveBeenCalled();
    
    // Keyboard interaction should not work when disabled
    fireEvent.keyDown(iconContainer!, { key: 'Enter' });
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render different colors', () => {
    const { container: primaryContainer } = render(<Icon icon={faPlay} color="primary" />);
    const { container: mutedContainer } = render(<Icon icon={faPlay} color="muted" />);
    
    const primaryIcon = primaryContainer.querySelector('span');
    const mutedIcon = mutedContainer.querySelector('span');
    
    expect(primaryIcon).toBeInTheDocument();
    expect(mutedIcon).toBeInTheDocument();
    
    // Just check that different colors produce different computed styles
    const primaryStyles = window.getComputedStyle(primaryIcon!);
    const mutedStyles = window.getComputedStyle(mutedIcon!);
    
    expect(primaryStyles.color).not.toBe(mutedStyles.color);
  });
}); 