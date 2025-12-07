import React, { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms/Button';
import { ButtonVariant, ButtonSize } from '../../atoms/Button/Button.types';
import {
  ModalBackdrop,
  ModalContainer,
  ModalCloseButton,
  ModalContent,
  ModalMedia,
  ModalTextContent,
  ModalTitle,
  ModalDescription,
  ModalActions,
  ModalFooter,
  ModalBottomClose,
} from './Modal.style';
import { ModalProps, ModalSize } from './Modal.types';
import { getImageGradient, extractImageUrl } from './Modal.utils';

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  size = ModalSize.Medium,
  title,
  description,
  children,
  media,
  actions,
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  footer,
  className,
  'data-testid': dataTestId = 'modal',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    'linear-gradient(135deg, rgb(40, 40, 40), rgb(18, 18, 18))' // Spotify default dark gradient
  );

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

  // Extract gradient from media image
  useEffect(() => {
    let isMounted = true;

    const loadGradient = async () => {
      // Extract image URL from media prop
      const imageUrl = extractImageUrl(media);
      
      if (imageUrl) {
        try {
          const gradient = await getImageGradient(imageUrl);
          if (isMounted) {
            setBackgroundGradient(gradient);
          }
        } catch (error) {
          // Silent failure - keep default gradient for resilience
        }
      }
    };

    loadGradient();

    return () => {
      isMounted = false;
    };
  }, [media]);

  // Focus management - only on mount/open change
  useEffect(() => {
    if (!open) return;

    // Store currently focused element (only when modal opens)
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the modal only on initial open
    if (modalRef.current) {
      const focusableElement = modalRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElement?.focus();
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Cleanup when modal closes
    return () => {
      document.body.style.overflow = '';
      // Restore focus when modal closes
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [open]); // Only depend on 'open' state

  // ESC key listener - separate effect to avoid focus issues
  useEffect(() => {
    if (!open) return;

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  const modalContent = (
    <ModalBackdrop onClick={handleBackdropClick} data-testid={`${dataTestId}-backdrop`}>
      <ModalContainer
        ref={modalRef}
        $size={size}
        $gradient={backgroundGradient}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${dataTestId}-title` : undefined}
        aria-describedby={description ? `${dataTestId}-description` : undefined}
        data-testid={dataTestId}
      >
        {/* Close button (top-right) */}
        {showCloseButton && onClose && (
          <ModalCloseButton
            onClick={onClose}
            aria-label="Close modal"
            data-testid={`${dataTestId}-close-button`}
          >
            <FontAwesomeIcon icon={faXmark} />
          </ModalCloseButton>
        )}

        {/* Content */}
        <ModalContent $hasMedia={!!media}>
          {/* Media (left side) */}
          {media && <ModalMedia data-testid={`${dataTestId}-media`}>{media}</ModalMedia>}

          {/* Text content */}
          <ModalTextContent>
            {title && (
              <ModalTitle id={`${dataTestId}-title`} data-testid={`${dataTestId}-title`}>
                {title}
              </ModalTitle>
            )}

            {description && (
              <ModalDescription
                id={`${dataTestId}-description`}
                data-testid={`${dataTestId}-description`}
              >
                {description}
              </ModalDescription>
            )}

            {/* Custom content */}
            {children}

            {/* Actions */}
            {actions && actions.length > 0 && (
              <ModalActions data-testid={`${dataTestId}-actions`}>
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
                    size={ButtonSize.Large}
                    disabled={action.disabled}
                    fullWidth={true}
                    data-testid={`${dataTestId}-action-${index}`}
                  >
                    {action.label}
                  </Button>
                ))}
              </ModalActions>
            )}

            {/* Footer */}
            {footer && <ModalFooter data-testid={`${dataTestId}-footer`}>{footer}</ModalFooter>}
          </ModalTextContent>
        </ModalContent>

        {/* Bottom close button */}
        {onClose && (
          <ModalBottomClose onClick={onClose} data-testid={`${dataTestId}-bottom-close`}>
            Close
          </ModalBottomClose>
        )}
      </ModalContainer>
    </ModalBackdrop>
  );

  // Always render in portal
  return createPortal(modalContent, document.body);
};

Modal.displayName = 'Modal';
