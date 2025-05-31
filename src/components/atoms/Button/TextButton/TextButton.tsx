import React from 'react';
import { StyledTextButton } from './TextButton.style';
import { TextButtonProps } from './TextButton.types';
import { ButtonSize } from '../Button/Button.types';

export const TextButton: React.FC<TextButtonProps> = ({
  icon,
  text,
  size = ButtonSize.Large,
  variant,
  ...props
}) => {
  return (
    <StyledTextButton {...props} size={size} variant={variant}>
      {icon ? <span className="icon">{icon}</span> : null}
      {text}
    </StyledTextButton>
  );
};
