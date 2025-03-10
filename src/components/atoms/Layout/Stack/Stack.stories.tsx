import React from 'react';
import { Stack } from './Stack';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
  title: 'Atoms/Layout/Stack',
  component: Stack,
  args: {
    children: (
      <>
        <div style={{ background: 'red', padding: '10px' }}>Item 1</div>
        <div style={{ background: 'blueviolet', padding: '10px' }}>Item 2</div>
        <div style={{ background: 'yellowgreen', padding: '10px' }}>Item 3</div>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

/* 📌 Basic Layouts */
export const Column: Story = { args: { direction: 'column', spacing: 16 } };
export const Row: Story = { args: { direction: 'row', spacing: 16 } };

/* 📌 Alignment */
export const AlignCenter: Story = {
  args: { align: 'center', direction: 'row', spacing: 16 },
};
export const AlignEnd: Story = {
  args: { align: 'end', direction: 'row', spacing: 16 },
};

/* 📌 Justification */
export const JustifyCenter: Story = {
  args: { justify: 'center', direction: 'row', spacing: 16 },
};
export const SpaceBetween: Story = {
  args: { justify: 'space-between', direction: 'row', spacing: 16 },
};

/* 📌 Wrap */
export const Wrap: Story = {
  args: { wrap: true, direction: 'row', spacing: 16 },
};

/* 📌 Custom Component */
export const AsUL: Story = {
  args: {
    component: 'ul',
    spacing: 16,
    children: (
      <div>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </div>
    ),
  },
};
