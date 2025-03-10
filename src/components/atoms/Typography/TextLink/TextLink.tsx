import React from 'react';
import { StyledTextLink, TextLinkProps } from './TextLink.style';

type Props = TextLinkProps & {
  href?: string;
  children: React.ReactNode;
  component?: 'a' | 'span' | 'button'; // Allows flexibility
  className?: string;
};

export const TextLink: React.FC<Props> = ({
  href,
  component = href ? 'a' : 'span', // Default to <a> if href exists, else <span>
  variant = 'default',
  weight = 'light',
  underline = false,
  children,
  className = '',
}) => {
  const isExternal = href?.startsWith('http');

  return (
    <StyledTextLink
      as={component}
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
