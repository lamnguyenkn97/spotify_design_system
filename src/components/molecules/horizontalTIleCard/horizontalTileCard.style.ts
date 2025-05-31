import styled from 'styled-components';
import { colors, spacing, borderRadius } from '../../../styles';

export const Wrapper = styled.div<{
  width?: string | number;
  isActive?: boolean;
  disabled?: boolean;
  size?: 'small' | 'large';
}>`
  display: flex;
  align-items: center;
  gap: ${({ size }) => (size === 'small' ? spacing.sm : spacing.md)};
  padding: ${({ size }) => (size === 'small' ? `${spacing.xs} ${spacing.xs}` : `${spacing.xs} ${spacing.sm}`)};
  border-radius: ${({ size }) => (size === 'small' ? borderRadius.sm : borderRadius.md)};
  background: ${({ isActive }) => isActive ? colors.grey.grey2 : colors.grey.grey1};
  ${({ width }) =>
    width &&
    `
    width: ${typeof width === 'number' ? `${width}px` : width};
  `}
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease-in-out;
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};

  &:hover {
    background: ${({ disabled, isActive }) => 
      disabled ? colors.grey.grey1 : 
      isActive ? colors.grey.grey2 : 
      colors.grey.grey2};
  }

  &:focus {
    outline: 2px solid ${colors.primary.brand};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const ProgressWrapper = styled.div`
  width: 100%;
  height: ${spacing.xs};
  background-color: ${colors.grey.grey3};
  border-radius: ${borderRadius.xs};
  overflow: hidden;
`;

export const ProgressBar = styled.div<{ width: string }>`
  height: 100%;
  background-color: ${colors.primary.brand};
  width: ${({ width }) => width};
  transition: width 0.3s ease-in-out;
`;

export const TruncatedText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;
