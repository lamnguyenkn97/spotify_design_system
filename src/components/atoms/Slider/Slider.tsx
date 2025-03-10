import React from 'react';
import { StyledSlider, StyledThumb, StyledTrack } from './Slider.style';

export interface SliderProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  ...props
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <StyledSlider>
      <StyledTrack style={{ width: `${(value / max) * 100}%` }} />
      <StyledThumb
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </StyledSlider>
  );
};
