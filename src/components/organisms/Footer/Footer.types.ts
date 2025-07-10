import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FooterLinkItem {
  title: string;
  links: { name: string; url: string }[];
}

export interface SocialLinkItem {
  icon: IconProp;
  url: string;
}

export interface FooterProps {
  className?: string;
}
