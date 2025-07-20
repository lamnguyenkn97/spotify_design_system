import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
import { colors } from '../src/styles/tokens';

const theme = create({
  base: 'dark',
  brandTitle: 'Spotify Design System (fanmade)',
  brandUrl: 'https://github.com/lamnguyenkn97/spotify_design_system',
  brandImage: './logo.svg',
  brandTarget: '_self',

  // Color palette using design tokens
  colorPrimary: colors.primary.brand,
  colorSecondary: colors.primary.brandHighlight,

  // UI using design tokens
  appBg: colors.primary.black,
  appContentBg: colors.grey.grey1,
  appBorderColor: colors.grey.grey3,
  appBorderRadius: 8,

  // Text colors using design tokens
  textColor: colors.primary.white,
  textInverseColor: colors.primary.black,

  // Toolbar default and active colors using design tokens
  barTextColor: colors.grey.grey6,
  barSelectedColor: colors.primary.brand,
  barBg: colors.grey.grey1,

  // Form colors using design tokens
  inputBg: colors.grey.grey2,
  inputBorder: colors.grey.grey4,
  inputTextColor: colors.primary.white,
  inputBorderRadius: 4,
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
