import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { StyledIcon, IconProps } from './Icon.style';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

type Props = IconProps & {
  icon: FontAwesomeIconProps['icon']; // ✅ Accepts FontAwesome `icon` directly
  spin?: boolean; // ✅ Add spin support (FontAwesome feature)
  pulse?: boolean; // ✅ Add pulse animation
  flip?: 'horizontal' | 'vertical' | 'both'; // ✅ Flip support
  rotate?: 90 | 180 | 270; // ✅ Rotation support
  className?: string;
  onClick?: () => void; // ✅ Accepts onClick event
};

export const Icon: React.FC<Props> = ({
  icon,
  size,
  color = 'currentColor',
  hoverColor,
  withBackground = false,
  bgColor,
  clickable = false,
  onClick,
  spin = false,
  pulse = false,
  flip,
  rotate,
  className = '',
}) => {
  return (
    <StyledIcon
      size={size}
      color={color}
      hoverColor={hoverColor}
      withBackground={withBackground}
      bgColor={bgColor}
      clickable={clickable}
      className={className}
      onClick={clickable ? onClick : undefined} // ✅ Only trigger clicks if `clickable`
    >
      {/* ✅ Synchronizing all FontAwesome props */}
      <FontAwesomeIcon
        icon={icon}
        color={color}
        size={
          (size === 'small' ? 'xs' : size === 'large' ? 'lg' : 'md') as SizeProp
        }
        spin={spin}
        pulse={pulse}
        flip={flip}
        rotation={rotate}
      />
    </StyledIcon>
  );
};
