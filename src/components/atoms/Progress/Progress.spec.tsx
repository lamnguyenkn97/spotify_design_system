import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import { Progress } from './Progress';

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

describe('Progress', () => {
  it('should render linear progress with correct value', () => {
    renderWithTheme(
      <Progress value={75} variant="linear" />
    );

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuenow', '75');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });

  it('should render circular progress variant correctly', () => {
    renderWithTheme(
      <Progress value={50} variant="circular" />
    );

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
  });

  it('should handle indeterminate state correctly', () => {
    renderWithTheme(
      <Progress indeterminate variant="linear" />
    );

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
    expect(progressbar).not.toHaveAttribute('aria-valuenow');
  });

  it('should display progress label when showValue is true', () => {
    renderWithTheme(
      <Progress value={65} showValue />
    );

    expect(screen.getByText('65%')).toBeInTheDocument();
  });

  it('should render buffer value for media progress', () => {
    renderWithTheme(
      <Progress value={30} buffer={70} variant="linear" />
    );

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '30');
    // Buffer is rendered as a separate element in linear variant
  });

  it('should apply different sizes and colors correctly', () => {
    const { rerender } = renderWithTheme(
      <Progress value={50} size="sm" color="success" />
    );

    let progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();

    // Test different size and color
    rerender(
      <TestWrapper>
        <Progress value={50} size="lg" color="error" />
      </TestWrapper>
    );

    progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
  });

  it('should handle custom label and max value', () => {
    renderWithTheme(
      <Progress value={150} max={200} label="Custom Label" showValue />
    );

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '150');
    expect(progressbar).toHaveAttribute('aria-valuemax', '200');
    expect(screen.getByText('Custom Label')).toBeInTheDocument();
  });

  it('should handle edge values and percentage calculation', () => {
    const { rerender } = renderWithTheme(
      <Progress value={0} showValue />
    );

    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');

    // Test maximum value
    rerender(
      <TestWrapper>
        <Progress value={100} showValue />
      </TestWrapper>
    );

    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');

    // Test value exceeding max (should be clamped)
    rerender(
      <TestWrapper>
        <Progress value={150} max={100} showValue />
      </TestWrapper>
    );

    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('should have correct accessibility attributes and custom aria-label', () => {
    renderWithTheme(
      <Progress value={45} aria-label="Loading progress" />
    );

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('role', 'progressbar');
    expect(progressbar).toHaveAttribute('aria-label', 'Loading progress');
    expect(progressbar).toHaveAttribute('aria-valuenow', '45');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });
}); 