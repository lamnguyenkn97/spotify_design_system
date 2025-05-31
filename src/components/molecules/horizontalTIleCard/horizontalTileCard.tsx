import React from 'react';
import { Wrapper } from './horizontalTileCard.style';
import { Image, Stack, Typography } from '../../atoms';
import { Slider } from '../../atoms/Slider/Slider';

export interface HorizontalTileCardProps {
  image: string;
  title: string;
  subtitle?: string;
  showProgress?: boolean;
  progressValue?: number; // 0 to 1
  onClick?: () => void;
  width?: string | number;
}

export const HorizontalTileCard: React.FC<HorizontalTileCardProps> = ({
  image,
  title,
  subtitle,
  showProgress = false,
  progressValue = 0,
  width = '60%',
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick} width={width}>
      <Image src={image} alt={title} width={60} height={60} />
      <Stack direction="column" spacing={"sm"} align="start" style={{ flex: 1 }}>
        <Typography variant="h1">{title}</Typography>
        {subtitle && <Typography variant="body1">{subtitle}</Typography>}
        {showProgress && (
          <Slider
            value={progressValue}
            min={0}
            max={1}
            step={0.01}
            onChange={() => {}}
            disabled
            style={{ width: '100%' }}
          />
        )}
      </Stack>
    </Wrapper>
  );
};
