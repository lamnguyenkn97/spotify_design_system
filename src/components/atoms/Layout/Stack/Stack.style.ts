import styled from 'styled-components';
import { spacing } from '../../../../styles';

export type StackProps = {
  direction?: 'row' | 'column'; // Flex direction
  spacing?: keyof typeof spacing; // Gap between items (in pixels)
  align?: 'start' | 'center' | 'end' | 'stretch'; // align-items
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'; // justify-content
  wrap?: boolean; // Allow flex-wrap
};

export const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: ${({ spacing: spacingKey }) => (spacingKey ? spacing[spacingKey] : '0px')};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'start'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
`;
