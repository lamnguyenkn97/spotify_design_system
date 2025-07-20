import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { ButtonVariant, ButtonSize } from './Button.types';
import { Icon } from '../Icon';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../../styles/theme';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('Button Component', () => {
  it('should render with text content', () => {
    render(
      <TestWrapper>
        <Button text="Click me" />
      </TestWrapper>
    );
    
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('should render different variants', () => {
    render(
      <TestWrapper>
        <Button text="Secondary" variant={ButtonVariant.Secondary} />
      </TestWrapper>
    );
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('should handle click interactions', () => {
    const handleClick = jest.fn();
    
    render(
      <TestWrapper>
        <Button text="Clickable" onClick={handleClick} />
      </TestWrapper>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    const handleClick = jest.fn();
    
    render(
      <TestWrapper>
        <Button text="Disabled" onClick={handleClick} disabled />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should be disabled and hide text when loading', () => {
    render(
      <TestWrapper>
        <Button text="Loading" loading />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  });

  it('should support custom className', () => {
    render(
      <TestWrapper>
        <Button text="Styled Button" className="custom-class" />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(screen.getByText('Styled Button')).toBeInTheDocument();
  });

  it('should render with icon positioned on the left', () => {
    render(
      <TestWrapper>
        <Button 
          text="Play" 
          icon={<Icon icon={faPlay} size="sm" data-testid="play-icon" />}
        />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    const icon = screen.getByTestId('play-icon');
    
    expect(button).toHaveTextContent('Play');
    expect(icon).toBeInTheDocument();
    
    // Verify both icon and text are present
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByTestId('play-icon')).toBeInTheDocument();
  });

  it('should render icon without text when only icon provided', () => {
    render(
      <TestWrapper>
        <Button 
          icon={<Icon icon={faPlay} size="sm" data-testid="play-icon" />}
          aria-label="Play"
        />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    const icon = screen.getByTestId('play-icon');
    
    expect(button).toHaveAttribute('aria-label', 'Play');
    expect(icon).toBeInTheDocument();
    expect(button.textContent).toBe('');
  });

  it('should render circular button with correct styling', () => {
    render(
      <TestWrapper>
        <Button 
          variant={ButtonVariant.Circular}
          circular={true}
          icon={<Icon icon={faPlay} size="md" data-testid="play-icon" />}
          aria-label="Play"
        />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    const icon = screen.getByTestId('play-icon');
    
    expect(button).toHaveAttribute('aria-label', 'Play');
    expect(icon).toBeInTheDocument();
    expect(button.textContent).toBe('');
    
    // Check that the button has circular styling
    expect(button).toHaveStyle({
      borderRadius: '50%',
      width: '40px', // Medium size
      height: '40px',
    });
  });

  it('should render circular button with different sizes', () => {
    const { rerender } = render(
      <TestWrapper>
        <Button 
          variant={ButtonVariant.Circular}
          circular={true}
          size={ButtonSize.Small}
          icon={<Icon icon={faPlay} size="sm" data-testid="play-icon" />}
          aria-label="Play"
        />
      </TestWrapper>
    );
    
    let button = screen.getByRole('button');
    expect(button).toHaveStyle({
      width: '32px', // Small size
      height: '32px',
    });

    rerender(
      <TestWrapper>
        <Button 
          variant={ButtonVariant.Circular}
          circular={true}
          size={ButtonSize.Large}
          icon={<Icon icon={faPlay} size="lg" data-testid="play-icon" />}
          aria-label="Play"
        />
      </TestWrapper>
    );
    
    button = screen.getByRole('button');
    expect(button).toHaveStyle({
      width: '48px', // Large size
      height: '48px',
    });
  });

  it('should handle circular button click interactions', () => {
    const handleClick = jest.fn();
    
    render(
      <TestWrapper>
        <Button 
          variant={ButtonVariant.Circular}
          circular={true}
          icon={<Icon icon={faPlay} size="md" data-testid="play-icon" />}
          onClick={handleClick}
          aria-label="Play"
        />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
