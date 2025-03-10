import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Banner from './Banner';

export default {
  title: 'Molecules/Banner',
  component: Banner,
  argTypes: {
    type: {
      control: 'radio',
      options: ['artist', 'playlist', 'album', 'podcast'],
    },
  },
} as Meta<typeof Banner>;

const Template: StoryFn<typeof Banner> = (args) => <Banner {...args} />;

export const Artist = Template.bind({});
Artist.args = {
  type: 'artist',
  imageUrl: 'https://i.scdn.co/image/ab67616d0000b27336b12a4082f11d16a519b964',
  title: 'Kelly Clarkson',
  description: '17,116,897 monthly listeners',
  verified: true,
};

export const Playlist = Template.bind({});
Playlist.args = {
  type: 'playlist',
  imageUrl:
    'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/daily/2/ab6761610000e5eb34dca195e6f7b02580155565/en',
  title: 'Daily Mix 2',
  subtitle: 'Trịnh Suy, Vũ Cát Tường, Ngọt and more',
  description: '50 songs, about 3 hr 15 min',
};

export const Album = Template.bind({});
Album.args = {
  type: 'album',
  imageUrl: 'https://i.scdn.co/image/ab67616d00001e028b58d20f1b77295730db15b4',
  title: 'MAYHEM',
  subtitle: 'Lady Gaga',
  releaseYear: '2025',
  songCount: '14',
  duration: '53 min 11 sec',
};

export const Podcast = Template.bind({});
Podcast.args = {
  type: 'podcast',
  imageUrl: 'https://i.scdn.co/image/ab6765630000ba8a314cd690c89ed6b8f1e91b6f',
  title: 'Thanh Xuân Có Ta Yêu Người',
  subtitle: 'Lùm Xùm',
  backgroundGradient: 'linear-gradient(135deg, #001AFF, #0044FF)',
};
