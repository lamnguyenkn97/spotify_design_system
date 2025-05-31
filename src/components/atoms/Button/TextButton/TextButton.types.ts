import React, { JSX, MouseEventHandler } from 'react';
import { ButtonSize, ButtonVariant } from '../Button/Button.types';

export interface TextButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  variant: ButtonVariant;
  component?: keyof JSX.IntrinsicElements;
}
