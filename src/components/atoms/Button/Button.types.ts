import React, { MouseEventHandler, ButtonHTMLAttributes } from 'react';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  White = 'white',
  Circular = 'circular',
  FlatWhite = 'flat-white',
  Text = 'text', // For text-only buttons (previously TextButton)
}

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  text?: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  as?: keyof React.JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
}
