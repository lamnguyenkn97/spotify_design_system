import React from 'react';
import { StyledTypography } from './Typography.style';
import { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  component = 'span',
  weight = 'regular',
  color = 'primary',
  children,
  className = '',
}) => {
  const Component = component as React.ElementType;

  return (
    <StyledTypography
      as={Component}
      variant={variant}
      weight={weight}
      color={color}
      className={className}
    >
      {children}
    </StyledTypography>
  );
};
