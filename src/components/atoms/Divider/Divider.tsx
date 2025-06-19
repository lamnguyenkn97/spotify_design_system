import React from 'react';
import { StyledDivider, dividerDefaults } from './Divider.style';
import { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({
  orientation = dividerDefaults.orientation,
  thickness = dividerDefaults.thickness,
  color = dividerDefaults.color,
  variant = dividerDefaults.variant,
  spacing = dividerDefaults.spacing,
  fullWidth = dividerDefaults.fullWidth,
  role = 'separator',
  'aria-orientation': ariaOrientation,
  ...props
}) => {
  return (
    <StyledDivider
      orientation={orientation}
      thickness={thickness}
      color={color}
      variant={variant}
      spacing={spacing}
      fullWidth={fullWidth}
      role={role}
      aria-orientation={ariaOrientation || orientation}
      {...props}
    />
  );
};

Divider.displayName = 'Divider';
