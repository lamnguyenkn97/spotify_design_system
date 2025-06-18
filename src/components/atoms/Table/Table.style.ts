import styled from 'styled-components';
import { Theme } from '../../../styles/theme';

export const TableWrapper = styled.table<{ theme: Theme }>`
  width: 100%;
  border-collapse: collapse;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const TableHead = styled.thead<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const TableBody = styled.tbody<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const TableRow = styled.tr<{ theme: Theme }>`
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const TableHeader = styled.th<{ theme: Theme }>`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: left;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm}rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-weight: 600;
`;

export const TableCell = styled.td<{ theme: Theme }>`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm}rem;
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
