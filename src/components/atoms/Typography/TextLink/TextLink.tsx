import React from 'react';
import { StyledTextLink } from './TextLink.style';
import { TextLinkProps } from './TextLink.types';

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  component = href ? 'a' : 'span', // Default to <a> if href exists, else <span>
  variant = 'default',
  weight = 'regular',
  underline = false,
  children,
  className = '',
}) => {
  const isExternal = href?.startsWith('http');
  const Component = component as React.ElementType;

  return (
    <StyledTextLink
      as={Component}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      variant={variant}
      weight={weight}
      underline={underline}
      className={className}
    >
      {children}
    </StyledTextLink>
  );
};
