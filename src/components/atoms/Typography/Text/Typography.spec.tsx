import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Typography } from './Typography';
import { theme } from '../../../../styles/theme';

// Test wrapper with theme provider
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('Typography', () => {
  it('renders with default props', () => {
    renderWithTheme(<Typography>Default text</Typography>);
    
    const element = screen.getByText('Default text');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P'); // Default component for 'body' variant
  });

  it('renders with different variants and correct semantic elements', () => {
    const { rerender } = renderWithTheme(<Typography variant="title">Title text</Typography>);
    expect(screen.getByText('Title text').tagName).toBe('H1');

    rerender(
      <ThemeProvider theme={theme}>
        <Typography variant="heading">Heading text</Typography>
      </ThemeProvider>
    );
    expect(screen.getByText('Heading text').tagName).toBe('H2');

    rerender(
      <ThemeProvider theme={theme}>
        <Typography variant="body">Body text</Typography>
      </ThemeProvider>
    );
    expect(screen.getByText('Body text').tagName).toBe('P');

    rerender(
      <ThemeProvider theme={theme}>
        <Typography variant="caption">Caption text</Typography>
      </ThemeProvider>
    );
    expect(screen.getByText('Caption text').tagName).toBe('SPAN');
  });

  it('renders with custom component override', () => {
    renderWithTheme(
      <Typography variant="title" component="h3">
        Custom heading
      </Typography>
    );
    
    const element = screen.getByText('Custom heading');
    expect(element.tagName).toBe('H3');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = renderWithTheme(
      <Typography size="sm">Small text</Typography>
    );
    let element = screen.getByText('Small text');
    expect(element).toHaveStyle('font-size: 0.875rem');

    rerender(
      <ThemeProvider theme={theme}>
        <Typography size="xl">Large text</Typography>
      </ThemeProvider>
    );
    element = screen.getByText('Large text');
    expect(element).toHaveStyle('font-size: 2rem');
  });

  it('applies different font weights correctly', () => {
    const { rerender } = renderWithTheme(
      <Typography weight="light">Light text</Typography>
    );
    let element = screen.getByText('Light text');
    expect(element).toHaveStyle('font-weight: 300');

    rerender(
      <ThemeProvider theme={theme}>
        <Typography weight="bold">Bold text</Typography>
      </ThemeProvider>
    );
    element = screen.getByText('Bold text');
    expect(element).toHaveStyle('font-weight: 700');
  });

  it('applies semantic color variants correctly', () => {
    const { rerender } = renderWithTheme(
      <Typography color="success">Success text</Typography>
    );
    let element = screen.getByText('Success text');
    expect(element).toHaveStyle('color: #D5F479'); // Evergreen success color

    rerender(
      <ThemeProvider theme={theme}>
        <Typography color="error">Error text</Typography>
      </ThemeProvider>
    );
    element = screen.getByText('Error text');
    expect(element).toHaveStyle('color: #EB5640'); // Red wine error color
  });

  it('applies variant-specific styling correctly', () => {
    const { rerender } = renderWithTheme(
      <Typography variant="title">Title styling</Typography>
    );
    let element = screen.getByText('Title styling');
    expect(element).toHaveStyle({
      'font-weight': '700',
      'line-height': '1.2',
      'letter-spacing': '-0.02em'
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography variant="caption">Caption styling</Typography>
      </ThemeProvider>
    );
    element = screen.getByText('Caption styling');
    expect(element).toHaveStyle({
      'text-transform': 'uppercase',
      'font-weight': '500',
      'letter-spacing': '0.01em'
    });
  });

  it('forwards custom className and other props', () => {
    renderWithTheme(
      <Typography 
        className="custom-class" 
        data-testid="typography-test"
        title="Custom title"
      >
        Text with props
      </Typography>
    );
    
    const element = screen.getByTestId('typography-test');
    expect(element).toHaveClass('custom-class');
    expect(element).toHaveAttribute('title', 'Custom title');
  });

  it('supports ref forwarding', () => {
    const ref = React.createRef<HTMLElement>();
    
    renderWithTheme(
      <Typography ref={ref}>Text with ref</Typography>
    );
    
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
    expect(ref.current?.textContent).toBe('Text with ref');
  });
}); 