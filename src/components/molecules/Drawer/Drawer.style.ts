import styled, { css, keyframes } from 'styled-components';
import {
  spacing,
  borderRadius,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
} from '../../../styles';
import { DrawerPosition } from './Drawer.types';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

// Backdrop overlay
export const DrawerBackdrop = styled.div<{ $showBackdrop: boolean }>`
  position: fixed;
  inset: 0;
  background-color: ${({ $showBackdrop }) =>
    $showBackdrop ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
  z-index: 1000;
  animation: ${({ $showBackdrop }) => ($showBackdrop ? fadeIn : 'none')} 0.2s ease-out;
  pointer-events: ${({ $showBackdrop }) => ($showBackdrop ? 'auto' : 'none')};
`;

// Get position styles
const getPositionStyles = (position: DrawerPosition, width?: string) => {
  const defaultWidth = width || '400px';

  const positionMap = {
    left: css`
      top: 0;
      left: 0;
      bottom: 0;
      width: ${defaultWidth};
      max-width: 90vw;
      animation: ${slideInFromLeft} 0.3s ease-out;
    `,
    right: css`
      top: 0;
      right: 0;
      bottom: 0;
      width: ${defaultWidth};
      max-width: 90vw;
      animation: ${slideInFromRight} 0.3s ease-out;
    `,
    top: css`
      top: 0;
      left: 0;
      right: 0;
      height: ${defaultWidth};
      max-height: 90vh;
      animation: ${slideInFromTop} 0.3s ease-out;
    `,
    bottom: css`
      bottom: 0;
      left: 0;
      right: 0;
      height: ${defaultWidth};
      max-height: 90vh;
      animation: ${slideInFromBottom} 0.3s ease-out;
    `,
  };

  return positionMap[position];
};

// Drawer container
export const DrawerContainer = styled.div<{ $position: DrawerPosition; $width?: string }>`
  position: fixed;
  background: ${colors.primary.black}; /* Solid dark Spotify background */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1001;
  ${({ $position, $width }) => getPositionStyles($position, $width)}
`;

// Drawer header
export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.lg};
  border-bottom: 1px solid ${colors.grey.grey2};
  flex-shrink: 0;
`;

// Drawer title
export const DrawerTitle = styled.h2`
  font-size: ${fontSizes.lg}rem; /* 1.25rem (20px) */
  font-weight: ${fontWeights.bold}; /* 700 */
  line-height: ${lineHeights.tight}; /* 1.2 */
  letter-spacing: ${letterSpacing.tight}; /* -0.01em */
  color: ${colors.primary.white};
  margin: 0;
`;

// Close button
export const DrawerCloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.grey.grey6};
  cursor: pointer;
  padding: ${spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.xs};
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.primary.white};
    background-color: ${colors.grey.grey2};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary.brand};
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// Drawer content area
export const DrawerContent = styled.div`
  flex: 1;
  padding: ${spacing.lg};
  overflow-y: auto;
  overflow-x: hidden;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.grey.grey3};
    border-radius: ${borderRadius.xs};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${colors.grey.grey4};
  }
`;

// Drawer footer with actions
export const DrawerFooter = styled.div`
  display: flex;
  gap: ${spacing.md};
  padding: ${spacing.lg};
  border-top: 1px solid ${colors.grey.grey2};
  flex-shrink: 0;
`;

// Action buttons container
export const DrawerActions = styled.div`
  display: flex;
  gap: ${spacing.md};
  width: 100%;
  
  /* Stack buttons vertically on narrow drawers */
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

