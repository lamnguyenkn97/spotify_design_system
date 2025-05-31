import styled from 'styled-components';
import { colors, fontSizes, spacing, borderRadius } from '../../../styles';

export const Wrapper = styled.button<{ selected: boolean }>`
  padding: ${spacing.xs} ${spacing.md};
  border-radius: ${borderRadius.xl};
  font-size: ${fontSizes.sm}rem;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? colors.primary.white : colors.grey.grey1};
  color: ${({ selected }) =>
    selected ? colors.primary.black : colors.primary.white};
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;
