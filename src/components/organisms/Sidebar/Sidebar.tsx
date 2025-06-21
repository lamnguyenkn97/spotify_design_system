import React from 'react';
import { Stack } from '../../atoms/Stack';
import { Typography } from '../../atoms/Typography/Text/Typography';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { Input } from '../../atoms/Input';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faExpand,
  faList,
  faGripHorizontal,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonSize, ButtonVariant } from '../../atoms/Button';
import {
  SidebarContainer,
  LogoWrapper,
  FiltersWrapper,
  SectionTitle,
  SearchWrapper,
  RecentsWrapper,
} from './Sidebar.style';
import { HorizontalTileCard } from '../../molecules/horizontalTileCard';

const filters = ['Playlists', 'Artists', 'Albums', 'Podcasts & Shows'];

const libraryItems = [
  {
    image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png',
    title: 'Liked Songs',
    subtitle: 'Playlist • 213 songs',
    type: 'playlist',
    pinned: true,
  },
  {
    image: 'https://i.scdn.co/image/ab67616d0000b273e5e2e5e2e5e2e5e2e5e2e5e2',
    title: 'Daily Mix 2',
    subtitle: 'Playlist • Spotify',
    type: 'playlist',
    pinned: true,
  },
  // ...add more items as needed
];

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      {/* Logo */}
      <LogoWrapper>
        <Stack direction="row" align="center" spacing="md">
          <Icon icon={faSpotify} size="large" />
        </Stack>
      </LogoWrapper>

      {/* Section Title & Filters */}
      <SectionTitle>
        <Typography variant="h4" weight="bold">
          Your Library
        </Typography>
      </SectionTitle>
      <FiltersWrapper>
        {filters.map((filter) => (
          <Button
            key={filter}
            text={filter}
            size={ButtonSize.Small}
            variant={ButtonVariant.Secondary}
            onClick={() => {}}
          />
        ))}
        <Button
          icon={<Icon icon={faPlus} size="small" />}
          size={ButtonSize.Small}
          variant={ButtonVariant.Secondary}
          text=""
          onClick={() => {}}
        />
        <Button
          icon={<Icon icon={faExpand} size="small" />}
          size={ButtonSize.Small}
          variant={ButtonVariant.Secondary}
          text=""
          onClick={() => {}}
        />
      </FiltersWrapper>

      {/* Search */}
      <SearchWrapper>
        <Input
          type="search"
          placeholder="Search in Your Library"
          leftIcon={<FontAwesomeIcon icon={faSearch} />}
          onSearch={(value) => console.log('Searching library for:', value)}
        />
      </SearchWrapper>

      {/* Recents & Toggle */}
      <RecentsWrapper>
        <Stack direction="row" align="center" justify="space-between">
          <Typography variant="body2" color="secondary">
            Recents
          </Typography>
          <Stack direction="row" spacing="sm">
            <Icon icon={faList} size="small" />
            <Icon icon={faGripHorizontal} size="small" />
          </Stack>
        </Stack>
      </RecentsWrapper>

      {/* Library List */}
      <Stack justify={'space-evenly'}>
        {libraryItems.map((item, idx) => (
          <HorizontalTileCard
            key={idx}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            width="100%"
            onClick={() => {}}
            size="small"
          />
        ))}
      </Stack>
    </SidebarContainer>
  );
};
