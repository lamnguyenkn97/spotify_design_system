import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import { FooterLinkItem, SocialLinkItem } from './Footer.types';
import { Icon } from '../../atoms';
import { faInstagram, faTwitter, faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
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
