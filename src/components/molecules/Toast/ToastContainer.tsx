import React from 'react';
import { createPortal } from 'react-dom';
import { Toast as ToastComponent } from './Toast';
import { Toast } from './Toast.types';
import { ToastContainerWrapper } from './Toast.style';

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onClose }) => {
  if (toasts.length === 0) return null;

  return createPortal(
    <ToastContainerWrapper>
      {toasts.map((toast) => (
        <ToastComponent
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          showCloseButton={toast.showCloseButton}
          icon={toast.icon}
          onClose={(id) => id && onClose(id)}
        />
      ))}
    </ToastContainerWrapper>,
    document.body
  );
};

