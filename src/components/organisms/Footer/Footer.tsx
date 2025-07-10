import React, { forwardRef, useState } from 'react';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FooterLinkItem, SocialLinkItem, FooterProps } from './Footer.types';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Icon } from '../../atoms/Icon/Icon';
import { 
  colors, 
  spacing, 
  animations, 
  fontSizes,
  borderRadius 
} from '../../../styles';

// Footer data configuration
const footerLinks: FooterLinkItem[] = [
  {
    title: 'Company',
    links: [
      { name: 'About', url: '#' },
      { name: 'Jobs', url: '#' },
      { name: 'For the Record', url: '#' },
    ],
  },
  {
    title: 'Communities',
    links: [
      { name: 'For Artists', url: '#' },
      { name: 'Developers', url: '#' },
      { name: 'Advertising', url: '#' },
      { name: 'Investors', url: '#' },
      { name: 'Vendors', url: '#' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { name: 'Support', url: '#' },
      { name: 'Free Mobile App', url: '#' },
    ],
  },
  {
    title: 'Spotify Plans',
    links: [
      { name: 'Premium Individual', url: '#' },
      { name: 'Premium Student', url: '#' },
      { name: 'Spotify Free', url: '#' },
    ],
  },
];

const socialLinks: SocialLinkItem[] = [
  { icon: faInstagram, url: '#' },
  { icon: faTwitter, url: '#' },
  { icon: faFacebook, url: '#' },
];

// Helper function to get icon name for accessibility
const getIconName = (icon: any): string => {
  if (icon === faInstagram) return 'Instagram';
  if (icon === faTwitter) return 'Twitter';
  if (icon === faFacebook) return 'Facebook';
  return 'social media';
};

// Style configuration using design tokens
const FOOTER_STYLES = {
  // Main container
  container: {
    backgroundColor: colors.primary.black,
    color: colors.grey.grey6,
    padding: spacing.xl,
  },
  
  // Content wrapper
  content: {
    flexWrap: 'wrap' as const,
  },
  
  // Social icons container
  socialContainer: {
    marginTop: spacing.md,
  },
  
  // Footer link styles
  link: {
    base: {
      textDecoration: 'none',
      fontSize: `${fontSizes.sm}rem`,
      transition: animations.transitions.colors,
      display: 'block',
    },
    getStyles: (isHovered: boolean): React.CSSProperties => ({
      color: isHovered ? colors.primary.white : colors.grey.grey6,
    }),
  },
  
  // Social icon wrapper
  socialIcon: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: spacing.xs,
    borderRadius: borderRadius.md,
    transition: animations.transitions.colors,
    backgroundColor: 'transparent',
  },
  
  // Social icon hover state
  getSocialIconStyles: (isHovered: boolean): React.CSSProperties => ({
    backgroundColor: isHovered ? colors.grey.grey3 : 'transparent',
  }),
} as const;

// Footer Link Component
const FooterLink: React.FC<{ name: string; url: string }> = ({ name, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...FOOTER_STYLES.link.base,
        ...FOOTER_STYLES.link.getStyles(isHovered),
      }}
    >
      {name}
    </a>
  );
};

// Social Icon Component
const SocialIcon: React.FC<{ social: SocialLinkItem }> = ({ social }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Get icon name from helper function
  const iconName = getIconName(social.icon);

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...FOOTER_STYLES.socialIcon,
        ...FOOTER_STYLES.getSocialIconStyles(isHovered),
      }}
      aria-label={`Visit our ${iconName} page`}
    >
      <Icon
        icon={social.icon}
        size="sm"
        color="primary"
        clickable
      />
    </a>
  );
};

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="contentinfo"
        className={className}
        style={FOOTER_STYLES.container}
        {...props}
      >
        <Stack direction="column" spacing="lg">
          {/* Main Footer Content */}
          <Stack
            direction="row"
            spacing="lg"
            align="start"
            justify="space-between"
            style={FOOTER_STYLES.content}
          >
            {/* Footer Links Columns */}
            {footerLinks.map((column, index) => (
              <Stack key={index} direction="column" spacing="sm" align="start">
                <Typography
                  variant="body"
                  weight="bold"
                  color="primary"
                  component="h4"
                >
                  {column.title}
                </Typography>
                <Stack direction="column" spacing="sm">
                  {column.links.map((link, linkIndex) => (
                    <FooterLink key={linkIndex} name={link.name} url={link.url} />
                  ))}
                </Stack>
              </Stack>
            ))}

            {/* Social Icons */}
            <Stack
              direction="row"
              spacing="md"
              align="center"
              style={FOOTER_STYLES.socialContainer}
            >
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} social={social} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </div>
    );
  }
);

Footer.displayName = 'Footer';
