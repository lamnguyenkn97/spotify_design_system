import styled from 'styled-components';
import { spacing, borderRadius } from '../../../styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding: ${spacing.lg};
  gap: ${spacing.lg};
  height: 300px;
  border-radius: ${borderRadius.md};
`;
