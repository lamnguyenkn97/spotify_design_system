import { MouseEventHandler } from 'react';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  White = 'white',
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ExtraSmall = 'extra-small',
}

export type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  size: ButtonSize;
  text: string;
  variant: ButtonVariant;
};
