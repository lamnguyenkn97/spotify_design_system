// SIMPLIFIED INPUT with left icon support
import React, { forwardRef, useId } from 'react';
import { MessageText } from '../MessageText';
import { InputProps } from './Input.types';
import {
  InputContainer,
  InputLabel,
  InputWrapper,
  LeftIconWrapper,
  StyledInput,
} from './Input.style';

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  message,
  error = false,
  fullWidth = false,
  leftIcon,
  onSearch,
  onValueChange,
  className,
  onChange,
  onKeyDown,
  ...props
}, ref) => {
  const inputId = useId();

  // Handle input change events
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    // Call the original onChange if provided
    onChange?.(event);
    
    // Call our custom onValueChange if provided
    onValueChange?.(value);
  };

  // Handle key down events (especially Enter for search)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Call the original onKeyDown if provided
    onKeyDown?.(event);
    
    // Handle Enter key for search functionality
    if (event.key === 'Enter' && onSearch) {
      const value = (event.target as HTMLInputElement).value;
      onSearch(value);
    }
  };

  return (
    <InputContainer fullWidth={fullWidth} className={className}>
      {label && (
        <InputLabel htmlFor={inputId}>
          {label}
        </InputLabel>
      )}
      <InputWrapper hasLeftIcon={!!leftIcon}>
        {leftIcon && (
          <LeftIconWrapper>
            {leftIcon}
          </LeftIconWrapper>
        )}
        <StyledInput
          ref={ref}
          id={inputId}
          hasError={error}
          hasLeftIcon={!!leftIcon}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...props}
        />
      </InputWrapper>
      {message && (
        <MessageText type={error ? 'error' : 'helper'}>
          {message}
        </MessageText>
      )}
    </InputContainer>
  );
});

Input.displayName = 'Input'; 