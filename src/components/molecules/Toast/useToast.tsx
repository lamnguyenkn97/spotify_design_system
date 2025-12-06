import { useContext } from 'react';
import { ToastContext } from './ToastProvider';
import { ToastContextType } from './Toast.types';

/**
 * Custom hook to access toast functionality
 * 
 * @example
 * ```tsx
 * const { toast } = useToast();
 * 
 * toast.success("Liked!");
 * toast.error("Failed to load playlist");
 * toast.warning("Feature not implemented");
 * toast.info("Track added to queue");
 * ```
 */
export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

