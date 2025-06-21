import styled, { css } from 'styled-components';
import { BadgeVariant, BadgeColor, BadgeSize, BadgePosition } from './Badge.types';
import { colors, borderRadius, fontWeights, shadows, sizes, spacing } from '../../../styles/tokens';

const badgeColorStyles = {
  primary: css`
    background-color: ${colors.primary.brand};
    color: ${colors.primary.white};
  `,
  success: css`
    background-color: ${colors.decorative.evergreen};
    color: ${colors.primary.black};
  `,
  warning: css`
    background-color: ${colors.decorative.mellowYellow};
    color: ${colors.primary.black};
  `,
  error: css`
    background-color: ${colors.decorative.redRedWine};
    color: ${colors.primary.white};
  `,
  info: css`
    background-color: ${colors.decorative.blueMoon};
    color: ${colors.primary.white};
  `,
};

const badgeSizeStyles = {
  sm: css`
    min-width: ${sizes.height.xs};
    height: ${sizes.height.xs};
    font-size: ${sizes.text.xs};
    padding: 0 ${spacing.xs};
  `,
  md: css`
    min-width: ${sizes.height.sm};
    height: ${sizes.height.sm};
    font-size: ${sizes.text.sm};
    padding: 0 ${spacing.sm};
  `,
  lg: css`
    min-width: ${sizes.height.md};
    height: ${sizes.height.md};
    font-size: ${sizes.text.md};
    padding: 0 ${spacing.sm};
  `,
};

const dotSizeStyles = {
  sm: css`
    width: ${sizes.icon.xs};
    height: ${sizes.icon.xs};
  `,
  md: css`
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
  `,
  lg: css`
    width: ${sizes.icon.md};
    height: ${sizes.icon.md};
  `,
};

const positionStyles = {
  'top-right': css`
    top: -${spacing.sm};
    right: -${spacing.sm};
  `,
  'top-left': css`
    top: -${spacing.sm};
    left: -${spacing.sm};
  `,
  'bottom-right': css`
    bottom: -${spacing.sm};
    right: -${spacing.sm};
  `,
  'bottom-left': css`
    bottom: -${spacing.sm};
    left: -${spacing.sm};
  `,
};

interface BadgeContainerProps {
  $hasChildren: boolean;
}

export const BadgeContainer = styled.div<BadgeContainerProps>`
  display: ${({ $hasChildren }) => ($hasChildren ? 'inline-block' : 'inline-flex')};
  position: ${({ $hasChildren }) => ($hasChildren ? 'relative' : 'static')};
`;

interface BadgeElementProps {
  $variant: BadgeVariant;
  $color: BadgeColor;
  $size: BadgeSize;
  $position?: BadgePosition;
  $positioned: boolean;
}

export const BadgeElement = styled.div<BadgeElementProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.round};
  font-weight: ${fontWeights.medium};
  box-shadow: ${shadows.small};
  white-space: nowrap;
  
  ${({ $color }) => badgeColorStyles[$color]}
  ${({ $size }) => badgeSizeStyles[$size]}
  
  ${({ $positioned, $position }) =>
    $positioned &&
    $position &&
    css`
      position: absolute;
      ${positionStyles[$position]}
    `}
  
  ${({ $variant, $size }) =>
    $variant === 'dot'
      ? css`
          ${dotSizeStyles[$size]}
          padding: 0;
          min-width: auto;
        `
      : ''}
  
  ${({ $variant, $size }) =>
    $variant === 'count' &&
    css`
      min-width: ${sizes.height.sm};
    `}
  
  ${({ $variant }) =>
    $variant === 'icon' &&
    css`
      padding: ${spacing.xs};
    `}
`; 