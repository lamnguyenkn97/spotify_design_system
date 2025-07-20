import React, { memo, useMemo } from 'react';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Image } from '../../atoms/Image/Image';
import { NowPlayingProps } from './MusicPlayer.types';
import { sizes, spacing, colors } from '../../../styles';

// Default fallback values using design tokens
const NOW_PLAYING_DEFAULTS = {
  title: 'Not Playing',
  artist: 'Unknown Artist',
  coverUrl: 'https://via.placeholder.com/96x96/333333/ffffff?text=♪',
  minWidth: '200px', // Increased to accommodate larger image
} as const;

// Semantic color function for track states
const getTrackColors = (hasTrack: boolean) => ({
  title: hasTrack ? 'primary' as const : 'secondary' as const,
  artist: hasTrack ? 'secondary' as const : 'muted' as const,
});

export const NowPlaying = memo<NowPlayingProps>(({
  title,
  artist,
  coverUrl,
}) => {
  // Memoized text overflow styles
  const textOverflowStyle = useMemo(() => ({
    overflow: 'hidden' as const,
    textOverflow: 'ellipsis' as const,
    whiteSpace: 'nowrap' as const,
    width: '100%',
  }), []);

  // Determine if we have valid track data
  const hasTrack = useMemo(() => {
    return Boolean(title && title !== NOW_PLAYING_DEFAULTS.title);
  }, [title]);

  // Memoized display values with fallbacks
  const displayValues = useMemo(() => {
    return {
      title: title || NOW_PLAYING_DEFAULTS.title,
      artist: artist || NOW_PLAYING_DEFAULTS.artist,
      coverUrl: coverUrl || NOW_PLAYING_DEFAULTS.coverUrl,
    };
  }, [title, artist, coverUrl]);

  // Memoized track colors
  const trackColors = useMemo(() => getTrackColors(hasTrack), [hasTrack]);

  return (
    <Stack
      direction="row"
      spacing="md"
      align="center"
      style={{ 
        minWidth: NOW_PLAYING_DEFAULTS.minWidth,
        minHeight: 0,
        maxHeight: '100%',
        flexShrink: 0,
        overflow: 'hidden',
      }}
    >
      <Image
        src={displayValues.coverUrl}
        alt={`${displayValues.title} album cover`}
        size="md"
        shape="rounded"
        style={{
          flexShrink: 0, // Prevent image from shrinking
          opacity: hasTrack ? 1 : 0.7, // Dim image when no track
        }}
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          e.currentTarget.src = NOW_PLAYING_DEFAULTS.coverUrl;
        }}
      />
      
      <Stack direction="column" spacing="sm" style={{ minWidth: 0 }}>
        <Stack style={textOverflowStyle}>
          <Typography 
            variant="body" 
            weight="medium" 
            color={trackColors.title}
            style={{
              transition: 'color 0.2s ease',
            }}
          >
            {displayValues.title}
          </Typography>
        </Stack>
        <Stack style={textOverflowStyle}>
          <Typography 
            variant="body" 
            size="sm" 
            weight="regular" 
            color={trackColors.artist}
            style={{
              transition: 'color 0.2s ease',
            }}
          >
            {displayValues.artist}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
});

NowPlaying.displayName = 'NowPlaying';
