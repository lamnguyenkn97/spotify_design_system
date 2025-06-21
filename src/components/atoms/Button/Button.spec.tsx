import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from './Button';
import { ButtonVariant } from './Button.types';
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
});
