import { Meta, StoryObj } from '@storybook/react';
import { Slider, SliderProps } from './Slider';

const meta: Meta<SliderProps> = {
  title: 'atoms/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    onChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<SliderProps>;

export const Default: Story = {
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
  },
};
