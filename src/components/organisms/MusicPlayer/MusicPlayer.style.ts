import styled from 'styled-components';
import { colors, spacing, sizes, animations } from '../../../styles';

export const MusicPlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${sizes.container.musicPlayer};
  border-top: 1px solid ${colors.grey.grey3};
  z-index: ${sizes.zIndex.overlay};
  width: 100%;
  min-width: ${sizes.maxWidth.musicPlayer};
  padding: ${spacing.md} ${spacing.lg};
  background-color: ${colors.primary.black};
  transition: ${animations.transitions.all};
  box-sizing: border-box;
  overflow: hidden;
`;

export const ProgressClickArea = styled.div`
  cursor: pointer;
  width: ${sizes.musicPlayer.progressBar.clickAreaWidth};
  padding: ${spacing.sm} 0;
`;
