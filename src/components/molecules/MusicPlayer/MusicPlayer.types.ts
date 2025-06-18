export interface Track {
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
}

export interface MusicPlayerProps {
  /** Current track information */
  currentTrack?: Track;
  /** Whether the player is currently playing */
  isPlaying?: boolean;
  /** Current playback time in seconds */
  currentTime?: number;
  /** Total track duration in seconds */
  duration?: number;
  /** Volume level (0-100) */
  volume?: number;
  /** Callback when play/pause is clicked */
  onPlayPause?: () => void;
  /** Callback when next track is clicked */
  onNext?: () => void;
  /** Callback when previous track is clicked */
  onPrevious?: () => void;
  /** Callback when seeking to a specific time */
  onSeek?: (time: number) => void;
  /** Callback when volume is changed */
  onVolumeChange?: (volume: number) => void;
  /** Additional className for styling */
  className?: string;
  /** Test ID for testing */
  'data-testid'?: string;
}

export interface PlayerControlsProps {
  /** Whether the player is currently playing */
  isPlaying: boolean;
  /** Callback when play/pause is clicked */
  onPlayPause: () => void;
  /** Callback when next track is clicked */
  onNext: () => void;
  /** Callback when previous track is clicked */
  onPrevious: () => void;
}

export interface NowPlayingProps {
  /** Track title */
  title?: string;
  /** Artist name */
  artist?: string;
  /** Album cover URL */
  coverUrl?: string;
}

export interface ProgressBarProps {
  /** Current playback time in seconds */
  currentTime: number;
  /** Total track duration in seconds */
  duration: number;
  /** Callback when seeking to a specific time */
  onSeek: (time: number) => void;
}

export interface VolumeControlProps {
  /** Volume level (0-100) */
  volume: number;
  /** Callback when volume is changed */
  onVolumeChange: (volume: number) => void;
} 