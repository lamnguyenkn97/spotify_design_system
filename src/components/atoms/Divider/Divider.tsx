import React from 'react';
import { StyledDivider } from './Divider.style';
import { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({
  thickness = 1,
  color = 'rgba(255, 255, 255, 0.1)',
  margin = '8px 0',
  variant = 'solid',
  vertical = false,
  height = '100%',
}) => {
  return (
    <StyledDivider
      thickness={thickness}
      color={color}
      margin={margin}
      variant={variant}
      vertical={vertical}
      height={height}
    />
  );
};
