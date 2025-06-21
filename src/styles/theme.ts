import { DefaultTheme } from 'styled-components';
import { colors } from './tokens/colors';
import { fontSizes } from './tokens/typography';
import { spacing } from './tokens/spacing';
import { borderRadius } from './tokens/radius';

export interface Theme extends DefaultTheme {
  colors: {
    primary: typeof colors.primary;
    grey: typeof colors.grey;
    decorative: typeof colors.decorative;
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    border: string;
  };
  typography: {
    fontSizes: typeof fontSizes;
    fontFamily: {
      primary: string;
      secondary: string;
    };
  };
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
}

export const theme: Theme = {
  colors: {
    ...colors,
    background: {
      primary: colors.primary.black,
      secondary: colors.grey.grey1,
    },
    text: {
      primary: colors.primary.white,
      secondary: colors.grey.grey5,
    },
    border: colors.grey.grey2,
  },
  typography: {
    fontSizes,
    fontFamily: {
      primary: 'Circular-Book, sans-serif',
      secondary: 'Circular-Bold, sans-serif',
    },
  },
  spacing,
  borderRadius,
}; 