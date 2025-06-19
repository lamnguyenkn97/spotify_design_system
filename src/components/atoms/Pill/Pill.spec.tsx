import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { Pill } from './Pill';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('Pill', () => {
  it('renders with label', () => {
    renderWithTheme(<Pill label="Pop" />);
    expect(screen.getByRole('button', { name: 'Pop' })).toBeInTheDocument();
  });

  it('renders different variants with distinct styles', () => {
    const { rerender } = renderWithTheme(<Pill label="Default" variant="default" />);
    const defaultButton = screen.getByRole('button');
    const defaultStyles = window.getComputedStyle(defaultButton);

    rerender(
      <ThemeProvider>
        <Pill label="Selected" variant="selected" />
      </ThemeProvider>
    );
    const selectedButton = screen.getByRole('button');
    const selectedStyles = window.getComputedStyle(selectedButton);

    // Variants should have different computed styles
    expect(defaultStyles.backgroundColor).not.toBe(selectedStyles.backgroundColor);
  });

  it('renders different sizes', () => {
    const { rerender } = renderWithTheme(<Pill label="Small" size="sm" />);
    const smallButton = screen.getByRole('button');
    const smallStyles = window.getComputedStyle(smallButton);

    rerender(
      <ThemeProvider>
        <Pill label="Large" size="lg" />
      </ThemeProvider>
    );
    const largeButton = screen.getByRole('button');
    const largeStyles = window.getComputedStyle(largeButton);

    // Different sizes should have different font sizes or padding
    expect(smallStyles.fontSize).not.toBe(largeStyles.fontSize);
  });

  it('handles selected state', () => {
    const { rerender } = renderWithTheme(<Pill label="Genre" />);
    const button = screen.getByRole('button');
    const unselectedStyles = window.getComputedStyle(button);

    rerender(
      <ThemeProvider>
        <Pill label="Genre" selected />
      </ThemeProvider>
    );
    const selectedStyles = window.getComputedStyle(button);

    // Selected state should change appearance
    expect(unselectedStyles.backgroundColor).not.toBe(selectedStyles.backgroundColor);
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Pill label="Clickable" onClick={handleClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders dismissible pill with close button', () => {
    const handleDismiss = jest.fn();
    renderWithTheme(
      <Pill 
        label="Filter" 
        variant="filter" 
        dismissible 
        onDismiss={handleDismiss} 
      />
    );
    
    // Should render both the main pill and the dismiss button
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByText('×')).toBeInTheDocument();
  });

  it('calls onDismiss when dismiss button is clicked', () => {
    const handleDismiss = jest.fn();
    renderWithTheme(
      <Pill 
        label="Filter" 
        variant="filter" 
        dismissible 
        onDismiss={handleDismiss} 
      />
    );
    
    const dismissButton = screen.getByText('×');
    fireEvent.click(dismissButton);
    
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state', () => {
    renderWithTheme(<Pill label="Disabled" disabled />);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
  });

  it('prevents main click when dismissible pill is clicked on dismiss area', () => {
    const handleClick = jest.fn();
    const handleDismiss = jest.fn();
    
    renderWithTheme(
      <Pill 
        label="Filter" 
        variant="filter" 
        dismissible 
        onClick={handleClick}
        onDismiss={handleDismiss} 
      />
    );
    
    // Click the dismiss button should only trigger dismiss, not main click
    const dismissButton = screen.getByText('×');
    fireEvent.click(dismissButton);
    
    expect(handleDismiss).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
  });
}); 