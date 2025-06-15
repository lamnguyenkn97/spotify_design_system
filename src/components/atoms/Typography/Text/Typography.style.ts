import styled, { css } from 'styled-components';
import { colors, fontSizes } from '../../../../styles';
import { TypographyProps } from './Typography.types';

export const StyledTypography = styled.span<TypographyProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: ${fontSizes['2xl']}rem;
          font-weight: 700;
        `;
      case 'h2':
        return css`
          font-size: ${fontSizes.xxl}rem;
          font-weight: 700;
        `;
      case 'h3':
        return css`
          font-size: ${fontSizes.xl}rem;
          font-weight: 700;
        `;
      case 'h4':
        return css`
          font-size: ${fontSizes.lg}rem;
          font-weight: 500;
        `;
      case 'h5':
        return css`
          font-size: ${fontSizes.md}rem;
          font-weight: 500;
        `;
      case 'h6':
        return css`
          font-size: ${fontSizes.md}rem;
          font-weight: 500;
        `;
      case 'body1':
        return css`
          font-size: ${fontSizes.md}rem;
          font-weight: 400;
        `;
      case 'body2':
        return css`
          font-size: ${fontSizes.sm}rem;
          font-weight: 400;
        `;
      case 'caption':
        return css`
          font-size: ${fontSizes.sm}rem;
          font-weight: 300;
        `;
      default:
        return css`
          font-size: ${fontSizes.md}rem;
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

  ${({ color }) => {
    switch (color) {
      case 'primary':
        return css`
          color: ${colors.primary.white};
        `;
      case 'secondary':
        return css`
          color: ${colors.grey.grey6};
        `;
      case 'muted':
        return css`
          color: ${colors.grey.grey4};
        `;
      case 'danger':
        return css`
          color: ${colors.decorative.redRedWine};
        `;
      default:
        return css`
          color: inherit;
        `;
    }
  }}
`;
