import React from 'react';
import { Banner, BannerType } from './Banner';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Molecules/Banner',
  component: Banner,
} as Meta;

const Template: StoryFn<typeof Banner> = (args) => <Banner {...args} />;

export const Album = Template.bind({});
Album.args = {
  type: 'album',
  title: 'MAYHEM',
  subtitle: 'Lady Gaga • 2025 • 14 songs, 53 min 11 sec',
  image:
    'https://seed-mix-image.spotifycdn.com/v6/img/artist/1HY2Jd0NmPuamShAr6KMms/en/default',
};

export const Playlist = Template.bind({});
Playlist.args = {
  type: 'playlist',
  title: 'Daily Mix 1',
  subtitle: 'Taylor Swift, Lady Gaga, Olivia Rodrigo and more',
  image:
    'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/1/ab6761610000e5ebe672b5f553298dcdccb0e676/en',
};

export const Podcast = Template.bind({});
Podcast.args = {
  type: 'podcast',
  title: 'Lùm Xùm',
  subtitle: 'Lùm Xùm',
  image: 'https://i.scdn.co/image/ab67656300005f1f314cd690c89ed6b8f1e91b6f',
};

export const Artist = Template.bind({});
Artist.args = {
  type: 'artist',
  title: 'Taylor Swift',
  description: '82,240,376 monthly listeners',
  image: 'https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33',
};
