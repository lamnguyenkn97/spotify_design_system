import React from 'react';
import { Stack } from '../../atoms/Layout/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Image } from '../../atoms/Image/Image';
import { NowPlayingProps } from './MusicPlayer.types';

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
        shape="rounded"
      />
      <Stack direction="column" spacing="xs" style={{ minWidth: 0 }}>
        <Stack
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
          }}
        >
          <Typography
            variant="body1"
            weight="medium"
            color="primary"
          >
            {title}
          </Typography>
        </Stack>
        <Stack
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: '100%',
          }}
        >
          <Typography
            variant="body2"
            weight="regular"
            color="secondary"
          >
            {artist}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}; 