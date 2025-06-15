import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  PillContainer,
  StyledPill,
  IconWrapper,
  BadgeWrapper,
  Badge,
  DismissButton,
  LoadingSpinner,
  pillDefaults,
} from './Pill.style';
import { PillProps } from './Pill.types';

// Map our pill sizes to FontAwesome sizes
const fontAwesomeSizeMap: Record<string, SizeProp> = {
  xs: 'xs',
  sm: 'xs',
  md: 'sm',
  lg: 'sm',
  xl: 'lg',
};

export const Pill = forwardRef<HTMLButtonElement, PillProps>(
  (
    {
      label,
      size = pillDefaults.size,
      variant = pillDefaults.variant,
      state = pillDefaults.state,
      shape = pillDefaults.shape,
      selected = pillDefaults.selected,
      disabled = pillDefaults.disabled,
      loading = pillDefaults.loading,
      leftIcon,
      rightIcon,
      dismissible = pillDefaults.dismissible,
      onDismiss,
      badge,
      badgePosition = pillDefaults.badgePosition,
      fullWidth = pillDefaults.fullWidth,
      interactive = pillDefaults.interactive,
      customColor,
      customTextColor,
      tooltip,
      animate = pillDefaults.animate,
      animationDelay = pillDefaults.animationDelay,
      children,
      className,
      testId,
      onClick,
      ...props
    },
    ref
  ) => {
    // Determine actual state (disabled and loading override other states)
    const actualState = disabled
      ? 'disabled'
      : loading
        ? 'loading'
        : selected
          ? 'selected'
          : state;

    // Handle dismiss functionality
    const handleDismiss = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDismiss?.();
    };

    // Handle main click
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!interactive || disabled || loading) return;
      onClick?.(event);
    };

    // Determine content
    const content = children || label;

    // FontAwesome icon size
    const iconSize = fontAwesomeSizeMap[size] || 'sm';

    return (
      <PillContainer
        fullWidth={fullWidth}
        animate={animate}
        animationDelay={animationDelay}
        className={className}
        title={tooltip}
      >
        <StyledPill
          ref={ref}
          size={size}
          variant={variant}
          pillState={actualState}
          shape={shape}
          selected={selected}
          fullWidth={fullWidth}
          interactive={interactive}
          customColor={customColor}
          customTextColor={customTextColor}
          disabled={disabled}
          loading={loading}
          onClick={handleClick}
          data-testid={testId}
          {...props}
        >
          {/* Left Icon */}
          {leftIcon && !loading && (
            <IconWrapper position="left" size={size}>
              <FontAwesomeIcon icon={leftIcon} size={iconSize} />
            </IconWrapper>
          )}

          {/* Loading Spinner */}
          {loading && <LoadingSpinner />}

          {/* Content */}
          {content}

          {/* Right Icon */}
          {rightIcon && !dismissible && !loading && (
            <IconWrapper position="right" size={size}>
              <FontAwesomeIcon icon={rightIcon} size={iconSize} />
            </IconWrapper>
          )}

          {/* Dismiss Button */}
          {dismissible && !loading && (
            <DismissButton
              onClick={handleDismiss}
              aria-label="Remove"
              tabIndex={-1}
            >
              <FontAwesomeIcon icon={faTimes} size={iconSize} />
            </DismissButton>
          )}
        </StyledPill>

        {/* Badge */}
        {badge && badgePosition !== 'inline' && (
          <BadgeWrapper position={badgePosition} size={size}>
            <Badge size={size}>{badge}</Badge>
          </BadgeWrapper>
        )}

        {/* Inline Badge */}
        {badge && badgePosition === 'inline' && (
          <BadgeWrapper position="inline" size={size}>
            <Badge size={size}>{badge}</Badge>
          </BadgeWrapper>
        )}
      </PillContainer>
    );
  }
);

Pill.displayName = 'Pill';
