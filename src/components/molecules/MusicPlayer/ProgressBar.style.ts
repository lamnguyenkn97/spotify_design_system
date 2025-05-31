import styled from 'styled-components';
import { Theme } from '../../../styles/theme';

export const ProgressContainer = styled.div<{ theme: Theme }>`
  width: 100%;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

export const ProgressTrack = styled.div<{ theme: Theme }>`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.grey.grey2};
  border-radius: 2px;
  overflow: hidden;
`;

export const ProgressThumb = styled.div<{ theme: Theme }>`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: 2px;
  transition: width 0.1s linear;

  ${ProgressContainer}:hover & {
    background-color: ${({ theme }) => theme.colors.primary.brandHighlight};
  }
`; 