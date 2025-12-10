import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CategoryCard } from './CategoryCard';
import { colors, spacing, sizes } from '../../../styles';

const meta: Meta<typeof CategoryCard> = {
  title: 'Molecules/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Category Card

Colorful card for browsing content categories with background colors and overlay images.

## Features
- Custom background color per category
- Optional overlay image (tilted, positioned right)
- Bold title text
- Hover effects (lift + brightness)
- Rounded corners

## Usage

\`\`\`tsx
import { CategoryCard } from 'spotify-design-system';

<CategoryCard
  title="Pop"
  backgroundColor="#8D67AB"
  overlayImageUrl="/pop-cover.jpg"
  onClick={() => browseCategory('pop')}
/>
\`\`\`

## Design
- Vibrant colors for each category
- Overlay image rotated 25° for dynamic look
- Smooth hover transition with scale
- Used in Spotify's browse/search pages
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Category title',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the category card',
    },
    overlayImageUrl: {
      control: 'text',
      description: 'Optional overlay image URL',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler for the category card',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Podcast Charts',
    backgroundColor: '#1e3264',
    overlayImageUrl: 'https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647',
    onClick: () => console.log('Category clicked'),
  },
};

export const WithoutOverlay: Story = {
  args: {
    title: 'Fitness & Nutrition',
    backgroundColor: '#1e3264',
    onClick: () => console.log('Fitness & Nutrition clicked'),
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Very Long Category Name That Should Wrap Properly',
    backgroundColor: '#8d67ab',
    overlayImageUrl: 'https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5',
    size: 'md',
    onClick: () => console.log('Long title clicked'),
  },
};

// Category cards grid - matching Spotify design
export const CategoryGrid: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: spacing.md, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg,
      maxWidth: sizes.maxWidth.modal,
      justifyItems: 'center'
    }}>
      <CategoryCard
        title="Podcast Charts"
        backgroundColor="#1e3264"
        overlayImageUrl="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
        onClick={() => console.log('Podcast Charts')}
      />
      <CategoryCard
        title="Educational"
        backgroundColor="#8d67ab"
        overlayImageUrl="https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"
        onClick={() => console.log('Educational')}
      />
      <CategoryCard
        title="Documentary"
        backgroundColor="#ba5d07"
        overlayImageUrl="https://i.scdn.co/image/ab67616d0000b27395f754318336a07e85ec59bc"
        onClick={() => console.log('Documentary')}
      />
      <CategoryCard
        title="Comedy"
        backgroundColor="#e8115b"
        overlayImageUrl="https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"
        onClick={() => console.log('Comedy')}
      />
      <CategoryCard
        title="Pop Culture"
        backgroundColor="#dc148c"
        overlayImageUrl="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
        onClick={() => console.log('Pop Culture')}
      />
      <CategoryCard
        title="Fitness & Nutrition"
        backgroundColor="#1e3264"
        onClick={() => console.log('Fitness & Nutrition')}
      />
      <CategoryCard
        title="Celebrities"
        backgroundColor="#8d67ab"
        onClick={() => console.log('Celebrities')}
      />
      <CategoryCard
        title="TV"
        backgroundColor="#ba5d07"
        onClick={() => console.log('TV')}
      />
      <CategoryCard
        title="Beauty"
        backgroundColor="#dc148c"
        onClick={() => console.log('Beauty')}
      />
      <CategoryCard
        title="Video games"
        backgroundColor="#1e3264"
        onClick={() => console.log('Video games')}
      />
      <CategoryCard
        title="Film"
        backgroundColor="#8d67ab"
        onClick={() => console.log('Film')}
      />
      <CategoryCard
        title="Books"
        backgroundColor="#ba5d07"
        onClick={() => console.log('Books')}
      />
    </div>
  ),
};

// Different background colors showcase
export const ColorVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'flex', 
      gap: spacing.lg, 
      backgroundColor: colors.primary.black, 
      padding: spacing.lg,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }}>
      <CategoryCard
        title="Blue Category"
        backgroundColor="#1e3264"
        onClick={() => console.log('Blue')}
      />
      <CategoryCard
        title="Purple Category"
        backgroundColor="#8d67ab"
        onClick={() => console.log('Purple')}
      />
      <CategoryCard
        title="Orange Category"
        backgroundColor="#ba5d07"
        onClick={() => console.log('Orange')}
      />
      <CategoryCard
        title="Pink Category"
        backgroundColor="#e8115b"
        onClick={() => console.log('Pink')}
      />
    </div>
  ),
};
