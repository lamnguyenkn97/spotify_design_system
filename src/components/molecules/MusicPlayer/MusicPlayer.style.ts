import styled from 'styled-components';
import { Theme } from '../../../styles/theme';

export const PlayerWrapper = styled.div<{ theme: Theme }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: #000;
  border-top: 1px solid rgba(255,255,255,0.08); /* subtle border */
  padding: 0 40px;
  display: flex;
  align-items: center;
  z-index: 1000;
`;
