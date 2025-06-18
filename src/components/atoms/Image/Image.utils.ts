// Image placeholder utilities for Spotify Design System
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { 
  faUser, 
  faImage, 
  faExclamationTriangle,
  faCompactDisc,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

// FontAwesome icon mapping for different placeholder types
export const PLACEHOLDER_ICONS = {
  avatar: faUser,
  album: faCompactDisc,
  playlist: faList,
  image: faImage,
  broken: faExclamationTriangle,
  spotify: faSpotify,
} as const;

export type PlaceholderType = keyof typeof PLACEHOLDER_ICONS;

export const getPlaceholderIcon = (type: PlaceholderType = 'image'): IconProp => {
  return PLACEHOLDER_ICONS[type];
};

// For backwards compatibility, we can still provide a "src" but it will be ignored
// when using FontAwesome placeholders
export const getPlaceholderSrc = (type: PlaceholderType = 'image'): string => {
  // Return empty string to indicate no src needed - will use FontAwesome icon instead
  return '';
}; 