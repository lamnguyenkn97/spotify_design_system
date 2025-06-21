import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { TextLink } from './TextLink';
import { theme } from '../../../../styles/theme';

// Test wrapper with theme provider
const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('TextLink', () => {
  it('renders with default props as span when no href', () => {
    renderWithTheme(<TextLink>Default link text</TextLink>);
    
    const element = screen.getByText('Default link text');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('SPAN');
    expect(element).not.toHaveAttribute('href');
  });

  it('renders as anchor element when href is provided', () => {
    renderWithTheme(
      <TextLink href="/internal-link">Internal link</TextLink>
    );
    
    const element = screen.getByText('Internal link');
    expect(element.tagName).toBe('A');
    expect(element).toHaveAttribute('href', '/internal-link');
    expect(element).not.toHaveAttribute('target');
    expect(element).not.toHaveAttribute('rel');
  });

  it('handles external links with proper security attributes', () => {
    renderWithTheme(
      <TextLink href="https://external-site.com">External link</TextLink>
    );
    
    const element = screen.getByText('External link');
    expect(element.tagName).toBe('A');
    expect(element).toHaveAttribute('href', 'https://external-site.com');
    expect(element).toHaveAttribute('target', '_blank');
    expect(element).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies different variant styles correctly', () => {
    const { rerender } = renderWithTheme(
      <TextLink variant="default">Default variant</TextLink>
    );
    let element = screen.getByText('Default variant');
    expect(element).toHaveStyle('color: #FFFFFF'); // Primary white

    rerender(
      <ThemeProvider theme={theme}>
        <TextLink variant="muted">Muted variant</TextLink>
      </ThemeProvider>
    );
    element = screen.getByText('Muted variant');
    expect(element).toHaveStyle('color: rgba(255, 255, 255, 0.3)'); // Grey4

    rerender(
      <ThemeProvider theme={theme}>
        <TextLink variant="danger">Danger variant</TextLink>
      </ThemeProvider>
    );
    element = screen.getByText('Danger variant');
    expect(element).toHaveStyle('color: #EB5640'); // Red wine
  });

  it('applies different font weights correctly', () => {
    const { rerender } = renderWithTheme(
      <TextLink weight="light">Light weight</TextLink>
    );
    let element = screen.getByText('Light weight');
    expect(element).toHaveStyle('font-weight: 300');

    rerender(
      <ThemeProvider theme={theme}>
        <TextLink weight="regular">Regular weight</TextLink>
      </ThemeProvider>
    );
    element = screen.getByText('Regular weight');
    expect(element).toHaveStyle('font-weight: 400');

    rerender(
      <ThemeProvider theme={theme}>
        <TextLink weight="medium">Medium weight</TextLink>
      </ThemeProvider>
    );
    element = screen.getByText('Medium weight');
    expect(element).toHaveStyle('font-weight: 500');

    rerender(
      <ThemeProvider theme={theme}>
        <TextLink weight="bold">Bold weight</TextLink>
      </ThemeProvider>
    );
    element = screen.getByText('Bold weight');
    expect(element).toHaveStyle('font-weight: 700');
  });

  it('handles underline prop correctly', () => {
    const { rerender } = renderWithTheme(
      <TextLink underline={false}>No underline</TextLink>
    );
    let element = screen.getByText('No underline');
    expect(element).toHaveStyle('text-decoration: none');

    rerender(
      <ThemeProvider theme={theme}>
        <TextLink underline={true}>With underline</TextLink>
      </ThemeProvider>
    );
    element = screen.getByText('With underline');
    expect(element).toHaveStyle('text-decoration: underline');
  });

  it('supports custom component override', () => {
    renderWithTheme(
      <TextLink component="button" href="/test">
        Button link
      </TextLink>
    );
    
    const element = screen.getByText('Button link');
    expect(element.tagName).toBe('BUTTON');
    expect(element).toHaveAttribute('href', '/test');
  });

  it('forwards custom className and href props', () => {
    renderWithTheme(
      <TextLink 
        className="custom-link-class" 
        href="/test"
      >
        Link with props
      </TextLink>
    );
    
    const element = screen.getByText('Link with props');
    expect(element).toHaveClass('custom-link-class');
    expect(element).toHaveAttribute('href', '/test');
  });
}); 