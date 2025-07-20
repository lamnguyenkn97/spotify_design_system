import React, { forwardRef, useMemo, useCallback } from 'react';
import { Stack } from '../../atoms';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { NowPlaying } from './NowPlaying';
import { MusicPlayerProps } from './MusicPlayer.types';
import { colors, spacing, sizes, animations } from '../../../styles';

// Player dimensions configuration using design tokens
const PLAYER_STYLES = {
  container: {
    height: sizes.container.header, // 64px - consistent header height
    zIndex: sizes.zIndex.overlay, // 1200 - above other content
    borderColor: colors.grey.grey3, // Consistent border color
  },
  centerSection: {
    flex: 1,
    maxWidth: sizes.maxWidth.modal, // 600px - constrain center section
  },
} as const;

// Default player styles
const getDefaultPlayerStyles = () => ({
  position: 'fixed' as const,
  bottom: 0,
  left: 0,
  right: 0,
  height: PLAYER_STYLES.container.height,
  borderTop: `1px solid ${PLAYER_STYLES.container.borderColor}`,
  zIndex: PLAYER_STYLES.container.zIndex,
  width: '100%',
  padding: `${spacing.md} ${spacing.lg}`, // Adjusted padding: less vertical, same horizontal
  backgroundColor: colors.primary.black,
  transition: animations.transitions.all,
  boxSizing: 'border-box' as const,
  overflow: 'hidden' as const,
});

// Semantic color function for player states
const getPlayerColors = () => ({
  background: colors.primary.black, // Main player background
  border: colors.grey.grey3, // Border color
  text: {
    primary: colors.primary.white, // Main text color
    secondary: colors.grey.grey6, // Secondary text color
  },
});

export const MusicPlayer = forwardRef<HTMLDivElement, MusicPlayerProps>(
  (
    {
      currentTrack,
      isPlaying = false,
      currentTime = 0,
      duration = 0,
      volume = 100,
      onPlayPause,
      onNext,
      onPrevious,
      onSeek,
      onVolumeChange,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Memoized default handlers to prevent unnecessary re-renders
    const defaultHandlers = useMemo(
      () => ({
        onPlayPause: () => {},
        onNext: () => {},
        onPrevious: () => {},
        onSeek: (_: number) => {},
        onVolumeChange: (_: number) => {},
      }),
      []
    );

    // Memoized player colors
    const playerColors = useMemo(() => getPlayerColors(), []);

    // Memoized merged styles (default + custom)
    const mergedStyles = useMemo(() => {
      const defaultStyles = getDefaultPlayerStyles();
      return {
        ...defaultStyles,
        ...style, // Custom style overrides defaults
      };
    }, [style]);

    // Memoized event handlers
    const handlePlayPause = useCallback(() => {
      (onPlayPause || defaultHandlers.onPlayPause)();
    }, [onPlayPause, defaultHandlers.onPlayPause]);

    const handleNext = useCallback(() => {
      (onNext || defaultHandlers.onNext)();
    }, [onNext, defaultHandlers.onNext]);

    const handlePrevious = useCallback(() => {
      (onPrevious || defaultHandlers.onPrevious)();
    }, [onPrevious, defaultHandlers.onPrevious]);

    const handleSeek = useCallback(
      (time: number) => {
        (onSeek || defaultHandlers.onSeek)(time);
      },
      [onSeek, defaultHandlers.onSeek]
    );

    const handleVolumeChange = useCallback(
      (volume: number) => {
        (onVolumeChange || defaultHandlers.onVolumeChange)(volume);
      },
      [onVolumeChange, defaultHandlers.onVolumeChange]
    );

    return (
      <Stack
        ref={ref}
        direction="row"
        spacing="md"
        align="center"
        justify="space-between"
        className={className}
        style={{
          ...mergedStyles,
          minHeight: 0,
          maxHeight: '100%',
        }}
        {...props}
      >
        <NowPlaying
          title={currentTrack?.title}
          artist={currentTrack?.artist}
          coverUrl={currentTrack?.coverUrl}
        />

        <Stack
          direction="column"
          spacing="sm"
          align="center"
          style={{
            ...PLAYER_STYLES.centerSection,
            minHeight: 0,
            maxHeight: '100%',
            overflow: 'hidden',
          }}
        >
          <PlayerControls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            onSeek={handleSeek}
          />
        </Stack>

        <VolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
      </Stack>
    );
  }
);

MusicPlayer.displayName = 'MusicPlayer';
