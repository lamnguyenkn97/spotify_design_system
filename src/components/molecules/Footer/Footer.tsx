import React from 'react';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FooterLinkItem, SocialLinkItem } from './Footer.types';
import { FooterWrapper } from './Footer.style';
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

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Stack direction="row" spacing="xl" align="start" justify="space-between" wrap style={{ flex: 1 }}>
        {footerLinks.map((column, index) => (
          <Stack key={index} direction="column" spacing="sm" align="start">
            <Typography variant="body1" weight="bold" color="primary" component="h4">
              {column.title}
            </Typography>
            {column.links.map((link, linkIndex: number) => (
              <a
                key={linkIndex}
                href={link.url}
                style={{
                  color: colors.grey.grey6,
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  marginBottom: spacing.xs,
                  transition: 'color 0.3s',
                }}
                onMouseOver={e => (e.currentTarget.style.color = colors.primary.white)}
                onMouseOut={e => (e.currentTarget.style.color = colors.grey.grey6)}
              >
                {link.name}
              </a>
            ))}
          </Stack>
        ))}
        <Stack direction="row" spacing="md" align="center" style={{ marginTop: spacing.md }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              style={{
                width: spacing.xl,
                height: spacing.xl,
                background: colors.grey.grey1,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.3s',
              }}
              onMouseOver={e => (e.currentTarget.style.background = colors.grey.grey2)}
              onMouseOut={e => (e.currentTarget.style.background = colors.grey.grey1)}
            >
              <Icon
                icon={social.icon}
                size={'medium'}
                color={colors.primary.white}
                hoverColor="#1DB954"
                withBackground={false}
                clickable={true}
              />
            </a>
          ))}
        </Stack>
      </Stack>
    </FooterWrapper>
  );
};

export default Footer;
