import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Typography } from './Typography';
import { TypographyVariant, TypographySize, TypographyWeight, TypographyColor } from './Typography.types';
import { colors, spacing } from '../../../../styles';
import { Stack } from '../../Stack';

// Reusable style objects using design tokens
const storyStyles = {
  container: {
    color: colors.primary.white,
    backgroundColor: colors.primary.black,
    padding: spacing.lg,
  },
  section: {
    marginBottom: spacing.xl,
  },
  label: {
    color: colors.grey.grey6,
    fontSize: '12px',
    marginBottom: spacing.sm,
    fontFamily: 'monospace',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: spacing.lg,
  },
  flexRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: spacing.lg,
    flexWrap: 'wrap' as const,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.md,
  },
  card: {
    padding: spacing.lg,
    backgroundColor: colors.grey.grey1,
    borderRadius: '8px',
    border: `1px solid ${colors.grey.grey2}`,
  },
  hierarchy: {
    backgroundColor: colors.grey.grey1,
    padding: spacing.xl,
    borderRadius: '12px',
    border: `1px solid ${colors.grey.grey2}`,
  },
};

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography/Text',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A simplified typography component focused on Spotify's actual needs with semantic variants and a clean size system.

**Key Features:**
- 🎯 **Spotify-Focused**: Only the variants Spotify actually uses
- 📏 **Flexible Sizing**: Separate size prop for granular control
- 🎨 **Semantic Colors**: Success, warning, error states
- 🔤 **Design Tokens**: Fully token-driven with zero hardcoded values
- ♿ **Accessible**: Automatic semantic HTML element selection
- 🏗️ **Clean API**: Intuitive props with sensible defaults

