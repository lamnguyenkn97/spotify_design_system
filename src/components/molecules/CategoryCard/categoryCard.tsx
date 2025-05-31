import React from 'react';
import * as S from './categoryCard.style';
import { Image, Typography } from '../../atoms';

export interface CategoryCardProps {
  title: string;
  backgroundColor?: string;
  image: string;
  onClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  backgroundColor = '#1db954',
  image,
  onClick,
}) => {
  return (
    <S.Wrapper role={'button'} style={{ backgroundColor }} onClick={onClick}>
      <Typography variant={'h4'}>{title}</Typography>
      <S.ImageWrapper>
        <Image src={image} alt={title} />
      </S.ImageWrapper>
    </S.Wrapper>
  );
};
