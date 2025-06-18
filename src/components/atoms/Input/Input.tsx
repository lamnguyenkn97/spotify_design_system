import React, { useState, forwardRef, useId } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { 
  faSearch, 
  faEye, 
  faEyeSlash, 
  faTimes,
  faExclamationTriangle,
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  InputContainer,
  InputLabel,
  InputWrapper,
  StyledInput,
  IconWrapper,
  MessageText,
  LoadingSpinner,
  inputDefaults,
  stateTokens,
  sizeTokens,
} from './Input.style';
import { InputProps } from './Input.types';

// Map our input sizes to FontAwesome sizes
const fontAwesomeSizeMap: Record<string, SizeProp> = {
  xs: 'xs',
  sm: 'sm',
  md: '1x',
  lg: 'lg',
  xl: 'xl',
};

// Helper function to get input type based on variant
const getInputType = (variant: string, showPassword: boolean): string => {
  switch (variant) {
    case 'password':
      return showPassword ? 'text' : 'password';
    case 'email':
      return 'email';
    case 'number':
      return 'number';
    case 'url':
      return 'url';
    case 'search':
    default:
      return 'text';
  }
};

// Helper function to get default icon based on variant
const getDefaultIcon = (variant: string) => {
  switch (variant) {
    case 'search':
      return faSearch;
    case 'email':
      return undefined; // No default icon for email
    default:
      return undefined;
  }
};

// Helper function to get state icon
const getStateIcon = (state: string) => {
  switch (state) {
    case 'error':
      return faExclamationTriangle;
    case 'success':
      return faCheckCircle;
    case 'warning':
      return faExclamationCircle;
    default:
      return undefined;
  }
};

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  size = inputDefaults.size,
  variant = inputDefaults.variant,
  state = inputDefaults.state,
  label,
  helperText,
  errorMessage,
  successMessage,
  warningMessage,
  leftIcon,
  rightIcon,
  iconSize,
  fullWidth = inputDefaults.fullWidth,
  clearable = inputDefaults.clearable,
  onClear,
  onSearch,
  showPasswordToggle = inputDefaults.showPasswordToggle,
  loading = inputDefaults.loading,
  className,
  value: controlledValue,
  onChange,
  onKeyDown,
  disabled,
  ...props
}, ref) => {
  const [internalValue, setInternalValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const inputId = useId();
  
  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const hasValue = Boolean(value);
  
  // Determine actual state (disabled overrides other states)
  const actualState = disabled ? 'disabled' : state;
  
  // Determine icons
  const actualLeftIcon = leftIcon || getDefaultIcon(variant);
  const stateIcon = getStateIcon(actualState);
  
  // Determine if we need right icons
  const needsPasswordToggle = variant === 'password' && showPasswordToggle;
  const needsClearButton = clearable && hasValue && !disabled;
  const needsStateIcon = Boolean(stateIcon);
  const needsLoadingSpinner = loading;
  
  // Determine which right icon to show (priority: loading > state > clear > password > custom)
  let actualRightIcon = rightIcon;
  if (needsLoadingSpinner) {
    actualRightIcon = undefined; // Will show spinner instead
  } else if (needsStateIcon) {
    actualRightIcon = stateIcon;
  } else if (needsClearButton) {
    actualRightIcon = faTimes;
  } else if (needsPasswordToggle) {
    actualRightIcon = showPassword ? faEyeSlash : faEye;
  }
  
  // Determine message to display
  let message = '';
  let messageType: 'helper' | 'error' | 'success' | 'warning' = 'helper';
  
  if (actualState === 'error' && errorMessage) {
    message = errorMessage;
    messageType = 'error';
  } else if (actualState === 'success' && successMessage) {
    message = successMessage;
    messageType = 'success';
  } else if (actualState === 'warning' && warningMessage) {
    message = warningMessage;
    messageType = 'warning';
  } else if (helperText) {
    message = helperText;
    messageType = 'helper';
  }
  
  // Event handlers
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    
    onChange?.(event);
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && variant === 'search' && onSearch) {
      onSearch(value as string);
    }
    
    onKeyDown?.(event);
  };
  
  const handleRightIconClick = () => {
    if (needsLoadingSpinner) return;
    
    if (needsPasswordToggle) {
      setShowPassword(!showPassword);
    } else if (needsClearButton) {
      const newValue = '';
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      onClear?.();
      
      // Trigger onChange event for controlled components
      if (onChange) {
        const syntheticEvent = {
          target: { value: newValue },
          currentTarget: { value: newValue },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    }
  };
  
  const inputIconSize = iconSize || sizeTokens[size].iconSize;
  const fontAwesomeSize = fontAwesomeSizeMap[inputIconSize] || '1x';
  const iconColor = stateTokens[actualState].icon;
  
  return (
    <InputContainer fullWidth={fullWidth} className={className}>
      {label && (
        <InputLabel htmlFor={inputId}>
          {label}
        </InputLabel>
      )}
      
      <InputWrapper
        size={size}
        state={actualState}
        hasLeftIcon={Boolean(actualLeftIcon)}
        hasRightIcon={Boolean(actualRightIcon) || needsLoadingSpinner}
      >
        {actualLeftIcon && (
          <IconWrapper position="left" size={size}>
            <FontAwesomeIcon
              icon={actualLeftIcon}
              size={fontAwesomeSize}
              color={iconColor}
            />
          </IconWrapper>
        )}
        
        <StyledInput
          ref={ref}
          id={inputId}
          type={getInputType(variant, showPassword)}
          size={size}
          state={actualState}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          {...props}
        />
        
        {(actualRightIcon || needsLoadingSpinner) && (
          <IconWrapper
            position="right"
            size={size}
            clickable={needsPasswordToggle || needsClearButton}
            onClick={handleRightIconClick}
          >
            {needsLoadingSpinner ? (
              <LoadingSpinner />
            ) : actualRightIcon ? (
              <FontAwesomeIcon
                icon={actualRightIcon}
                size={fontAwesomeSize}
                color={iconColor}
              />
            ) : null}
          </IconWrapper>
        )}
      </InputWrapper>
      
      {message && (
        <MessageText messageType={messageType}>
          {message}
        </MessageText>
      )}
    </InputContainer>
  );
});

Input.displayName = 'Input'; 