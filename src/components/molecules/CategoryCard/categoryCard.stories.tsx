import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CategoryCard, CategoryCardProps } from './categoryCard';

export default {
  title: 'Molecules/CategoryCard',
  component: CategoryCard,
} as Meta<typeof CategoryCard>;

const Template: StoryFn<CategoryCardProps> = (args) => (
  <CategoryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Podcast Charts',
  backgroundColor: '#3d91f4',
  image: 'https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg', // example
  onClick: () => alert('Clicked Podcast Charts'),
};

export const Educational = Template.bind({});
Educational.args = {
  title: 'Educational',
  backgroundColor: 'rgb(71, 125, 149)',
  image: 'https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7', // example
  onClick: () => alert('Clicked Educational'),
};
