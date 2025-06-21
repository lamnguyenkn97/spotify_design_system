export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'away' | 'busy';

export interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** User's name for fallback initials */
  name?: string;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Shape of the avatar */
  shape?: AvatarShape;
  /** Online status indicator */
  status?: AvatarStatus;
  /** Show verified badge */
  verified?: boolean;
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Loading state */
  loading?: boolean;
}

export const avatarDefaults: Required<Pick<AvatarProps, 'size' | 'shape'>> = {
  size: 'md',
  shape: 'circle',
}; 