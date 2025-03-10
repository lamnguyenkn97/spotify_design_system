import React from 'react';
import { Icon } from './Icon';
import {
  faPlay,
  faPause,
  faHeart,
  faSync,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    icon: faPlay,
    color: 'black',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Play: Story = { args: { icon: faPlay } };
export const Pause: Story = { args: { icon: faPause } };
export const Heart: Story = { args: { icon: faHeart } };

/* 📌 FontAwesome Features */
export const Spinning: Story = { args: { icon: faSync, spin: true } };
export const Pulsing: Story = { args: { icon: faSync, pulse: true } };
export const FlipHorizontal: Story = {
  args: { icon: faArrowRight, flip: 'horizontal' },
};
export const Rotated: Story = { args: { icon: faArrowRight, rotate: 90 } };

/* 📌 Clickable with Hover Effect */
export const Clickable: Story = {
  args: {
    icon: faPlay,
    clickable: true,
    onClick: () => alert('Play clicked!'),
  },
};
export const HeartHover: Story = {
  args: {
    icon: faHeart,
    color: 'red',
    hoverColor: 'pink',
    clickable: true,
    withBackground: true,
    bgColor: 'black',
  },
};
