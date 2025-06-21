import React, { forwardRef } from 'react';
import { StyledStack, stackDefaults } from './Stack.style';
import { StackProps } from './Stack.types';

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = stackDefaults.direction,
      spacing = stackDefaults.spacing,
      align = stackDefaults.align,
      justify = stackDefaults.justify,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <StyledStack
        ref={ref}
        direction={direction}
        spacing={spacing}
        align={align}
        justify={justify}
        className={className}
        {...props}
      >
        {children}
      </StyledStack>
    );
  }
);

Stack.displayName = 'Stack';
