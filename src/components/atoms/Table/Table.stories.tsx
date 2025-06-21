import { Meta, StoryObj } from '@storybook/react';
import { Table, TableProps } from './';
import React from 'react';
import { Typography } from '../Typography/Text';
import { Image } from '../Image';
import { Stack } from '../Stack';
import { ThemeProvider } from '../../../styles/ThemeProvider';

type SpotifyTrack = {
  id: string;
  title: string;
  artist: string;
  album: string;
  albumCover: string;
  duration: string;
  dateAdded: string;
  plays: number;
};

const meta: Meta<typeof Table<SpotifyTrack>> = {
  title: 'atoms/Table',
  component: Table,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Table<SpotifyTrack>>;

const spotifyData: SpotifyTrack[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumCover: 'https://i.scdn.co/image/ab67616d0000b273ef6f581fdc8d5678b85ba4c3',
    duration: '3:22',
    dateAdded: '2 days ago',
    plays: 2847582,
  },
  {
    id: '2',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    albumCover: 'https://i.scdn.co/image/ab67616d0000b273ef6f581fdc8d5678b85ba4c3',
    duration: '3:23',
    dateAdded: '1 week ago',
    plays: 1956473,
  },
  {
    id: '3',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    albumCover: 'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a',
    duration: '2:58',
    dateAdded: '3 days ago',
    plays: 3245891,
  },
  {
    id: '4',
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'Stay',
    albumCover: 'https://i.scdn.co/image/ab67616d0000b273ef6f581fdc8d5678b85ba4c3',
    duration: '2:21',
    dateAdded: '5 days ago',
    plays: 1789234,
  },
  {
    id: '5',
    title: 'Industry Baby',
    artist: 'Lil Nas X & Jack Harlow',
    album: 'MONTERO',
    albumCover: 'https://i.scdn.co/image/ab67616d0000b273be82673b5f79d9658ec0a9fd',
    duration: '3:32',
    dateAdded: '1 week ago',
    plays: 2156789,
  },
  {
    id: '6',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    albumCover: 'https://i.scdn.co/image/ab67616d0000b273ef6f581fdc8d5678b85ba4c3',
    duration: '3:58',
    dateAdded: '2 weeks ago',
    plays: 4567823,
  },
];

const formatPlays = (plays: number): string => {
  if (plays >= 1000000) {
    return `${(plays / 1000000).toFixed(1)}M`;
  } else if (plays >= 1000) {
    return `${(plays / 1000).toFixed(0)}K`;
  }
  return plays.toString();
};

const columns: TableProps<SpotifyTrack>['columns'] = [
  {
    key: 'title',
    label: 'Title',
    width: '40%',
    renderCell: (item: SpotifyTrack) => (
      <Stack direction="row" spacing="md" align="center">
        <Image
          src={item.albumCover}
          alt={`${item.album} cover`}
          size="md"
          shape="rounded"
          variant="album"
        />
        <Stack direction="column" spacing="sm">
          <Typography variant="body" weight="medium">
            {item.title}
          </Typography>
          <Typography variant="caption" color="muted">
            {item.artist}
          </Typography>
        </Stack>
      </Stack>
    ),
  },
  {
    key: 'album',
    label: 'Album',
    width: '25%',
    renderCell: (item: SpotifyTrack) => (
      <Typography variant="body" color="muted">
        {item.album}
      </Typography>
    ),
  },
  {
    key: 'dateAdded',
    label: 'Date added',
    width: '15%',
    renderCell: (item: SpotifyTrack) => (
      <Typography variant="body" color="muted">
        {item.dateAdded}
      </Typography>
    ),
  },
  {
    key: 'plays',
    label: 'Plays',
    width: '10%',
    renderCell: (item: SpotifyTrack) => (
      <Typography variant="body" color="muted">
        {formatPlays(item.plays)}
      </Typography>
    ),
  },
  {
    key: 'duration',
    label: 'Duration',
    width: '10%',
    renderCell: (item: SpotifyTrack) => (
      <Typography variant="body" color="muted">
        {item.duration}
      </Typography>
    ),
  },
];

export const Default: Story = {
  args: {
    data: spotifyData,
    columns,
  },
};

export const SpotifyPlaylist: Story = {
  args: {
    data: spotifyData,
    columns,
  },
};



// Compact version without plays column
const compactColumns: TableProps<SpotifyTrack>['columns'] = [
  {
    key: 'title',
    label: 'Title',
    width: '50%',
    renderCell: (item: SpotifyTrack) => (
      <Stack direction="row" spacing="sm" align="center">
        <Image
          src={item.albumCover}
          alt={`${item.album} cover`}
          size="sm"
          shape="rounded"
          variant="album"
        />
        <Stack direction="column" spacing="sm">
          <Typography variant="body" weight="medium">
            {item.title}
          </Typography>
          <Typography variant="caption" color="muted">
            {item.artist}
          </Typography>
        </Stack>
      </Stack>
    ),
  },
  {
    key: 'album',
    label: 'Album',
    width: '30%',
    renderCell: (item: SpotifyTrack) => (
      <Typography variant="body" color="muted">
        {item.album}
      </Typography>
    ),
  },
  {
    key: 'dateAdded',
    label: 'Date added',
    width: '20%',
    renderCell: (item: SpotifyTrack) => (
      <Typography variant="body" color="muted">
        {item.dateAdded}
      </Typography>
    ),
  },
];

export const Compact: Story = {
  args: {
    data: spotifyData.slice(0, 4),
    columns: compactColumns,
  },
};
