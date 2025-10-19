import React from 'react';
import { TextLink } from './TextLink';
import type { Meta, StoryObj } from '@storybook/react';
import { colors, spacing } from '../../../../styles';
import { Stack } from '../../Stack';

const meta: Meta<typeof TextLink> = {
  title: 'Atoms/Typography/TextLink',
  component: TextLink,
  parameters: {
    docs: {
      description: {
        component: `
A versatile text link component with semantic variants for different contexts.

**Key Features:**
- 🎨 **Semantic Variants**: Default, muted, black/inverse, danger
- 🔗 **Smart Defaults**: Automatically handles external links
- 💪 **Flexible Weight**: Light, regular, medium, bold
- ♿ **Accessible**: Proper ARIA attributes and semantic HTML
- 🎯 **Spotify-Focused**: Design token-driven styling
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'muted', 'black', 'inverse', 'danger'],
      description: 'Visual variant of the link (black/inverse for light backgrounds)',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Font weight',
    },
    underline: {
      control: 'boolean',
      description: 'Whether to show underline',
    },
    href: {
      control: 'text',
      description: 'Link URL (external links automatically open in new tab)',
    },
    component: {
      control: 'text',
      description: 'HTML element to render (defaults to <a> if href exists)',
    },
  },
  args: {
    children: 'Click me',
  },
};

export default meta;
type Story = StoryObj<typeof TextLink>;

/* 📌 Basic Variants */
export const Default: Story = { args: { variant: 'default', href: '#' } };
export const Muted: Story = { args: { variant: 'muted', href: '#' } };
export const Black: Story = { args: { variant: 'black', href: '#' } };
export const Inverse: Story = { args: { variant: 'inverse', href: '#' } };
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

/* 📌 All Variants Showcase */
export const AllVariants: Story = {
  render: () => (
    <div style={{ backgroundColor: colors.primary.black, padding: spacing.lg }}>
      <Stack direction="column" spacing="md">
        {(['default', 'muted', 'black', 'inverse', 'danger'] as const).map((variant) => (
          <div key={variant} style={{ 
            padding: spacing.md, 
            backgroundColor: colors.grey.grey1,
            borderRadius: '8px'
          }}>
            <div style={{ 
              fontSize: '12px', 
              color: colors.grey.grey6, 
              marginBottom: spacing.xs,
              fontFamily: 'monospace'
            }}>
              {variant.toUpperCase()}
            </div>
            <TextLink variant={variant} href="#">
              {variant.charAt(0).toUpperCase() + variant.slice(1)} link example
            </TextLink>
          </div>
        ))}
      </Stack>
    </div>
  ),
};

/* 📌 Light Backgrounds Showcase */
export const LightBackgrounds: Story = {
  render: () => (
    <div style={{ backgroundColor: '#FFFFFF', padding: spacing.lg }}>
      <Stack direction="column" spacing="lg">
        
        {/* White background card */}
        <div style={{ 
          padding: spacing.xl,
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid rgba(0,0,0,0.1)'
        }}>
          <Stack direction="column" spacing="sm">
            <div style={{ color: colors.primary.black, fontSize: '14px', fontWeight: 600 }}>
              Navigation Links
            </div>
            <div style={{ display: 'flex', gap: spacing.md }}>
              <TextLink variant="black" href="#">Home</TextLink>
              <TextLink variant="black" href="#">Browse</TextLink>
              <TextLink variant="black" href="#">Radio</TextLink>
            </div>
          </Stack>
        </div>

        {/* Light grey background card */}
        <div style={{ 
          padding: spacing.xl,
          backgroundColor: '#F5F5F5',
          borderRadius: '12px'
        }}>
          <Stack direction="column" spacing="sm">
            <div style={{ color: colors.primary.black, fontSize: '14px', fontWeight: 600 }}>
              Footer Links (using 'inverse')
            </div>
            <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap' }}>
              <TextLink variant="inverse" href="#">About</TextLink>
              <TextLink variant="inverse" href="#">Jobs</TextLink>
              <TextLink variant="inverse" href="#">For the Record</TextLink>
              <TextLink variant="inverse" href="#">Communities</TextLink>
            </div>
          </Stack>
        </div>

        {/* Legal text with links */}
        <div style={{ 
          padding: spacing.md,
          backgroundColor: '#FAFAFA',
          borderRadius: '8px',
          fontSize: '13px',
          color: colors.primary.black
        }}>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            By clicking "Sign up", you agree to our{' '}
            <TextLink variant="black" href="#" underline>Terms of Service</TextLink>
            {' '}and{' '}
            <TextLink variant="black" href="#" underline>Privacy Policy</TextLink>.
          </p>
        </div>

      </Stack>
    </div>
  ),
};

/* 📌 Usage Examples */
export const UsageExamples: Story = {
  render: () => (
    <div style={{ backgroundColor: colors.primary.black, padding: spacing.lg }}>
      <Stack direction="column" spacing="lg">
        
        <div style={{ 
          padding: spacing.lg,
          backgroundColor: colors.grey.grey1,
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '12px', color: colors.grey.grey6, marginBottom: spacing.sm }}>
            Navigation (dark background)
          </div>
          <pre style={{ 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            color: colors.grey.grey4,
            marginBottom: spacing.md 
          }}>
{`<TextLink variant="default" href="/home">
  Home
</TextLink>`}
          </pre>
          <TextLink variant="default" href="#">Home</TextLink>
        </div>

        <div style={{ 
          padding: spacing.lg,
          backgroundColor: '#FFFFFF',
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '12px', color: '#666', marginBottom: spacing.sm }}>
            Footer link (light background)
          </div>
          <pre style={{ 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            color: '#666',
            marginBottom: spacing.md 
          }}>
{`<TextLink variant="black" href="/about">
  About Us
</TextLink>`}
          </pre>
          <TextLink variant="black" href="#">About Us</TextLink>
        </div>

        <div style={{ 
          padding: spacing.lg,
          backgroundColor: colors.grey.grey1,
          borderRadius: '8px'
        }}>
          <div style={{ fontSize: '12px', color: colors.grey.grey6, marginBottom: spacing.sm }}>
            Danger action
          </div>
          <pre style={{ 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            color: colors.grey.grey4,
            marginBottom: spacing.md 
          }}>
{`<TextLink variant="danger" href="#" weight="medium">
  Delete Playlist
</TextLink>`}
          </pre>
          <TextLink variant="danger" href="#" weight="medium">
            Delete Playlist
          </TextLink>
        </div>

      </Stack>
    </div>
  ),
};
