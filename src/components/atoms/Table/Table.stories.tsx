import { Meta, StoryObj } from '@storybook/react';
import { Table, TableProps } from './Table';
import React from 'react';
import { Typography } from '../Typography/Text';

type MockTrack = {
  track: string;
  artist: string;
  duration: string;
};

const meta: Meta<TableProps<MockTrack>> = {
  title: 'atoms/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<TableProps<MockTrack>>;

const sampleData = [
  { track: 'Blinding Lights', artist: 'The Weeknd', duration: '3:22' },
  { track: 'Levitating', artist: 'Dua Lipa', duration: '3:50' },
  { track: 'Save Your Tears', artist: 'The Weeknd', duration: '3:35' },
];

const columns = [
  {
    key: 'track' as keyof MockTrack,
    label: 'Track',
    renderCell: (item: MockTrack) => (
      <Typography variant={'body2'}>{item?.track}</Typography>
    ),
  },
  {
    key: 'artist' as keyof MockTrack,
    label: 'Artist',
    renderCell: (item: MockTrack) => (
      <Typography variant={'body2'}>{item?.artist}</Typography>
    ),
  },
  {
    key: 'duration' as keyof MockTrack,
    label: 'Duration',
    renderCell: (item: MockTrack) => (
      <Typography variant={'body2'}>{item?.duration} ⏱️</Typography>
    ),
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};
