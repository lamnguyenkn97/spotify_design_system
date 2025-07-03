import React, { forwardRef } from 'react';
import { SliderContainer, SliderInput, SliderTrack, SliderThumb } from './Slider.style';
import { SliderProps } from './Slider.types';

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      onChange,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const percentage = ((value - min) / (max - min)) * 100;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      onChange(newValue);
    };

    return (
      <SliderContainer className={className} disabled={disabled}>
        <SliderTrack $progress={percentage}>
          <SliderThumb style={{ left: `${percentage}%` }} />
        </SliderTrack>
        <SliderInput
          ref={ref}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          aria-label={ariaLabel}
          {...props}
        />
      </SliderContainer>
    );
  }
);

Slider.displayName = 'Slider';
