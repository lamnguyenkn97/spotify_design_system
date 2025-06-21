import React, { forwardRef } from 'react';
import { StyledTypography } from './Typography.style';
import { TypographyProps } from './Typography.types';

export const Typography = forwardRef<HTMLElement, TypographyProps>(({
  variant = 'body',
  size = 'md',
  weight = 'regular',
  color = 'primary',
  component,
  children,
  className,
  ...props
}, ref) => {
  // Auto-determine semantic component based on variant if not specified
  const defaultComponent = 
    variant === 'heading' ? 'h2' : 
    variant === 'title' ? 'h1' :
    variant === 'body' ? 'p' :
    variant === 'caption' ? 'span' : 'span';

  const Component = (component || defaultComponent) as React.ElementType;

  return (
    <StyledTypography
      ref={ref}
      as={Component}
      variant={variant}
      size={size}
      weight={weight}
      color={color}
      className={className}
      {...props}
    >
      {children}
    </StyledTypography>
  );
});

Typography.displayName = 'Typography';
