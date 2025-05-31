import styled from 'styled-components';
import { colors, spacing, fontSizes } from '../../../styles';

export const FooterWrapper = styled.footer`
  background-color: ${colors.primary.black};
  color: ${colors.grey.grey6};
  padding: ${spacing.xl} ${spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: ${spacing.xl} ${spacing.md};
  }
`;

export const FooterColumns = styled.div`
  display: flex;
  flex: 1;
  gap: ${spacing.xl};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${spacing.md};
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h4`
  font-size: ${fontSizes.md}rem;
  color: ${colors.primary.white};
  font-weight: bold;
  margin-bottom: ${spacing.sm};
`;

export const FooterLink = styled.a`
  color: ${colors.grey.grey6};
  text-decoration: none;
  font-size: ${fontSizes.sm}rem;
  margin-bottom: ${spacing.xs};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.primary.white};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${spacing.md};

  @media (max-width: 768px) {
    margin-top: ${spacing.md};
  }
`;

export const IconWrapper = styled.a`
  width: ${spacing.xl};
  height: ${spacing.xl};
  background-color: ${colors.grey.grey1};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.grey.grey2};
  }

  svg {
    color: ${colors.primary.white};
    font-size: ${fontSizes.md}rem;
  }
`;
