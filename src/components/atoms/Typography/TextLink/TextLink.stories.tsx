import { TextLink } from './TextLink';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextLink> = {
  title: 'Atoms/Typography/TextLink',
  component: TextLink,
  args: {
    children: 'Click me',
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

/* 📌 Basic Variants */
export const Default: Story = { args: { variant: 'default', href: '#' } };
export const Muted: Story = { args: { variant: 'muted', href: '#' } };
export const Danger: Story = { args: { variant: 'danger', href: '#' } };

/* 📌 Font Weight Variants */
export const Regular: Story = { args: { weight: 'regular', href: '#' } };
export const Medium: Story = { args: { weight: 'medium', href: '#' } };
export const Bold: Story = { args: { weight: 'bold', href: '#' } };
export const Light: Story = { args: { weight: 'light', href: '#' } };

/* 📌 Underline Variants */
export const Underlined: Story = { args: { underline: true, href: '#' } };
export const NoUnderline: Story = { args: { underline: false, href: '#' } };

/* 📌 External Link */
export const External: Story = {
  args: { href: 'https://example.com', children: 'External Link' },
};

/* 📌 Non-Link Component */
export const AsSpan: Story = {
  args: { component: 'span', children: 'Span as Link' },
};
export const AsButton: Story = {
  args: { component: 'button', children: 'Button as Link' },
};
