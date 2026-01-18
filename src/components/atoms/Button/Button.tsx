import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';
import { StyledButton } from './Button.style';

export const Button = forwardRef<HTMLButtonElement, ButtonProps & { circular?: boolean }>(({
  onClick,
  size = ButtonSize.Medium,
  text,
  variant = ButtonVariant.Primary,
  icon,
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
  as,
  circular = false,
  fontWeight,
  ...props
}, ref) => {
  const content = children || text;
  
  // Use Font Awesome spinner when loading, otherwise use provided icon
  const iconElement = loading ? (
    <FontAwesomeIcon 
      icon={faSpinner} 
      spin 
      className="icon loading-spinner" 
    />
  ) : icon ? (
    <span className="icon">{icon}</span>
  ) : null;
  
  return (
    <StyledButton
      ref={ref}
      onClick={onClick}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      loading={loading}
      disabled={disabled || loading}
      circular={circular}
      fontWeight={fontWeight}
      as={as}
      {...props}
    >
      {iconElement}
      {!loading && content}
    </StyledButton>
  );
});

Button.displayName = 'Button';
