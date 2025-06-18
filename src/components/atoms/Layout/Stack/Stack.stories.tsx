import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { spacingTokens, borderRadiusTokens, stackDefaults } from './Stack.style';
import { colors, spacing } from '../../../../styles';

// Reusable style objects using design tokens
const storyStyles = {
  container: {
    color: colors.primary.white,
    backgroundColor: colors.primary.black,
    padding: spacing.lg,
    minHeight: '100vh',
  },
  section: {
    marginBottom: spacing.xl,
  },
  label: {
    color: colors.grey.grey6,
    fontSize: '14px',
    marginBottom: spacing.sm,
    display: 'block',
  },
  demoItem: {
    backgroundColor: colors.primary.brand,
    color: colors.primary.white,
    padding: spacing.sm,
    borderRadius: '4px',
    textAlign: 'center' as const,
    fontSize: '14px',
    fontWeight: '500',
  },
  demoItemSecondary: {
    backgroundColor: colors.decorative.redRedWine,
    color: colors.primary.white,
    padding: spacing.sm,
    borderRadius: '4px',
    textAlign: 'center' as const,
    fontSize: '14px',
    fontWeight: '500',
  },
  demoItemTertiary: {
    backgroundColor: colors.decorative.evergreen,
    color: colors.primary.white,
    padding: spacing.sm,
    borderRadius: '4px',
    textAlign: 'center' as const,
    fontSize: '14px',
    fontWeight: '500',
  },
  containerDemo: {
    border: `1px dashed ${colors.grey.grey4}`,
    backgroundColor: colors.grey.grey0,
    minHeight: '200px',
  },
};

// Demo content components
const DemoItem = ({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'tertiary' }) => (
  <div style={variant === 'secondary' ? storyStyles.demoItemSecondary : variant === 'tertiary' ? storyStyles.demoItemTertiary : storyStyles.demoItem}>
    {children}
  </div>
);

const meta: Meta<typeof Stack> = {
  title: 'Atoms/Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible layout component built on CSS Flexbox with comprehensive design token integration. Perfect for creating consistent spacing and alignment patterns.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex direction',
    },
    spacing: {
      control: 'select',
      options: Object.keys(spacingTokens),
      description: 'Spacing between items using design tokens',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Cross-axis alignment',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly', 'stretch'],
      description: 'Main-axis justification',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap behavior',
    },
    grow: {
      control: 'boolean',
      description: 'Whether to grow to fill available space',
    },
    shrink: {
      control: 'boolean',
      description: 'Whether to shrink when needed',
    },
    scrollable: {
      control: 'boolean',
      description: 'Enable scrolling with custom scrollbars',
    },
    centered: {
      control: 'boolean',
      description: 'Center the stack within its container',
    },
    padding: {
      control: 'select',
      options: Object.keys(spacingTokens),
      description: 'Padding around the stack',
    },
    margin: {
      control: 'select',
      options: Object.keys(spacingTokens),
      description: 'Margin around the stack',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color',
    },
    borderRadius: {
      control: 'select',
      options: Object.keys(borderRadiusTokens),
      description: 'Border radius using design tokens',
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
        <DemoItem>Item 1</DemoItem>
        <DemoItem variant="secondary">Item 2</DemoItem>
        <DemoItem variant="tertiary">Item 3</DemoItem>
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
        <DemoItem>Item 1</DemoItem>
        <DemoItem variant="secondary">Item 2</DemoItem>
        <DemoItem variant="tertiary">Item 3</DemoItem>
      </>
    ),
  },
};

// Spacing variations
export const SpacingVariations: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Spacing Variations</h3>
        <Stack spacing="lg">
          {Object.entries(spacingTokens).map(([spacingName, spacingValue]) => (
            <div key={spacingName}>
              <div style={storyStyles.label}>{spacingName.toUpperCase()} ({spacingValue})</div>
              <Stack direction="row" spacing={spacingName as any} padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
                <DemoItem>Item 1</DemoItem>
                <DemoItem variant="secondary">Item 2</DemoItem>
                <DemoItem variant="tertiary">Item 3</DemoItem>
              </Stack>
            </div>
          ))}
        </Stack>
      </div>
    </div>
  ),
};

// Alignment demonstrations
export const AlignmentOptions: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Alignment Options</h3>
        <Stack spacing="lg">
          {['start', 'center', 'end', 'stretch', 'baseline'].map((alignment) => (
            <div key={alignment}>
              <div style={storyStyles.label}>align="{alignment}"</div>
              <Stack 
                direction="row" 
                align={alignment as any} 
                spacing="md" 
                padding="sm" 
                backgroundColor={colors.grey.grey1}
                borderRadius="md"
                style={storyStyles.containerDemo}
              >
                <DemoItem>Short</DemoItem>
                <DemoItem variant="secondary">Medium content</DemoItem>
                <DemoItem variant="tertiary">This is a longer content item</DemoItem>
              </Stack>
            </div>
          ))}
        </Stack>
      </div>
    </div>
  ),
};

// Justification options
export const JustificationOptions: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Justification Options</h3>
        <Stack spacing="lg">
          {['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'].map((justification) => (
            <div key={justification}>
              <div style={storyStyles.label}>justify="{justification}"</div>
              <Stack 
                direction="row" 
                justify={justification as any} 
                padding="sm" 
                backgroundColor={colors.grey.grey1}
                borderRadius="md"
                width="full"
              >
                <DemoItem>Item 1</DemoItem>
                <DemoItem variant="secondary">Item 2</DemoItem>
                <DemoItem variant="tertiary">Item 3</DemoItem>
              </Stack>
            </div>
          ))}
        </Stack>
      </div>
    </div>
  ),
};

