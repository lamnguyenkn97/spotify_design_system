import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #000;
  color: #b3b3b3;
  padding: 40px 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

export const FooterColumns = styled.div`
  display: flex;
  flex: 1;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h4`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FooterLink = styled.a`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 8px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: white;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const IconWrapper = styled.a`
  width: 40px;
  height: 40px;
  background-color: #222;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #333;
  }

  svg {
    color: white;
    font-size: 18px;
  }
`;
