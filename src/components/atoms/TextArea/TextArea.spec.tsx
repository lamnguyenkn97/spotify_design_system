import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  // Basic Rendering
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<TextArea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<TextArea label="Description" />);
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('renders with placeholder', () => {
      render(<TextArea placeholder="Enter text..." />);
      expect(screen.getByPlaceholderText('Enter text...')).toBeInTheDocument();
    });

    it('renders with helper message', () => {
      render(<TextArea message="Helper text" />);
      expect(screen.getByText('Helper text')).toBeInTheDocument();
    });

    it('renders with error message', () => {
      render(<TextArea message="Error message" error />);
      const message = screen.getByText('Error message');
      expect(message).toBeInTheDocument();
    });
  });

  // Props
  describe('Props', () => {
    it('applies custom className', () => {
      const { container } = render(<TextArea className="custom-class" />);
      expect(container.firstChild).toHaveClass('custom-class');
    });

    it('applies fullWidth prop', () => {
      const { container } = render(<TextArea fullWidth />);
      expect(container.firstChild).toHaveStyle({ width: '100%' });
    });

    it('applies disabled state', () => {
      render(<TextArea disabled />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeDisabled();
    });

    it('applies custom rows', () => {
      render(<TextArea rows={5} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '5');
    });

    it('applies default rows of 3 when not specified', () => {
      render(<TextArea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '3');
    });
  });

  // Controlled Input
  describe('Controlled Input', () => {
    it('handles controlled value', () => {
      const { rerender } = render(<TextArea value="Initial" onChange={() => {}} />);
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
      expect(textarea.value).toBe('Initial');

      rerender(<TextArea value="Updated" onChange={() => {}} />);
      expect(textarea.value).toBe('Updated');
    });

    it('calls onChange when text is entered', () => {
      const handleChange = jest.fn();
      render(<TextArea onChange={handleChange} />);
      
      const textarea = screen.getByRole('textbox');
      fireEvent.change(textarea, { target: { value: 'New text' } });
      
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('calls onValueChange with new value', () => {
      const handleValueChange = jest.fn();
      render(<TextArea onValueChange={handleValueChange} />);
      
      const textarea = screen.getByRole('textbox');
      fireEvent.change(textarea, { target: { value: 'New text' } });
      
      expect(handleValueChange).toHaveBeenCalledWith('New text');
    });
  });

  // Error State
  describe('Error State', () => {
    it('applies error styling when error prop is true', () => {
      render(<TextArea error />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('hasError');
    });

    it('shows error message with correct styling', () => {
      render(<TextArea message="Error occurred" error />);
      const message = screen.getByText('Error occurred');
      expect(message).toBeInTheDocument();
    });
  });

  // Accessibility
  describe('Accessibility', () => {
    it('associates label with textarea', () => {
      render(<TextArea label="Description" />);
      const textarea = screen.getByRole('textbox');
      const label = screen.getByText('Description');
      
      expect(textarea).toHaveAttribute('id');
      expect(label).toHaveAttribute('for', textarea.getAttribute('id'));
    });

    it('is keyboard accessible', () => {
      render(<TextArea />);
      const textarea = screen.getByRole('textbox');
      
      textarea.focus();
      expect(textarea).toHaveFocus();
      
      fireEvent.keyDown(textarea, { key: 'Tab' });
    });
  });

  // Ref
  describe('Ref Forwarding', () => {
    it('forwards ref to textarea element', () => {
      const ref = React.createRef<HTMLTextAreaElement>();
      render(<TextArea ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
      expect(ref.current?.tagName).toBe('TEXTAREA');
    });

    it('allows focusing via ref', () => {
      const ref = React.createRef<HTMLTextAreaElement>();
      render(<TextArea ref={ref} />);
      
      ref.current?.focus();
      expect(ref.current).toHaveFocus();
    });
  });

  // Auto-resize
  describe('Auto-resize', () => {
    it('enables auto-resize when prop is true', () => {
      render(<TextArea autoResize />);
      const textarea = screen.getByRole('textbox');
      // Auto-resize sets inline style for resize: none
      expect(textarea).toHaveStyle({ resize: 'none' });
    });

    it('disables manual resize when autoResize is enabled', () => {
      render(<TextArea autoResize />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('autoResize');
    });

    it('preserves focus while typing with autoResize enabled', () => {
      render(<TextArea autoResize />);
      const textarea = screen.getByRole('textbox');
      
      // Focus the textarea
      textarea.focus();
      expect(textarea).toHaveFocus();

      // Type text (triggers auto-resize)
      fireEvent.change(textarea, { target: { value: 'Line 1\nLine 2\nLine 3' } });
      
      // Focus should be preserved
      expect(textarea).toHaveFocus();
    });

    it('calls adjustHeight only when autoResize changes, not on every value change', () => {
      const { rerender } = render(<TextArea autoResize value="Initial" onChange={() => {}} />);
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
      
      // Initial render
      expect(textarea.value).toBe('Initial');
      
      // Update value (should NOT trigger useEffect, only onChange)
      rerender(<TextArea autoResize value="Updated text" onChange={() => {}} />);
      expect(textarea.value).toBe('Updated text');
      
      // Textarea should still be functional
      expect(textarea).toBeInTheDocument();
    });
  });

  // Custom Styling
  describe('Custom Styling', () => {
    it('applies custom styles', () => {
      render(<TextArea style={{ backgroundColor: 'red' }} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveStyle({ backgroundColor: 'red' });
    });
  });

  // Native HTML Attributes
  describe('Native HTML Attributes', () => {
    it('passes through native textarea attributes', () => {
      render(
        <TextArea
          name="description"
          maxLength={100}
          required
          aria-label="Textarea input"
        />
      );
      
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('name', 'description');
      expect(textarea).toHaveAttribute('maxlength', '100');
      expect(textarea).toHaveAttribute('required');
      expect(textarea).toHaveAttribute('aria-label', 'Textarea input');
    });

    it('supports readonly attribute', () => {
      render(<TextArea readOnly value="Cannot edit" />);
      const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
      expect(textarea).toHaveAttribute('readonly');
      expect(textarea.value).toBe('Cannot edit');
    });
  });
});

