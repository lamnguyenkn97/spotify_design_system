import React from 'react';

export interface Track {
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
}

export interface MusicPlayerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onVolumeChange'> {
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
  /** Whether shuffle is enabled */
  isShuffled?: boolean;
  /** Repeat mode: 'off' | 'one' | 'all' */
  repeatMode?: 'off' | 'one' | 'all';
  /** Callback when play/pause is clicked */
  onPlayPause?: () => void;
  /** Callback when next track is clicked */
  onNext?: () => void;
  /** Callback when previous track is clicked */
  onPrevious?: () => void;
  /** Callback when shuffle is toggled */
  onShuffle?: () => void;
  /** Callback when repeat is toggled */
  onRepeat?: () => void;
  /** Callback when seeking to a specific time */
  onSeek?: (time: number) => void;
  /** Callback when volume is changed */
  onVolumeChange?: (volume: number) => void;
  /** Callback when add to playlist is clicked */
  onAddToPlaylist?: () => void;
  /** Callback when lyrics is clicked */
  onLyrics?: () => void;
  /** Callback when queue is clicked */
  onQueue?: () => void;
  /** Callback when cast is clicked */
  onCast?: () => void;
  /** Callback when fullscreen is clicked */
  onFullscreen?: () => void;
} 