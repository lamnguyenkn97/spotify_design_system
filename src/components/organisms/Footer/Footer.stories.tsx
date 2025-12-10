import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { FooterLinkItem, SocialLinkItem } from './Footer.types';
import { Icon } from '../../atoms';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Button, ButtonVariant, ButtonSize } from '../../atoms/Button';
import { Stack } from '../../atoms/Stack';
import { faInstagram, faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Footer Component

Site footer with links, social media icons, and custom content support.

## Features
- Multiple link columns with headings
- Social media icons (Instagram, Twitter, Facebook, etc.)
- Copyright text
- Custom content injection (top, bottom, or replace)
- Toggle visibility of sections

## Usage

\`\`\`tsx
import { Footer } from 'spotify-design-system';

// Default footer
<Footer />

// With custom links
<Footer
  customLinks={[
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ]}
  copyrightText="© 2025 My Company"
/>

// With custom content
<Footer customContentPosition="top">
  <Newsletter />
</Footer>
\`\`\`

## Custom Content
- \`top\`: Renders above footer links
- \`bottom\`: Renders below copyright
- \`replace\`: Replaces entire footer with custom content
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
    customLinks: {
      control: 'object',
      description: 'Custom footer links configuration',
    },
    customSocialLinks: {
      control: 'object',
      description: 'Custom social media links',
    },
    showSocialLinks: {
      control: 'boolean',
      description: 'Whether to show social media links',
    },
    showLinks: {
      control: 'boolean',
      description: 'Whether to show footer links',
    },
    copyrightText: {
      control: 'text',
      description: 'Custom copyright text',
    },
    showCopyright: {
      control: 'boolean',
      description: 'Whether to show copyright text',
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

// Dynamic configuration examples
export const MinimalFooter: Story = {
  args: {
    showLinks: false,
    showSocialLinks: false,
    showCopyright: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal footer with no links, social media, or copyright.',
      },
    },
  },
};

export const CustomLinks: Story = {
  args: {
    customLinks: [
      {
        title: 'Product',
        links: [
          { name: 'Features', url: '#features' },
          { name: 'Pricing', url: '#pricing' },
          { name: 'API', url: '#api' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', url: '#about' },
          { name: 'Careers', url: '#careers' },
          { name: 'Contact', url: '#contact' },
        ],
      },
      {
        title: 'Support',
        links: [
          { name: 'Help Center', url: '#help' },
          { name: 'Documentation', url: '#docs' },
          { name: 'Community', url: '#community' },
        ],
      },
    ],
    showSocialLinks: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom links for a different product/company.',
      },
    },
  },
};

export const CustomSocialLinks: Story = {
  args: {
    customSocialLinks: [
      { 
        icon: faLinkedin, 
        url: '#linkedin', 
        label: 'LinkedIn',
        onClick: () => alert('LinkedIn clicked!'),
      },
      { 
        icon: faGithub, 
        url: '#github', 
        label: 'GitHub',
        onClick: () => alert('GitHub clicked!'),
      },
      { 
        icon: faTwitter, 
        url: '#twitter', 
        label: 'Twitter',
        onClick: () => alert('Twitter clicked!'),
      },
    ],
    showLinks: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom social media links and click handlers.',
      },
    },
  },
};

export const CustomCopyright: Story = {
  args: {
    copyrightText: '© 2024 My Awesome Company. All rights reserved.',
    showLinks: false,
    showSocialLinks: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom copyright text only.',
      },
    },
  },
};

export const LinksWithClickHandlers: Story = {
  args: {
    customLinks: [
      {
        title: 'Quick Actions',
        links: [
          { 
            name: 'Download App', 
            url: '#download',
            onClick: () => alert('Download app clicked!'),
          },
          { 
            name: 'Get Support', 
            url: '#support',
            onClick: () => alert('Support clicked!'),
          },
          { 
            name: 'Report Bug', 
            url: '#bug-report',
            onClick: () => alert('Bug report clicked!'),
          },
        ],
      },
    ],
    showSocialLinks: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with links that have custom click handlers instead of navigation.',
      },
    },
  },
};

export const TechCompanyFooter: Story = {
  args: {
    customLinks: [
      {
        title: 'Platform',
        links: [
          { name: 'API Documentation', url: '#api-docs' },
          { name: 'SDKs', url: '#sdks' },
          { name: 'Webhooks', url: '#webhooks' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Blog', url: '#blog' },
          { name: 'Case Studies', url: '#case-studies' },
          { name: 'White Papers', url: '#white-papers' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', url: '#privacy' },
          { name: 'Terms of Service', url: '#terms' },
          { name: 'Cookie Policy', url: '#cookies' },
        ],
      },
    ],
    customSocialLinks: [
      { icon: faGithub, url: '#github', label: 'GitHub' },
      { icon: faLinkedin, url: '#linkedin', label: 'LinkedIn' },
      { icon: faTwitter, url: '#twitter', label: 'Twitter' },
    ],
    copyrightText: '© 2024 TechCorp Inc. Built with ❤️',
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete custom footer for a tech company with API-focused links.',
      },
    },
  },
};

// Custom Content Stories
export const WithCustomContentTop: Story = {
  args: {
    customContentPosition: 'top',
    children: (
      <Stack direction="column" spacing="md" align="center" style={{ padding: '24px 0', borderBottom: '1px solid #333' }}>
        <Typography variant="heading" color="primary">
          🎵 Join the Music Revolution
        </Typography>
        <Typography variant="body" color="secondary" style={{ textAlign: 'center', maxWidth: '600px' }}>
          Get exclusive access to new releases, artist interviews, and behind-the-scenes content.
        </Typography>
        <Stack direction="row" spacing="md">
          <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium}>
            Sign Up Free
          </Button>
          <Button variant={ButtonVariant.Secondary} size={ButtonSize.Medium}>
            Learn More
          </Button>
        </Stack>
      </Stack>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom content (CTA banner) positioned at the top, before default links.',
      },
    },
  },
};

export const WithCustomContentBottom: Story = {
  args: {
    customContentPosition: 'bottom',
    children: (
      <Stack direction="column" spacing="sm" align="center" style={{ paddingTop: '24px', borderTop: '1px solid #333' }}>
        <Typography variant="body" color="secondary" style={{ fontSize: '0.875rem' }}>
          🌍 Available in 180+ countries
        </Typography>
        <Stack direction="row" spacing="sm" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <Typography variant="caption" color="secondary">USA</Typography>
          <Typography variant="caption" color="secondary">•</Typography>
          <Typography variant="caption" color="secondary">UK</Typography>
          <Typography variant="caption" color="secondary">•</Typography>
          <Typography variant="caption" color="secondary">Canada</Typography>
          <Typography variant="caption" color="secondary">•</Typography>
          <Typography variant="caption" color="secondary">Australia</Typography>
          <Typography variant="caption" color="secondary">•</Typography>
          <Typography variant="caption" color="secondary">Germany</Typography>
          <Typography variant="caption" color="secondary">•</Typography>
          <Typography variant="caption" color="secondary">Japan</Typography>
        </Stack>
      </Stack>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with custom content (country list) positioned at the bottom, after default links but before copyright.',
      },
    },
  },
};

export const WithCustomContentReplace: Story = {
  args: {
    customContentPosition: 'replace',
    children: (
      <Stack direction="column" spacing="lg" align="center" style={{ padding: '48px 24px' }}>
        <Typography variant="heading" color="primary" style={{ fontSize: '2rem' }}>
          🎧 Coming Soon
        </Typography>
        <Typography variant="body" color="secondary" style={{ textAlign: 'center', maxWidth: '500px' }}>
          We're working on something amazing. Sign up to be the first to know when we launch!
        </Typography>
        <Stack direction="row" spacing="md" style={{ width: '100%', maxWidth: '500px' }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              padding: '12px 16px',
              borderRadius: '24px',
              border: '1px solid #333',
              backgroundColor: '#121212',
              color: '#fff',
              fontSize: '1rem',
            }}
          />
          <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium}>
            Notify Me
          </Button>
        </Stack>
        <Stack direction="row" spacing="md">
          <Icon icon={faInstagram} size="sm" color="primary" clickable />
          <Icon icon={faTwitter} size="sm" color="primary" clickable />
          <Icon icon={faFacebook} size="sm" color="primary" clickable />
        </Stack>
        <Typography variant="caption" color="secondary">
          © 2024 Future Music App
        </Typography>
      </Stack>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with completely custom content that replaces all default sections. Perfect for landing pages or coming soon pages.',
      },
    },
  },
};

export const NewsletterSignup: Story = {
  args: {
    customContentPosition: 'top',
    children: (
      <div style={{ 
        backgroundColor: '#1DB954', 
        padding: '32px', 
        borderRadius: '8px', 
        marginBottom: '24px' 
      }}>
        <Stack direction="column" spacing="md" align="center">
          <Typography variant="heading" color="primary" style={{ color: '#000' }}>
            📬 Stay in the Loop
          </Typography>
          <Typography variant="body" style={{ color: '#000', textAlign: 'center' }}>
            Subscribe to our newsletter for weekly playlists and music news.
          </Typography>
          <Stack direction="row" spacing="sm" style={{ width: '100%', maxWidth: '400px' }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: '20px',
                border: 'none',
                fontSize: '0.875rem',
              }}
            />
            <Button variant={ButtonVariant.Primary} size={ButtonSize.Small} style={{ backgroundColor: '#000', color: '#fff' }}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Footer with a styled newsletter signup form as custom content at the top.',
      },
    },
  },
};