**New Simplified API:**
- \`variant\`: semantic purpose (title, heading, body, caption)
- \`size\`: visual size (sm, md, lg, xl, xxl, 2xl)
- \`weight\`: font weight (light, regular, medium, bold)
- \`color\`: semantic colors (primary, secondary, muted, success, warning, error)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['title', 'heading', 'body', 'caption'],
      description: 'Semantic variant defining the purpose and styling',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'xxl', '2xl'],
      description: 'Size controlling font-size using design tokens',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Font weight from Circular font family',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'black', 'inverse', 'success', 'warning', 'error'],
      description: 'Semantic color variants (black/inverse for light backgrounds)',
    },
    component: {
      control: 'text',
      description: 'HTML element to render (auto-determined if not specified)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example
export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
    size: 'md',
  },
};

// Typography Hierarchy - Main showcase
export const Hierarchy: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.hierarchy}>
        <Stack direction="column" spacing="lg">
          <Typography variant="title" size="2xl">The Music Never Stops</Typography>
          <Typography variant="title" size="xxl">Discover Your Sound</Typography>
          <Typography variant="heading" size="xl">Featured Playlists</Typography>
          <Typography variant="heading" size="lg">Recently Played</Typography>
          <Typography variant="heading" size="md">Quick Actions</Typography>
          <Typography variant="body" size="md">
            Stream millions of songs and podcasts for free. Get the music you love, 
            discover new tracks, and create your perfect playlists.
          </Typography>
          <Typography variant="body" size="sm">
            Enjoy unlimited access to your favorite artists, albums, and playlists 
            across all your devices.
          </Typography>
          <Typography variant="caption" size="sm">
            *Premium features require subscription
          </Typography>
        </Stack>
      </div>
    </div>
  ),
};

// All variants showcase
export const AllVariants: Story = {
  render: () => {
    const variants: TypographyVariant[] = ['title', 'heading', 'body', 'caption'];
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.flexColumn}>
          {variants.map((variant) => (
            <div key={variant} style={storyStyles.card}>
              <div style={storyStyles.label}>{variant.toUpperCase()}</div>
              <Typography variant={variant} size="md">
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Size scale showcase
export const SizeScale: Story = {
  render: () => {
    const sizes: TypographySize[] = ['sm', 'md', 'lg', 'xl', 'xxl', '2xl'];
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.flexColumn}>
          {sizes.map((size) => (
            <div key={size} style={storyStyles.card}>
              <div style={storyStyles.label}>{size.toUpperCase()} - Body variant</div>
              <Typography variant="body" size={size}>
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Font weights showcase
export const FontWeights: Story = {
  render: () => {
    const weights: TypographyWeight[] = ['light', 'regular', 'medium', 'bold'];
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {weights.map((weight) => (
            <div key={weight} style={storyStyles.card}>
              <div style={storyStyles.label}>{weight} weight</div>
              <Typography variant="body" size="md" weight={weight}>
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Color variations
export const Colors: Story = {
  render: () => {
    const colorVariants: TypographyColor[] = ['primary', 'secondary', 'muted', 'black', 'inverse', 'success', 'warning', 'error'];
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {colorVariants.map((color) => (
            <div key={color} style={storyStyles.card}>
              <div style={storyStyles.label}>{color} color</div>
              <Typography variant="body" size="md" color={color}>
                The quick brown fox jumps over the lazy dog
              </Typography>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Semantic HTML examples
export const SemanticComponents: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <Stack direction="column" spacing="lg">
        
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Auto-determined semantic HTML</div>
          <Stack direction="column" spacing="md">
            <Typography variant="title" size="xl">Auto H1 Title</Typography>
            <Typography variant="heading" size="lg">Auto H2 Heading</Typography>
            <Typography variant="body" size="md">Auto P Body Text</Typography>
            <Typography variant="caption" size="sm">Auto Span Caption</Typography>
          </Stack>
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Custom semantic HTML</div>
          <Stack direction="column" spacing="md">
            <Typography variant="title" size="xl" component="h1">Custom H1</Typography>
            <Typography variant="body" size="md" component="h2">Body styling, H2 semantics</Typography>
            <Typography variant="heading" size="lg" component="p">Heading styling, P semantics</Typography>
          </Stack>
        </div>

      </Stack>
    </div>
  ),
};

// Spotify use cases
export const SpotifyExamples: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <Stack direction="column" spacing="lg">
        
        {/* Page Title */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Page Title</div>
          <Stack direction="column" spacing="sm">
            <Typography variant="caption" size="sm" color="muted">
              PLAYLIST
            </Typography>
            <Typography variant="title" size="2xl" weight="bold">
              Today's Top Hits
            </Typography>
            <Typography variant="body" size="md" color="secondary">
              The biggest songs right now. Cover: Olivia Rodrigo
            </Typography>
          </Stack>
        </div>

        {/* Song List */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Song List Item</div>
          <Stack direction="column" spacing="sm">
            <Typography variant="body" size="md" weight="medium">
              As It Was
            </Typography>
            <Typography variant="body" size="sm" color="secondary">
              Harry Styles
            </Typography>
          </Stack>
        </div>

        {/* Artist Profile */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Artist Profile</div>
          <Stack direction="column" spacing="sm">
            <Typography variant="caption" size="sm" color="muted">
              ARTIST
            </Typography>
            <Typography variant="title" size="2xl" weight="bold">
              The Weeknd
            </Typography>
            <Typography variant="body" size="md" color="secondary">
              85,234,567 monthly listeners
            </Typography>
          </Stack>
        </div>

        {/* Status Messages */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Status Messages</div>
          <Stack direction="column" spacing="sm">
            <Typography variant="body" size="sm" color="success">
              ✓ Song added to playlist
            </Typography>
            <Typography variant="body" size="sm" color="warning">
              ⚠ Limited network connectivity
            </Typography>
            <Typography variant="body" size="sm" color="error">
              ✗ Failed to load track
            </Typography>
          </Stack>
        </div>

      </Stack>
    </div>
  ),
};

// Interactive combinations component
const InteractiveCombinationsComponent = () => {
  const [selectedVariant, setSelectedVariant] = React.useState<TypographyVariant>('title');
  const [selectedSize, setSelectedSize] = React.useState<TypographySize>('md');
  const [selectedWeight, setSelectedWeight] = React.useState<TypographyWeight>('regular');
  const [selectedColor, setSelectedColor] = React.useState<TypographyColor>('primary');
  
  const variants: TypographyVariant[] = ['title', 'heading', 'body', 'caption'];
  const sizes: TypographySize[] = ['sm', 'md', 'lg', 'xl', 'xxl', '2xl'];
  const weights: TypographyWeight[] = ['light', 'regular', 'medium', 'bold'];
  const colorOptions: TypographyColor[] = ['primary', 'secondary', 'muted', 'black', 'inverse', 'success', 'warning', 'error'];
  
  return (
    <div style={storyStyles.container}>
      <Stack direction="column" spacing="lg">
        
        {/* Controls */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Interactive Playground</div>
          <Stack direction="column" spacing="md">
            
            <div>
              <label style={storyStyles.label}>Variant:</label>
              <select 
                value={selectedVariant} 
                onChange={(e) => setSelectedVariant(e.target.value as TypographyVariant)}
                style={{ padding: '8px', marginLeft: '8px', backgroundColor: colors.grey.grey2, color: colors.primary.white, border: 'none', borderRadius: '4px' }}
              >
                {variants.map(variant => (
                  <option key={variant} value={variant}>{variant}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={storyStyles.label}>Size:</label>
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value as TypographySize)}
                style={{ padding: '8px', marginLeft: '8px', backgroundColor: colors.grey.grey2, color: colors.primary.white, border: 'none', borderRadius: '4px' }}
              >
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={storyStyles.label}>Weight:</label>
              <select 
                value={selectedWeight} 
                onChange={(e) => setSelectedWeight(e.target.value as TypographyWeight)}
                style={{ padding: '8px', marginLeft: '8px', backgroundColor: colors.grey.grey2, color: colors.primary.white, border: 'none', borderRadius: '4px' }}
              >
                {weights.map(weight => (
                  <option key={weight} value={weight}>{weight}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={storyStyles.label}>Color:</label>
              <select 
                value={selectedColor} 
                onChange={(e) => setSelectedColor(e.target.value as TypographyColor)}
                style={{ padding: '8px', marginLeft: '8px', backgroundColor: colors.grey.grey2, color: colors.primary.white, border: 'none', borderRadius: '4px' }}
              >
                {colorOptions.map(color => (
                  <option key={color} value={color}>{color}</option>
                ))}
              </select>
            </div>
            
          </Stack>
        </div>

        {/* Result */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>
            Result: {selectedVariant} / {selectedSize} / {selectedWeight} / {selectedColor}
          </div>
          <Typography 
            variant={selectedVariant} 
            size={selectedSize}
            weight={selectedWeight} 
            color={selectedColor}
          >
            The quick brown fox jumps over the lazy dog
          </Typography>
        </div>
        
      </Stack>
    </div>
  );
};

export const InteractiveCombinations: Story = {
  render: () => <InteractiveCombinationsComponent />,
};

// Usage examples with code
export const UsageExamples: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <Stack direction="column" spacing="lg">
        
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Basic Usage</div>
          <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: colors.grey.grey4, margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Typography variant="title" size="xl">
  Page Title
</Typography>`}
          </pre>
          <div style={{ marginTop: spacing.md }}>
            <Typography variant="title" size="xl">Page Title</Typography>
          </div>
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Flexible Sizing</div>
          <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: colors.grey.grey4, margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Typography variant="body" size="xxl">
  Large body text
