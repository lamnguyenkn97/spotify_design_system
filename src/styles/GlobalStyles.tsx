import { createGlobalStyle } from 'styled-components';
import { fontFaces } from './tokens';

export const GlobalStyle = createGlobalStyle`
  ${fontFaces}; /* Import all font-face declarations */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
      font-family: 'Circular-Bold', sans-serif; /* Default font for body */
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      width: 100%;
  }
  html {
      width: 100%;
  }
`;
