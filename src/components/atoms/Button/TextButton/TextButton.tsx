import React from 'react';
import { StyledTextButton } from './TextButton.style';
import { TextButtonProps } from './TextButton.types';

export const TextButton: React.FC<TextButtonProps> = ({
  icon,
  text,
  ...props
}) => {
  return (
    <StyledTextButton {...props}>
      {icon ? <span className="icon">{icon}</span> : null}
      {text}
    </StyledTextButton>
  );
};