</Typography>`}
          </pre>
          <div style={{ marginTop: spacing.md }}>
            <Typography variant="body" size="xxl">
              Large body text
            </Typography>
          </div>
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Status Messages</div>
          <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: colors.grey.grey4, margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Typography variant="body" size="sm" color="error">
  Something went wrong
</Typography>`}
          </pre>
          <div style={{ marginTop: spacing.md }}>
            <Typography variant="body" size="sm" color="error">
              Something went wrong
            </Typography>
          </div>
        </div>

      </Stack>
    </div>
  ),
};

// Individual variant exports for direct testing
export const Title: Story = { 
  args: { variant: 'title', size: 'xl', children: 'Page Title' } 
};

export const Heading: Story = { 
  args: { variant: 'heading', size: 'lg', children: 'Section Heading' } 
};

export const Body: Story = { 
  args: { variant: 'body', size: 'md', children: 'Body text content' } 
};

export const Caption: Story = { 
  args: { variant: 'caption', size: 'sm', children: 'Caption text' } 
};

// Individual size exports
export const SmallSize: Story = {
  args: { variant: 'body', size: 'sm', children: 'Small text (14px)' },
};

export const MediumSize: Story = {
  args: { variant: 'body', size: 'md', children: 'Medium text (16px)' },
};

