import React from 'react';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerAction {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
}

export interface DrawerProps {
  /** Whether the drawer is open */
  open: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Position of the drawer */
  position?: DrawerPosition;
  /** Width or height of the drawer (e.g., '300px', '40%') */
  width?: string;
  /** Drawer title */
  title?: string;
  /** Drawer content */
  children: React.ReactNode;
  /** Action buttons */
  actions?: DrawerAction[];
  /** Show backdrop overlay */
  showBackdrop?: boolean;
  /** Close on backdrop click */
  closeOnBackdropClick?: boolean;
  /** Close on ESC key */
  closeOnEscape?: boolean;
  /** Show close button */
  showCloseButton?: boolean;
  /** Custom className */
  className?: string;
  /** Test ID */
  'data-testid'?: string;
}

