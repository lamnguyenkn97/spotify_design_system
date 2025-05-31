import styled from 'styled-components';
import { borderRadius, colors, spacing } from '../../../styles';
// Use border-radius tokens

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: ${spacing.sm};
  background: ${colors.grey.grey2};
  border-radius: ${borderRadius.md};
`;

export const StyledTrack = styled.div`
  position: absolute;
  height: 100%;
  background: ${colors.primary.brand};
  border-radius: ${borderRadius.md};
`;

export const StyledThumb = styled.input`
  position: absolute;
  width: 100%;
  height: ${spacing.sm};
  appearance: none;
  background: transparent;
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    appearance: none;
    width: ${spacing.md};
    height: ${spacing.md};
    background: ${colors.primary.white};
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }
`;
