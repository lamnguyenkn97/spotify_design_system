import styled, { css } from 'styled-components';
import { colors } from '../../../../styles';
import { TextLinkProps } from './TextLink.types';

export const StyledTextLink = styled.a.withConfig({
  shouldForwardProp: (prop) => !['variant', 'weight', 'underline'].includes(prop),
})<TextLinkProps>`
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case 'muted':
        return css`
          color: ${colors.grey.grey4};
        `;
      case 'black':
      case 'inverse':
        return css`
          color: ${colors.primary.black};
        `;
      case 'danger':
        return css`
          color: ${colors.decorative.redRedWine};
        `;
      default:
        return css`
          color: ${colors.primary.white};
        `;
    }
  }}

  ${({ weight }) => {
    switch (weight) {
      case 'light':
        return css`
          font-weight: 300;
        `;
      case 'medium':
        return css`
          font-weight: 500;
        `;
      case 'bold':
        return css`
          font-weight: 700;
        `;
      default:
        return css`
          font-weight: 400;
        `;
    }
  }}

  &:hover {
    text-decoration: underline;
  }
`;
