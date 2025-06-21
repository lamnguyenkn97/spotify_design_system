import React, { useState, useRef, useEffect } from 'react';
import { TooltipContainer, TooltipContent } from './Tooltip.style';
import { TooltipProps, tooltipDefaults } from './Tooltip.types';

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = tooltipDefaults.position,
  trigger = tooltipDefaults.trigger,
  visible,
  delay = tooltipDefaults.delay,
  maxWidth,
  className,
  children,
  onVisibilityChange,
}) => {
  const [internalVisible, setInternalVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Use controlled visibility if provided, otherwise use internal state
  const isVisible = visible !== undefined ? visible : internalVisible;
  
  const showTooltip = () => {
    if (trigger === 'manual') return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setInternalVisible(true);
      onVisibilityChange?.(true);
    }, delay);
  };
  
  const hideTooltip = () => {
    if (trigger === 'manual') return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    setInternalVisible(false);
    onVisibilityChange?.(false);
  };
  
  const toggleTooltip = () => {
    if (trigger !== 'click') return;
    
    const newVisible = !isVisible;
    setInternalVisible(newVisible);
    onVisibilityChange?.(newVisible);
  };
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  // Event handlers based on trigger type
  const getEventHandlers = () => {
    switch (trigger) {
      case 'hover':
        return {
          onMouseEnter: showTooltip,
          onMouseLeave: hideTooltip,
        };
      case 'focus':
        return {
          onFocus: showTooltip,
          onBlur: hideTooltip,
        };
      case 'click':
        return {
          onClick: toggleTooltip,
        };
      default:
        return {};
    }
  };
  
  return (
    <TooltipContainer className={className} {...getEventHandlers()}>
      {children}
      
      {content && (
        <TooltipContent
          $position={position}
          $visible={isVisible}
          $maxWidth={maxWidth}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

Tooltip.displayName = 'Tooltip'; 