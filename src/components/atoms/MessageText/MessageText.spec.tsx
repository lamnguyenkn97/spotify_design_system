import React from 'react';
import { render, screen } from '@testing-library/react';
import { MessageText } from './MessageText';

describe('MessageText', () => {
  it('renders helper message by default with icon', () => {
    render(<MessageText>Helper message</MessageText>);
    expect(screen.getByText('Helper message')).toBeInTheDocument();
    // Check that an icon is present (FontAwesome icons render as SVG)
    const iconElement = document.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders error message with correct type and icon', () => {
    render(<MessageText type="error">Error message</MessageText>);
    expect(screen.getByText('Error message')).toBeInTheDocument();
    // Error should have an exclamation circle icon
    const iconElement = document.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders success message with correct type and icon', () => {
    render(<MessageText type="success">Success message</MessageText>);
    expect(screen.getByText('Success message')).toBeInTheDocument();
    // Success should have a check circle icon
    const iconElement = document.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders warning message with correct type and icon', () => {
    render(<MessageText type="warning">Warning message</MessageText>);
    expect(screen.getByText('Warning message')).toBeInTheDocument();
    // Warning should have an exclamation triangle icon
    const iconElement = document.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  it('hides icon when showIcon is false', () => {
    render(<MessageText showIcon={false}>Message without icon</MessageText>);
    expect(screen.getByText('Message without icon')).toBeInTheDocument();
    // No icon should be present
    const iconElement = document.querySelector('svg');
    expect(iconElement).not.toBeInTheDocument();
  });

  it('shows icon by default when showIcon is not specified', () => {
    render(<MessageText>Message with default icon</MessageText>);
    expect(screen.getByText('Message with default icon')).toBeInTheDocument();
    // Icon should be present by default
    const iconElement = document.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
  });

  it('accepts custom className', () => {
    render(<MessageText className="custom-class">Test message</MessageText>);
    // Find the Stack container which should have the custom class
    const textElement = screen.getByText('Test message');
    const stackContainer = textElement.closest('div'); // This is the Stack container
    expect(stackContainer).toHaveClass('custom-class');
  });

  it('uses Typography component with correct props', () => {
    render(<MessageText type="error">Typography integration test</MessageText>);
    const textElement = screen.getByText('Typography integration test');
    
    // Verify the text is rendered (Typography component working)
    expect(textElement).toBeInTheDocument();
    
    // Verify it's rendered as a span (component="span" prop)
    expect(textElement.tagName).toBe('SPAN');
    
    // Verify Typography styling is applied (small font size from Typography sm size)
    expect(textElement).toHaveStyle('font-size: 0.875rem'); // sm size from Typography
  });

  it('applies custom marginTop when provided', () => {
    render(<MessageText marginTop="20px">Custom margin message</MessageText>);
    // Find the Stack container which should have the margin
    const textElement = screen.getByText('Custom margin message');
    const stackContainer = textElement.closest('div'); // This is the Stack container
    expect(stackContainer).toHaveStyle('margin-top: 20px');
  });
}); 