import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MessageText } from './MessageText';
import { colors, spacing } from '../../../styles';

const meta: Meta<typeof MessageText> = {
  title: 'Atoms/MessageText',
  component: MessageText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['helper', 'error', 'success', 'warning'],
      description: 'Type of message which determines the color and icon',
    },
    children: {
      control: 'text',
      description: 'The message content',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the icon',
    },
    marginTop: {
      control: 'text',
      description: 'Custom margin top override',
    },
  },
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: colors.primary.black,
        padding: spacing.lg,
        minHeight: '200px',
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Helper: Story = {
  args: {
    type: 'helper',
    children: 'This is helper text to guide the user',
    showIcon: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    children: 'This field is required and cannot be empty',
    showIcon: true,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Your changes have been saved successfully',
    showIcon: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'This action cannot be undone',
    showIcon: true,
  },
};

export const WithoutIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
      <div>
        <h4 style={{ color: colors.primary.white, marginBottom: spacing.sm }}>Messages Without Icons</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
          <MessageText type="helper" showIcon={false}>
            Helper text without icon
          </MessageText>
          <MessageText type="error" showIcon={false}>
            Error message without icon
          </MessageText>
          <MessageText type="success" showIcon={false}>
            Success message without icon
          </MessageText>
          <MessageText type="warning" showIcon={false}>
            Warning message without icon
          </MessageText>
        </div>
      </div>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
      <div>
        <h4 style={{ color: colors.primary.white, marginBottom: spacing.sm }}>Helper Text</h4>
        <MessageText type="helper">
          This is a helper message to provide additional context or guidance
        </MessageText>
      </div>
      
      <div>
        <h4 style={{ color: colors.primary.white, marginBottom: spacing.sm }}>Error Message</h4>
        <MessageText type="error">
          Please correct the errors above before continuing
        </MessageText>
      </div>
      
      <div>
        <h4 style={{ color: colors.primary.white, marginBottom: spacing.sm }}>Success Message</h4>
        <MessageText type="success">
          Your profile has been updated successfully
        </MessageText>
      </div>
      
      <div>
        <h4 style={{ color: colors.primary.white, marginBottom: spacing.sm }}>Warning Message</h4>
        <MessageText type="warning">
          This will permanently delete your playlist
        </MessageText>
      </div>
    </div>
  ),
};

export const LongMessages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md, maxWidth: '400px' }}>
      <div>
        <h4 style={{ color: colors.primary.white, marginBottom: spacing.sm }}>Long Messages with Icons</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
          <MessageText type="helper">
            This is a longer helper message that demonstrates how the icon aligns properly with multi-line text content and maintains good readability.
          </MessageText>
          <MessageText type="error">
            This is a longer error message that shows how the error icon stays aligned at the top while the text content can wrap to multiple lines as needed.
          </MessageText>
          <MessageText type="success">
            This is a longer success message demonstrating that the check icon remains properly positioned even when the message content spans multiple lines.
          </MessageText>
        </div>
      </div>
    </div>
  ),
};

export const CustomMargin: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ 
        backgroundColor: colors.grey.grey1, 
        padding: spacing.md, 
        borderRadius: '4px',
        marginBottom: '0' 
      }}>
        <span style={{ color: colors.primary.white }}>Some content above</span>
      </div>
      <MessageText type="helper" marginTop={spacing.lg}>
        This message has custom margin top spacing
      </MessageText>
    </div>
  ),
}; 