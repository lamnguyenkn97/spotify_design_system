import React, {
  forwardRef,
  useMemo,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { Typography, Image, Icon, Stack, Progress } from '../../atoms';
import { MusicPlayerProps } from './MusicPlayer.types';
import { MusicPlayerContainer, ProgressClickArea } from './MusicPlayer.style';
import { colors, sizes } from '../../../styles';
import {
  faShuffle,
  faBackward,
  faForward,
  faRepeat,
  faPlay,
  faPause,
  faMicrophone,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

export const MusicPlayer = forwardRef<HTMLDivElement, MusicPlayerProps>(
  (
    {
      currentTrack,
      isPlaying = false,
      currentTime = 0,
      duration = 0,
      volume = 100,
      isShuffled = false,
      repeatMode = 'off',
      onPlayPause,
      onNext,
      onPrevious,
      onShuffle,
      onRepeat,
      onSeek,
      onVolumeChange,
      onAddToPlaylist,
      onLyrics,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // Track muted state and previous volume
    const [isMuted, setIsMuted] = useState(false);
    const [isInLyricsMode, setIsInLyricsMode] = useState(false);
    const [previousVolume, setPreviousVolume] = useState(volume);

    // Update previous volume when volume changes (but not when muting/unmuting)
    useEffect(() => {
      if (volume > 0 && !isMuted) {
        setPreviousVolume(volume);
      }
    }, [volume, isMuted]);
    // Format time display
    const formatTime = useCallback((time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, []);

    // Calculate progress percentage
    const progressPercentage = useMemo(() => {
      if (duration === 0) return 0;
      return (currentTime / duration) * 100;
    }, [currentTime, duration]);

    const currentTimeDisplay = useMemo(
      () => formatTime(currentTime),
      [currentTime, formatTime]
    );
    const durationDisplay = useMemo(
      () => formatTime(duration),
      [duration, formatTime]
    );

    // Handle progress bar click
    const handleProgressClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (!onSeek) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = clickX / rect.width;
        const newTime = percentage * duration;
        onSeek(Math.max(0, Math.min(duration, newTime)));
      },
      [duration, onSeek]
    );

    // Handle volume click
    const handleVolumeClick = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
        if (!onVolumeChange) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = clickX / rect.width;
        const newVolume = Math.round(percentage * 100);
        const clampedVolume = Math.max(0, Math.min(100, newVolume));
        onVolumeChange(clampedVolume);
        if (isMuted && clampedVolume > 0) {
          setIsMuted(false);
        }
      },
      [onVolumeChange, isMuted]
    );

    // Handle mute toggle
    const handleMuteToggle = useCallback(() => {
      if (!onVolumeChange) return;
      if (isMuted) {
        // Unmute: restore previous volume
        onVolumeChange(previousVolume > 0 ? previousVolume : 50);
        setIsMuted(false);
      } else {
        // Mute: save current volume and set to 0
        setPreviousVolume(volume);
        onVolumeChange(0);
        setIsMuted(true);
      }
    }, [isMuted, volume, previousVolume, onVolumeChange]);

    // Determine volume icon based on volume level and muted state
    const volumeIcon = useMemo(() => {
      if (isMuted || volume === 0) {
        return faVolumeMute;
      } else if (volume < 50) {
        return faVolumeDown;
      } else {
        return faVolumeUp;
      }
    }, [isMuted, volume]);

    // Display volume (0 when muted, actual volume otherwise)
    const displayVolume = useMemo(() => {
      return isMuted ? 0 : volume;
    }, [isMuted, volume]);

    // Get repeat icon color based on mode
    const repeatIconColor = useMemo(() => {
      return repeatMode !== 'off' ? colors.primary.brand : undefined;
    }, [repeatMode]);

    // Get shuffle icon color
    const shuffleIconColor = useMemo(() => {
      return isShuffled ? colors.primary.brand : undefined;
    }, [isShuffled]);

    return (
      <MusicPlayerContainer
        ref={ref}
        className={className}
        style={style}
        {...props}
      >
        <Stack
          direction="row"
          spacing="md"
          align="center"
          justify="space-between"
          style={{ height: '100%', width: '100%' }}
        >
          {/* Left Section: Now Playing */}
          <Stack
            direction="row"
            spacing="xs"
            align="center"
            justify={'center'}
            style={{
              maxWidth: sizes.musicPlayer.leftSection.maxWidth,
            }}
          >
            <Image
              src={currentTrack?.coverUrl || ''}
              alt={`${currentTrack?.title} album cover`}
              size="md"
              shape="rounded"
              style={{ flexShrink: 0 }}
            />
            <Stack
              direction="column"
              spacing="xs"
              align={'start'}
              style={{ minWidth: 0, overflow: 'hidden', marginLeft: '20px' }}
            >
              <Typography
                variant="body"
                weight="medium"
                color="primary"
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {currentTrack?.title || 'Not Playing'}
              </Typography>
              <Typography
                variant="body"
                size="sm"
                color="secondary"
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {currentTrack?.artist || 'Unknown Artist'}
              </Typography>
            </Stack>
            {onAddToPlaylist && (
              <Icon
                icon={faCirclePlus}
                size="md"
                color="primary"
                clickable
                onClick={onAddToPlaylist}
                aria-label="Add to playlist"
              />
            )}
          </Stack>

          {/* Center Section: Controls and Progress */}
          <Stack
            direction="column"
            spacing="xs"
            align="center"
            justify="center"
            style={{
              flex: 1,
              minWidth: sizes.musicPlayer.centerSection.minWidth,
              maxWidth: sizes.musicPlayer.centerSection.maxWidth,
            }}
          >
            {/* Playback Controls */}
            <Stack direction="row" spacing="md" align="center" justify="center">
              {onShuffle && (
                <Icon
                  icon={faShuffle}
                  size="md"
                  color={shuffleIconColor || 'primary'}
                  clickable
                  onClick={onShuffle}
                  aria-label="Shuffle"
                />
              )}
              {onPrevious && (
                <Icon
                  icon={faBackward}
                  size="md"
                  color="primary"
                  clickable
                  onClick={onPrevious}
                  aria-label="Previous track"
                />
              )}
              {onPlayPause && (
                <Icon
                  icon={isPlaying ? faPause : faPlay}
                  size="md"
                  color={colors.primary.black}
                  backgroundColor={colors.primary.white}
                  circular
                  clickable
                  onClick={onPlayPause}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                />
              )}
              {onNext && (
                <Icon
                  icon={faForward}
                  size="md"
                  color="primary"
                  clickable
                  onClick={onNext}
                  aria-label="Next track"
                />
              )}
              {onRepeat && (
                <Icon
                  icon={faRepeat}
                  size="md"
                  color={repeatIconColor || 'primary'}
                  clickable
                  onClick={onRepeat}
                  aria-label={`Repeat ${repeatMode}`}
                />
              )}
            </Stack>

            {/* Progress Bar */}
            <Stack direction="column" spacing="xs" style={{ width: '100%' }}>
              <ProgressClickArea
                onClick={handleProgressClick}
                role="slider"
                tabIndex={0}
                style={{ width: '100%' }}
              >
                <Progress
                  value={progressPercentage}
                  size="sm"
                  showValue={false}
                />
              </ProgressClickArea>
              <Stack
                direction="row"
                justify="space-between"
                style={{ width: '100%' }}
              >
                <Typography variant="caption" color="secondary">
                  {currentTimeDisplay}
                </Typography>
                <Typography variant="caption" color="secondary">
                  {durationDisplay}
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* Right Section: Utility Icons and Volume */}
          <Stack
            direction="row"
            spacing="sm"
            align="center"
            style={{
              width: sizes.musicPlayer.rightSection.width,
              height: '100%',
            }}
          >
            {onLyrics && (
              <Icon
                icon={faMicrophone}
                size="md"
                color={isInLyricsMode ? 'brand' : 'primary'}
                clickable
                onClick={() => {
                  setIsInLyricsMode(!isInLyricsMode);
                  onLyrics();
                }}
                aria-label="Lyrics"
              />
            )}
            <Icon
              icon={volumeIcon}
              size="md"
              color="primary"
              clickable
              onClick={handleMuteToggle}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            />
            <ProgressClickArea
              onClick={handleVolumeClick}
              role="slider"
              tabIndex={0}
              style={{
                flex: 1,
                minWidth: sizes.musicPlayer.progressBar.volumeMinWidth,
              }}
            >
              <Progress value={displayVolume} size="sm" showValue={false} />
            </ProgressClickArea>
          </Stack>
        </Stack>
      </MusicPlayerContainer>
    );
  }
);

MusicPlayer.displayName = 'MusicPlayer';
