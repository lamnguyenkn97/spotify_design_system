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
import { ModalSize } from './Modal.types';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// Backdrop overlay
export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.lg};
  animation: ${fadeIn} 0.2s ease-out;
`;

// Modal container
export const ModalContainer = styled.div<{ $size: ModalSize; $gradient?: string }>`
  position: relative;
  background: ${({ $gradient }) => $gradient || '#282828'}; /* Dynamic gradient or default dark grey */
  border-radius: ${borderRadius.md};
  box-shadow: 0 16px 64px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
  animation: ${slideUp} 0.3s ease-out;
  transition: background 0.5s ease; /* Smooth gradient transitions */
  ${({ $size }) => getSizeStyles($size)}
`;

// Size styles
const getSizeStyles = (size: ModalSize) => {
  const sizeMap = {
    [ModalSize.Small]: css`
      width: 100%;
      max-width: 400px;
      min-height: 200px;
    `,
    [ModalSize.Medium]: css`
      width: 100%;
      max-width: 600px;
      min-height: 300px;
    `,
    [ModalSize.Large]: css`
      width: 100%;
      max-width: 800px;
      min-height: 400px;
    `,
  };

  return sizeMap[size];
};

// Close button (top-right)
export const ModalCloseButton = styled.button`
  position: absolute;
  top: ${spacing.md};
  right: ${spacing.md};
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7); /* colors.grey.grey6 */
  cursor: pointer;
  padding: ${spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.xs};
  transition: all 0.2s ease;
  z-index: 1;

  &:hover {
    color: #ffffff; /* colors.primary.white */
    background-color: rgba(255, 255, 255, 0.12); /* colors.grey.grey2 */
  }

  &:focus-visible {
    outline: 2px solid #1db954; /* colors.primary.brand */
    outline-offset: 2px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

// Modal content wrapper
export const ModalContent = styled.div<{ $hasMedia: boolean }>`
  display: flex;
  flex-direction: ${({ $hasMedia }) => ($hasMedia ? 'row' : 'column')};
  gap: ${spacing.xl};
  padding: ${spacing.xl};
  overflow-y: auto;
`;

// Media section (left side)
export const ModalMedia = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-width: 280px;
    border-radius: ${borderRadius.sm};
  }
`;

// Text content section
export const ModalTextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

// Modal title
export const ModalTitle = styled.h2`
  font-size: ${fontSizes.xl}rem; /* 2rem (32px) */
  font-weight: ${fontWeights.bold}; /* 700 */
  line-height: ${lineHeights.tight}; /* 1.2 */
  letter-spacing: ${letterSpacing.tight}; /* -0.01em */
  color: #ffffff; /* colors.primary.white */
  margin: 0;
`;

// Modal description
export const ModalDescription = styled.div`
  font-size: ${fontSizes.md}rem; /* 1rem (16px) */
  font-weight: ${fontWeights.regular}; /* 400 */
  line-height: ${lineHeights.normal}; /* 1.5 */
  letter-spacing: ${letterSpacing.normal}; /* 0 */
  color: rgba(255, 255, 255, 0.7); /* colors.grey.grey6 */
  margin: 0;
`;

// Actions container
export const ModalActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${spacing.md};
  margin-top: ${spacing.lg};
`;

// Footer section (e.g., "Already have an account? Log in")
export const ModalFooter = styled.div`
  font-size: ${fontSizes.sm}rem; /* 0.875rem (14px) */
  font-weight: ${fontWeights.regular}; /* 400 */
  line-height: ${lineHeights.normal}; /* 1.5 */
  color: rgba(255, 255, 255, 0.7); /* colors.grey.grey6 */
  text-align: center;
  margin-top: ${spacing.md};
  padding-top: ${spacing.md};

  a {
    color: #ffffff; /* colors.primary.white */
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #1db954; /* colors.primary.brand */
    }
  }
`;

// Bottom close button (for modal footer)
export const ModalBottomClose = styled.button`
  font-size: ${fontSizes.md}rem; /* 1rem (16px) */
  font-weight: ${fontWeights.bold}; /* 700 */
  line-height: ${lineHeights.normal}; /* 1.5 */
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7); /* colors.grey.grey6 */
  cursor: pointer;
  padding: ${spacing.md};
  text-align: center;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff; /* colors.primary.white */
  }

  &:focus-visible {
    outline: 2px solid #1db954; /* colors.primary.brand */
    outline-offset: 2px;
    border-radius: ${borderRadius.xs};
  }
`;
