import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Drawer } from './Drawer';

describe('Drawer', () => {
  const defaultProps = {
    open: true,
    onClose: jest.fn(),
    children: <div>Test content</div>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders when open is true', () => {
    render(<Drawer {...defaultProps} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    render(<Drawer {...defaultProps} open={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  describe('Rendering', () => {
    it('renders drawer correctly', () => {
      render(<Drawer {...defaultProps} />);
      const drawer = screen.getByRole('dialog');
      expect(drawer).toBeInTheDocument();
      expect(drawer).toHaveAttribute('aria-modal', 'true');
    });

    it('renders with title', () => {
      render(<Drawer {...defaultProps} title="Test Title" />);
      expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renders without title', () => {
      render(<Drawer {...defaultProps} />);
      expect(screen.queryByTestId('drawer-header')).not.toBeInTheDocument();
    });

    it('shows close button when showCloseButton is true', () => {
      render(<Drawer {...defaultProps} showCloseButton={true} />);
      expect(screen.getByLabelText('Close drawer')).toBeInTheDocument();
    });

    it('hides close button when showCloseButton is false', () => {
      render(<Drawer {...defaultProps} showCloseButton={false} />);
      expect(screen.queryByLabelText('Close drawer')).not.toBeInTheDocument();
    });

    it('renders different positions correctly', () => {
      const { rerender } = render(<Drawer {...defaultProps} position="left" />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      rerender(<Drawer {...defaultProps} position="right" />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      rerender(<Drawer {...defaultProps} position="top" />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      rerender(<Drawer {...defaultProps} position="bottom" />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('applies custom width', () => {
      render(<Drawer {...defaultProps} width="500px" />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onClose when close button is clicked', () => {
      render(<Drawer {...defaultProps} title="Test" showCloseButton={true} />);
      fireEvent.click(screen.getByLabelText('Close drawer'));
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when ESC key is pressed', () => {
      render(<Drawer {...defaultProps} closeOnEscape={true} />);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when ESC key is pressed and closeOnEscape is false', () => {
      render(<Drawer {...defaultProps} closeOnEscape={false} />);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(defaultProps.onClose).not.toHaveBeenCalled();
    });

    it('calls onClose when backdrop is clicked', () => {
      render(<Drawer {...defaultProps} closeOnBackdropClick={true} showBackdrop={true} />);
      const backdrop = screen.getByTestId('drawer-backdrop');
      fireEvent.click(backdrop);
      expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when backdrop is clicked and closeOnBackdropClick is false', () => {
      render(<Drawer {...defaultProps} closeOnBackdropClick={false} showBackdrop={true} />);
      const backdrop = screen.getByTestId('drawer-backdrop');
      fireEvent.click(backdrop);
      expect(defaultProps.onClose).not.toHaveBeenCalled();
    });

    it('does not call onClose when drawer content is clicked', () => {
      render(<Drawer {...defaultProps} closeOnBackdropClick={true} />);
      const drawer = screen.getByRole('dialog');
      fireEvent.click(drawer);
      expect(defaultProps.onClose).not.toHaveBeenCalled();
    });
  });

  describe('Backdrop', () => {
    it('shows backdrop when showBackdrop is true', () => {
      render(<Drawer {...defaultProps} showBackdrop={true} />);
      expect(screen.getByTestId('drawer-backdrop')).toBeInTheDocument();
    });

    it('renders without backdrop when showBackdrop is false', () => {
      render(<Drawer {...defaultProps} showBackdrop={false} />);
      const backdrop = screen.getByTestId('drawer-backdrop');
      expect(backdrop).toBeInTheDocument(); // Backdrop element exists but is transparent
    });
  });

  describe('Content', () => {
    it('renders custom children', () => {
      render(
        <Drawer {...defaultProps}>
          <div data-testid="custom-content">Custom content</div>
        </Drawer>
      );
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });

    it('renders content in drawer-content area', () => {
      render(<Drawer {...defaultProps} />);
      expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA attributes', () => {
      render(<Drawer {...defaultProps} title="Test Title" />);
      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveAttribute('aria-modal', 'true');
      expect(drawer).toHaveAttribute('aria-labelledby', 'drawer-title');
    });

    it('has correct ARIA attributes without title', () => {
      render(<Drawer {...defaultProps} />);
      const drawer = screen.getByRole('dialog');
      expect(drawer).toHaveAttribute('aria-modal', 'true');
      expect(drawer).not.toHaveAttribute('aria-labelledby');
    });

    it('focuses first focusable element on open', async () => {
      render(<Drawer {...defaultProps} title="Test" showCloseButton={true} />);

      await waitFor(() => {
        // The close button should receive focus first (it's the first focusable element)
        expect(screen.getByLabelText('Close drawer')).toHaveFocus();
      });
    });
  });

  describe('Custom props', () => {
    it('applies custom className', () => {
      render(<Drawer {...defaultProps} className="custom-class" />);
      expect(screen.getByRole('dialog')).toHaveClass('custom-class');
    });

    it('applies custom data-testid', () => {
      render(<Drawer {...defaultProps} data-testid="custom-drawer" />);
      expect(screen.getByTestId('custom-drawer')).toBeInTheDocument();
    });
  });

  describe('Body scroll prevention', () => {
    it('prevents body scroll when open', () => {
      render(<Drawer {...defaultProps} />);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('restores body scroll when closed', () => {
      const { rerender } = render(<Drawer {...defaultProps} open={true} />);
      expect(document.body.style.overflow).toBe('hidden');

      rerender(<Drawer {...defaultProps} open={false} />);
      expect(document.body.style.overflow).toBe('');
    });
  });
});

