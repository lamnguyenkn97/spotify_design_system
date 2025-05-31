import styled from 'styled-components';
import { spacing, colors } from '../../../styles';

export const SidebarContainer = styled.aside`
  width: 320px;
  background: #181818;
  color: #fff;
  height: 100vh;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 24px;
`;

export const FiltersWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: ${spacing.sm};
  overflow-x: auto;
`;

export const SectionTitle = styled.div`
  margin-bottom: 16px;
`;

export const SearchWrapper = styled.div`
  margin-bottom: 16px;
`;

export const RecentsWrapper = styled.div`
  margin-bottom: 8px;
`;

export const LibraryList = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const LibraryListItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: 16px;
`; 