import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  HorizontalTileCard,
  HorizontalTileCardProps,
} from './horizontalTileCard';

export default {
  title: 'Molecules/HorizontalTileCard',
  component: HorizontalTileCard,
} as Meta<typeof HorizontalTileCard>;

const Template: StoryFn<HorizontalTileCardProps> = (args) => (
  <HorizontalTileCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  image: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
  title: 'Liked Songs',
  subtitle: 'Playlist • 207 songs',
};

export const WithProgress = Template.bind({});
WithProgress.args = {
  image: 'https://i.scdn.co/image/ab6765630000ba8ae24c2a24ccb969befb377b5e',
  title: '#33 - người lớn đổi thay',
  subtitle: 'Podcast • Giang ơi Radio',
  showProgress: true,
  progressValue: 0.45,
};

export const SidebarSmall = Template.bind({});
SidebarSmall.args = {
  image: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
  title: 'Liked Songs',
  subtitle: 'Playlist • 207 songs',
  size: 'small',
  width: '100%',
};

export const SidebarSmallPinned = Template.bind({});
SidebarSmallPinned.args = {
  image: 'https://i.scdn.co/image/ab67616d0000b273e5e2e5e2e5e2e5e2e5e2e5e2',
  title: 'Daily Mix 2',
  subtitle: 'Playlist • Spotify',
  size: 'small',
  width: '100%',
  isActive: true,
};

export const SidebarSmallDisabled = Template.bind({});
SidebarSmallDisabled.args = {
  image: 'https://misc.scdn.co/liked-songs/liked-songs-640.jpg',
  title: 'Disabled Card',
  subtitle: 'Playlist • 0 songs',
  size: 'small',
  width: '100%',
  disabled: true,
};
