import React from 'react';
import * as S from './Pill.style';

export interface PillProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}
export const Pill: React.FC<PillProps> = ({
  label,
  selected = false,
  onClick,
}) => {
  return (
    <S.Wrapper selected={selected} onClick={onClick}>
      {label}
    </S.Wrapper>
  );
};
