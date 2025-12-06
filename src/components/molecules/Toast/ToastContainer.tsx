import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Toast as ToastComponent } from './Toast';
import { Toast, ToastPosition } from './Toast.types';
import { ToastContainerWrapper } from './Toast.style';

interface ToastContainerProps {
  toasts: Toast[];
  onClose: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onClose }) => {
  // Group toasts by position
  const toastsByPosition = useMemo(() => {
    const grouped: Record<ToastPosition, Toast[]> = {
      [ToastPosition.TOP_LEFT]: [],
      [ToastPosition.TOP_CENTER]: [],
      [ToastPosition.TOP_RIGHT]: [],
      [ToastPosition.BOTTOM_LEFT]: [],
      [ToastPosition.BOTTOM_CENTER]: [],
      [ToastPosition.BOTTOM_RIGHT]: [],
    };

    toasts.forEach((toast) => {
      grouped[toast.position].push(toast);
    });

    return grouped;
  }, [toasts]);

  // Render toasts for each position
  const renderToastGroup = (position: ToastPosition, toasts: Toast[]) => {
    if (toasts.length === 0) return null;

    return (
      <ToastContainerWrapper key={position} $position={position}>
        {toasts.map((toast) => (
          <ToastComponent
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            position={toast.position}
            showCloseButton={toast.showCloseButton}
            icon={toast.icon}
            onClose={(id) => id && onClose(id)}
          />
        ))}
      </ToastContainerWrapper>
    );
  };

  // Render all toast groups using portals
  return (
    <>
      {Object.entries(toastsByPosition).map(([position, toasts]) =>
        createPortal(
          renderToastGroup(position as ToastPosition, toasts),
          document.body
        )
      )}
    </>
  );
};

