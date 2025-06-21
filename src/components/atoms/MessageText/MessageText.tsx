import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfoCircle,
  faExclamationTriangle,
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { spacing, colors } from '../../../styles';
import { Typography } from '../Typography/Text/Typography';
import { TypographyColor } from '../Typography/Text/Typography.types';
import { Stack } from '../Stack/Stack';

export type MessageType = 'helper' | 'error' | 'success' | 'warning';

export interface MessageTextProps {
  /**
   * Type of message which determines the color and icon
   * @default 'helper'
   */
  type?: MessageType;

  /**
   * The message content
   */
  children: React.ReactNode;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Custom margin top override
   */
  marginTop?: string;

  /**
   * Whether to show the icon
   * @default true
   */
  showIcon?: boolean;
}

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 14px; /* Match the FontAwesome sm size */
  height: 14px; /* Match the FontAwesome sm size */
  margin-top: 2px; /* Align with first line of text (accounts for line-height) */
`;

// Map message types to Typography colors
const getTypographyColor = (type: MessageType): TypographyColor => {
  switch (type) {
    case 'error':
      return 'error';
    case 'success':
      return 'success';
    case 'warning':
      return 'warning';
    case 'helper':
    default:
      return 'secondary'; // Grey color for helper text
  }
};

// Map message types to actual CSS color values for icons
const getIconColor = (type: MessageType): string => {
  switch (type) {
    case 'error':
      return colors.decorative.redRedWine;
    case 'success':
      return colors.decorative.evergreen;
    case 'warning':
      return colors.decorative.mellowYellow;
    case 'helper':
    default:
      return colors.grey.grey6;
  }
};

// Icon mapping for each message type
const getMessageIcon = (type: MessageType) => {
  switch (type) {
    case 'error':
      return faExclamationCircle;
    case 'success':
      return faCheckCircle;
    case 'warning':
      return faExclamationTriangle;
    case 'helper':
    default:
      return faInfoCircle;
  }
};

export const MessageText: React.FC<MessageTextProps> = ({
  type = 'helper',
  children,
  className,
  marginTop,
  showIcon = true,
}) => {
  const icon = getMessageIcon(type);
  const typographyColor = getTypographyColor(type);
  const iconColor = getIconColor(type);

  return (
    <Stack 
      direction="row" 
      spacing="sm" 
      align="start"
      className={className}
      style={{ marginTop: marginTop || spacing.xs }}
    >
      {showIcon && (
        <IconWrapper>
          <FontAwesomeIcon icon={icon} size="sm" color={iconColor} />
        </IconWrapper>
      )}
      <Typography
        variant="body"
        size="sm"
        color={typographyColor}
        component="span"
      >
        {children}
      </Typography>
    </Stack>
  );
};