export const LargeSize: Story = {
  args: { variant: 'body', size: 'lg', children: 'Large text (18px)' },
};

export const ExtraLargeSize: Story = {
  args: { variant: 'body', size: 'xl', children: 'Extra Large text (32px)' },
};

// Individual weight exports
export const Light: Story = {
  args: { variant: 'body', size: 'md', weight: 'light', children: 'Light Text (300)' },
};

export const Regular: Story = {
  args: { variant: 'body', size: 'md', weight: 'regular', children: 'Regular Text (400)' },
};

export const Medium: Story = {
  args: { variant: 'body', size: 'md', weight: 'medium', children: 'Medium Text (500)' },
};

export const Bold: Story = {
  args: { variant: 'body', size: 'md', weight: 'bold', children: 'Bold Text (700)' },
};

// Individual color exports
export const PrimaryColor: Story = {
  args: { variant: 'body', size: 'md', color: 'primary', children: 'Primary Color' },
};

export const SecondaryColor: Story = {
  args: { variant: 'body', size: 'md', color: 'secondary', children: 'Secondary Color' },
};

export const MutedColor: Story = {
  args: { variant: 'body', size: 'md', color: 'muted', children: 'Muted Color' },
};

export const SuccessColor: Story = {
  args: { variant: 'body', size: 'md', color: 'success', children: 'Success Color' },
};

export const WarningColor: Story = {
  args: { variant: 'body', size: 'md', color: 'warning', children: 'Warning Color' },
};

export const ErrorColor: Story = {
  args: { variant: 'body', size: 'md', color: 'error', children: 'Error Color' },
};

export const BlackColor: Story = {
  args: { variant: 'body', size: 'md', color: 'black', children: 'Black Color (for light backgrounds)' },
};

export const InverseColor: Story = {
  args: { variant: 'body', size: 'md', color: 'inverse', children: 'Inverse Color (for light backgrounds)' },
};

// Black text on light backgrounds showcase
export const LightBackgrounds: Story = {
  render: () => (
    <div style={{ backgroundColor: colors.primary.white, padding: spacing.lg }}>
      <Stack direction="column" spacing="lg">
        
        {/* White background card */}
        <div style={{ 
          padding: spacing.xl,
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          border: '1px solid rgba(0,0,0,0.1)'
        }}>
          <Stack direction="column" spacing="md">
            <Typography variant="caption" size="sm" color="black" style={{ opacity: 0.6 }}>
              PLAYLIST
            </Typography>
            <Typography variant="title" size="2xl" color="black" weight="bold">
              Your Top Songs 2024
            </Typography>
            <Typography variant="body" size="md" color="black" style={{ opacity: 0.8 }}>
              Your most played songs from this year. Updates every day.
            </Typography>
          </Stack>
        </div>

        {/* Light grey background card */}
        <div style={{ 
          padding: spacing.xl,
          backgroundColor: '#F5F5F5',
          borderRadius: '12px'
        }}>
          <Stack direction="column" spacing="md">
            <Typography variant="heading" size="xl" color="inverse" weight="bold">
              Premium Features
            </Typography>
            <Typography variant="body" size="md" color="inverse">
              Unlock unlimited skips, offline downloads, and ad-free listening with Spotify Premium.
            </Typography>
          </Stack>
        </div>

        {/* Success message on light background */}
        <div style={{ 
          padding: spacing.md,
          backgroundColor: '#E8F5E9',
          borderRadius: '8px',
          border: '1px solid #4CAF50'
        }}>
          <Typography variant="body" size="sm" color="black" style={{ opacity: 0.9 }}>
            ✓ Playlist successfully created
          </Typography>
        </div>

      </Stack>
    </div>
  ),
};
