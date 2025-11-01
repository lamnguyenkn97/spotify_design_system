import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FooterLinkItem {
  title: string;
  links: { name: string; url: string; onClick?: () => void }[];
}

export interface SocialLinkItem {
  icon: IconProp;
  url: string;
  label?: string;
  onClick?: () => void;
}

export interface FooterProps {
  className?: string;
  
  // Dynamic configuration options
  customLinks?: FooterLinkItem[];
  customSocialLinks?: SocialLinkItem[];
  showSocialLinks?: boolean;
  showLinks?: boolean;
  copyrightText?: string;
  showCopyright?: boolean;
}
