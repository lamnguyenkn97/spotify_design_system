import styled from 'styled-components';
import { borderRadius, fontSizes, spacing } from '../../../../styles';

export const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
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
  color: white;
  font-size: ${fontSizes.md}rem; // Use tokenized font size
  flex: 1;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: ${fontSizes.sm}rem; // Smaller font for placeholder
  }
`;
