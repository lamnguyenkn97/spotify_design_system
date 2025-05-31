import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import React, { useCallback } from 'react';
import { Typography } from '../Typography/Text';
import { ThemeProvider } from '../../../styles/ThemeProvider';
import { useTheme } from '../../../styles/ThemeProvider';

type MockTrack = {
  track: string;
  artist: string;
  duration: string;
  album: string;
};

const meta: Meta<typeof Table<MockTrack>> = {
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

type Story = StoryObj<typeof Table<MockTrack>>;

const sampleData: MockTrack[] = [
  { track: 'Blinding Lights', artist: 'The Weeknd', duration: '3:22', album: 'After Hours' },
  { track: 'Levitating', artist: 'Dua Lipa', duration: '3:50', album: 'Future Nostalgia' },
  { track: 'Save Your Tears', artist: 'The Weeknd', duration: '3:35', album: 'After Hours' },
];

const columns = [
  {
    key: 'track' as keyof MockTrack,
    label: 'Track',
    renderCell: (item: MockTrack) => (
      <Typography variant="body2">{item.track}</Typography>
    ),
  },
  {
    key: 'artist' as keyof MockTrack,
    label: 'Artist',
    renderCell: (item: MockTrack) => (
      <Typography variant="body2">{item.artist}</Typography>
    ),
  },
  {
    key: 'album' as keyof MockTrack,
    label: 'Album',
    renderCell: (item: MockTrack) => (
      <Typography variant="body2">{item.album}</Typography>
    ),
  },
  {
    key: 'duration' as keyof MockTrack,
    label: 'Duration',
    renderCell: (item: MockTrack) => (
      <Typography variant="body2">{item.duration}</Typography>
    ),
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

const ThemeWrapper = ({ children, forceDarkMode }: { children: React.ReactNode; forceDarkMode: boolean }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  React.useEffect(() => {
    if (forceDarkMode !== isDarkMode) {
      toggleTheme();
    }
  }, [forceDarkMode, isDarkMode, toggleTheme]);

  return <>{children}</>;
};

export const LightMode: Story = {
  args: {
    data: sampleData,
    columns,
  },
  decorators: [
    (Story) => (
      <ThemeWrapper forceDarkMode={false}>
        <Story />
      </ThemeWrapper>
    ),
  ],
};

export const DarkMode: Story = {
  args: {
    data: sampleData,
    columns,
  },
  decorators: [
    (Story) => (
      <ThemeWrapper forceDarkMode={true}>
        <Story />
      </ThemeWrapper>
    ),
  ],
};
