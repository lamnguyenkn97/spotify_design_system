// Simplified image utilities for Spotify Design System
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { 
  faUser, 
  faImage, 
  faCompactDisc,
  faList,
} from '@fortawesome/free-solid-svg-icons';

// Simplified icon mapping for Spotify use cases
export const PLACEHOLDER_ICONS = {
  album: faCompactDisc,
  avatar: faUser,
  playlist: faList,
  default: faImage,
} as const;

export type PlaceholderType = keyof typeof PLACEHOLDER_ICONS;

export const getPlaceholderIcon = (type: PlaceholderType = 'default'): IconProp => {
  return PLACEHOLDER_ICONS[type];
}; 