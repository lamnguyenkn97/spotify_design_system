import styled from 'styled-components';

export type StackProps = {
  direction?: 'row' | 'column'; // Flex direction
  spacing?: number; // Gap between items (in pixels)
  align?: 'start' | 'center' | 'end' | 'stretch'; // align-items
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  wrap?: boolean; // Allow flex-wrap
};

export const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: ${({ spacing }) => (spacing ? `${spacing}px` : '0px')};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'start'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
`;
