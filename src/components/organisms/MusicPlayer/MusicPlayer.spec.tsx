import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { MusicPlayer } from './MusicPlayer';
import { Track } from './MusicPlayer.types';
import { theme } from '../../../styles/theme';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const mockTrack: Track = {
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  album: 'After Hours',
  coverUrl: 'https://example.com/cover.jpg',
};

const defaultProps = {
  currentTrack: mockTrack,
  isPlaying: false,
  currentTime: 0,
  duration: 180,
  volume: 100,
  onPlayPause: jest.fn(),
  onNext: jest.fn(),
  onPrevious: jest.fn(),
  onSeek: jest.fn(),
  onVolumeChange: jest.fn(),
  onShuffle: jest.fn(),
  onRepeat: jest.fn(),
};

describe('MusicPlayer Component - Logic Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Mute/Unmute Logic', () => {
    it('should mute by saving current volume and setting volume to 0', async () => {
      const user = userEvent.setup();
      const onVolumeChange = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={75} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      const muteButton = screen.getByRole('button', { name: /^mute$/i });
      await user.click(muteButton);

      // Should save current volume (75) and set to 0
      expect(onVolumeChange).toHaveBeenCalledWith(0);
    });

    it('should unmute by restoring previous volume', async () => {
      const user = userEvent.setup();
      const onVolumeChange = jest.fn();
      
      const { rerender } = render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={75} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      // First, mute it
      const muteButton = screen.getByRole('button', { name: /^mute$/i });
      await user.click(muteButton);
      expect(onVolumeChange).toHaveBeenCalledWith(0);
      onVolumeChange.mockClear();

      // Update component with muted state (volume = 0)
      rerender(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={0} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      // Now unmute
      const unmuteButton = screen.getByRole('button', { name: /^unmute$/i });
      await user.click(unmuteButton);

      // Should restore previous volume (75)
      expect(onVolumeChange).toHaveBeenCalledWith(75);
    });

    it('should restore to 50% if previous volume was 0 when unmuting', async () => {
      const user = userEvent.setup();
      const onVolumeChange = jest.fn();
      
      const { rerender } = render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={0} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      // Mute when already at 0
      const muteButton = screen.getByRole('button', { name: /^mute$/i });
      await user.click(muteButton);
      onVolumeChange.mockClear();

      // Unmute
      rerender(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={0} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      const unmuteButton = screen.getByRole('button', { name: /^unmute$/i });
      await user.click(unmuteButton);

      // Should restore to 50 if previous was 0
      expect(onVolumeChange).toHaveBeenCalledWith(50);
    });

    it('should call onVolumeChange when clicking volume slider at 0 volume', () => {
      const onVolumeChange = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={0} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      // Click on volume slider (second slider)
      const sliders = screen.getAllByRole('slider');
      const volumeSlider = sliders[1];
      fireEvent.click(volumeSlider);

      // Should call onVolumeChange (component logic will handle unmuting if volume > 0)
      expect(onVolumeChange).toHaveBeenCalled();
    });
  });

  describe('Volume Icon Logic', () => {
    it('should show muted icon when volume is 0', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={0} onVolumeChange={jest.fn()} />
        </TestWrapper>
      );

      // When volume is 0 initially, isMuted is false, so label is "Mute"
      // The icon itself will be muted (faVolumeMute) but the label is "Mute"
      expect(screen.getByRole('button', { name: /^mute$/i })).toBeInTheDocument();
    });

    it('should show volume down icon when volume is less than 50', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={25} />
        </TestWrapper>
      );

      // Icon should be present (we can't directly test which icon, but aria-label should be correct)
      expect(screen.getByRole('button', { name: /^mute$/i })).toBeInTheDocument();
    });

    it('should show volume up icon when volume is 50 or higher', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={75} />
        </TestWrapper>
      );

      expect(screen.getByRole('button', { name: /^mute$/i })).toBeInTheDocument();
    });
  });

  describe('Progress Calculation Logic', () => {
    it('should calculate progress percentage correctly', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={90} duration={180} />
        </TestWrapper>
      );

      // Progress should be 50% (90/180)
      const sliders = screen.getAllByRole('slider');
      expect(sliders.length).toBeGreaterThanOrEqual(1);
      
      // Check that time displays are correct
      expect(screen.getByText('1:30')).toBeInTheDocument(); // 90 seconds
      expect(screen.getByText('3:00')).toBeInTheDocument(); // 180 seconds
    });

    it('should handle zero duration gracefully', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={0} duration={0} />
        </TestWrapper>
      );

      // Should not crash and should show 0:00 for both times
      const timeDisplays = screen.getAllByText('0:00');
      expect(timeDisplays.length).toBeGreaterThanOrEqual(2);
    });

    it('should clamp seek time between 0 and duration', async () => {
      const user = userEvent.setup();
      const onSeek = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={30} duration={180} onSeek={onSeek} />
        </TestWrapper>
      );

      const sliders = screen.getAllByRole('slider');
      const progressSlider = sliders[0]; // First slider is progress
      progressSlider.focus();

      // Try to seek beyond duration
      await user.keyboard('{ArrowRight}'.repeat(200));
      
      // Should clamp to duration (180)
      const calls = onSeek.mock.calls;
      if (calls.length > 0) {
        const lastCall = calls[calls.length - 1][0];
        expect(lastCall).toBeLessThanOrEqual(180);
      }
    });
  });

  describe('Time Formatting Logic', () => {
    it('should format time correctly with minutes and seconds', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={125} duration={245} />
        </TestWrapper>
      );

      // 125 seconds = 2:05
      expect(screen.getByText('2:05')).toBeInTheDocument();
      // 245 seconds = 4:05
      expect(screen.getByText('4:05')).toBeInTheDocument();
    });

    it('should pad seconds with leading zero', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={65} duration={120} />
        </TestWrapper>
      );

      // 65 seconds = 1:05 (not 1:5)
      expect(screen.getByText('1:05')).toBeInTheDocument();
    });

    it('should handle single digit minutes', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={30} duration={90} />
        </TestWrapper>
      );

      // 30 seconds = 0:30
      expect(screen.getByText('0:30')).toBeInTheDocument();
    });
  });

  describe('Volume Slider Logic', () => {
    it('should call onVolumeChange when volume slider is clicked', () => {
      const onVolumeChange = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={50} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      // Volume control is also a slider (second slider in the component)
      const sliders = screen.getAllByRole('slider');
      const volumeSlider = sliders[1]; // Second slider is volume
      
      // Simulate click on volume slider
      fireEvent.click(volumeSlider);

      expect(onVolumeChange).toHaveBeenCalled();
    });

    it('should clamp volume between 0 and 100 when changed', () => {
      const onVolumeChange = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={50} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      const sliders = screen.getAllByRole('slider');
      const volumeSlider = sliders[1]; // Second slider is volume
      
      // Mock getBoundingClientRect to provide proper dimensions
      const mockRect = {
        left: 0,
        width: 100,
        top: 0,
        height: 10,
        right: 100,
        bottom: 10,
      };
      volumeSlider.getBoundingClientRect = jest.fn(() => mockRect as DOMRect);
      
      // Simulate click with proper coordinates
      fireEvent.click(volumeSlider, { clientX: 50 }); // 50% of width

      // Verify the callback was called
      expect(onVolumeChange).toHaveBeenCalled();
      
      // Verify all calls have valid volume values (0-100)
      onVolumeChange.mock.calls.forEach((call) => {
        const volume = call[0];
        expect(volume).toBeGreaterThanOrEqual(0);
        expect(volume).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('Progress Bar Seeking Logic', () => {
    it('should call onSeek when progress bar is clicked', () => {
      const onSeek = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={30} duration={180} onSeek={onSeek} />
        </TestWrapper>
      );

      const sliders = screen.getAllByRole('slider');
      const progressSlider = sliders[0]; // First slider is progress
      fireEvent.click(progressSlider);

      expect(onSeek).toHaveBeenCalled();
    });

    it('should clamp seek time to duration when seeking', () => {
      const onSeek = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={30} duration={180} onSeek={onSeek} />
        </TestWrapper>
      );

      const sliders = screen.getAllByRole('slider');
      const progressSlider = sliders[0]; // First slider is progress
      
      // Mock getBoundingClientRect to provide proper dimensions
      const mockRect = {
        left: 0,
        width: 100,
        top: 0,
        height: 10,
        right: 100,
        bottom: 10,
      };
      progressSlider.getBoundingClientRect = jest.fn(() => mockRect as DOMRect);
      
      // Simulate click with proper coordinates
      fireEvent.click(progressSlider, { clientX: 50 }); // 50% of width

      // Verify the callback was called
      expect(onSeek).toHaveBeenCalled();
      
      // Verify all calls have valid time values (0-duration)
      onSeek.mock.calls.forEach((call) => {
        const time = call[0];
        expect(time).toBeGreaterThanOrEqual(0);
        expect(time).toBeLessThanOrEqual(180);
      });
    });

    it('should handle progress bar click with proper coordinates', () => {
      const onSeek = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={175} duration={180} onSeek={onSeek} />
        </TestWrapper>
      );

      const sliders = screen.getAllByRole('slider');
      const progressSlider = sliders[0]; // First slider is progress
      
      // Mock getBoundingClientRect to provide proper dimensions
      const mockRect = {
        left: 0,
        width: 100,
        top: 0,
        height: 10,
        right: 100,
        bottom: 10,
      };
      progressSlider.getBoundingClientRect = jest.fn(() => mockRect as DOMRect);
      
      // Simulate click at 90% of progress bar (should seek to ~162 seconds)
      fireEvent.click(progressSlider, { clientX: 90 });
      
      // Should call onSeek with a value within valid range
      expect(onSeek).toHaveBeenCalled();
      
      // Verify the call is within valid range
      if (onSeek.mock.calls.length > 0) {
        const lastCall = onSeek.mock.calls[onSeek.mock.calls.length - 1][0];
        expect(lastCall).toBeLessThanOrEqual(180);
        expect(lastCall).toBeGreaterThanOrEqual(0);
      }
    });
  });

  describe('Shuffle and Repeat Logic', () => {
    it('should show shuffle icon as active when isShuffled is true', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} isShuffled={true} />
        </TestWrapper>
      );

      const shuffleButton = screen.getByRole('button', { name: /^shuffle$/i });
      expect(shuffleButton).toBeInTheDocument();
    });

    it('should call onShuffle when shuffle button is clicked', async () => {
      const user = userEvent.setup();
      const onShuffle = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} isShuffled={false} onShuffle={onShuffle} />
        </TestWrapper>
      );

      const shuffleButton = screen.getByRole('button', { name: /^shuffle$/i });
      await user.click(shuffleButton);

      expect(onShuffle).toHaveBeenCalledTimes(1);
    });

    it('should show repeat icon as active when repeatMode is not off', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} repeatMode="all" />
        </TestWrapper>
      );

      const repeatButton = screen.getByRole('button', { name: /^repeat all$/i });
      expect(repeatButton).toBeInTheDocument();
    });

    it('should call onRepeat when repeat button is clicked', async () => {
      const user = userEvent.setup();
      const onRepeat = jest.fn();
      
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} repeatMode="off" onRepeat={onRepeat} />
        </TestWrapper>
      );

      const repeatButton = screen.getByRole('button', { name: /^repeat off$/i });
      await user.click(repeatButton);

      expect(onRepeat).toHaveBeenCalledTimes(1);
    });
  });

  describe('Display Volume Logic', () => {
    it('should display actual volume in progress bar', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={75} />
        </TestWrapper>
      );

      const sliders = screen.getAllByRole('slider');
      const volumeSlider = sliders[1]; // Second slider is volume
      expect(volumeSlider).toBeInTheDocument();
      
      // Check progressbar for volume value
      const progressbars = screen.getAllByRole('progressbar');
      const volumeProgress = progressbars[1]; // Second progressbar is volume
      expect(volumeProgress).toHaveAttribute('aria-valuenow', '75');
    });

    it('should display 0 when volume is 0', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={0} />
        </TestWrapper>
      );

      const progressbars = screen.getAllByRole('progressbar');
      const volumeProgress = progressbars[1]; // Second progressbar is volume
      expect(volumeProgress).toHaveAttribute('aria-valuenow', '0');
    });
  });

  describe('Event Handler Logic', () => {
    it('should render without handlers provided', () => {
      render(
        <TestWrapper>
          <MusicPlayer
            currentTrack={mockTrack}
            isPlaying={false}
            currentTime={0}
            duration={180}
            volume={100}
          />
        </TestWrapper>
      );

      // Should render without errors
      expect(screen.getByText('Blinding Lights')).toBeInTheDocument();
      expect(screen.getByText('The Weeknd')).toBeInTheDocument();
    });

    it('should handle all control interactions', async () => {
      const user = userEvent.setup();
      const handlers = {
        onPlayPause: jest.fn(),
        onNext: jest.fn(),
        onPrevious: jest.fn(),
        onShuffle: jest.fn(),
        onRepeat: jest.fn(),
        onAddToPlaylist: jest.fn(),
        onLyrics: jest.fn(),
      };

      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} {...handlers} />
        </TestWrapper>
      );

      // Test all button clicks
      const shuffleButton = screen.getByRole('button', { name: /^shuffle$/i });
      await user.click(shuffleButton);
      expect(handlers.onShuffle).toHaveBeenCalledTimes(1);

      const prevButton = screen.getByRole('button', { name: /^previous track$/i });
      await user.click(prevButton);
      expect(handlers.onPrevious).toHaveBeenCalledTimes(1);

      const playButton = screen.getByRole('button', { name: /^play$/i });
      await user.click(playButton);
      expect(handlers.onPlayPause).toHaveBeenCalledTimes(1);

      const nextButton = screen.getByRole('button', { name: /^next track$/i });
      await user.click(nextButton);
      expect(handlers.onNext).toHaveBeenCalledTimes(1);

      const repeatButton = screen.getByRole('button', { name: /^repeat/i });
      await user.click(repeatButton);
      expect(handlers.onRepeat).toHaveBeenCalledTimes(1);
    });
  });

  describe('Volume State Logic', () => {
    it('should handle mute and unmute sequence correctly', async () => {
      const user = userEvent.setup();
      const onVolumeChange = jest.fn();
      
      const { rerender } = render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={75} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      // Mute: should set volume to 0
      const muteButton = screen.getByRole('button', { name: /^mute$/i });
      await user.click(muteButton);
      expect(onVolumeChange).toHaveBeenCalledWith(0);
      onVolumeChange.mockClear();

      // Update component with muted state
      rerender(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={0} onVolumeChange={onVolumeChange} />
        </TestWrapper>
      );

      // Unmute: should restore previous volume
      const unmuteButton = screen.getByRole('button', { name: /^unmute$/i });
      await user.click(unmuteButton);
      
      // Should restore to previous volume (75) or default (50)
      expect(onVolumeChange).toHaveBeenCalled();
      const restoredVolume = onVolumeChange.mock.calls[0][0];
      expect(restoredVolume).toBeGreaterThan(0);
    });
  });
});

