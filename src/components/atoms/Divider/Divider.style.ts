import styled from 'styled-components';
import { DividerProps } from './Divider.types';

export const StyledDivider = styled.hr<Required<DividerProps>>`
  border: none;
  ${({ vertical, thickness, variant, color, height, margin }) =>
    vertical
      ? `
        width: ${thickness}px;
        height: ${height};
        border-left: ${thickness}px ${variant} ${color};
        margin: 0 auto;` // Centered for vertical dividers
      : `
        width: 100%;
        height: ${thickness}px;
        border-top: ${thickness}px ${variant} ${color};
        margin: ${margin};
      `}
`;
