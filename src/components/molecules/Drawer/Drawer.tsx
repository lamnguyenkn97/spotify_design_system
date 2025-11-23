import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms/Button';
import { ButtonVariant, ButtonSize } from '../../atoms/Button/Button.types';
import {
  DrawerBackdrop,
  DrawerContainer,
  DrawerHeader,
  DrawerTitle,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerActions,
} from './Drawer.style';
import { DrawerProps } from './Drawer.types';

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  position = 'right',
  width,
  title,
  children,
  actions,
  showBackdrop = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className,
  'data-testid': dataTestId = 'drawer',
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Handle ESC key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape' && onClose) {
        onClose();
      }
    },
    [closeOnEscape, onClose]
  );

  // Handle backdrop click
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdropClick && onClose && event.target === event.currentTarget) {
        onClose();
      }
    },
    [closeOnBackdropClick, onClose]
  );

  // Focus management and ESC key handler
  useEffect(() => {
    if (open) {
      // Store currently focused element
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Focus the drawer
      if (drawerRef.current) {
        const focusableElement = drawerRef.current.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusableElement?.focus();
      }

      // Add ESC listener
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      // Restore focus
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const drawerContent = (
    <DrawerBackdrop
      $showBackdrop={showBackdrop}
      onClick={handleBackdropClick}
      data-testid={`${dataTestId}-backdrop`}
    >
      <DrawerContainer
        ref={drawerRef}
        $position={position}
        $width={width}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${dataTestId}-title` : undefined}
        data-testid={dataTestId}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with title and close button */}
        {(title || showCloseButton) && (
          <DrawerHeader data-testid={`${dataTestId}-header`}>
            {title && (
              <DrawerTitle id={`${dataTestId}-title`} data-testid={`${dataTestId}-title`}>
                {title}
              </DrawerTitle>
            )}
            {showCloseButton && onClose && (
              <DrawerCloseButton
                onClick={onClose}
                aria-label="Close drawer"
                data-testid={`${dataTestId}-close-button`}
              >
                <FontAwesomeIcon icon={faXmark} />
              </DrawerCloseButton>
            )}
          </DrawerHeader>
        )}

        {/* Content */}
        <DrawerContent data-testid={`${dataTestId}-content`}>{children}</DrawerContent>

        {/* Actions */}
        {actions && actions.length > 0 && (
          <DrawerFooter data-testid={`${dataTestId}-footer`}>
            <DrawerActions>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  onClick={action.onClick}
                  variant={
                    action.variant === 'primary'
                      ? ButtonVariant.Primary
                      : action.variant === 'secondary'
                      ? ButtonVariant.Secondary
                      : ButtonVariant.Text
                  }
                  size={ButtonSize.Medium}
                  disabled={action.disabled}
                  fullWidth={true}
                  data-testid={`${dataTestId}-action-${index}`}
                >
                  {action.label}
                </Button>
              ))}
            </DrawerActions>
          </DrawerFooter>
        )}
      </DrawerContainer>
    </DrawerBackdrop>
  );

  // Always render in portal
  return createPortal(drawerContent, document.body);
};

Drawer.displayName = 'Drawer';

