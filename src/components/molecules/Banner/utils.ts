import { Vibrant } from 'node-vibrant/browser';
import { BannerType } from './Banner.types';

export const getImageGradient = async (imageUrl: string): Promise<string> => {
  try {
    const palette = await Vibrant.from(imageUrl).getPalette();
    const color1 = palette.Vibrant?.rgb || [32, 32, 32];
    const color2 = palette.Muted?.rgb || [16, 16, 16];

    return `linear-gradient(to bottom right, rgb(${color1.join(',')}), rgb(${color2.join(',')}))`;
  } catch (error) {
    console.error('Failed to generate gradient:', error);
    return '#121212';
  }
};

export const getBannerTypeLabel = (bannerType: BannerType): string => {
  switch (bannerType) {
    case 'album':
      return 'Album';
    case 'playlist':
      return 'Playlist';
    case 'podcast':
      return 'Podcast';
    case 'artist':
      return 'Verified Artist';
    default:
      return '';
  }
};
