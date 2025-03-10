import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'radio', options: ['default', 'artist'] },
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'GOLDEN',
  subtitle: 'Jung Kook',
  imageUrl: 'https://i.scdn.co/image/ab67616100005174e1cbc9e7ba8fbc5d7738ea51',
  size: 'md',
  variant: 'default',
};

export const Artist = Template.bind({});
Artist.args = {
  title: 'Sơn Tùng M-TP',
  imageUrl: 'https://i.scdn.co/image/ab67616100005174e1cbc9e7ba8fbc5d7738ea51',
  size: 'md',
  variant: 'artist',
};
