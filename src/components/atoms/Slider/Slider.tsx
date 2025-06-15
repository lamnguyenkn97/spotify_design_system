import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import {
  SliderContainer,
  SliderLabel,
  SliderWrapper,
  SliderInput,
  SliderMarks,
  SliderMark,
  SliderMarkLabel,
  SliderTooltip,
  SliderValueLabel,
  SliderHelperText,
  sliderDefaults,
} from './Slider.style';
import { SliderProps, SliderMark as SliderMarkType } from './Slider.types';

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      value,
      min = sliderDefaults.min,
      max = sliderDefaults.max,
      step = sliderDefaults.step,
      size = sliderDefaults.size,
      variant = sliderDefaults.variant,
      orientation = sliderDefaults.orientation,
      disabled = sliderDefaults.disabled,
      loading = sliderDefaults.loading,
      showTooltip = sliderDefaults.showTooltip,
      tooltipFormatter,
      showValue = sliderDefaults.showValue,
      valueLabelPosition = sliderDefaults.valueLabelPosition,
      marks,
      showMarks = sliderDefaults.showMarks,
      trackColor,
      thumbColor,
      backgroundColor,
      animate = sliderDefaults.animate,
      length,
      label,
      helperText,
      error,
      required = sliderDefaults.required,
      onChange,
      onChangeStart,
      onChangeEnd,
      className,
      testId,
      ...props
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false);
    const [showTooltipState, setShowTooltipState] = useState(false);

    // Calculate percentage for active track width
    const percentage = ((value - min) / (max - min)) * 100;

    // Handle change events
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        onChange(newValue);
      },
      [onChange]
    );

    const handleMouseDown = useCallback(() => {
      if (disabled || loading) return;
      setIsDragging(true);
      onChangeStart?.(value);
    }, [disabled, loading, onChangeStart, value]);

    const handleMouseUp = useCallback(() => {
      if (isDragging) {
        setIsDragging(false);
        onChangeEnd?.(value);
      }
    }, [isDragging, onChangeEnd, value]);

    const handleMouseEnter = useCallback(() => {
      if (showTooltip && !disabled) {
        setShowTooltipState(true);
      }
    }, [showTooltip, disabled]);

    const handleMouseLeave = useCallback(() => {
      if (showTooltip && !isDragging) {
        setShowTooltipState(false);
      }
    }, [showTooltip, isDragging]);

    // Handle global mouse up to end dragging
    useEffect(() => {
      if (isDragging) {
        const handleGlobalMouseUp = () => {
          setIsDragging(false);
          setShowTooltipState(false);
          onChangeEnd?.(value);
        };

        document.addEventListener('mouseup', handleGlobalMouseUp);
        return () => {
          document.removeEventListener('mouseup', handleGlobalMouseUp);
        };
      }
    }, [isDragging, onChangeEnd, value]);

    // Format tooltip value
    const formatTooltipValue = (val: number) => {
      if (tooltipFormatter) {
        return tooltipFormatter(val);
      }
      return val.toString();
    };

    // Process marks
    const processedMarks: SliderMarkType[] = marks
      ? marks.map((mark) => (typeof mark === 'number' ? { value: mark } : mark))
      : [];

    // Calculate mark positions
    const getMarkPosition = (markValue: number) => {
      return ((markValue - min) / (max - min)) * 100;
    };

    // Generate ID for accessibility
    const sliderId = `slider-${testId || Math.random().toString(36).substr(2, 9)}`;
    const labelId = `${sliderId}-label`;
    const helperTextId = `${sliderId}-helper`;

    return (
      <SliderContainer
        orientation={orientation}
        length={length}
        disabled={disabled}
        className={className}
      >
        {/* Label */}
        {label && (
          <SliderLabel
            id={labelId}
            htmlFor={sliderId}
            size={size}
            required={required}
            error={!!error}
          >
            {label}
          </SliderLabel>
        )}

        {/* Value Label */}
        {showValue && valueLabelPosition === 'top' && (
          <SliderValueLabel size={size} position={valueLabelPosition}>
            {formatTooltipValue(value)}
          </SliderValueLabel>
        )}

        {/* Main Slider */}
        <SliderWrapper
          size={size}
          variant={variant}
          orientation={orientation}
          loading={loading}
          customTrackColor={trackColor}
          customThumbColor={thumbColor}
          customBackgroundColor={backgroundColor}
          style={
            {
              '--active-width': `${percentage}%`,
            } as React.CSSProperties
          }
        >
          {/* Active Track */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: `${percentage}%`,
              height: '100%',
              borderRadius: 'inherit',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          {/* Slider Input */}
          <SliderInput
            ref={ref}
            id={sliderId}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            size={size}
            animate={animate}
            disabled={disabled || loading}
            onChange={handleChange}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={helperText || error ? helperTextId : undefined}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-orientation={orientation}
            data-testid={testId}
            {...props}
          />

          {/* Tooltip */}
          {showTooltip && (
            <SliderTooltip
              size={size}
              visible={showTooltipState || isDragging}
              style={{
                left: `${percentage}%`,
              }}
            >
              {formatTooltipValue(value)}
            </SliderTooltip>
          )}

          {/* Marks */}
          {showMarks && processedMarks.length > 0 && (
            <SliderMarks orientation={orientation} size={size}>
              {processedMarks.map((mark, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    [orientation === 'vertical' ? 'top' : 'left']:
                      `${getMarkPosition(mark.value)}%`,
                    transform:
                      orientation === 'vertical'
                        ? 'translateY(-50%)'
                        : 'translateX(-50%)',
                    display: 'flex',
                    flexDirection:
                      orientation === 'vertical' ? 'row' : 'column',
                    alignItems: 'center',
                    ...mark.style,
                  }}
                >
                  <SliderMark size={size} active={mark.value <= value} />
                  {mark.label && (
                    <SliderMarkLabel size={size} orientation={orientation}>
                      {mark.label}
                    </SliderMarkLabel>
                  )}
                </div>
              ))}
            </SliderMarks>
          )}
        </SliderWrapper>

        {/* Value Label */}
        {showValue && valueLabelPosition === 'bottom' && (
          <SliderValueLabel size={size} position={valueLabelPosition}>
            {formatTooltipValue(value)}
          </SliderValueLabel>
        )}

        {/* Helper Text or Error */}
        {(helperText || error) && (
          <SliderHelperText id={helperTextId} size={size} error={!!error}>
            {error || helperText}
          </SliderHelperText>
        )}
      </SliderContainer>
    );
  }
);

Slider.displayName = 'Slider';
