import React, { forwardRef, useId, useEffect, useRef, useImperativeHandle } from 'react';
import { MessageText } from '../MessageText';
import { TextAreaProps } from './TextArea.types';
import {
  TextAreaContainer,
  TextAreaLabel,
  StyledTextArea,
} from './TextArea.style';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  message,
  error = false,
  fullWidth = false,
  rows = 3,
  maxRows,
  autoResize = false,
  onValueChange,
  className,
  onChange,
  style,
  ...props
}, ref) => {
  const textAreaId = useId();
  const internalRef = useRef<HTMLTextAreaElement>(null);
  
  // Expose the internal ref to parent via forwardRef
  useImperativeHandle(ref, () => internalRef.current as HTMLTextAreaElement);

  // Auto-resize logic
  const adjustHeight = () => {
    const textArea = internalRef.current;
    if (!textArea || !autoResize) return;

    // Reset height to auto to get the correct scrollHeight
    textArea.style.height = 'auto';
    
    const lineHeight = parseInt(getComputedStyle(textArea).lineHeight);
    const minHeight = lineHeight * (rows || 3);
    const maxHeight = maxRows ? lineHeight * maxRows : Infinity;
    
    const newHeight = Math.min(Math.max(textArea.scrollHeight, minHeight), maxHeight);
    textArea.style.height = `${newHeight}px`;
  };

  // Handle input change events
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    
    // Adjust height if auto-resize is enabled
    if (autoResize) {
      adjustHeight();
    }
    
    // Call the original onChange if provided
    onChange?.(event);
    
    // Call our custom onValueChange if provided
    onValueChange?.(value);
  };

  // Initial height adjustment on mount
  useEffect(() => {
    if (autoResize && props.value) {
      adjustHeight();
    }
  }, [autoResize, props.value]);

  return (
    <TextAreaContainer fullWidth={fullWidth} className={className}>
      {label && (
        <TextAreaLabel htmlFor={textAreaId}>
          {label}
        </TextAreaLabel>
      )}
      <StyledTextArea
        ref={internalRef}
        id={textAreaId}
        rows={rows}
        hasError={error}
        autoResize={autoResize}
        onChange={handleChange}
        style={style}
        {...props}
      />
      {message && (
        <MessageText type={error ? 'error' : 'helper'}>
          {message}
        </MessageText>
      )}
    </TextAreaContainer>
  );
});

TextArea.displayName = 'TextArea';

