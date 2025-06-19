// Utility functions for the Spotify Design System

export const getVibrantGradient = async (imageUrl: string): Promise<string> => {
  // For now, return a default gradient since node-vibrant has compatibility issues
  // TODO: Implement proper vibrant color extraction when needed
  return `linear-gradient(to bottom right, rgb(32, 32, 32), rgb(16, 16, 16))`;
};
