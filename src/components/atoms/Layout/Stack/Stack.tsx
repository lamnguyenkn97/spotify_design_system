import React, { JSX } from 'react';
import { StyledStack, StackProps } from './Stack.style';

type Props = StackProps & {
  component?: keyof JSX.IntrinsicElements; // Allows <section>, <ul>, etc.
  children: React.ReactNode;
  className?: string;
};

export const Stack: React.FC<Props> = ({
  component = 'div',
  direction = 'column',
  spacing = 0,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  children,
  className = '',
}) => {
  const Component = component as keyof JSX.IntrinsicElements;

  return (
    <StyledStack
      as={Component}
      direction={direction}
      spacing={spacing}
      align={align}
      justify={justify}
      wrap={wrap}
      className={className}
    >
      {children}
    </StyledStack>
  );
};
