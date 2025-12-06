import styled, { keyframes, css } from 'styled-components';
import { colors, spacing, borderRadius, fontSizes, shadows, animations } from '../../../styles';
import { ToastType, ToastPosition } from './Toast.types';

// Slide in animations for different positions
const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Slide out animations
const slideOutToTop = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const slideOutToBottom = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const slideOutToLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

// Get animation based on position
const getEnterAnimation = (position: ToastPosition) => {
  if (position.includes('top')) return slideInFromTop;
  if (position.includes('bottom')) return slideInFromBottom;
  if (position.includes('left')) return slideInFromLeft;
  return slideInFromRight;
};

const getExitAnimation = (position: ToastPosition) => {
  if (position.includes('top')) return slideOutToTop;
  if (position.includes('bottom')) return slideOutToBottom;
  if (position.includes('left')) return slideOutToLeft;
  return slideOutToRight;
};

// Toast type colors
const getToastColors = (type: ToastType) => {
  switch (type) {
    case ToastType.SUCCESS:
      return {
        background: colors.primary.brand,
        color: colors.primary.black,
        icon: colors.primary.black,
      };
    case ToastType.ERROR:
      return {
        background: colors.decorative.redRedWine,
        color: colors.primary.white,
        icon: colors.primary.white,
      };
    case ToastType.WARNING:
      return {
        background: colors.decorative.mellowYellow,
        color: colors.primary.black,
        icon: colors.primary.black,
      };
    case ToastType.INFO:
      return {
        background: colors.decorative.blueMoon,
        color: colors.primary.white,
        icon: colors.primary.white,
      };
    default:
      return {
        background: colors.grey.grey2,
        color: colors.primary.white,
        icon: colors.primary.white,
      };
  }
};

interface ToastContainerWrapperProps {
  $position: ToastPosition;
}

export const ToastContainerWrapper = styled.div<ToastContainerWrapperProps>`
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  width: 100%;
  padding: ${spacing.md};

  ${({ $position }) => {
    switch ($position) {
      case ToastPosition.TOP_LEFT:
        return css`
          top: 0;
          left: 0;
          align-items: flex-start;
        `;
      case ToastPosition.TOP_CENTER:
        return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;
      case ToastPosition.TOP_RIGHT:
        return css`
          top: 0;
          right: 0;
          align-items: flex-end;
        `;
      case ToastPosition.BOTTOM_LEFT:
        return css`
          bottom: 0;
          left: 0;
          align-items: flex-start;
        `;
      case ToastPosition.BOTTOM_CENTER:
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;
      case ToastPosition.BOTTOM_RIGHT:
        return css`
          bottom: 0;
          right: 0;
          align-items: flex-end;
        `;
      default:
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          align-items: center;
        `;
    }
  }}

  /* Mobile styles (base) - full width */
  @media (max-width: 768px) {
    left: 0;
    right: 0;
    transform: none;
    align-items: stretch;
  }

  /* Desktop styles - constrained width */
  @media (min-width: 769px) {
    max-width: 500px;
  }
`;

interface ToastWrapperProps {
  $type: ToastType;
  $position: ToastPosition;
  $isExiting?: boolean;
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.md} ${spacing.lg};
  border-radius: ${borderRadius.lg};
  box-shadow: ${shadows.large};
  min-height: 56px;
  width: 100%;
  pointer-events: auto;
  
  ${({ $type }) => {
    const toastColors = getToastColors($type);
    return css`
      background-color: ${toastColors.background};
      color: ${toastColors.color};
    `;
  }}

  ${({ $position, $isExiting }) =>
    $isExiting
      ? css`
          animation: ${getExitAnimation($position)} 0.3s ease-out forwards;
        `
      : css`
          animation: ${getEnterAnimation($position)} 0.3s ease-out;
        `}

  /* Desktop styles - constrained width */
  @media (min-width: 769px) {
    max-width: 500px;
  }
`;

export const ToastIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: ${fontSizes.lg}rem;
`;

export const ToastMessage = styled.div`
  flex: 1;
  font-size: ${fontSizes.md}rem;
  font-weight: 500;
  line-height: 1.5;
  word-break: break-word;
`;

export const ToastCloseButton = styled.button<{ $type: ToastType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${spacing.xs};
  border-radius: ${borderRadius.sm};
  flex-shrink: 0;
  transition: background-color ${animations.transitions.colors};

  ${({ $type }) => {
    const toastColors = getToastColors($type);
    return css`
      color: ${toastColors.icon};
    `;
  }}

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary.white};
    outline-offset: 2px;
  }
`;
