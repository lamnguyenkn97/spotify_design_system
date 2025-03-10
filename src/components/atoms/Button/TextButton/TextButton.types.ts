import React, { MouseEventHandler } from 'react';

export interface TextButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
