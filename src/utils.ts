import Vibrant = require('node-vibrant');

export const getVibrantGradient = async (imageUrl: string): Promise<string> => {
  const palette = await Vibrant.from(imageUrl).getPalette();
  const color1 = palette.Vibrant?.getRgb() || [32, 32, 32];
  const color2 = palette.Muted?.getRgb() || [16, 16, 16];
  return `linear-gradient(to bottom right, rgb(${color1.join(',')}), rgb(${color2.join(',')}))`;
};

// Re-export from shared utilities for backward compatibility
export * from './shared/utils';

// Legacy exports (deprecated - use shared/utils instead)
export { getVibrantGradient } from './shared/utils';
