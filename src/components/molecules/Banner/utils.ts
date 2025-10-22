import { fitGradient } from 'dont-crop';
import { BannerType } from './Banner.types';

export const getImageGradient = async (imageUrl: string): Promise<string> => {
  try {
    // Create an image element to load the image
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Handle CORS for external images

    // Wait for the image to load
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = imageUrl;
    });

    // Use dont-crop library to fit a gradient to the image

    return fitGradient(img);
  } catch (error) {
    // Silent failure with graceful fallback for production resilience
    return 'linear-gradient(135deg, rgb(35, 35, 35), rgb(15, 15, 15))';
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
