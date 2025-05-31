import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Pill, PillProps } from './Pill';

export default {
  title: 'Atoms/Pill',
  component: Pill,
} as Meta<typeof Pill>;

const Template: StoryFn<PillProps> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Music',
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'All',
  selected: true,
};
