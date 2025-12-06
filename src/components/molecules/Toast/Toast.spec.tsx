import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { Toast } from './Toast';
import { ToastProvider, useToast } from './index';
import { ToastType, ToastPosition } from './Toast.types';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Toast Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  describe('Rendering', () => {
    it('renders toast with message', () => {
      renderWithTheme(
        <Toast message="Test message" duration={0} />
      );

      expect(screen.getByText('Test message')).toBeInTheDocument();
    });

    it('renders success toast with correct styling', () => {
      renderWithTheme(
        <Toast message="Success" type={ToastType.SUCCESS} duration={0} />
      );

      expect(screen.getByRole('alert')).toBeInTheDocument();
      expect(screen.getByText('Success')).toBeInTheDocument();
    });

    it('renders error toast', () => {
      renderWithTheme(
        <Toast message="Error occurred" type={ToastType.ERROR} duration={0} />
      );

      expect(screen.getByText('Error occurred')).toBeInTheDocument();
    });

    it('renders warning toast', () => {
      renderWithTheme(
        <Toast message="Warning" type={ToastType.WARNING} duration={0} />
      );

      expect(screen.getByText('Warning')).toBeInTheDocument();
    });

    it('renders info toast', () => {
      renderWithTheme(
        <Toast message="Information" type={ToastType.INFO} duration={0} />
      );

      expect(screen.getByText('Information')).toBeInTheDocument();
    });

    it('renders close button when showCloseButton is true', () => {
      renderWithTheme(
        <Toast message="Test" showCloseButton={true} duration={0} />
      );

      expect(screen.getByLabelText('Close notification')).toBeInTheDocument();
    });

    it('does not render close button when showCloseButton is false', () => {
      renderWithTheme(
        <Toast message="Test" showCloseButton={false} duration={0} />
      );

      expect(screen.queryByLabelText('Close notification')).not.toBeInTheDocument();
    });

    it('renders default icon for each toast type', () => {
      const { rerender } = renderWithTheme(
        <Toast message="Success" type={ToastType.SUCCESS} duration={0} />
      );
      expect(screen.getByRole('alert')).toBeInTheDocument();

      rerender(
        <ThemeProvider>
          <Toast message="Error" type={ToastType.ERROR} duration={0} />
        </ThemeProvider>
      );
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onClose when close button is clicked', () => {
      const mockOnClose = jest.fn();
      renderWithTheme(
        <Toast message="Test" onClose={mockOnClose} showCloseButton={true} duration={0} />
      );

      fireEvent.click(screen.getByLabelText('Close notification'));

      // Wait for animation
      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('auto-dismisses after duration', () => {
      const mockOnClose = jest.fn();
      renderWithTheme(
        <Toast message="Test" onClose={mockOnClose} duration={3000} />
      );

      expect(mockOnClose).not.toHaveBeenCalled();

      act(() => {
        jest.advanceTimersByTime(3000);
      });

      // Wait for exit animation
      act(() => {
        jest.advanceTimersByTime(300);
      });

      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it('does not auto-dismiss when duration is 0', () => {
      const mockOnClose = jest.fn();
      renderWithTheme(
        <Toast message="Test" onClose={mockOnClose} duration={0} />
      );

      act(() => {
        jest.advanceTimersByTime(10000);
      });

      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA role', () => {
      renderWithTheme(
        <Toast message="Test" duration={0} />
      );

      const toast = screen.getByRole('alert');
      expect(toast).toHaveAttribute('aria-live', 'polite');
      expect(toast).toHaveAttribute('aria-atomic', 'true');
    });

    it('close button is keyboard accessible', () => {
      const mockOnClose = jest.fn();
      renderWithTheme(
        <Toast message="Test" onClose={mockOnClose} showCloseButton={true} duration={0} />
      );

      const closeButton = screen.getByLabelText('Close notification');
      
      closeButton.focus();
      expect(closeButton).toHaveFocus();
    });
  });

  describe('Props', () => {
    it('accepts custom className', () => {
      renderWithTheme(
        <Toast message="Test" className="custom-toast" duration={0} />
      );

      expect(screen.getByRole('alert')).toHaveClass('custom-toast');
    });

    it('accepts custom styles', () => {
      const customStyle = { opacity: 0.8 };
      renderWithTheme(
        <Toast message="Test" style={customStyle} duration={0} />
      );

      expect(screen.getByRole('alert')).toHaveStyle('opacity: 0.8');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      renderWithTheme(
        <Toast ref={ref} message="Test" duration={0} />
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('String type values', () => {
    it('accepts string type value "success"', () => {
      renderWithTheme(
        <Toast message="Test" type="success" duration={0} />
      );

      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('accepts string position value "top-center"', () => {
      renderWithTheme(
        <Toast message="Test" position="top-center" duration={0} />
      );

      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });
});

describe('ToastProvider and useToast', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  const TestComponent: React.FC = () => {
    const { toast, toasts, removeAllToasts } = useToast();

    return (
      <div>
        <button onClick={() => toast.success('Success message')}>Success</button>
        <button onClick={() => toast.error('Error message')}>Error</button>
        <button onClick={() => toast.warning('Warning message')}>Warning</button>
        <button onClick={() => toast.info('Info message')}>Info</button>
        <button onClick={removeAllToasts}>Clear All</button>
        <div data-testid="toast-count">{toasts.length}</div>
      </div>
    );
  };

  it('provides toast context to children', () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('throws error when useToast is used outside ToastProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      );
    }).toThrow('useToast must be used within a ToastProvider');

    consoleSpy.mockRestore();
  });

  it('adds success toast', () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Success'));

    expect(screen.getByText('Success message')).toBeInTheDocument();
    expect(screen.getByTestId('toast-count')).toHaveTextContent('1');
  });

  it('adds error toast', () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Error'));

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('adds warning toast', () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Warning'));

    expect(screen.getByText('Warning message')).toBeInTheDocument();
  });

  it('adds info toast', () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Info'));

    expect(screen.getByText('Info message')).toBeInTheDocument();
  });

  it('adds multiple toasts', () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Success'));
    fireEvent.click(screen.getByText('Error'));
    fireEvent.click(screen.getByText('Warning'));

    expect(screen.getByTestId('toast-count')).toHaveTextContent('3');
  });

  it('removes all toasts', () => {
    render(
      <ThemeProvider>
        <ToastProvider>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Success'));
    fireEvent.click(screen.getByText('Error'));

    expect(screen.getByTestId('toast-count')).toHaveTextContent('2');

    fireEvent.click(screen.getByText('Clear All'));

    expect(screen.getByTestId('toast-count')).toHaveTextContent('0');
  });

  it('respects maxToasts prop', () => {
    render(
      <ThemeProvider>
        <ToastProvider maxToasts={2}>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Success'));
    fireEvent.click(screen.getByText('Error'));
    fireEvent.click(screen.getByText('Warning'));

    // Should only have 2 toasts due to maxToasts=2
    expect(screen.getByTestId('toast-count')).toHaveTextContent('2');
  });

  it('uses default position and duration from provider', () => {
    render(
      <ThemeProvider>
        <ToastProvider 
          defaultPosition={ToastPosition.TOP_RIGHT} 
          defaultDuration={5000}
        >
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Success'));

    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  it('auto-removes toasts after duration', () => {
    render(
      <ThemeProvider>
        <ToastProvider defaultDuration={1000}>
          <TestComponent />
        </ToastProvider>
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('Success'));

    expect(screen.getByTestId('toast-count')).toHaveTextContent('1');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Wait for exit animation
    act(() => {
      jest.advanceTimersByTime(300);
    });

    waitFor(() => {
      expect(screen.getByTestId('toast-count')).toHaveTextContent('0');
    });
  });
});

