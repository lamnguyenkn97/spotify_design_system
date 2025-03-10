import styled, { css } from 'styled-components';

export type TypographyProps = {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'caption';
  weight?: 'light' | 'regular' | 'medium' | 'bold'; // Keep weight as readable values
  color?: 'primary' | 'secondary' | 'muted' | 'danger';
};

export const StyledTypography = styled.span<TypographyProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 3rem;
          font-weight: 700;
        `;
      case 'h2':
        return css`
          font-size: 2.5rem;
          font-weight: 700;
        `;
      case 'h3':
        return css`
          font-size: 2rem;
          font-weight: 700;
        `;
      case 'h4':
        return css`
          font-size: 1.5rem;
          font-weight: 500;
        `;
      case 'h5':
        return css`
          font-size: 1.25rem;
          font-weight: 500;
        `;
      case 'h6':
        return css`
          font-size: 1rem;
          font-weight: 500;
        `;
      case 'body1':
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
      case 'body2':
        return css`
          font-size: 0.875rem;
          font-weight: 400;
        `;
      case 'caption':
        return css`
          font-size: 0.75rem;
          font-weight: 300;
        `;
      default:
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }}

  ${({ weight }) => {
    switch (weight) {
      case 'light':
        return css`
          font-weight: 300;
        `;
      case 'medium':
        return css`
          font-weight: 500;
        `; // Fixed: Medium is 500
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

    ${({ color }) => {
    switch (color) {
      case 'primary':
        return css`
          color: white;
        `;
      case 'secondary':
        return css`
          color: gray;
        `;
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
          color: inherit;
        `;
    }
  }}
`;
