import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Image } from './Image';
import { sizeTokens, shapeTokens } from './Image.style';
import { colors, spacing } from '../../../styles';

// Sample images for demonstrations - using reliable image services
const sampleImages = {
  portrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
  landscape: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop',
  square: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  album: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop',
  fallback: 'https://via.placeholder.com/400x400/1db954/ffffff?text=Spotify',
  broken: 'https://this-url-does-not-exist-for-demo.jpg',
};

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
    fontSize: '14px',
    marginBottom: spacing.sm,
    display: 'block',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: spacing.lg,
  },
  flexRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.lg,
    flexWrap: 'wrap' as const,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.lg,
  },
  card: {
    padding: spacing.md,
    backgroundColor: colors.grey.grey1,
    borderRadius: '8px',
    textAlign: 'center' as const,
  },
  demoContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: spacing.sm,
  },
};

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible image component with multiple shapes, sizes, loading states, and FontAwesome icon placeholders for error handling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'select',
      options: [...Object.keys(sizeTokens), 'auto', '200px'],
      description: 'Width using size tokens or custom value',
    },
    height: {
      control: 'select',
      options: [...Object.keys(sizeTokens), 'auto', '200px'],
      description: 'Height using size tokens or custom value',
    },
    shape: {
      control: 'select',
      options: Object.keys(shapeTokens),
      description: 'Shape variant of the image',
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'scale-down', 'none'],
      description: 'How the image fits within its container',
    },
    placeholder: {
      control: 'select',
      options: ['blur', 'empty', 'skeleton', 'custom'],
      description: 'Type of placeholder while loading',
    },
    placeholderType: {
      control: 'select',
      options: ['avatar', 'album', 'playlist', 'image', 'broken', 'spotify'],
      description: 'Type of placeholder for errors/missing images',
    },
    placeholderIconSize: {
      control: 'select',
      options: ['xs', 'sm', 'lg', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
      description: 'Size of the FontAwesome placeholder icon',
    },
    lazy: {
      control: 'boolean',
      description: 'Whether to lazy load the image',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic examples
export const Default: Story = {
  args: {
    src: sampleImages.landscape,
    alt: 'Beautiful landscape',
    width: 'lg',
    height: 'md',
  },
};

export const Circle: Story = {
  args: {
    src: sampleImages.portrait,
    alt: 'Profile picture',
    shape: 'circle',
    width: 'lg',
  },
};

// Size variations using design tokens
export const Sizes: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.grid}>
        {Object.keys(sizeTokens).filter(size => size !== 'full').map((size) => (
          <div key={size} style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>{size.toUpperCase()}</div>
            <Image 
              src={sampleImages.square} 
              alt={`${size} image`} 
              width={size as any} 
              height={size as any}
              shape="rounded"
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

// Shape variations
export const Shapes: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.flexRow}>
        {Object.keys(shapeTokens).map((shape) => (
          <div key={shape} style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>{shape.charAt(0).toUpperCase() + shape.slice(1)}</div>
            <Image 
              src={sampleImages.portrait} 
              alt={`${shape} image`} 
              shape={shape as any}
              width="lg"
              height="lg"
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

// Object fit demonstrations
export const ObjectFit: Story = {
  render: () => {
    const fits = ['cover', 'contain', 'fill', 'scale-down'] as const;
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {fits.map((fit) => (
            <div key={fit} style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>{fit.toUpperCase()}</div>
              <Image 
                src={sampleImages.landscape} 
                alt={`${fit} example`} 
                objectFit={fit}
                width="md"
                height="md"
                shape="rounded"
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Aspect ratio examples
export const AspectRatios: Story = {
  render: () => {
    const ratios = [
      { ratio: '16/9', label: '16:9 (Video)' },
      { ratio: '4/3', label: '4:3 (Standard)' },
      { ratio: '1/1', label: '1:1 (Square)' },
      { ratio: '3/4', label: '3:4 (Portrait)' },
    ];
    
    return (
      <div style={storyStyles.container}>
        <div style={storyStyles.grid}>
          {ratios.map(({ ratio, label }) => (
            <div key={ratio} style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>{label}</div>
              <Image 
                src={sampleImages.landscape} 
                alt={`${label} aspect ratio`} 
                aspectRatio={ratio}
                width="full"
                height="auto"
                shape="rounded"
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Loading states and placeholders
export const LoadingStates: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.grid}>
        <div style={storyStyles.demoContainer}>
          <div style={storyStyles.label}>Blur Placeholder</div>
          <Image 
            src={sampleImages.album}
            alt="Blur loading"
            width="lg"
            height="lg"
            placeholder="blur"
            loading
          />
        </div>
        
        <div style={storyStyles.demoContainer}>
          <div style={storyStyles.label}>Skeleton Placeholder</div>
          <Image 
            src={sampleImages.album}
            alt="Skeleton loading"
            width="lg"
            height="lg"
            placeholder="skeleton"
            loading
          />
        </div>
        
        <div style={storyStyles.demoContainer}>
          <div style={storyStyles.label}>Empty Placeholder</div>
          <Image 
            src={sampleImages.album}
            alt="Empty loading"
            width="lg"
            height="lg"
            placeholder="empty"
            loading
          />
        </div>
        
        <div style={storyStyles.demoContainer}>
          <div style={storyStyles.label}>Custom Placeholder</div>
          <Image 
            src={sampleImages.album}
            alt="Custom loading"
            width="lg"
            height="lg"
            placeholder="custom"
            placeholderContent={<div style={{ color: colors.primary.brand }}>🎵 Loading...</div>}
            loading
          />
        </div>
      </div>
    </div>
  ),
};

// Error handling and placeholders with FontAwesome icons
export const ErrorHandling: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Error Handling</h3>
        <div style={storyStyles.grid}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>No URL (FontAwesome Default)</div>
            <Image 
              src=""
              alt="No image"
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Broken URL (FontAwesome Error)</div>
            <Image 
              src={sampleImages.broken}
              alt="Broken image"
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>With Fallback URL</div>
            <Image 
              src={sampleImages.broken}
              alt="Image with fallback"
              fallbackSrc={sampleImages.fallback}
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Working Image</div>
            <Image 
              src={sampleImages.portrait}
              alt="Working image"
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Icon size variations
export const PlaceholderIconSizes: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Placeholder Icon Sizes</h3>
        <div style={storyStyles.flexRow}>
          {['1x', '2x', '3x', '4x', '5x'].map((size) => (
            <div key={size} style={storyStyles.demoContainer}>
              <div style={storyStyles.label}>{size}</div>
              <Image 
                src=""
                alt={`${size} placeholder`}
                placeholderType="album"
                placeholderIconSize={size as any}
                width="lg"
                height="lg"
                shape="rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Placeholder types demonstration
export const PlaceholderTypes: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.section}>
        <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>FontAwesome Placeholder Types</h3>
        <div style={storyStyles.grid}>
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Avatar (faUser)</div>
            <Image 
              src=""
              alt="Avatar placeholder"
              placeholderType="avatar"
              width="lg"
              height="lg"
              shape="circle"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Album (faCompactDisc)</div>
            <Image 
              src=""
              alt="Album placeholder"
              placeholderType="album"
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Playlist (faList)</div>
            <Image 
              src=""
              alt="Playlist placeholder"
              placeholderType="playlist"
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Image (faImage)</div>
            <Image 
              src=""
              alt="Generic image placeholder"
              placeholderType="image"
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Broken (faExclamationTriangle)</div>
            <Image 
              src=""
              alt="Broken image placeholder"
              placeholderType="broken"
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
          
          <div style={storyStyles.demoContainer}>
            <div style={storyStyles.label}>Spotify (faSpotify)</div>
            <Image 
              src=""
              alt="Spotify placeholder"
              placeholderType="spotify"
              width="lg"
              height="lg"
              shape="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Real-world usage examples
export const MusicAlbumCovers: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.label}>Album Covers</div>
      <div style={storyStyles.flexRow}>
        <Image 
          src={sampleImages.album}
          alt="Album cover"
          placeholderType="album"
          shape="rounded"
          width="lg"
          height="lg"
        />
        <Image 
          src=""
          alt="No album cover"
          placeholderType="album"
          shape="rounded"
          width="md"
          height="md"
        />
        <Image 
          src={sampleImages.broken}
          alt="Broken album cover"
          placeholderType="album"
          shape="rounded"
          width="sm"
          height="sm"
        />
      </div>
    </div>
  ),
};

export const UserProfiles: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.label}>User Profile Pictures</div>
      <div style={storyStyles.flexRow}>
        <Image 
          src={sampleImages.portrait}
          alt="User profile"
          placeholderType="avatar"
          shape="circle"
          width="xl"
          height="xl"
        />
        <Image 
          src={sampleImages.square}
          alt="User profile"
          placeholderType="avatar"
          shape="circle"
          width="lg"
          height="lg"
        />
        <Image 
          src=""
          alt="No avatar"
          placeholderType="avatar"
          shape="circle"
          width="md"
          height="md"
        />
        <Image 
          src={sampleImages.broken}
          alt="Broken avatar"
          placeholderType="avatar"
          shape="circle"
          width="sm"
          height="sm"
        />
      </div>
    </div>
  ),
};

export const PlaylistCovers: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.label}>Playlist Covers</div>
      <div style={storyStyles.grid}>
        <Image 
          src={sampleImages.landscape}
          alt="Playlist cover"
          placeholderType="playlist"
          aspectRatio="1/1"
          width="full"
          shape="rounded"
        />
        <Image 
          src=""
          alt="No playlist cover"
          placeholderType="playlist"
          aspectRatio="1/1"
          width="full"
          shape="rounded"
        />
        <Image 
          src={sampleImages.album}
          alt="Playlist cover"
          placeholderType="playlist"
          aspectRatio="1/1"
          width="full"
          shape="rounded"
        />
        <Image 
          src={sampleImages.broken}
          alt="Broken playlist cover"
          placeholderType="playlist"
          aspectRatio="1/1"
          width="full"
          shape="rounded"
        />
      </div>
    </div>
  ),
};

export const AllFeatures: Story = {
  render: () => (
    <div style={storyStyles.container}>
      <div style={storyStyles.flexColumn}>
        <div style={storyStyles.section}>
          <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Sizes</h3>
          <div style={storyStyles.flexRow}>
            {Object.keys(sizeTokens).filter(size => size !== 'full').map((size) => (
              <Image 
                key={size}
                src={sampleImages.square} 
                alt={`${size} image`} 
                width={size as any} 
                height={size as any}
                shape="rounded"
              />
            ))}
          </div>
        </div>
        
        <div style={storyStyles.section}>
          <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Shapes</h3>
          <div style={storyStyles.flexRow}>
            {Object.keys(shapeTokens).map((shape) => (
              <Image 
                key={shape}
                src={sampleImages.portrait} 
                alt={`${shape} image`} 
                shape={shape as any}
                width="lg"
                height="lg"
              />
            ))}
          </div>
        </div>
        
        <div style={storyStyles.section}>
          <h3 style={{ color: colors.primary.white, marginBottom: spacing.md }}>Real World Examples</h3>
          <div style={storyStyles.flexRow}>
            <Image src={sampleImages.album} alt="Album" shape="rounded" width="lg" height="lg" />
            <Image src={sampleImages.portrait} alt="Profile" shape="circle" width="lg" height="lg" />
            <Image src={sampleImages.landscape} alt="Banner" aspectRatio="16/9" width="200px" shape="rounded" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
