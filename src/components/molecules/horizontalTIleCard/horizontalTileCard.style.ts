import styled from 'styled-components';
import { colors, spacing, borderRadius } from '../../../styles';

export const Wrapper = styled.div<{ width?: string | number }>`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${borderRadius.md};
  background: ${colors.grey.grey1};
  ${({ width }) =>
    width &&
    `
    width: ${typeof width === 'number' ? `${width}px` : width};
  `}
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${colors.grey.grey2};
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
