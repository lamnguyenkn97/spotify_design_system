import React, { forwardRef } from 'react';
import { StyledDivider, dividerDefaults } from './Divider.style';
import { DividerProps } from './Divider.types';

export const Divider = forwardRef<HTMLHRElement, DividerProps>(({
  orientation = dividerDefaults.orientation,
  thickness = dividerDefaults.thickness,
  color = dividerDefaults.color,
  variant = dividerDefaults.variant,
  spacing = dividerDefaults.spacing,
  customSpacing,
  length = dividerDefaults.length,
  fullSize = dividerDefaults.fullSize,
  role = 'separator',
  'aria-orientation': ariaOrientation,
  ...props
}, ref) => {
  return (
    <StyledDivider
      ref={ref}
      orientation={orientation}
      thickness={thickness}
      color={color}
      variant={variant}
      spacing={spacing}
      customSpacing={customSpacing}
      length={length}
      fullSize={fullSize}
      role={role}
      aria-orientation={ariaOrientation || orientation}
      {...props}
    />
  );
});

Divider.displayName = 'Divider';
