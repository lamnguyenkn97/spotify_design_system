export type BannerType = 'artist' | 'playlist' | 'album' | 'podcast';

export interface BannerProps {
  type: BannerType;
  imageUrl: string;
  title: string;
  subtitle?: string;
  description?: string;
  verified?: boolean;
  songCount?: string;
  releaseYear?: string;
  duration?: string;
  backgroundGradient?: string;
}
