import { Vibrant } from 'node-vibrant/browser';

export const getImageGradient = async (imageUrl: string): Promise<string> => {
  const palette = await Vibrant.from(imageUrl).getPalette();
  const color1 = palette.Vibrant?.rgb || [32, 32, 32];
  const color2 = palette.Muted?.rgb || [16, 16, 16];

  return `linear-gradient(to bottom right, rgb(${color1.join(',')}), rgb(${color2.join(',')}))`;
};
