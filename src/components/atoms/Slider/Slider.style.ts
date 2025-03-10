import styled from 'styled-components';
import { borderRadius } from '../../../styles';
// Use border-radius tokens

export const StyledSlider = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${borderRadius.md};
`;

export const StyledTrack = styled.div`
  position: absolute;
  height: 100%;
  background: #1db954; // Spotify Green
  border-radius: ${borderRadius.md};
`;

export const StyledThumb = styled.input`
  position: absolute;
  width: 100%;
  height: 8px;
  appearance: none;
  background: transparent;
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }
`;
