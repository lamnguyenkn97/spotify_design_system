import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../../atoms/Layout/Stack';
import { colors } from '../../../styles';
import { CategoryCard } from './CategoryCard';

const meta: Meta<typeof CategoryCard> = {
  title: 'Molecules/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          "CategoryCard displays music categories with colorful backgrounds and rotated images, commonly used in Spotify's browse section.",
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The category title',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the card',
    },
    image: {
      control: 'text',
      description: 'URL of the category image',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the category card',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when card is clicked',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

// Default story
export const Default: Story = {
  args: {
    title: 'Podcast Charts',
    backgroundColor: colors.decorative.blueMoon,
    image: 'https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg',
    size: 'md',
  },
};

// Size variants
export const AllSizes: Story = {
  render: () => (
    <Stack direction="row" spacing="lg" align="center">
      <CategoryCard
        title="Small"
        backgroundColor={colors.decorative.redRedWine}
        image="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7"
        size="sm"
      />
      <CategoryCard
        title="Medium"
        backgroundColor={colors.decorative.blueMoon}
        image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"
        size="md"
      />
      <CategoryCard
        title="Large"
        backgroundColor={colors.decorative.mellowYellow}
        image="https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b"
        size="lg"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'CategoryCard supports three sizes: small (200x100), medium (250x120), and large (300x140).',
      },
    },
  },
};

// Color variants
export const ColorVariants: Story = {
  render: () => (
    <Stack direction="row" spacing="md" wrap="wrap">
      <CategoryCard
        title="Pop"
        backgroundColor={colors.decorative.pinkMoon}
        image="https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b"
      />
      <CategoryCard
        title="Rock"
        backgroundColor={colors.decorative.redRedWine}
        image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"
      />
      <CategoryCard
        title="Jazz"
        backgroundColor={colors.decorative.blueMoon}
        image="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7"
      />
      <CategoryCard
        title="Classical"
        backgroundColor={colors.decorative.evergreen}
        image="https://i.scdn.co/image/ab67656300005f1f92b2c9b5a67c4f8b8b8b8b8b"
      />
      <CategoryCard
        title="Hip Hop"
        backgroundColor={colors.decorative.mellowYellow}
        image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"
      />
      <CategoryCard
        title="Electronic"
        backgroundColor={colors.decorative.prettyInPink}
        image="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7"
      />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "CategoryCard supports various background colors from the design system's decorative color palette.",
      },
    },
  },
};

// Spotify Examples
export const SpotifyExamples: Story = {
  render: () => (
    <Stack direction="column" spacing="lg">
      <Stack direction="row" spacing="md" wrap="wrap">
        <CategoryCard
          title="Made For You"
          backgroundColor="#8400e7"
          image="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"
        />
        <CategoryCard
          title="Charts"
          backgroundColor="#8d67ab"
          image="https://t.scdn.co/images/adfadd6165904766ac98d5be7fcae452"
        />
        <CategoryCard
          title="New Releases"
          backgroundColor="#e8115b"
          image="https://t.scdn.co/images/72c546b4b3b54c5b8e1c8b8b8b8b8b8b"
        />
      </Stack>
      <Stack direction="row" spacing="md" wrap="wrap">
        <CategoryCard
          title="Discover Weekly"
          backgroundColor="#1e3264"
          image="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785"
        />
        <CategoryCard
          title="Release Radar"
          backgroundColor="#0d72ea"
          image="https://t.scdn.co/images/6bacbcdd83a64ec581a8b0bc68d24ee5"
        />
        <CategoryCard
          title="Daily Mix"
          backgroundColor="#ba5d07"
          image="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"
        />
      </Stack>
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Real-world examples of CategoryCard as used in Spotify's browse section.",
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    title: 'Your Category',
    backgroundColor: colors.decorative.blueMoon,
    image: 'https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test different CategoryCard configurations.',
      },
    },
  },
};
