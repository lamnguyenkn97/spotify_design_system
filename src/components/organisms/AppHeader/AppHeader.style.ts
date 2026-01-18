import styled from 'styled-components';
import { 
  colors, 
  spacing, 
  fontSizes, 
  fontWeights, 
  sizes, 
  borderRadius, 
  borders,
  animations,
  opacity,
} from '../../../styles';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: ${sizes.zIndex.sticky};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.sm} ${spacing.lg};
  background: ${colors.primary.black};
  height: calc(${spacing.xl} * 2);
  backdrop-filter: blur(10px);
  transition: ${animations.transitions.colors};

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
  width: ${sizes.height.lg};
  height: ${sizes.height.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary.black};
  border: ${borders.width.none} ${borders.style.none};
  border-radius: ${borderRadius.round};
  color: ${props => props.disabled ? colors.grey.grey3 : colors.primary.white};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: ${animations.transitions.button};
  opacity: ${props => props.disabled ? opacity.disabled : 1};

  &:hover:not(:disabled) {
    transform: scale(${animations.scale.small});
    background: ${colors.grey.grey1};
  }

  &:active:not(:disabled) {
    transform: scale(${animations.scale.pressed});
  }

  svg {
    width: ${sizes.icon.lg};
    height: ${sizes.icon.lg};
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: ${sizes.maxWidth.modal};
  min-width: calc(${spacing.image.md} * 2);

  @media (max-width: 768px) {
    max-width: calc(${spacing.image.md} * 3);
    min-width: calc(${spacing.image.md} * 1.5);
  }

  @media (max-width: 480px) {
    max-width: calc(${spacing.image.md} * 1.875);
    min-width: calc(${spacing.image.md} * 1.25);
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
  transition: ${animations.transitions.colors};
  white-space: nowrap;

  &:hover {
    color: ${colors.primary.brand};
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
  border: ${borders.width.none} ${borders.style.none};
  border-radius: ${borderRadius.md};
  padding: ${spacing.xs};
  cursor: pointer;
  transition: ${animations.transitions.button};

  &:hover {
    background: ${colors.grey.grey2};
    transform: scale(${animations.scale.subtle});
  }

  &:active {
    transform: scale(${animations.scale.pressed});
  }
`;


export const UserName = styled.span`
  color: ${colors.primary.white};
  font-size: ${fontSizes.sm}rem;
  font-weight: ${fontWeights.bold};
  padding: 0 ${spacing.xs};
  max-width: calc(${spacing.image.md} * 1.25);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconButton = styled.button<{ variant?: 'default' | 'highlight' }>`
  width: ${sizes.height.lg};
  height: ${sizes.height.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: ${borders.width.none} ${borders.style.none};
  border-radius: ${borderRadius.round};
  color: ${props => props.variant === 'highlight' ? colors.primary.brand : colors.grey.grey4};
  cursor: pointer;
  transition: ${animations.transitions.button};

  &:hover {
    color: ${colors.primary.white};
    background: ${colors.grey.grey1};
    transform: scale(${animations.scale.small});
  }

  &:active {
    transform: scale(${animations.scale.pressed});
  }

  svg {
    width: ${sizes.icon.lg};
    height: ${sizes.icon.lg};
  }
`;

