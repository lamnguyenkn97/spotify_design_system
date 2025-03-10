import { Meta, StoryObj } from '@storybook/react';
import { SearchInput, SearchInputProps } from './SearchInput';
import { ButtonSize } from '../../Button/Button/Button.types';

const meta: Meta<SearchInputProps> = {
  title: 'atoms/Input/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    iconSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of icon',
      table: {
        type: { summary: ['small', 'medium', 'large'].join(' | ') },
        defaultValue: { summary: 'small' },
      },
    },
    onSearch: { action: 'searched' },
  },
};

export default meta;

type Story = StoryObj<SearchInputProps>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    iconSize: 'small',
    onSearch: (value) => alert(`Search value: ${value}`),
  },
};
