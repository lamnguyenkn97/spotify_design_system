import React, { JSX } from 'react';
import { StyledTypography, TypographyProps } from './Typography.style';

type Props = TypographyProps & {
  component?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
};

export const Typography: React.FC<Props> = ({
  variant = 'body1',
  component = 'span',
  weight = 'regular',
  color = 'primary',
  children,
  className = '',
}) => {
  const Component = component as keyof JSX.IntrinsicElements;

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
