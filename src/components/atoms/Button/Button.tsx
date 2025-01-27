import React from 'react';
import { ButtonProps, ButtonVariant } from './Button.types';
import * as S from './Button.style';
import { StyledButton } from './Button.style';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  size,
  text,
  variant,
  ...props
}) => {
  return (
    <StyledButton onClick={onClick} size={size} variant={variant} {...props}>
      {text}
    </StyledButton>
  );
};
