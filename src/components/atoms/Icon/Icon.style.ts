import styled, { css } from 'styled-components';
import { fontSizes, spacing, colors } from '../../../styles';

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
  transition: all 0.2s ease-in-out;

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

  color: ${({ color }) => color || colors.primary.white};

  ${({ withBackground, bgColor }) =>
    withBackground &&
    css`
      background-color: ${bgColor || colors.primary.black};
      border-radius: 50%;
      padding: ${spacing.lg};
    `}

  ${({ clickable, hoverColor }) =>
    clickable &&
    css`
      cursor: pointer;
      &:hover {
        color: ${hoverColor || colors.grey.grey6};
        transform: scale(1.1);
      }
      &:active {
        transform: scale(0.95);
      }
    `}
`;
