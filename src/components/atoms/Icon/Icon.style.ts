import styled, { css } from 'styled-components';
import { fontSizes, spacing } from '../../../styles';

export type IconProps = {
  size?: 'small' | 'medium' | 'large';
  color?: string; // ✅ Allow any string (hex, rgb, CSS colors)
  hoverColor?: string; // ✅ New: Color on hover
  withBackground?: boolean;
  bgColor?: string; // ✅ Allow custom background colors
  clickable?: boolean;
};

export const StyledIcon = styled.span<IconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    color 0.2s ease,
    transform 0.2s ease; /* ✅ Smooth color & hover effects */

  ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: ${spacing.md};
          height: ${spacing.md};
          font-size: ${fontSizes.md}rem;
        `;
      case 'large':
        return css`
          width: ${spacing.xl};
          height: ${spacing.xl};
          font-size: ${fontSizes.xl}rem;
        `;
      default:
        return css`
          width: ${spacing.lg};
          height: ${spacing.lg};
          font-size: ${fontSizes.lg}rem;
        `;
    }
  }}

  color: ${({ color }) => color || 'inherit'}; /* ✅ Set default color */

  ${({ withBackground, bgColor }) =>
    withBackground &&
    css`
      background-color: ${bgColor || 'black'};
      border-radius: 50%;
      padding: ${spacing.lg};
    `}

  ${({ clickable, hoverColor }) =>
    clickable &&
    css`
      cursor: pointer;
      &:hover {
        color: ${hoverColor || 'gray'}; /* ✅ Hover color change */
        transform: scale(1.1); /* ✅ Slight scaling effect */
      }
      &:active {
        transform: scale(0.95);
      }
    `}
`;
