import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <TestWrapper>
      {component}
    </TestWrapper>
  );
};

describe('Tooltip', () => {
  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render children without tooltip initially', () => {
    renderWithTheme(
      <Tooltip content="Test tooltip">
        <Button>Test Button</Button>
      </Tooltip>
    );

    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should show tooltip on hover and hide on mouse leave', async () => {
    renderWithTheme(
      <Tooltip content="Hover tooltip" delay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');

    // Show on mouse enter
    fireEvent.mouseEnter(button);
    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
      expect(screen.getByText('Hover tooltip')).toBeInTheDocument();
    });

    // Hide on mouse leave
    fireEvent.mouseLeave(button);
    
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should respect delay before showing tooltip', async () => {
    renderWithTheme(
      <Tooltip content="Delayed tooltip" delay={500}>
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);

    // Should not show immediately
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    // Should show after delay
    act(() => {
      jest.advanceTimersByTime(500);
    });

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });
  });

  it('should show/hide tooltip on click when trigger is click', async () => {
    renderWithTheme(
      <Tooltip content="Click tooltip" trigger="click">
        <Button>Click me</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');

    // Show on first click
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    // Hide on second click
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  it('should show tooltip when visible prop is true for manual trigger', () => {
    renderWithTheme(
      <Tooltip content="Manual tooltip" trigger="manual" visible={true}>
        <Button>Manual control</Button>
      </Tooltip>
    );

    expect(screen.getByRole('tooltip')).toBeInTheDocument();
  });

  it('should apply different positions correctly', async () => {
    const { rerender } = renderWithTheme(
      <Tooltip content="Position test" position="top" delay={0}>
        <Button>Test</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    
    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument();
    });

    fireEvent.mouseLeave(button);

    // Test different position
    rerender(
      <TestWrapper>
        <Tooltip content="Bottom test" position="bottom" delay={0}>
          <Button>Test</Button>
        </Tooltip>
      </TestWrapper>
    );

    fireEvent.mouseEnter(button);
    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(screen.getByText('Bottom test')).toBeInTheDocument();
    });
  });

  it('should call onVisibilityChange callback', async () => {
    const onVisibilityChange = jest.fn();

    renderWithTheme(
      <Tooltip 
        content="Callback test" 
        delay={0}
        onVisibilityChange={onVisibilityChange}
      >
        <Button>Test</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');

    // Show tooltip
    fireEvent.mouseEnter(button);
    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(onVisibilityChange).toHaveBeenCalledWith(true);
    });

    // Hide tooltip
    fireEvent.mouseLeave(button);

    await waitFor(() => {
      expect(onVisibilityChange).toHaveBeenCalledWith(false);
    });

    expect(onVisibilityChange).toHaveBeenCalledTimes(2);
  });

  it('should have correct accessibility attributes', async () => {
    renderWithTheme(
      <Tooltip content="Accessible tooltip" delay={0}>
        <Button>Test</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      const tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('role', 'tooltip');
      expect(tooltip).toHaveAttribute('aria-hidden', 'false');
    });
  });

  it('should handle edge cases gracefully', () => {
    // Empty content
    renderWithTheme(
      <Tooltip content="">
        <Button>Empty content</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);
    act(() => {
      jest.runAllTimers();
    });

    // Should not render tooltip with empty content
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
}); 