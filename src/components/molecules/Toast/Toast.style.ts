import styled, { keyframes, css } from 'styled-components';
import {
  colors,
  spacing,
  borderRadius,
  fontSizes,
  shadows,
  animations,
} from '../../../styles';
import { ToastType } from './Toast.types';

// Slide in from bottom (bottom-center position)
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

// Slide out to bottom
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

export const ToastContainerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  width: 100%;
  padding: ${spacing.md};
  align-items: center;

  @media (min-width: 769px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    left: 0;
    right: 0;
    transform: none;
    align-items: stretch;
  }
`;

interface ToastWrapperProps {
  $type: ToastType;
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

  ${({ $isExiting }) =>
    $isExiting
      ? css`
          animation: ${slideOutToBottom} 0.3s ease-out forwards;
        `
      : css`
          animation: ${slideInFromBottom} 0.3s ease-out;
        `}

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

export const ToastCloseButtonWrapper = styled.div`
  display: flex;
  align-self: center;
  flex-shrink: 0;
`;
