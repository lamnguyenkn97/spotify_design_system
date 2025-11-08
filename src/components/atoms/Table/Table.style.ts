import styled from 'styled-components';
import { colors, spacing, fontWeights } from '../../../styles/tokens';

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
  color: ${colors.primary.white};
`;

export const TableHead = styled.thead`
  background-color: transparent;
  border-bottom: 1px solid ${colors.grey.grey3};
`;

export const TableBody = styled.tbody`
  background-color: transparent;
`;

export const TableRow = styled.tr`
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${colors.grey.grey1};
  }
`;

export const TableHeader = styled.th<{ align?: 'left' | 'right' | 'center' }>`
  padding: ${spacing.sm} ${spacing.md};
  text-align: ${({ align }) => align || 'left'};
  color: ${colors.primary.white};
  font-size: 0.75rem;
  font-weight: ${fontWeights.regular};
  text-transform: capitalize;
  letter-spacing: 0.05em;
  color: ${colors.grey.grey6};
  border: none;
  white-space: nowrap;
`;

export const TableCell = styled.td<{ align?: 'left' | 'right' | 'center' }>`
  padding: ${spacing.sm} ${spacing.md};
  color: ${colors.primary.white};
  font-size: 0.875rem;
  text-align: ${({ align }) => align || 'left'};
  border: none;
  vertical-align: middle;
`;
