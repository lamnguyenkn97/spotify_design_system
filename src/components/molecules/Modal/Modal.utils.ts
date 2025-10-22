import { fitGradient } from 'dont-crop';

/**
 * Extracts a gradient from an image URL using the dont-crop library
 * @param imageUrl - URL of the image to extract gradient from
 * @returns A CSS gradient string
 */
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
    const gradient = fitGradient(img);
    
    return gradient;
  } catch (error) {
    // Silent failure with graceful fallback for production resilience
    return 'linear-gradient(135deg, rgb(40, 40, 40), rgb(18, 18, 18))'; // Spotify dark gradient
  }
};

/**
 * Extracts image URL from media ReactNode if it's an img element
 * @param media - ReactNode that might contain an img element
 * @returns Image URL if found, undefined otherwise
 */
export const extractImageUrl = (media: React.ReactNode): string | undefined => {
  if (!media) return undefined;
  
  // Check if media is a React element
  if (typeof media === 'object' && media !== null && 'props' in media) {
    const element = media as React.ReactElement<{ src?: string }>;
    
    // Check if it's an img element
    if (element.type === 'img' && element.props?.src) {
      return element.props.src;
    }
  }
  
  return undefined;
};

