import styled from 'styled-components';

export const BannerWrapper = styled.div<{ backgroundGradient: string }>`
  width: 100%;
  height: 300px;
  background: ${(props) => props.backgroundGradient};
  display: flex;
  align-items: flex-end;
  padding: 40px;
  color: white;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BannerImage = styled.img<{ type?: 'artist' | 'podcast' }>`
  width: 150px;
  height: 150px;
  border-radius: ${(props) => (props.type === 'podcast' ? '16px' : '8px')};
  object-fit: cover;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PodcastSubtitle = styled.span`
  font-size: 14px;
  color: #b3b3b3;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #b3b3b3;
`;
