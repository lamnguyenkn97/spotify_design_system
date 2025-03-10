import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import {
  CardWrapper,
  ImageWrapper,
  CardImage,
  PlayButton,
  CardContent,
  CardTitle,
  CardSubtitle,
} from './Card.style';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'artist';
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  imageUrl,
  size = 'md',
  variant = 'default',
  ...props
}) => {
  return (
    <CardWrapper size={size} variant={variant} {...props}>
      <ImageWrapper variant={variant}>
        {imageUrl && <CardImage src={imageUrl} alt={title} variant={variant} />}
        <PlayButton variant={variant}>
          <FontAwesomeIcon icon={faPlay} size="lg" color="black" />
        </PlayButton>
      </ImageWrapper>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {variant === 'artist' ? (
          <CardSubtitle>Artist</CardSubtitle>
        ) : (
          subtitle && <CardSubtitle>{subtitle}</CardSubtitle>
        )}
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
