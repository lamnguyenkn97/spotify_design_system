import React from 'react';

export enum ModalSize {
  Small = 'small',      // 400px
  Medium = 'medium',    // 600px
  Large = 'large',      // 800px
}

export interface ModalAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
}

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;
  /** Callback when modal should close */
  onClose?: () => void;
  /** Modal size */
  size?: ModalSize;
  /** Modal title */
  title?: string;
  /** Modal description/content */
  description?: string | React.ReactNode;
  /** Custom content */
  children?: React.ReactNode;
  /** Optional media/image content (left side) */
  media?: React.ReactNode;
  /** Action buttons */
  actions?: ModalAction[];
  /** Show close button */
  showCloseButton?: boolean;
  /** Close on backdrop click */
  closeOnBackdropClick?: boolean;
  /** Close on ESC key */
  closeOnEscape?: boolean;
  /** Additional footer content (e.g., "Already have an account? Log in") */
  footer?: React.ReactNode;
  /** Custom className */
  className?: string;
  /** Test ID */
  'data-testid'?: string;
}
