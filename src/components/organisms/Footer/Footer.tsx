import React, { forwardRef, useState } from 'react';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FooterLinkItem, SocialLinkItem, FooterProps } from './Footer.types';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { TextLink } from '../../atoms/Typography/TextLink/TextLink';
import { Icon } from '../../atoms/Icon/Icon';
import { 
  colors, 
  spacing, 
  animations, 
  fontSizes,
  borderRadius 
} from '../../../styles';

// Default footer data (fallback)
const DEFAULT_FOOTER_LINKS: FooterLinkItem[] = [
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

const DEFAULT_SOCIAL_LINKS: SocialLinkItem[] = [
  { icon: faInstagram, url: '#', label: 'Instagram' },
  { icon: faTwitter, url: '#', label: 'Twitter' },
  { icon: faFacebook, url: '#', label: 'Facebook' },
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
const FooterLink: React.FC<{ name: string; url: string; onClick?: () => void }> = ({ name, url, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <TextLink
      href={url}
      onClick={handleClick}
      variant="muted"
      weight="regular"
      underline={false}
    >
      {name}
    </TextLink>
  );
};

// Social Icon Component
const SocialIcon: React.FC<{ social: SocialLinkItem }> = ({ social }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Get icon name from helper function or use custom label
  const iconName = social.label || getIconName(social.icon);

  const handleClick = (e: React.MouseEvent) => {
    if (social.onClick) {
      e.preventDefault();
      social.onClick();
    }
  };

  return (
    <TextLink
      href={social.url}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      variant="muted"
      weight="regular"
      underline={false}
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
    </TextLink>
  );
};

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ 
    className, 
    customLinks,
    customSocialLinks,
    showSocialLinks = true,
    showLinks = true,
    copyrightText = '© 2024 Spotify AB',
    showCopyright = true,
    ...props 
  }, ref) => {
    // Use custom data or fallback to defaults
    const linksToShow = customLinks || DEFAULT_FOOTER_LINKS;
    const socialLinksToShow = customSocialLinks || DEFAULT_SOCIAL_LINKS;

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
            {showLinks && linksToShow.map((column, index) => (
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
                    <FooterLink 
                      key={linkIndex} 
                      name={link.name} 
                      url={link.url} 
                      onClick={link.onClick}
                    />
                  ))}
                </Stack>
              </Stack>
            ))}

            {/* Social Icons */}
            {showSocialLinks && (
              <Stack
                direction="row"
                spacing="md"
                align="center"
                style={FOOTER_STYLES.socialContainer}
              >
                {socialLinksToShow.map((social, index) => (
                  <SocialIcon key={index} social={social} />
                ))}
              </Stack>
            )}
          </Stack>

          {/* Copyright */}
          {showCopyright && (
            <Stack direction="row" justify="center" align="center">
              <Typography
                variant="body"
                color="secondary"
                style={{ fontSize: `${fontSizes.sm}rem` }}
              >
                {copyrightText}
              </Typography>
            </Stack>
          )}
        </Stack>
      </div>
    );
  }
);

Footer.displayName = 'Footer';
