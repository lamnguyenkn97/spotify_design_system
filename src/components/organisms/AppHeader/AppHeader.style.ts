import styled from 'styled-components';
import { colors, spacing, fontSizes, fontWeights, shadows } from '../../../styles';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.sm} ${spacing.lg};
  background: ${colors.primary.black};
  height: 64px;
  backdrop-filter: blur(10px);
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: ${spacing.sm} ${spacing.md};
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  flex: 1;
  min-width: 0; // Allow content to shrink
`;

export const NavigationControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

export const NavButton = styled.button<{ disabled?: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary.black};
  border: none;
  border-radius: 50%;
  color: ${props => props.disabled ? colors.grey.grey3 : colors.primary.white};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:hover:not(:disabled) {
    transform: scale(1.05);
    background: ${colors.grey.grey1};
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 364px;
  min-width: 200px;

  @media (max-width: 768px) {
    max-width: 300px;
    min-width: 150px;
  }

  @media (max-width: 480px) {
    max-width: 180px;
    min-width: 120px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  flex-shrink: 0;
`;

export const GuestActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.lg};

  @media (max-width: 768px) {
    gap: ${spacing.md};
  }
`;

export const GuestLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.lg};

  @media (max-width: 1024px) {
    display: none; // Hide links on smaller screens
  }
`;

export const GuestLink = styled.a`
  color: ${colors.primary.white};
  text-decoration: none;
  font-size: ${fontSizes.sm}rem;
  font-weight: ${fontWeights.bold};
  transition: color 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${colors.primary.brand};
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: ${colors.grey.grey3};
  margin: 0 ${spacing.xs};

  @media (max-width: 1024px) {
    display: none;
  }
`;


export const AuthenticatedActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

export const UserProfile = styled.button`
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  background: ${colors.grey.grey1};
  border: none;
  border-radius: 23px; // Slightly rounded pill
  padding: 2px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.grey.grey2};
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const UserAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  overflow: hidden;
  background: ${colors.grey.grey3};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UserName = styled.span`
  color: ${colors.primary.white};
  font-size: ${fontSizes.sm}rem;
  font-weight: ${fontWeights.bold};
  padding: 0 ${spacing.xs} 0 ${spacing.xs};
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none; // Hide username on mobile
  }
`;

export const IconButton = styled.button<{ variant?: 'default' | 'highlight' }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: ${props => props.variant === 'highlight' ? colors.primary.brand : colors.grey.grey4};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.primary.white};
    background: ${colors.grey.grey1};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

