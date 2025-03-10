import React from 'react';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FooterLinkItem, SocialLinkItem } from './Footer.types';
import {
  FooterWrapper,
  FooterColumns,
  FooterColumn,
  ColumnTitle,
  FooterLink,
  SocialIcons,
  IconWrapper,
} from './Footer.style';
import { Icon } from '../../atoms/Icon'; // Import your custom Icon component

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
      {/* Left Section - Links */}
      <FooterColumns>
        {footerLinks.map((column, index) => (
          <FooterColumn key={index}>
            <ColumnTitle>{column.title}</ColumnTitle>
            {column.links.map((link, linkIndex: number) => (
              <FooterLink key={linkIndex} href={link.url}>
                {link.name}
              </FooterLink>
            ))}
          </FooterColumn>
        ))}
      </FooterColumns>

      {/* Right Section - Social Media Icons */}
      <SocialIcons>
        {socialLinks.map((social, index) => (
          <IconWrapper key={index} href={social.url}>
            <Icon
              icon={social.icon}
              size={'medium'}
              color="white"
              hoverColor="#1DB954"
              withBackground={true}
              bgColor="#222"
              clickable={true}
            />
          </IconWrapper>
        ))}
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
