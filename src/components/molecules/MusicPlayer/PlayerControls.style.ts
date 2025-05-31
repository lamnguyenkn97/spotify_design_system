import styled from 'styled-components';
import { Theme } from '../../../styles/theme';

export const ControlsContainer = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ControlButton = styled.button<{ theme: Theme }>`
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

export const PlayPauseButton = styled(ControlButton)<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.primary.white};
  color: ${({ theme }) => theme.colors.primary.black};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;

  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.primary.black};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