// Size constraints
export const SizeConstraints: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Size Constraints</h3>
        <Stack spacing="lg">
          <div>
            <div style={storyStyles.label}>Fixed Width (300px)</div>
            <Stack direction="row" spacing="md" width="300px" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Item 1</DemoItem>
              <DemoItem variant="secondary">Item 2</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Max Width (200px) with Wrap</div>
            <Stack direction="row" spacing="md" wrap="wrap" maxWidth="200px" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Item 1</DemoItem>
              <DemoItem variant="secondary">Item 2</DemoItem>
              <DemoItem variant="tertiary">Item 3</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Full Width</div>
            <Stack direction="row" spacing="md" width="full" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Item 1</DemoItem>
              <DemoItem variant="secondary">Item 2</DemoItem>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
  ),
};

// Advanced features
export const AdvancedFeatures: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Advanced Features</h3>
        <Stack spacing="lg">
          <div>
            <div style={storyStyles.label}>Scrollable Container (height: 150px)</div>
            <Stack 
              spacing="md" 
              padding="md" 
              backgroundColor={colors.grey.grey1}
              borderRadius="md"
              height="150px"
              scrollable
            >
              {Array.from({ length: 10 }, (_, i) => (
                <DemoItem key={i} variant={i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'tertiary'}>
                  Scrollable Item {i + 1}
                </DemoItem>
              ))}
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Centered Stack</div>
            <div style={{ backgroundColor: colors.grey.grey1, padding: spacing.lg, borderRadius: '8px' }}>
              <Stack centered width="200px" spacing="sm" backgroundColor={colors.primary.brand} padding="md" borderRadius="md">
                <DemoItem>Centered Item 1</DemoItem>
                <DemoItem variant="secondary">Centered Item 2</DemoItem>
              </Stack>
            </div>
          </div>
          
          <div>
            <div style={storyStyles.label}>Grow/Shrink Behavior</div>
            <Stack direction="row" spacing="md" padding="sm" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Fixed</DemoItem>
              <div style={{ ...storyStyles.demoItemSecondary, flexGrow: 1 }}>Grows to fill space</div>
              <DemoItem variant="tertiary">Fixed</DemoItem>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
  ),
};

// Semantic HTML variants
export const SemanticHTML: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Semantic HTML</h3>
        <Stack spacing="lg">
          <div>
            <div style={storyStyles.label}>Navigation (as="nav")</div>
            <Stack as="nav" direction="row" spacing="lg" padding="md" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Home</DemoItem>
              <DemoItem variant="secondary">About</DemoItem>
              <DemoItem variant="tertiary">Contact</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>Article (as="article")</div>
            <Stack as="article" spacing="md" padding="lg" backgroundColor={colors.grey.grey1} borderRadius="md">
              <DemoItem>Article Title</DemoItem>
              <DemoItem variant="secondary">Article Content</DemoItem>
              <DemoItem variant="tertiary">Article Footer</DemoItem>
            </Stack>
          </div>
          
          <div>
            <div style={storyStyles.label}>List (as="ul")</div>
            <Stack as="ul" spacing="sm" padding="md" backgroundColor={colors.grey.grey1} borderRadius="md">
              <li><DemoItem>List Item 1</DemoItem></li>
              <li><DemoItem variant="secondary">List Item 2</DemoItem></li>
              <li><DemoItem variant="tertiary">List Item 3</DemoItem></li>
            </Stack>
          </div>
        </Stack>
      </div>
    </div>
  ),
};

// Real-world usage examples
export const RealWorldExamples: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Real-World Examples</h3>
        <Stack spacing="xl">
          <div>
            <div style={storyStyles.label}>Card Layout</div>
            <Stack 
              spacing="md" 
              padding="lg" 
              backgroundColor={colors.grey.grey1}
              borderRadius="lg"
              maxWidth="400px"
            >
              <DemoItem>Card Header</DemoItem>
              <Stack direction="row" spacing="md" justify="space-between">
                <DemoItem variant="secondary">Left Content</DemoItem>
                <DemoItem variant="tertiary">Right Content</DemoItem>
              </Stack>
              <DemoItem>Card Footer</DemoItem>
            </Stack>
          </div>
          
      <div>
            <div style={storyStyles.label}>Sidebar Layout</div>
            <Stack direction="row" spacing="md" height="300px">
              <Stack 
                spacing="sm" 
                padding="md" 
                backgroundColor={colors.grey.grey2}
                borderRadius="md"
                width="200px"
                scrollable
              >
                {Array.from({ length: 8 }, (_, i) => (
                  <DemoItem key={i}>Sidebar Item {i + 1}</DemoItem>
                ))}
              </Stack>
              
              <Stack 
                spacing="md" 
                padding="lg" 
                backgroundColor={colors.grey.grey1}
                borderRadius="md"
                grow
              >
                <DemoItem>Main Content Header</DemoItem>
                <DemoItem variant="secondary">Main Content Body</DemoItem>
                <DemoItem variant="tertiary">Main Content Footer</DemoItem>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </div>
      </div>
    ),
};
