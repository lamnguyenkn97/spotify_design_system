export type BannerType = 'artist' | 'playlist' | 'album' | 'podcast';

export interface BannerProps {
  type: BannerType;
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
}
