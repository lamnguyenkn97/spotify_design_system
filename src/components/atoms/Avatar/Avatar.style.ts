import styled, { css } from 'styled-components';
import { AvatarSize, AvatarShape, AvatarStatus } from './Avatar.types';
import { sizes, colors, borderRadius, shadows, fontWeights } from '../../../styles/tokens';

const sizeStyles = {
  xs: css`
    width: ${sizes.avatar.xs};
    height: ${sizes.avatar.xs};
    font-size: ${sizes.text.xs};
  `,
  sm: css`
    width: ${sizes.avatar.sm};
    height: ${sizes.avatar.sm};
    font-size: ${sizes.text.sm};
  `,
  md: css`
    width: ${sizes.avatar.md};
    height: ${sizes.avatar.md};
    font-size: ${sizes.text.md};
  `,
  lg: css`
    width: ${sizes.avatar.lg};
    height: ${sizes.avatar.lg};
    font-size: ${sizes.text.lg};
  `,
  xl: css`
    width: ${sizes.avatar.xl};
    height: ${sizes.avatar.xl};
    font-size: ${sizes.text.xl};
  `,
};

const shapeStyles = {
  circle: css`
    border-radius: ${borderRadius.round};
  `,
  square: css`
    border-radius: ${borderRadius.md};
  `,
};

const statusColors = {
  online: colors.decorative.evergreen,
  offline: colors.grey.grey4,
  away: colors.decorative.yellow,
  busy: colors.decorative.redWine,
};

export const AvatarContainer = styled.div<{
  $size: AvatarSize;
  $clickable: boolean;
}>`
  position: relative;
  display: inline-block;
  ${({ $size }) => sizeStyles[$size]}
  
  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
      
      &:hover {
        transform: scale(1.05);
        transition: transform 0.2s ease;
      }
    `}
`;

export const AvatarImage = styled.img<{
  $size: AvatarSize;
  $shape: AvatarShape;
}>`
  ${({ $size }) => sizeStyles[$size]}
  ${({ $shape }) => shapeStyles[$shape]}
  object-fit: cover;
  background-color: ${colors.grey.grey2};
  border: 1px solid ${colors.grey.grey3};
`;

export const AvatarFallback = styled.div<{
  $size: AvatarSize;
  $shape: AvatarShape;
}>`
  ${({ $size }) => sizeStyles[$size]}
  ${({ $shape }) => shapeStyles[$shape]}
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.primary.brand}, ${colors.decorative.evergreen});
  color: ${colors.primary.white};
  font-weight: ${fontWeights.medium};
  text-transform: uppercase;
  user-select: none;
`;

export const StatusIndicator = styled.div<{
  $status: AvatarStatus;
  $size: AvatarSize;
}>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: ${({ $size }) => ($size === 'xs' ? '8px' : $size === 'sm' ? '10px' : '12px')};
  height: ${({ $size }) => ($size === 'xs' ? '8px' : $size === 'sm' ? '10px' : '12px')};
  border-radius: ${borderRadius.round};
  background-color: ${({ $status }) => statusColors[$status]};
  border: 2px solid ${colors.background.primary};
  box-shadow: ${shadows.sm};
`;

export const VerifiedBadge = styled.div<{
  $size: AvatarSize;
}>`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: ${({ $size }) => ($size === 'xs' ? '12px' : $size === 'sm' ? '14px' : '16px')};
  height: ${({ $size }) => ($size === 'xs' ? '12px' : $size === 'sm' ? '14px' : '16px')};
  border-radius: ${borderRadius.round};
  background-color: ${colors.primary.brand};
  color: ${colors.primary.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ $size }) => ($size === 'xs' ? '8px' : $size === 'sm' ? '9px' : '10px')};
  border: 2px solid ${colors.background.primary};
  box-shadow: ${shadows.sm};
`;

export const LoadingSkeleton = styled.div<{
  $size: AvatarSize;
  $shape: AvatarShape;
}>`
  ${({ $size }) => sizeStyles[$size]}
  ${({ $shape }) => shapeStyles[$shape]}
  background: linear-gradient(
    90deg,
    ${colors.grey.grey2} 25%,
    ${colors.grey.grey3} 50%,
    ${colors.grey.grey2} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  
  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`; 