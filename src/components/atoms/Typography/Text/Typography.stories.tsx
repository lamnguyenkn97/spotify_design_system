import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Typography } from './Typography';
import { TypographyVariant, TypographyWeight, TypographyColor } from './Typography.types';
import { colors, spacing } from '../../../../styles';
import { Stack } from '../../Layout';

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
        component:
          'A flexible typography component that provides consistent text styling across the design system with support for multiple variants, weights, colors, and semantic HTML elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'],
      description: 'Typography variant defining size and styling',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold'],
      description: 'Font weight from design tokens',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'danger'],
      description: 'Text color from design tokens',
    },
    component: {
      control: 'text',
      description: 'HTML element to render (h1, p, span, etc.)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic example
export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body1',
  },
};

// Typography Hierarchy - Main showcase
export const Hierarchy: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.hierarchy}>
        <Stack direction="column" spacing="lg">
          <Typography variant="h1">The Music Never Stops</Typography>
          <Typography variant="h2">Discover Your Sound</Typography>
          <Typography variant="h3">Featured Playlists</Typography>
          <Typography variant="h4">Recently Played</Typography>
          <Typography variant="h5">Quick Actions</Typography>
          <Typography variant="h6">Settings</Typography>
          <Typography variant="body1">
            Stream millions of songs and podcasts for free. Get the music you love, 
            discover new tracks, and create your perfect playlists.
          </Typography>
          <Typography variant="body2">
            Enjoy unlimited access to your favorite artists, albums, and playlists 
            across all your devices.
          </Typography>
          <Typography variant="caption">
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
    const variants: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'];
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.flexColumn}>
          {variants.map((variant) => (
            <div key={variant} style={storyStyles.card}>
              <div style={storyStyles.label}>{variant.toUpperCase()}</div>
              <Typography variant={variant}>
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
              <div style={storyStyles.label}>{weight} (body1)</div>
              <Typography variant="body1" weight={weight}>
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
    const colorVariants: TypographyColor[] = ['primary', 'secondary', 'muted', 'danger'];
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {colorVariants.map((color) => (
            <div key={color} style={storyStyles.card}>
              <div style={storyStyles.label}>{color} color</div>
              <Typography variant="body1" color={color}>
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
      <div style={storyStyles.flexColumn}>
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>H1 style as &lt;p&gt; element</div>
          <Typography variant="h1" component="p">
            Visually H1, semantically paragraph
          </Typography>
        </div>
        
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Body style as &lt;h2&gt; element</div>
          <Typography variant="body1" component="h2">
            Visually body text, semantically H2 heading
          </Typography>
        </div>
        
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Caption as &lt;figcaption&gt;</div>
          <Typography variant="caption" component="figcaption">
            Image caption text with proper semantic meaning
          </Typography>
        </div>
      </div>
    </div>
  ),
};

// Real-world examples
export const SpotifyExamples: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <Stack direction="column" spacing="xl">
        
        {/* Song Card Example */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Song Card</div>
          <Stack direction="column" spacing="xs">
            <Typography variant="body1" weight="medium">
              Blinding Lights
            </Typography>
            <Typography variant="body2" color="muted">
              The Weeknd
            </Typography>
            <Typography variant="caption" color="muted">
              After Hours • 2020
            </Typography>
          </Stack>
        </div>

        {/* Playlist Header */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Playlist Header</div>
          <Stack direction="column" spacing="sm">
            <Typography variant="caption" color="muted">
              PLAYLIST
            </Typography>
            <Typography variant="h1" weight="bold">
              Today's Top Hits
            </Typography>
            <Typography variant="body1" color="secondary">
              The most played songs right now.
            </Typography>
            <Typography variant="caption" color="muted">
              Spotify • 2,847,582 likes • 50 songs, about 2 hr 30 min
            </Typography>
          </Stack>
        </div>

        {/* Artist Profile */}
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Artist Profile</div>
          <Stack direction="column" spacing="sm">
            <Typography variant="caption" color="muted">
              ARTIST
            </Typography>
            <Typography variant="h1" weight="bold">
              The Weeknd
            </Typography>
            <Typography variant="body1" color="secondary">
              85,234,567 monthly listeners
            </Typography>
          </Stack>
        </div>

      </Stack>
    </div>
  ),
};

// Interactive combinations
export const InteractiveCombinations: Story = {
  render: () => {
    const [selectedVariant, setSelectedVariant] = React.useState<TypographyVariant>('h1');
    const [selectedWeight, setSelectedWeight] = React.useState<TypographyWeight>('regular');
    const [selectedColor, setSelectedColor] = React.useState<TypographyColor>('primary');
    
    const variants: TypographyVariant[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'];
    const weights: TypographyWeight[] = ['light', 'regular', 'medium', 'bold'];
    const colorOptions: TypographyColor[] = ['primary', 'secondary', 'muted', 'danger'];
    
    return (
      <div style={storyStyles.container}>
        <Stack direction="column" spacing="xl">
          
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
              Result: {selectedVariant} / {selectedWeight} / {selectedColor}
            </div>
            <Typography 
              variant={selectedVariant} 
              weight={selectedWeight} 
              color={selectedColor}
            >
              The quick brown fox jumps over the lazy dog
            </Typography>
          </div>
          
        </Stack>
      </div>
    );
  },
};

// Usage examples with code
export const UsageExamples: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <Stack direction="column" spacing="lg">
        
        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Basic Usage</div>
          <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: colors.grey.grey4, margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Typography variant="h1">
  Page Title
</Typography>`}
          </pre>
          <div style={{ marginTop: spacing.md }}>
            <Typography variant="h1">Page Title</Typography>
          </div>
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>With Custom Component</div>
          <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: colors.grey.grey4, margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Typography variant="h2" component="p">
  Looks like H2, but semantic P
</Typography>`}
          </pre>
          <div style={{ marginTop: spacing.md }}>
            <Typography variant="h2" component="p">
              Looks like H2, but semantic P
            </Typography>
          </div>
        </div>

        <div style={storyStyles.card}>
          <div style={storyStyles.label}>Weight & Color Combinations</div>
          <pre style={{ fontFamily: 'monospace', fontSize: '12px', color: colors.grey.grey4, margin: 0, whiteSpace: 'pre-wrap' }}>
{`<Typography variant="body1" weight="bold" color="danger">
  Error message
</Typography>`}
          </pre>
          <div style={{ marginTop: spacing.md }}>
            <Typography variant="body1" weight="bold" color="danger">
              Error message
            </Typography>
          </div>
        </div>

      </Stack>
    </div>
  ),
};

// Individual variant exports for direct testing
export const H1: Story = { args: { variant: 'h1', children: 'Heading 1' } };
export const H2: Story = { args: { variant: 'h2', children: 'Heading 2' } };
export const H3: Story = { args: { variant: 'h3', children: 'Heading 3' } };
export const H4: Story = { args: { variant: 'h4', children: 'Heading 4' } };
export const H5: Story = { args: { variant: 'h5', children: 'Heading 5' } };
export const H6: Story = { args: { variant: 'h6', children: 'Heading 6' } };
export const Body1: Story = { args: { variant: 'body1', children: 'Body text large' } };
export const Body2: Story = { args: { variant: 'body2', children: 'Body text small' } };
export const Caption: Story = { args: { variant: 'caption', children: 'Caption text' } };

// Individual weight exports for direct testing
export const Light: Story = {
  args: { variant: 'body1', weight: 'light', children: 'Light Text (300)' },
};

export const Regular: Story = {
  args: { variant: 'body1', weight: 'regular', children: 'Regular Text (400)' },
};

export const Medium: Story = {
  args: { variant: 'body1', weight: 'medium', children: 'Medium Text (500)' },
};

export const Bold: Story = {
  args: { variant: 'body1', weight: 'bold', children: 'Bold Text (700)' },
};

// Individual color exports for direct testing
export const PrimaryColor: Story = {
  args: { variant: 'body1', color: 'primary', children: 'Primary Color' },
};

export const SecondaryColor: Story = {
  args: { variant: 'body1', color: 'secondary', children: 'Secondary Color' },
};

export const MutedColor: Story = {
  args: { variant: 'body1', color: 'muted', children: 'Muted Color' },
};

export const DangerColor: Story = {
  args: { variant: 'body1', color: 'danger', children: 'Danger Color' },
};
