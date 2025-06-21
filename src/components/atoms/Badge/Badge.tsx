import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { BadgeContainer, BadgeElement } from './Badge.style';
import { BadgeProps, badgeDefaults } from './Badge.types';

export const Badge: React.FC<BadgeProps> = ({
  variant = badgeDefaults.variant,
  color = badgeDefaults.color,
  size = badgeDefaults.size,
  count,
  maxCount = badgeDefaults.maxCount,
  showZero = badgeDefaults.showZero,
  icon,
  position,
  className,
  children,
  visible = badgeDefaults.visible,
}) => {
  // Don't render if not visible
  if (!visible) {
    return children ? <>{children}</> : null;
  }

  // Don't render count badge if count is 0 and showZero is false
  if (variant === 'count' && count === 0 && !showZero) {
    return children ? <>{children}</> : null;
  }

  const hasChildren = Boolean(children);
  const isPositioned = hasChildren && Boolean(position);

  const getBadgeContent = () => {
    switch (variant) {
      case 'dot':
        return null;
      case 'count':
        if (count === undefined) return null;
        return count > maxCount ? `${maxCount}+` : count.toString();
      case 'status':
        return null;
      case 'icon':
        return (
          <FontAwesomeIcon 
            icon={icon === 'check' ? faCheck : faCheck} 
            size="xs" 
          />
        );
      default:
        return null;
    }
  };

  const badgeElement = (
    <BadgeElement
      $variant={variant}
      $color={color}
      $size={size}
      $position={position}
      $positioned={isPositioned}
      className={className}
    >
      {getBadgeContent()}
    </BadgeElement>
  );

  if (hasChildren) {
    return (
      <BadgeContainer $hasChildren={true}>
        {children}
        {badgeElement}
      </BadgeContainer>
    );
  }

  return (
    <BadgeContainer $hasChildren={false}>
      {badgeElement}
    </BadgeContainer>
  );
};

Badge.displayName = 'Badge'; 