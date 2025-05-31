import React from 'react';
import { Stack } from '../../atoms/Layout/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Image } from '../../atoms/Image/Image';

interface NowPlayingProps {
  title?: string;
  artist?: string;
  coverUrl?: string;
}

export const NowPlaying: React.FC<NowPlayingProps> = ({
  title = 'Not Playing',
  artist = 'Unknown Artist',
  coverUrl = 'https://via.placeholder.com/56',
}) => {
  return (
    <Stack direction="row" spacing="md" align="center" style={{ minWidth: 180 }}>
      <Image
        src={coverUrl}
        alt={`${title} album cover`}
        width={56}
        height={56}
        borderRadius="xs"
      />
      <Stack direction="column" spacing="xs" style={{ minWidth: 0 }}>
        <Typography
          variant="body1"
          weight="bold"
          color="primary"
          component="span"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          weight="regular"
          color="secondary"
          component="span"
        >
          {artist}
        </Typography>
      </Stack>
    </Stack>
  );
}; 