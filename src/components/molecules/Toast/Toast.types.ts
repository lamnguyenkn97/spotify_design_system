export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

export interface ToastProps {
  /** Unique identifier for the toast */
  id?: string;
  /** Toast message content */
  message: string;
  /** Toast type/variant */
  type?: ToastType | 'success' | 'error' | 'warning' | 'info';
  /** Duration in milliseconds (0 = no auto-dismiss) */
  duration?: number;
  /** Show close button */
  showCloseButton?: boolean;
  /** Custom icon component */
  icon?: React.ReactNode;
  /** Callback when toast is closed */
  onClose?: (id?: string) => void;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  showCloseButton: boolean;
  icon?: React.ReactNode;
  onClose?: (id?: string) => void;
}

export interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
  toast: {
    success: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => string;
    error: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => string;
    warning: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => string;
    info: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => string;
  };
}

