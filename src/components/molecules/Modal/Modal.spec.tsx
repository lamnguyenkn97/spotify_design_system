import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Modal } from './Modal';
import { ModalSize } from './Modal.types';

describe('Modal', () => {
  const defaultProps = {
    open: true,
    title: 'Test Modal',
    description: 'Test description',
    onClose: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders when open is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    render(<Modal {...defaultProps} open={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  describe('Rendering', () => {
    it('renders modal correctly', () => {
      render(<Modal {...defaultProps} />);
      const modal = screen.getByRole('dialog');
      expect(modal).toBeInTheDocument();
      expect(modal).toHaveAttribute('aria-modal', 'true');
    });

    it('shows close button when showCloseButton is true', () => {
      render(<Modal {...defaultProps} showCloseButton={true} />);
      expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
    });

    it('hides close button when showCloseButton is false', () => {
      render(<Modal {...defaultProps} showCloseButton={false} />);
      expect(screen.queryByLabelText('Close modal')).not.toBeInTheDocument();
    });

    it('renders different sizes correctly', () => {
      const { rerender } = render(<Modal {...defaultProps} size={ModalSize.Small} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      rerender(<Modal {...defaultProps} size={ModalSize.Medium} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      rerender(<Modal {...defaultProps} size={ModalSize.Large} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onClose when close button is clicked', () => {
      render(<Modal {...defaultProps} />);
      fireEvent.click(screen.getByLabelText('Close modal'));
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when bottom close button is clicked', () => {
      render(<Modal {...defaultProps} />);
      const closeButtons = screen.getAllByText('Close');
      fireEvent.click(closeButtons[closeButtons.length - 1]); // Bottom close button
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when ESC key is pressed', () => {
      render(<Modal {...defaultProps} closeOnEscape={true} />);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when ESC key is pressed and closeOnEscape is false', () => {
      render(<Modal {...defaultProps} closeOnEscape={false} />);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(defaultProps.onClose).not.toHaveBeenCalled();
    });

    it('calls onClose when backdrop is clicked', () => {
      render(<Modal {...defaultProps} closeOnBackdropClick={true} />);
      const backdrop = screen.getByTestId('modal-backdrop');
      fireEvent.click(backdrop);
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when backdrop is clicked and closeOnBackdropClick is false', () => {
      render(<Modal {...defaultProps} closeOnBackdropClick={false} />);
      const backdrop = screen.getByTestId('modal-backdrop');
      fireEvent.click(backdrop);
      expect(defaultProps.onClose).not.toHaveBeenCalled();
    });
  });

  describe('Actions', () => {
    it('renders action buttons', () => {
      const actions = [
        { label: 'Cancel', onClick: jest.fn(), variant: 'secondary' as const },
        { label: 'Confirm', onClick: jest.fn(), variant: 'primary' as const },
      ];

      render(<Modal {...defaultProps} actions={actions} />);
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Confirm')).toBeInTheDocument();
    });

    it('calls action onClick when clicked', () => {
      const mockAction = jest.fn();
      const actions = [{ label: 'Test Action', onClick: mockAction, variant: 'primary' as const }];

      render(<Modal {...defaultProps} actions={actions} />);
      fireEvent.click(screen.getByText('Test Action'));
      expect(mockAction).toHaveBeenCalledTimes(1);
    });

    it('disables action button when disabled is true', () => {
      const actions = [
        { label: 'Disabled', onClick: jest.fn(), variant: 'primary' as const, disabled: true },
      ];

      render(<Modal {...defaultProps} actions={actions} />);
      expect(screen.getByText('Disabled')).toBeDisabled();
    });
  });

  describe('Content', () => {
    it('renders custom children', () => {
      render(
        <Modal {...defaultProps}>
          <div data-testid="custom-content">Custom content</div>
        </Modal>
      );
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('renders media content', () => {
      const media = <img src="/test.jpg" alt="Test" />;
      render(<Modal {...defaultProps} media={media} />);
      expect(screen.getByAltText('Test')).toBeInTheDocument();
    });

    it('renders footer content', () => {
      const footer = <div>Footer content</div>;
      render(<Modal {...defaultProps} footer={footer} />);
      expect(screen.getByText('Footer content')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      render(<Modal {...defaultProps} />);
      const modal = screen.getByRole('dialog');
      expect(modal).toHaveAttribute('aria-modal', 'true');
      expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');
      expect(modal).toHaveAttribute('aria-describedby', 'modal-description');
    });

    it('focuses first focusable element on open', async () => {
      const actions = [{ label: 'Test', onClick: jest.fn(), variant: 'primary' as const }];
      render(<Modal {...defaultProps} actions={actions} />);

      await waitFor(() => {
        // The close button should receive focus first (it's the first focusable element)
        expect(screen.getByLabelText('Close modal')).toHaveFocus();
      });
    });

    it('preserves focus on input fields during re-render', async () => {
      const TestComponent = () => {
        const [value, setValue] = React.useState('');
        return (
          <Modal {...defaultProps}>
            <input
              data-testid="test-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type here"
            />
          </Modal>
        );
      };

      render(<TestComponent />);

      const input = screen.getByTestId('test-input');
      
      // Focus the input
      input.focus();
      expect(input).toHaveFocus();

      // Type into the input (causes parent re-render)
      fireEvent.change(input, { target: { value: 'a' } });
      
      // Focus should remain on the input after state update
      await waitFor(() => {
        expect(input).toHaveFocus();
      });

      // Type more characters
      fireEvent.change(input, { target: { value: 'abc' } });
      
      // Focus should still be on the input
      await waitFor(() => {
        expect(input).toHaveFocus();
      });
    });

    it('does not re-focus first element on every re-render', async () => {
      const TestComponent = () => {
        const [count, setCount] = React.useState(0);
        return (
          <Modal {...defaultProps}>
            <button data-testid="counter-btn" onClick={() => setCount(count + 1)}>
              Count: {count}
            </button>
            <input data-testid="test-input" placeholder="Focus test" />
          </Modal>
        );
      };

      render(<TestComponent />);

      const counterBtn = screen.getByTestId('counter-btn');
      const input = screen.getByTestId('test-input');
      
      // Focus the input manually
      input.focus();
      expect(input).toHaveFocus();

      // Click counter button (causes re-render)
      fireEvent.click(counterBtn);
      
      // Input should still have focus (not stolen by close button)
      await waitFor(() => {
        expect(input).toHaveFocus();
      });
    });
  });

  describe('Custom props', () => {
    it('applies custom className', () => {
      render(<Modal {...defaultProps} className="custom-class" />);
      expect(screen.getByRole('dialog')).toHaveClass('custom-class');
    });

    it('applies custom data-testid', () => {
      render(<Modal {...defaultProps} data-testid="custom-modal" />);
      expect(screen.getByTestId('custom-modal')).toBeInTheDocument();
    });
  });
});
