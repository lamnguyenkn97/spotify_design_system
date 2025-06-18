import React, { forwardRef } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';
import { StyledButton } from './Button.style';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  onClick,
  size = ButtonSize.Medium,
  text,
  variant = ButtonVariant.Primary,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
  as,
  ...props
}, ref) => {
  const content = children || text;
  
  const iconElement = icon && (
    <span className="icon">{icon}</span>
  );
  
  return (
    <StyledButton
      ref={ref}
      onClick={onClick}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      loading={loading}
      iconPosition={iconPosition}
      disabled={disabled || loading}
      as={as}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {content}
      {iconPosition === 'right' && iconElement}
    </StyledButton>
  );
});

Button.displayName = 'Button';
