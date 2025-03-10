import { Meta, StoryObj } from '@storybook/react';
import { ImageProps, Image } from './Image';

const meta: Meta<ImageProps> = {
  title: 'atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: {
      control: { type: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    },
  },
};

export default meta;

type Story = StoryObj<ImageProps>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1738975927070-d5af82de67c1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Placeholder Image',
    width: '300px',
    height: '200px',
    borderRadius: 'md',
  },
};

export const RoundedImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1581305192807-0a3aea3e4246?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Rounded Image',
    width: '150px',
    height: '150px',
    borderRadius: 'xl',
  },
};

export const WithFallback: Story = {
  args: {
    src: 'invalid-url.jpg',
    alt: 'Fallback Image',
    width: '200px',
    height: '200px',
    borderRadius: 'lg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};
