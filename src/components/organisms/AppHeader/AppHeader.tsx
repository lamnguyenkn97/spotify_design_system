import React from 'react'; // Assuming Stack is an atom
import * as S from './AppHeader.style';
import {
  Button,
  Divider,
  Icon,
  Image,
  Input,
  Stack,
  TextLink,
} from '../../atoms';
import { FaDownload } from 'react-icons/fa';
import {
  ButtonSize,
  ButtonVariant,
} from '../../atoms/Button';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export interface AppHeaderProps {
  isAuthenticated: boolean;
  onSearch: (value: string) => void;
  onLogin: () => void;
  onSignUp: () => void;
  onInstallApp: () => void;
  user?: {
    name: string;
    avatar: string;
  };
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  isAuthenticated,
  onSearch,
  onLogin,
  onSignUp,
  onInstallApp,
  user,
}) => {
  return (
    <S.Wrapper>
      <Stack direction={'row'} justify={'space-between'}>
        <Stack
          direction="row"
          spacing={'md'}
          align="center"
          justify={'space-between'}
          style={{
            width: '100%',
            border: '2px red solid',
          }}
        >
          <Icon icon={faSpotify} size={'large'} />
          <Icon icon={faHome} size={'medium'} />
          <Input
            variant="search"
            placeholder="What do you want to play?"
            onSearch={onSearch}
            size="md"
            clearable
          />
        </Stack>
        <Stack direction="row" spacing={'md'} align="center">
          {isAuthenticated ? (
            <>
              <Button
                onClick={onInstallApp}
                text={'Install App'}
                icon={<FaDownload />}
                variant={ButtonVariant.Text}
                size={ButtonSize.Small}
              />
              {user && (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={32}
                  height={32}
                />
              )}
            </>
          ) : (
            <>
              <TextLink component={'h5'}>Premium</TextLink>
              <TextLink component={'h5'}>Support</TextLink>
              <TextLink component={'h5'}>Download</TextLink>
              <Divider orientation="vertical" color="secondary" />
              <Button
                variant={ButtonVariant.Text}
                onClick={onInstallApp}
                icon={<FaDownload />}
                text={'Install App'}
                size={ButtonSize.Small}
              />
              <Button
                onClick={onSignUp}
                text={'Sign Up'}
                variant={ButtonVariant.White}
                size={ButtonSize.Small}
              />
              <Button
                onClick={onLogin}
                variant={ButtonVariant.White}
                text={'Login'}
                size={ButtonSize.Small}
              />
            </>
          )}
        </Stack>
      </Stack>
    </S.Wrapper>
  );
};
