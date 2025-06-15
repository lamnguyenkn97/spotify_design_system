import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { StyledIcon, iconDefaults } from './Icon.style';
import { IconProps } from './Icon.types';

// Map our icon sizes to FontAwesome sizes
const fontAwesomeSizeMap = {
  xs: 'xs' as SizeProp,
  small: 'sm' as SizeProp,
  medium: '1x' as SizeProp,
  large: 'lg' as SizeProp,
  xl: '2x' as SizeProp,
};

export const Icon = forwardRef<HTMLSpanElement, IconProps>(({
  icon,
  size = iconDefaults.size,
  color = iconDefaults.color,
  hoverColor,
  variant = iconDefaults.variant,
  backgroundColor,
  clickable = iconDefaults.clickable,
  spin = iconDefaults.spin,
  pulse = iconDefaults.pulse,
  flip,
  rotate,
  disabled = iconDefaults.disabled,
  onClick,
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  const fontAwesomeSize = fontAwesomeSizeMap[size] || fontAwesomeSizeMap.medium;
  
  // Ensure accessibility for clickable icons
  const accessibilityProps = {
    role: clickable ? 'button' : undefined,
    tabIndex: clickable && !disabled ? 0 : undefined,
    'aria-label': ariaLabel || (clickable ? 'Icon button' : undefined),
    'aria-disabled': disabled || undefined,
  };
  
  // Handle keyboard interactions for clickable icons
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (clickable && !disabled && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.(event as any);
    }
  };

  return (
    <StyledIcon
      ref={ref}
      size={size}
      color={color}
      hoverColor={hoverColor}
      variant={variant}
      backgroundColor={backgroundColor}
      clickable={clickable}
      disabled={disabled}
      onClick={clickable && !disabled ? onClick : undefined}
      onKeyDown={clickable ? handleKeyDown : undefined}
      {...accessibilityProps}
      {...props}
    >
      <FontAwesomeIcon
        icon={icon}
        size={fontAwesomeSize}
        spin={spin}
        pulse={pulse}
        flip={flip}
        rotation={rotate}
      />
    </StyledIcon>
  );
});

Icon.displayName = 'Icon';
