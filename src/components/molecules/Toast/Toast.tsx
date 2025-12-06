import React, { useEffect, useState, forwardRef } from 'react';
import { Icon } from '../../atoms/Icon';
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastProps, ToastType, ToastPosition } from './Toast.types';
import {
  ToastWrapper,
  ToastIconWrapper,
  ToastMessage,
  ToastCloseButton,
} from './Toast.style';

// Default icons for each toast type
const getDefaultIcon = (type: ToastType) => {
  switch (type) {
    case ToastType.SUCCESS:
      return <Icon icon={faCheckCircle} size="md" />;
    case ToastType.ERROR:
      return <Icon icon={faExclamationCircle} size="md" />;
    case ToastType.WARNING:
      return <Icon icon={faExclamationTriangle} size="md" />;
    case ToastType.INFO:
      return <Icon icon={faInfoCircle} size="md" />;
    default:
      return <Icon icon={faInfoCircle} size="md" />;
  }
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      id,
      message,
      type = ToastType.INFO,
      duration = 3000,
      position = ToastPosition.BOTTOM_CENTER,
      showCloseButton = true,
      icon,
      onClose,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isExiting, setIsExiting] = useState(false);

    // Normalize type to enum
    const toastType = typeof type === 'string' 
      ? (ToastType[type.toUpperCase() as keyof typeof ToastType] || ToastType.INFO)
      : type;

    // Normalize position to enum
    const toastPosition = typeof position === 'string'
      ? (ToastPosition[position.toUpperCase().replace(/-/g, '_') as keyof typeof ToastPosition] || ToastPosition.BOTTOM_CENTER)
      : position;

    // Auto-dismiss after duration
    useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [duration]);

    const handleClose = () => {
      setIsExiting(true);
      // Wait for exit animation to complete before calling onClose
      setTimeout(() => {
        onClose?.(id);
      }, 300); // Match animation duration
    };

    return (
      <ToastWrapper
        ref={ref}
        $type={toastType}
        $position={toastPosition}
        $isExiting={isExiting}
        className={className}
        style={style}
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        {...props}
      >
        {/* Icon */}
        <ToastIconWrapper>
          {icon || getDefaultIcon(toastType)}
        </ToastIconWrapper>

        {/* Message */}
        <ToastMessage>{message}</ToastMessage>

        {/* Close Button */}
        {showCloseButton && (
          <ToastCloseButton
            onClick={handleClose}
            $type={toastType}
            aria-label="Close notification"
            type="button"
          >
            <Icon icon={faXmark} size="sm" />
          </ToastCloseButton>
        )}
      </ToastWrapper>
    );
  }
);

Toast.displayName = 'Toast';

