import styled from 'styled-components';
import { Theme } from '../../../styles/theme';

export const VolumeContainer = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-width: 180px;
`;

export const VolumeButton = styled.button<{ theme: Theme }>`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  width: 32px;
  height: 32px;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`; 