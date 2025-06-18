import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Molecules/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Footer component displays company links, social media icons, and other footer content commonly found at the bottom of Spotify pages.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

// Default story
export const Default: Story = {
  args: {},
};

// With custom styling
export const WithCustomClass: Story = {
  args: {
    className: 'custom-footer',
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom CSS class for additional styling.',
      },
    },
  },
};

// Responsive showcase
export const ResponsiveShowcase: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Desktop View</h3>
        <div style={{ width: '100%', minWidth: '1200px' }}>
          <Footer />
        </div>
      </div>
      <div>
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Mobile View</h3>
        <div style={{ width: '375px' }}>
          <Footer />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Footer component adapts to different screen sizes with responsive design.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different Footer configurations.',
      },
    },
  },
};
