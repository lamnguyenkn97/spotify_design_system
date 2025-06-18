import React, { forwardRef, useState } from 'react';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FooterLinkItem, SocialLinkItem, FooterProps } from './Footer.types';
import { Stack } from '../../atoms/Layout/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Icon } from '../../atoms/Icon/Icon';
import { colors, spacing } from '../../../styles';

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

// Footer Link Component
const FooterLink: React.FC<{ name: string; url: string }> = ({ name, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? colors.primary.white : colors.grey.grey6,
        textDecoration: 'none',
        fontSize: '0.875rem',
        transition: 'color 0.3s ease-in-out',
        display: 'block',
      }}
    >
      {name}
    </a>
  );
};

// Social Icon Component
const SocialIcon: React.FC<{ social: SocialLinkItem }> = ({ social }) => {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        textDecoration: 'none',
      }}
    >
      <Icon
        icon={social.icon}
        size="small"
        color="primary"
        hoverColor="brand"
        variant="filled"
        backgroundColor="muted"
        clickable
        aria-label={`Visit our ${social.icon} page`}
      />
    </a>
  );
};

export const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <Stack
        ref={ref}
        as="footer"
        direction="column"
        spacing="xl"
        padding="xl"
        backgroundColor={colors.primary.black}
        className={className}
        style={{
          color: colors.grey.grey6,
        }}
        {...props}
      >
        {/* Main Footer Content */}
        <Stack
          direction="row"
          spacing="xl"
          align="start"
          justify="space-between"
          style={{
            flexWrap: 'wrap',
          }}
        >
          {/* Footer Links Columns */}
          {footerLinks.map((column, index) => (
            <Stack key={index} direction="column" spacing="sm" align="start">
              <Typography
                variant="body1"
                weight="bold"
                color="primary"
                component="h4"
              >
                {column.title}
              </Typography>
              <Stack direction="column" spacing="xs">
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
            style={{
              marginTop: spacing.md,
            }}
          >
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} social={social} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    );
  }
);

Footer.displayName = 'Footer';
