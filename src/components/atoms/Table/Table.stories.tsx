import { Meta, StoryObj } from '@storybook/react';
import { Table, TableProps } from './';
import React from 'react';
import { Typography } from '../Typography/Text';
import { Image } from '../Image';
import { Stack } from '../Stack';
import { Icon } from '../Icon';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { faClock, faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { colors, spacing } from '../../../styles';

type SpotifyTrack = {
  id: string;
  trackNumber: number;
  title: string;
  artist: string;
  album: string;
  albumCover: string;
  duration: string;
  dateAdded: string;
  plays: number;
  isExplicit?: boolean;
  isMusicVideo?: boolean;
  isDownloaded?: boolean;
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
    trackNumber: 1,
    title: 'Anti-Hero',
    artist: 'Taylor Swift',
    album: 'Midnights',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5',
    duration: '3:20',
    dateAdded: '2 days ago',
    plays: 2847582,
    isDownloaded: true,
  },
  {
    id: '2',
    trackNumber: 2,
    title: "pretty isn't pretty",
    artist: 'Olivia Rodrigo',
    album: 'GUTS',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc',
    duration: '3:19',
    dateAdded: '1 week ago',
    plays: 1956473,
    isExplicit: true,
    isDownloaded: true,
  },
  {
    id: '3',
    trackNumber: 3,
    title: 'Flowers',
    artist: 'Miley Cyrus',
    album: 'Endless Summer Vacation',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e',
    duration: '3:20',
    dateAdded: '3 days ago',
    plays: 3245891,
    isMusicVideo: true,
  },
  {
    id: '4',
    trackNumber: 4,
    title: 'As It Was',
    artist: 'Harry Styles',
    album: "Harry's House",
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b273904445d34bf2042d0b6ff4bb',
    duration: '2:47',
    dateAdded: '5 days ago',
    plays: 1789234,
    isMusicVideo: true,
  },
  {
    id: '5',
    trackNumber: 5,
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b2735076e4160d018e378f488c33',
    duration: '2:54',
    dateAdded: '1 week ago',
    plays: 2156789,
    isMusicVideo: true,
  },
  {
    id: '6',
    trackNumber: 6,
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647',
    duration: '3:23',
    dateAdded: '2 weeks ago',
    plays: 4567823,
  },
  {
    id: '7',
    trackNumber: 7,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b273ef6f581fdc8d5678b85ba4c3',
    duration: '3:22',
    dateAdded: '1 week ago',
    plays: 3245891,
  },
  {
    id: '8',
    trackNumber: 8,
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a',
    duration: '2:58',
    dateAdded: '3 days ago',
    plays: 4567823,
    isDownloaded: true,
  },
  {
    id: '9',
    trackNumber: 9,
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b273318443aab3531a0558e79a4d',
    duration: '3:58',
    dateAdded: '2 weeks ago',
    plays: 2156789,
  },
  {
    id: '10',
    trackNumber: 10,
    title: 'Stay',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'Stay',
    albumCover:
      'https://i.scdn.co/image/ab67616d0000b273ef6f581fdc8d5678b85ba4c3',
    duration: '2:21',
    dateAdded: '5 days ago',
    plays: 1789234,
    isMusicVideo: true,
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
    key: 'trackNumber',
    label: '#',
    width: '48px',
    align: 'left',
    renderCell: (item: SpotifyTrack) => (
      <Typography variant="body" color="muted">
        {item.trackNumber}
      </Typography>
    ),
  },
  {
    key: 'title',
    label: 'Title',
    width: 'auto',
    align: 'left',
    renderCell: (item: SpotifyTrack) => (
      <Stack
        direction="row"
        spacing="sm"
        align="center"
        style={{ minWidth: 0 }}
      >
        <Image
          src={item.albumCover}
          alt={`${item.album} cover`}
          size="sm"
          shape="rounded"
          style={{ flexShrink: 0 }}
        />
        <Stack direction="column" spacing="xs" style={{ minWidth: 0, flex: 1 }}>
          <Stack
            direction="row"
            spacing="xs"
            align="center"
            style={{ minWidth: 0 }}
          >
            <div
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                flex: 1,
                minWidth: 0,
              }}
            >
              <Typography variant="body" weight="medium">
                {item.title}
              </Typography>
            </div>
          </Stack>
          <Stack
            direction="row"
            spacing="xs"
            align="center"
            style={{ minWidth: 0 }}
          >
            {item.isMusicVideo && (
              <div style={{ flexShrink: 0 }}>
                <Typography variant="caption" color="muted">
                  Music video
                </Typography>
              </div>
            )}
            {item.isExplicit && (
              <span
                style={{
                  backgroundColor: colors.grey.grey3,
                  borderRadius: '2px',
                  padding: '2px 4px',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  color: colors.primary.white,
                  lineHeight: '1',
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '14px',
                  minHeight: '14px',
                }}
              >
                E
              </span>
            )}
            {item.isMusicVideo && (
              <span
                style={{
                  backgroundColor: colors.primary.black,
                  borderRadius: '2px',
                  padding: '2px 4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  height: '14px',
                  minHeight: '14px',
                }}
              >
                <Icon
                  icon={faPlay}
                  size="sm"
                  color="primary"
                  style={{ fontSize: '0.625rem', lineHeight: 1 }}
                />
              </span>
            )}
            <div
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                flex: 1,
                minWidth: 0,
              }}
            >
              <Typography variant="caption" color="muted">
                {item.artist}
              </Typography>
            </div>
          </Stack>
        </Stack>
      </Stack>
    ),
  },
  {
    key: 'album',
    label: 'Album',
    width: 'auto',
    align: 'left',
    renderCell: (item: SpotifyTrack) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing.xs,
          minWidth: 0,
          height: '100%',
        }}
      >
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flex: 1,
            minWidth: 0,
          }}
        >
          <Typography variant="body" color="muted">
            {item.album}
          </Typography>
        </div>
        {item.isDownloaded && (
          <Icon
            icon={faCheck}
            color="black"
            circular
            backgroundColor={colors.primary.brand}
            style={{
              flexShrink: 0,
              fontSize: '1rem',
              width: '0.5rem',
              height: '0.5rem',
            }}
          />
        )}
      </div>
    ),
  },
  {
    key: 'duration',
    label: <Icon icon={faClock} size="sm" color="muted" />,
    width: '60px',
    align: 'right',
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
