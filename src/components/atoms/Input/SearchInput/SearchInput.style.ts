import styled from 'styled-components';
import { borderRadius, fontSizes, spacing, colors } from '../../../../styles';

export const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.grey.grey0};
  border-radius: ${borderRadius.md}; // Use tokenized border-radius
  padding: ${spacing.sm} ${spacing.md};
  width: 100%;
  max-width: 300px;
  position: relative;
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${spacing.sm}; // Use spacing token
`;

export const StyledInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: ${colors.primary.white};
  font-size: ${fontSizes.md}rem; // Use tokenized font size
  flex: 1;

  &::placeholder {
    color: ${colors.grey.grey6};
    font-size: ${fontSizes.sm}rem; // Smaller font for placeholder
  }
`;
