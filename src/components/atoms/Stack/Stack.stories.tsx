import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { colors, spacing } from '../../../styles';

// Demo content component
const DemoItem = ({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}) => {
  const variantStyles = {
    primary: { backgroundColor: colors.primary.brand },
    secondary: { backgroundColor: colors.decorative.redRedWine },
    tertiary: { backgroundColor: colors.decorative.evergreen },
  };

  return (
    <div
      style={{
        ...variantStyles[variant],
        color: colors.primary.white,
        padding: spacing.sm,
        borderRadius: '4px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',
      }}
    >
      {children}
    </div>
  );
};

const meta: Meta<typeof Stack> = {
  title: 'Atoms/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Stack Component

Flexbox layout component for consistent spacing and alignment.

## Features
- 2 directions (row, column)
- 3 spacing options (sm, md, lg) using design tokens
- 4 alignment options (start, center, end, stretch)
- 4 justify options (start, center, end, space-between)

## Usage

\`\`\`tsx
import { Stack } from 'spotify-design-system';

// Vertical list
<Stack direction="column" spacing="md">
  <Track />
  <Track />
  <Track />
</Stack>

// Horizontal controls
<Stack direction="row" spacing="sm" justify="center">
  <Button>Previous</Button>
  <Button>Play</Button>
  <Button>Next</Button>
</Stack>

// Space between items
<Stack direction="row" justify="space-between">
  <Logo />
  <NavItems />
  <UserMenu />
</Stack>
\`\`\`

## Design Tokens
- sm: 8px
- md: 16px
- lg: 24px
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'Flex direction',
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Spacing between items using design tokens',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Cross-axis alignment',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between'],
      description: 'Main-axis justification',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    children: (
      <>
        <DemoItem>Track 1</DemoItem>
        <DemoItem variant="secondary">Track 2</DemoItem>
        <DemoItem variant="tertiary">Track 3</DemoItem>
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    direction: 'row',
    spacing: 'md',
    children: (
      <>
        <DemoItem>Album</DemoItem>
        <DemoItem variant="secondary">Artist</DemoItem>
        <DemoItem variant="tertiary">Duration</DemoItem>
      </>
    ),
  },
};

// Spotify use cases
export const SpotifyExamples: Story = {
  render: () => (
    <div
      style={{
        padding: spacing.lg,
        backgroundColor: colors.primary.black,
        color: colors.primary.white,
      }}
    >
      <h3 style={{ marginBottom: spacing.md, color: colors.primary.white }}>
        Track List (Column)
      </h3>
      <Stack spacing="sm" style={{ marginBottom: spacing.xl }}>
        <DemoItem>1. Anti-Hero</DemoItem>
        <DemoItem>2. Lavender Haze</DemoItem>
        <DemoItem>3. Midnight Rain</DemoItem>
        <DemoItem>4. Karma</DemoItem>
      </Stack>

      <h3 style={{ marginBottom: spacing.md, color: colors.primary.white }}>
        Player Controls (Row)
      </h3>
      <Stack
        direction="row"
        spacing="md"
        justify="center"
        style={{ marginBottom: spacing.xl }}
      >
        <DemoItem>⏮</DemoItem>
        <DemoItem variant="secondary">▶️</DemoItem>
        <DemoItem>⏭</DemoItem>
      </Stack>

      <h3 style={{ marginBottom: spacing.md, color: colors.primary.white }}>
        Navigation Bar (Row with Space Between)
      </h3>
      <Stack direction="row" spacing="md" justify="space-between">
        <DemoItem>Home</DemoItem>
        <DemoItem variant="secondary">Search</DemoItem>
        <DemoItem variant="tertiary">Library</DemoItem>
      </Stack>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
