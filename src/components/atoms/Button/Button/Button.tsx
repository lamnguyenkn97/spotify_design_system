import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.style';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  size,
  text,
  variant,
  icon,
  ...props
}) => {
  return (
    <StyledButton onClick={onClick} size={size} variant={variant} {...props}>
      {icon ? <span className="icon">{icon}</span> : null}
      {text}
    </StyledButton>
  );
};
