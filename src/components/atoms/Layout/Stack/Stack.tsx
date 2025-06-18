import React, { forwardRef } from 'react';
import { StyledStack, stackDefaults } from './Stack.style';
import { StackProps } from './Stack.types';

export const Stack = forwardRef<HTMLDivElement, StackProps>(({
  direction = stackDefaults.direction,
  spacing = stackDefaults.spacing,
  align = stackDefaults.align,
  justify = stackDefaults.justify,
  wrap = stackDefaults.wrap,
  as = 'div',
  width,
  height,
  grow = stackDefaults.grow,
  shrink = stackDefaults.shrink,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  scrollable = stackDefaults.scrollable,
  padding,
  margin,
  centered = stackDefaults.centered,
  backgroundColor,
  borderRadius,
  children,
  className,
  ...props
}, ref) => {
  return (
    <StyledStack
      ref={ref}
      as={as}
      direction={direction}
      spacing={spacing}
      align={align}
      justify={justify}
      wrap={wrap}
      width={width}
      height={height}
      grow={grow}
      shrink={shrink}
      minWidth={minWidth}
      maxWidth={maxWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
      scrollable={scrollable}
      padding={padding}
      margin={margin}
      centered={centered}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      className={className}
      {...props}
    >
      {children}
    </StyledStack>
  );
});

Stack.displayName = 'Stack';
