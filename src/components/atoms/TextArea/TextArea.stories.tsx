import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from './TextArea';

const meta = {
  title: 'Atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A multi-line text input component with support for labels, error states, and auto-resize functionality. Follows the same design patterns as the Input component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the textarea',
    },
    message: {
      control: 'text',
      description: 'Helper text or error message displayed below the textarea',
    },
    error: {
      control: 'boolean',
      description: 'Whether the textarea is in error state',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the textarea takes full width of its container',
    },
    rows: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of visible text lines (min height)',
    },
    maxRows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Maximum number of rows before scrolling (only with autoResize)',
    },
    autoResize: {
      control: 'boolean',
      description: 'Whether to auto-resize the textarea as user types',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Description',
    placeholder: 'Describe your playlist...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    message: 'Maximum 500 characters',
  },
};

export const WithError: Story = {
  args: {
    label: 'Comment',
    placeholder: 'Write a comment',
    message: 'Comment is required',
    error: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width TextArea',
    placeholder: 'This textarea takes full width',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextArea',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'This content cannot be edited',
  },
};

// Row Configuration
export const CustomRows: Story = {
  args: {
    label: 'Custom Rows',
    placeholder: 'This textarea has 6 rows',
    rows: 6,
  },
};

export const MinimalRows: Story = {
  args: {
    label: 'Minimal (1 row)',
    placeholder: 'Single line textarea',
    rows: 1,
  },
};

// Auto-Resize Examples
export const AutoResize: Story = {
  args: {
    label: 'Auto-Resize TextArea',
    placeholder: 'Start typing... This will grow as you type',
    autoResize: true,
    rows: 3,
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <TextArea
        {...args}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const AutoResizeWithMaxRows: Story = {
  args: {
    label: 'Auto-Resize with Max Rows',
    placeholder: 'This will grow up to 6 rows, then scroll',
    autoResize: true,
    rows: 3,
    maxRows: 6,
    message: 'Grows up to 6 rows',
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <TextArea
        {...args}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

// Interactive Examples
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextArea
          label="Controlled TextArea"
          placeholder="Type something..."
          value={value}
          onValueChange={setValue}
          message={`Character count: ${value.length}`}
        />
        <button onClick={() => setValue('')}>Clear</button>
      </div>
    );
  },
};

export const CharacterLimit: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 200;
    const remaining = maxLength - value.length;
    const isOverLimit = remaining < 0;
    
    return (
      <TextArea
        label="Character Limit Example"
        placeholder="Maximum 200 characters"
        value={value}
        onValueChange={(val) => setValue(val.slice(0, maxLength))}
        message={`${remaining} characters remaining`}
        error={isOverLimit}
        rows={4}
      />
    );
  },
};

// Use Case Examples
export const PlaylistDescription: Story = {
  args: {
    label: 'Playlist Description',
    placeholder: 'Add an optional description',
    rows: 4,
    fullWidth: true,
  },
};

export const CommentBox: Story = {
  render: () => {
    const [comment, setComment] = useState('');
    
    return (
      <div style={{ width: '500px' }}>
        <TextArea
          label="Add a comment"
          placeholder="Share your thoughts..."
          value={comment}
          onValueChange={setComment}
          autoResize
          rows={2}
          maxRows={8}
          fullWidth
        />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: '8px', 
          marginTop: '8px' 
        }}>
          <button onClick={() => setComment('')}>Cancel</button>
          <button disabled={!comment.trim()}>Post Comment</button>
        </div>
      </div>
    );
  },
};

// Styling Examples
export const CustomStyling: Story = {
  args: {
    label: 'Custom Styled TextArea',
    placeholder: 'With custom styling',
    style: {
      fontFamily: 'monospace',
      fontSize: '14px',
      backgroundColor: 'rgba(30, 215, 96, 0.1)',
    },
  },
};

// Playground
export const Playground: Story = {
  args: {
    label: 'Playground',
    placeholder: 'Customize me using the controls below',
    message: 'Helper text',
    rows: 4,
    fullWidth: true,
  },
};

