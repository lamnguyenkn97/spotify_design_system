import styled, { css } from 'styled-components';

export type TextLinkProps = {
  variant?: 'default' | 'muted' | 'danger';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  underline?: boolean;
};

export const StyledTextLink = styled.a<TextLinkProps>`
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case 'muted':
        return css`
          color: lightgray;
        `;
      case 'danger':
        return css`
          color: red;
        `;
      default:
        return css`
          color: white;
        `;
    }
  }}

  ${({ weight }) => {
    switch (weight) {
      case 'light':
        return css`
          font-weight: 200;
        `;
      case 'medium':
        return css`
          font-weight: 500;
        `;
      case 'bold':
        return css`
          font-weight: 700;
        `;
      default:
        return css`
          font-weight: 400;
        `;
    }
  }}

    &:hover {
    text-decoration: underline;
  }
`;
