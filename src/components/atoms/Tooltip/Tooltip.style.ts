import styled, { css, keyframes } from 'styled-components';
import { TooltipPosition } from './Tooltip.types';
import { 
  colors, 
  borderRadius, 
  shadows, 
  fontWeights, 
  sizes, 
  spacing,
  animations,
  opacity,
  borders
} from '../../../styles/tokens';

const fadeIn = keyframes`
  from {
    opacity: ${opacity.overlay.subtle};
    transform: scale(${animations.scale.pressed});
  }
  to {
    opacity: ${opacity.loading};
    transform: scale(${animations.scale.none});
  }
`;

const positionStyles = {
  top: css`
    bottom: calc(100% + ${spacing.sm});
    left: ${sizes.position.center};
    transform: translateX(-${sizes.position.center});
  `,
  bottom: css`
    top: calc(100% + ${spacing.sm});
    left: ${sizes.position.center};
    transform: translateX(-${sizes.position.center});
  `,
  left: css`
    right: calc(100% + ${spacing.sm});
    top: ${sizes.position.center};
    transform: translateY(-${sizes.position.center});
  `,
  right: css`
    left: calc(100% + ${spacing.sm});
    top: ${sizes.position.center};
    transform: translateY(-${sizes.position.center});
  `,
};



interface TooltipContainerProps {
  $position?: TooltipPosition;
}

export const TooltipContainer = styled.div<TooltipContainerProps>`
  position: relative;
  display: inline-block;
`;

interface TooltipContentProps {
  $position: TooltipPosition;
  $visible: boolean;
  $maxWidth?: string | number;
}

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  z-index: ${sizes.zIndex.tooltip};
  background-color: ${colors.primary.black};
  color: ${colors.primary.white};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borderRadius.sm};
  font-size: ${sizes.text.sm};
  font-weight: ${fontWeights.regular};
  white-space: nowrap;
  box-shadow: ${shadows.large};
  pointer-events: none;
  border: ${borders.thin} ${colors.grey.grey3};
  
  ${({ $position }) => positionStyles[$position]}
  
  max-width: ${({ $maxWidth }) =>
    $maxWidth
      ? (typeof $maxWidth === 'number' ? `${$maxWidth}px` : $maxWidth)
      : sizes.maxWidth.tooltip};
  
  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      white-space: pre-wrap;
      word-wrap: break-word;
    `}
  
  opacity: ${({ $visible }) => ($visible ? opacity.loading : opacity.overlay.subtle)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transition: ${animations.transitions.opacity}, visibility ${animations.duration.fast} ${animations.easing.easeInOut};
  
  ${({ $visible }) =>
    $visible &&
    css`
      animation: ${fadeIn} ${animations.duration.fast} ${animations.easing.easeOut};
    `}
`;

 