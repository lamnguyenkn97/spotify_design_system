import React from 'react';
import { Typography } from './Typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography/Text',
  component: Typography,
  args: {
    children: 'Typography Example',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

/* 📌 Heading Variants */
export const H1: Story = { args: { variant: 'h1' } };
export const H2: Story = { args: { variant: 'h2' } };
export const H3: Story = { args: { variant: 'h3' } };
export const H4: Story = { args: { variant: 'h4' } };
export const H5: Story = { args: { variant: 'h5' } };
export const H6: Story = { args: { variant: 'h6' } };

/* 📌 Body & Caption */
export const Body1: Story = { args: { variant: 'body1' } };
export const Body2: Story = { args: { variant: 'body2' } };
export const Caption: Story = { args: { variant: 'caption' } };

/* 📌 Font Weight Variants */
export const Light: Story = {
  args: { variant: 'body1', weight: 'light', children: 'Light Text (300)' },
};

export const Regular: Story = {
  args: { variant: 'body1', weight: 'regular', children: 'Regular Text (400)' },
};
export const Medium: Story = {
  args: { variant: 'body1', weight: 'medium', children: 'Medium Text (500)' },
};
export const Bold: Story = {
  args: { variant: 'body1', weight: 'bold', children: 'Bold Text (700)' },
};

/* 📌 Color Variants */
export const PrimaryColor: Story = {
  args: { variant: 'body1', color: 'primary', children: 'Primary Color' },
};
export const SecondaryColor: Story = {
  args: { variant: 'body1', color: 'secondary', children: 'Secondary Color' },
};
export const MutedColor: Story = {
  args: { variant: 'body1', color: 'muted', children: 'Muted Color' },
};
export const DangerColor: Story = {
  args: { variant: 'body1', color: 'danger', children: 'Danger Color' },
};

/* 📌 Custom Component Example */
export const CustomComponent: Story = {
  args: { variant: 'h1', component: 'p', children: 'H1 styled as a <p>' },
};
