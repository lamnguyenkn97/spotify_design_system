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
  target,
  rel,
  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
  'aria-label': ariaLabel,
  ...restProps
}) => {
  const isExternal = href?.startsWith('http');
  const Component = component as React.ElementType;

  return (
    <StyledTextLink
      as={Component}
      href={href}
      target={target || (isExternal ? '_blank' : undefined)}
      rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
      variant={variant}
      weight={weight}
      underline={underline}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      aria-label={ariaLabel}
      {...restProps}
    >
      {children}
    </StyledTextLink>
  );
};
