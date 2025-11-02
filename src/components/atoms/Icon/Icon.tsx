import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { Stack } from '../Stack';
import { StyledIcon, iconDefaults } from './Icon.style';
import { IconProps } from './Icon.types';

// Map our simplified sizes to FontAwesome sizes
const fontAwesomeSizeMap = {
  sm: 'sm' as SizeProp,
  md: '1x' as SizeProp,
  lg: 'lg' as SizeProp,
};

export const Icon: React.FC<IconProps> = ({
  icon,
  size = iconDefaults.size,
  color = iconDefaults.color,
  backgroundColor = iconDefaults.backgroundColor,
  circular = iconDefaults.circular,
  clickable = iconDefaults.clickable,
  disabled = iconDefaults.disabled,
  spin = false,
  onClick,
  'aria-label': ariaLabel,
  ...props
}) => {
  const fontAwesomeSize = fontAwesomeSizeMap[size] || fontAwesomeSizeMap.md;
  
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
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      circular={circular}
      clickable={clickable}
      disabled={disabled}
      onClick={clickable && !disabled ? onClick : undefined}
      onKeyDown={clickable ? handleKeyDown : undefined}
      {...accessibilityProps}
      {...props}
    >
      <Stack
        direction="row"
        align="center"
        justify="center"
        spacing="xs"
        style={{ width: '100%', height: '100%', gap: 0 }}
      >
        <FontAwesomeIcon
          icon={icon}
          size={fontAwesomeSize}
          spin={spin}
        />
      </Stack>
    </StyledIcon>
  );
};

Icon.displayName = 'Icon';
