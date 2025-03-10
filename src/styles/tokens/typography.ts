import { css } from 'styled-components';
import { fonts } from './fonts';

export const fontFaces = css`
  /* Black */
  @font-face {
    font-family: 'Circular-Black';
    src: url(${fonts.circular.black}) format('opentype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-BlackItalic';
    src: url(${fonts.circular.blackItalic}) format('opentype');
    font-weight: 900;
    font-style: italic;
  }

  /* Bold */
  @font-face {
    font-family: 'Circular-Bold';
    src: url(${fonts.circular.bold}) format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-BoldItalic';
    src: url(${fonts.circular.boldItalic}) format('opentype');
    font-weight: 700;
    font-style: italic;
  }

  /* Book */
  @font-face {
    font-family: 'Circular-Book';
    src: url(${fonts.circular.book}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-BookItalic';
    src: url(${fonts.circular.bookItalic}) format('opentype');
    font-weight: 400;
    font-style: italic;
  }

  /* Light */
  @font-face {
    font-family: 'Circular-Light';
    src: url(${fonts.circular.light}) format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-LightItalic';
    src: url(${fonts.circular.lightItalic}) format('opentype');
    font-weight: 300;
    font-style: italic;
  }

  /* Medium */
  @font-face {
    font-family: 'Circular-Medium';
    src: url(${fonts.circular.medium}) format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Circular-MediumItalic';
    src: url(${fonts.circular.mediumItalic}) format('opentype');
    font-weight: 500;
    font-style: italic;
  }
`;

export const fontSizes = {
  sm: '0.875',
  md: '1',
  lg: '1.125',
  xl: '2',
  xxl: '3',
  '2xl': '4',
};
