import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { ModalSize } from './Modal.types';
import { Button } from '../../atoms/Button';
import { ButtonVariant } from '../../atoms/Button/Button.types';
import { TextLink } from '../../atoms/Typography/TextLink';

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal component for displaying overlay dialogs. Modal overlays block interaction with the rest of the page until dismissed.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    size: {
      control: 'select',
      options: Object.values(ModalSize),
      description: 'Modal size',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    description: {
      control: 'text',
      description: 'Modal description/content',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Close on backdrop click',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close on ESC key',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Interactive wrapper for stories
const ModalWithTrigger = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant={ButtonVariant.Primary} onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
};

/**
 * Modal with signup flow (like Spotify's signup modal)
 */
export const SignupModal: Story = {
  render: () => <ModalWithTrigger {...SignupModal.args} />,
  args: {
    size: ModalSize.Medium,
    title: 'Start listening with a free Spotify account',
    media: (
      <img
        src="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
        alt="Album cover"
        style={{ width: '280px', height: '280px', borderRadius: '8px' }}
      />
    ),
    actions: [
      {
        label: 'Sign up free',
        onClick: () => alert('Sign up clicked'),
        variant: 'primary' as const,
      },
      {
        label: 'Download app',
        onClick: () => alert('Download clicked'),
        variant: 'secondary' as const,
      },
    ],
    footer: (
      <>
        Already have an account?{' '}
        <TextLink href="#">
          Log in
        </TextLink>
      </>
    ),
    showCloseButton: true,
    closeOnBackdropClick: true,
    closeOnEscape: true,
  },
};

/**
 * Simple confirmation modal
 */
export const ConfirmationModal: Story = {
  render: () => <ModalWithTrigger {...ConfirmationModal.args} />,
  args: {
    size: ModalSize.Small,
    title: 'Remove from playlist?',
    description: 'Are you sure you want to remove this song from your playlist?',
    actions: [
      {
        label: 'Remove',
        onClick: () => alert('Removed'),
        variant: 'primary' as const,
      },
      {
        label: 'Cancel',
        onClick: () => alert('Cancelled'),
        variant: 'secondary' as const,
      },
    ],
    showCloseButton: true,
  },
};

/**
 * Modal with custom content
 */
export const CustomContentModal: Story = {
  render: () => <ModalWithTrigger {...CustomContentModal.args} />,
  args: {
    size: ModalSize.Large,
    title: 'Choose your plan',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
        <div
          style={{
            padding: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ margin: '0 0 8px 0', color: '#fff' }}>Premium Individual</h3>
          <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>
            Ad-free music listening, play offline, on-demand playback. $9.99/month
          </p>
        </div>
        <div
          style={{
            padding: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ margin: '0 0 8px 0', color: '#fff' }}>Premium Family</h3>
          <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)' }}>
            Up to 6 Premium accounts. Block explicit music. $14.99/month
          </p>
        </div>
      </div>
    ),
    actions: [
      {
        label: 'Get started',
        onClick: () => alert('Get started'),
        variant: 'primary' as const,
      },
    ],
  },
};

/**
 * Small modal without media
 */
export const SmallModal: Story = {
  render: () => <ModalWithTrigger {...SmallModal.args} />,
  args: {
    size: ModalSize.Small,
    title: 'Success!',
    description: 'Your playlist has been created successfully.',
    actions: [
      {
        label: 'OK',
        onClick: () => alert('OK'),
        variant: 'primary' as const,
      },
    ],
  },
};

/**
 * Large modal with media
 */
export const LargeModal: Story = {
  render: () => <ModalWithTrigger {...LargeModal.args} />,
  args: {
    size: ModalSize.Large,
    title: 'Lover',
    media: (
      <img
        src="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
        alt="Lover Album Cover"
        style={{ width: '280px', height: '280px', borderRadius: '8px' }}
      />
    ),
    description:
      'Lover is the seventh studio album by Taylor Swift. Released in 2019, it features a more romantic and optimistic tone with hits like "ME!", "You Need to Calm Down", and "Lover".',
    actions: [
      {
        label: 'Play',
        onClick: () => alert('Playing Lover'),
        variant: 'primary' as const,
      },
    ],
  },
};

/**
 * Modal without close button
 */
export const NoCloseButton: Story = {
  render: () => <ModalWithTrigger {...NoCloseButton.args} />,
  args: {
    size: ModalSize.Medium,
    title: 'Action required',
    description: 'You must complete this action to continue.',
    actions: [
      {
        label: 'Continue',
        onClick: () => alert('Continue'),
        variant: 'primary' as const,
      },
    ],
    showCloseButton: false,
    closeOnBackdropClick: false,
    closeOnEscape: false,
  },
};
