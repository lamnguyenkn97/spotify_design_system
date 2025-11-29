import styled, { css } from 'styled-components';
import { colors, spacing } from '../../../styles';
import { SidebarPosition } from './Sidebar.types';

export enum DragState {
  IDLE = 'idle',
  DRAGGING = 'dragging',
  DROP_TARGET = 'drop_target',
}

export enum CursorType {
  DEFAULT = 'default',
  POINTER = 'pointer',
  GRAB = 'grab',
  GRABBING = 'grabbing',
}

interface SidebarContainerProps {
  $position: SidebarPosition;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  width: 360px;
  height: 100vh;
  background-color: ${colors.primary.black};
  color: ${colors.primary.white};
  padding: ${spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  
  ${({ $position }) =>
    $position === 'left'
      ? css`
          border-right: 1px solid ${colors.grey.grey3};
        `
      : css`
          border-left: 1px solid ${colors.grey.grey3};
        `}
`;

export const LogoSection = styled.div`
  padding: ${spacing.sm};
  border-bottom: 1px solid ${colors.grey.grey3};
`;

export const HeaderSection = styled.div`
  padding: ${spacing.sm} 0;
`;

export const FiltersSection = styled.div`
  padding: ${spacing.sm} 0;
`;

export const ContentSection = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${spacing.sm} 0;
`;

export const NowPlayingSection = styled.div`
  padding: ${spacing.md};
  background-color: ${colors.grey.grey0};
  border-radius: 8px;
  margin-bottom: ${spacing.md};
`;

export const QueueSectionTitle = styled.div`
  margin-bottom: ${spacing.sm};
  padding: 0 ${spacing.sm};
`;

interface DraggableItemProps {
  $dragState: DragState;
  $isDraggable: boolean;
}

export const DraggableItem = styled.div<DraggableItemProps>`
  position: relative;
  cursor: ${({ $isDraggable }) => ($isDraggable ? CursorType.GRAB : CursorType.POINTER)};
  opacity: ${({ $dragState }) => ($dragState === DragState.DRAGGING ? 0.5 : 1)};
  transform: ${({ $dragState }) => ($dragState === DragState.DRAGGING ? 'scale(0.98)' : 'scale(1)')};
  transition: opacity 0.2s ease, transform 0.2s ease;
  
  ${({ $dragState }) =>
    $dragState === DragState.DROP_TARGET &&
    css`
      border-top: 2px solid ${colors.primary.brand};
      padding-top: 4px;
    `}
  
  &:active {
    cursor: ${({ $isDraggable }) => ($isDraggable ? CursorType.GRABBING : CursorType.POINTER)};
  }
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.lg};
`;

export const TruncatedText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FlexContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

