import styled from 'styled-components';
import { 
  colors, 
  spacing, 
  borderRadius, 
  shadows, 
  sizes, 
  opacity,
  transitions,
  scale
} from '../../../styles';

export const SliderContainer = styled.div<{ disabled: boolean }>`
  position: relative;
  width: 100%;
  height: ${sizes.slider.container.height};
  padding: ${spacing.xs} 0;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? opacity.disabled : '1')};
  overflow: visible; /* Ensure thumb is not clipped */
`;

export const SliderTrack = styled.div<{ $progress: number }>`
  position: relative;
  width: 100%;
  height: ${sizes.slider.track.height};
  background: ${colors.grey.grey2};
  border-radius: ${borderRadius.xs};
  /* Remove overflow hidden to prevent thumb clipping */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${colors.primary.brand};
    border-radius: inherit;
    width: ${({ $progress }) => $progress}%;
    transition: ${transitions.input};
  }
`;

export const SliderThumb = styled.div`
  position: absolute;
  top: ${sizes.position.center};
  width: ${sizes.slider.thumb.medium};
  height: ${sizes.slider.thumb.medium};
  background: ${colors.primary.brand};
  border: none;
  border-radius: ${borderRadius.round};
  box-shadow: ${shadows.slider.thumb};
  transform: translate(-${sizes.position.center}, -${sizes.position.center});
  transition: ${transitions.input};
  pointer-events: none;
  z-index: 10; /* Higher z-index to ensure it's above everything */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Default circular marker (when no icon) - solid green circle */
  &:empty {
    background: ${colors.primary.brand};
    width: ${sizes.slider.thumb.small};
    height: ${sizes.slider.thumb.small};
  }

  /* Icon mode - keep green background, white icon */
  &:not(:empty) {
    background: ${colors.primary.brand};
    width: ${sizes.slider.thumb.medium};
    height: ${sizes.slider.thumb.medium};
  }

  /* Icon styling - white icon on green background */
  svg {
    width: ${sizes.icon.sm};
    height: ${sizes.icon.sm};
    color: ${colors.primary.white};
  }
`;

export const SliderInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: inherit;
  z-index: 3;

  &::-webkit-slider-thumb {
    appearance: none;
    width: ${sizes.slider.thumb.medium};
    height: ${sizes.slider.thumb.medium};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: ${sizes.slider.thumb.medium};
    height: ${sizes.slider.thumb.medium};
    background: transparent;
    border: none;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  /* Hover and focus effects for the thumb */
  &:hover:not(:disabled) + ${SliderTrack} ${SliderThumb} {
    transform: translate(-${sizes.position.center}, -${sizes.position.center}) scale(${scale.xl});
    background: ${colors.decorative.evergreen};
    box-shadow: ${shadows.slider.thumbHover};
  }

  &:active:not(:disabled) + ${SliderTrack} ${SliderThumb} {
    transform: translate(-${sizes.position.center}, -${sizes.position.center}) scale(${scale.small});
  }

  &:focus + ${SliderTrack} ${SliderThumb} {
    outline: none;
    box-shadow: ${shadows.focus};
  }
`;
