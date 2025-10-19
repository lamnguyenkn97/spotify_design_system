import { create } from '@storybook/theming/create';
import { colors } from '../src/styles/tokens';

/**
 * Storybook theme configuration using design tokens.
 * 
 * Note: We extract the color VALUES here (not the objects) because
 * Storybook's theming uses the `polished` library which requires
 * string color values, not object references.
 */
const theme = create({
  base: 'dark',
  brandTitle: 'Spotify Design System (fanmade)',
  brandUrl: 'https://github.com/lamnguyenkn97/spotify_design_system',
  brandImage: './logo.svg',
  brandTarget: '_self',

  // Color palette - extracting string values from design tokens
  colorPrimary: colors.primary.brand as string,
  colorSecondary: colors.primary.brandHighlight as string,

  // UI colors
  appBg: colors.primary.black as string,
  appContentBg: colors.grey.grey1 as string,
  appBorderColor: colors.grey.grey3 as string,
  appBorderRadius: 8,

  // Text colors
  textColor: colors.primary.white as string,
  textInverseColor: colors.primary.black as string,

  // Toolbar colors
  barTextColor: colors.grey.grey6 as string,
  barSelectedColor: colors.primary.brand as string,
  barBg: colors.grey.grey1 as string,

  // Form colors
  inputBg: colors.grey.grey2 as string,
  inputBorder: colors.grey.grey4 as string,
  inputTextColor: colors.primary.white as string,
  inputBorderRadius: 4,
});

export default theme;

