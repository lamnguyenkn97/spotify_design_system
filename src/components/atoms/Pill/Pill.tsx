import React, { forwardRef } from 'react';
import { StyledPill, DismissButton } from './Pill.style';
import { PillProps } from './Pill.types';

export const Pill = forwardRef<HTMLButtonElement, PillProps>(
  (
    {
      label,
      size = 'md',
      variant = 'default',
      selected = false,
      disabled = false,
      dismissible = false,
      onDismiss,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleDismiss = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDismiss?.();
    };

    if (dismissible) {
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <StyledPill
            ref={ref}
            size={size}
            variant={variant}
            selected={selected}
            disabled={disabled}
            dismissible={false}
            onClick={onClick}
            {...props}
          >
            {label}
          </StyledPill>
          <DismissButton
            onClick={handleDismiss}
            aria-label="Remove"
            type="button"
          >
            ×
          </DismissButton>
        </div>
      );
    }

    return (
      <StyledPill
        ref={ref}
        size={size}
        variant={variant}
        selected={selected}
        disabled={disabled}
        dismissible={dismissible}
        onClick={onClick}
        {...props}
      >
        {label}
      </StyledPill>
    );
  }
);

Pill.displayName = 'Pill';
