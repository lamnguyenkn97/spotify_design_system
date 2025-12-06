import React, { createContext, useState, useCallback, useMemo } from 'react';
import { ToastContainer } from './ToastContainer';
import { Toast, ToastContextType, ToastType } from './Toast.types';

// Create context
export const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: React.ReactNode;
  /** Default toast duration */
  defaultDuration?: number;
  /** Maximum number of toasts to show at once */
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  defaultDuration = 3000,
  maxToasts = 5,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Add a new toast
  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>) => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      const newToast: Toast = {
        ...toast,
        id,
        type: toast.type || ToastType.INFO,
        duration: toast.duration !== undefined ? toast.duration : defaultDuration,
        showCloseButton: toast.showCloseButton !== undefined ? toast.showCloseButton : true,
      };

      setToasts((prev) => {
        // Limit number of toasts
        const updated = [newToast, ...prev];
        return updated.slice(0, maxToasts);
      });

      return id;
    },
    [defaultDuration, maxToasts]
  );

  // Remove a specific toast
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // Remove all toasts
  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  // Convenience methods for different toast types
  const toast = useMemo(
    () => ({
      success: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
        return addToast({
          message,
          type: ToastType.SUCCESS,
          duration: defaultDuration,
          showCloseButton: true,
          ...options,
        });
      },
      error: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
        return addToast({
          message,
          type: ToastType.ERROR,
          duration: defaultDuration,
          showCloseButton: true,
          ...options,
        });
      },
      warning: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
        return addToast({
          message,
          type: ToastType.WARNING,
          duration: defaultDuration,
          showCloseButton: true,
          ...options,
        });
      },
      info: (message: string, options?: Partial<Omit<Toast, 'id' | 'type' | 'message'>>) => {
        return addToast({
          message,
          type: ToastType.INFO,
          duration: defaultDuration,
          showCloseButton: true,
          ...options,
        });
      },
    }),
    [addToast, defaultDuration]
  );

  const contextValue: ToastContextType = useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
      removeAllToasts,
      toast,
    }),
    [toasts, addToast, removeToast, removeAllToasts, toast]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
};

