import styled from 'styled-components';
import { colors, spacing } from '../../../../styles';
import { ButtonSize, ButtonVariant } from '../Button/Button.types';
import { getSizeStyles } from '../Button/Button.style';

export const StyledTextButton = styled.button<{
  size: ButtonSize;
  variant: ButtonVariant;
}>`
  ${(props) => getSizeStyles(props.size)};
  font-family: inherit;
  display: inline-flex;
  align-items: center; /* Vertically center content */
  justify-content: center; /* Optional: center everything */
  cursor: pointer;
  gap: ${spacing.xs};
  color: ${colors.grey.grey6};
  background: none;
  border: none;
  transition:
    background-color 0.3s ease,
    font-size 0.2s ease-in-out,
    color 0.3s ease;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    color: ${colors.primary.white};
    font-size: 1.05em;
  }
  .icon {
    display: inline-flex; /* Keeps the icon properly centered within itself */
    align-items: center;
  }
`;
