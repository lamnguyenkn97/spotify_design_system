import styled from 'styled-components';
import { borderRadius, spacing } from '../../../styles';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.05); // Spotify dark theme
  border-radius: ${borderRadius.xs};
  overflow: hidden;
`;

export const StyledThead = styled.thead`
  background: rgba(255, 255, 255, 0.1);
`;

export const StyledTh = styled.th`
  padding: ${spacing.sm};
  text-align: left;
  color: rgba(255, 255, 255, 0.9);
  font-weight: bold;
`;

export const StyledTbody = styled.tbody`
  background: rgba(255, 255, 255, 0.02);
`;

export const StyledTr = styled.tr`
  &:hover {
    background: rgba(30, 215, 96, 0.1); // Spotify green highlight on hover
  }
`;

export const StyledTd = styled.td`
  padding: ${spacing.sm};
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
