import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stack } from './Stack';
import { ThemeProvider } from '../../../styles';

// Test wrapper with theme
const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Stack', () => {
  it('renders children correctly with default props', () => {
    renderWithTheme(
      <Stack>
        <div>Track 1</div>
        <div>Track 2</div>
        <div>Track 3</div>
      </Stack>
    );

    expect(screen.getByText('Track 1')).toBeInTheDocument();
    expect(screen.getByText('Track 2')).toBeInTheDocument();
    expect(screen.getByText('Track 3')).toBeInTheDocument();
  });

  it('applies correct flex direction', () => {
    const { container } = renderWithTheme(
      <Stack direction="row" data-testid="stack">
        <div>Album</div>
        <div>Artist</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveStyle('flex-direction: row');
  });

  it('applies correct spacing using design tokens', () => {
    const { container } = renderWithTheme(
      <Stack spacing="lg" data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveStyle('gap: 24px'); // lg spacing token
  });

  it('applies correct alignment properties', () => {
    const { container } = renderWithTheme(
      <Stack align="center" justify="space-between" data-testid="stack">
        <div>Start</div>
        <div>End</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveStyle('align-items: center');
    expect(stackElement).toHaveStyle('justify-content: space-between');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    renderWithTheme(
      <Stack ref={ref}>
        <div>Content</div>
      </Stack>
    );

    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveStyle('display: flex');
  });

  it('applies custom className and additional props', () => {
    const { container } = renderWithTheme(
      <Stack
        className="custom-stack"
        data-testid="stack"
        aria-label="Track list"
      >
        <div>Track</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveClass('custom-stack');
    expect(stackElement).toHaveAttribute('data-testid', 'stack');
    expect(stackElement).toHaveAttribute('aria-label', 'Track list');
  });
});
