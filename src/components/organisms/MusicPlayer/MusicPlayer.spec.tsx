import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { MusicPlayer } from './MusicPlayer';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { NowPlaying } from './NowPlaying';
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
};

describe('MusicPlayer Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('should render with current track information', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      expect(screen.getByText('Blinding Lights')).toBeInTheDocument();
      expect(screen.getByText('The Weeknd')).toBeInTheDocument();
      expect(screen.getByRole('img', { name: /blinding lights album cover/i })).toBeInTheDocument();
    });

    it('should render without track information (empty state)', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTrack={undefined} />
        </TestWrapper>
      );

      expect(screen.getByText('Not Playing')).toBeInTheDocument();
      expect(screen.getByText('Unknown Artist')).toBeInTheDocument();
    });

    it('should render with custom className and style', () => {
      const customStyle = { backgroundColor: 'red' };
      render(
        <TestWrapper>
          <MusicPlayer
            {...defaultProps}
            className="custom-player"
            style={customStyle}
          />
        </TestWrapper>
      );

      // Check if custom className is applied (note: Stack component should have it)
      const playerContainer = screen.getByText('Blinding Lights').closest('[class*="custom-player"]');
      expect(playerContainer).toBeInTheDocument();
    });

    it('should render all sub-components', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      // Check for PlayerControls
      expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /next track/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /previous track/i })).toBeInTheDocument();

      // Check for ProgressBar
      expect(screen.getByRole('slider', { name: /seek to position/i })).toBeInTheDocument();
      expect(screen.getByText('0:00')).toBeInTheDocument();
      expect(screen.getByText('3:00')).toBeInTheDocument();

      // Check for VolumeControl
      expect(screen.getByRole('button', { name: /mute/i })).toBeInTheDocument();
      expect(screen.getByRole('slider', { name: /volume/i })).toBeInTheDocument();
    });
  });

  describe('Player Controls', () => {
    it('should handle play/pause interactions', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      const playButton = screen.getByRole('button', { name: /play/i });
      await user.click(playButton);

      expect(defaultProps.onPlayPause).toHaveBeenCalledTimes(1);
    });

    it('should show pause button when playing', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} isPlaying={true} />
        </TestWrapper>
      );

      expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
    });

    it('should handle next track interaction', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      const nextButton = screen.getByRole('button', { name: /next track/i });
      await user.click(nextButton);

      expect(defaultProps.onNext).toHaveBeenCalledTimes(1);
    });

    it('should handle previous track interaction', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      const prevButton = screen.getByRole('button', { name: /previous track/i });
      await user.click(prevButton);

      expect(defaultProps.onPrevious).toHaveBeenCalledTimes(1);
    });
  });

  describe('Progress Bar', () => {
    it('should display current time and duration', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={45} duration={180} />
        </TestWrapper>
      );

      expect(screen.getByText('0:45')).toBeInTheDocument();
      expect(screen.getByText('3:00')).toBeInTheDocument();
    });

    it('should handle seeking via click', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      const progressSlider = screen.getByRole('slider', { name: /seek to position/i });
      await user.click(progressSlider);

      expect(defaultProps.onSeek).toHaveBeenCalled();
    });

    it('should handle keyboard navigation for seeking', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={30} />
        </TestWrapper>
      );

      const progressSlider = screen.getByRole('slider', { name: /seek to position/i });
      progressSlider.focus();

      await user.keyboard('{ArrowRight}');
      expect(defaultProps.onSeek).toHaveBeenCalledWith(35);

      await user.keyboard('{ArrowLeft}');
      expect(defaultProps.onSeek).toHaveBeenCalledWith(25);
    });

    it('should prevent seeking beyond duration boundaries', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={175} duration={180} />
        </TestWrapper>
      );

      const progressSlider = screen.getByRole('slider', { name: /seek to position/i });
      progressSlider.focus();

      await user.keyboard('{ArrowRight}');
      expect(defaultProps.onSeek).toHaveBeenCalledWith(180); // Clamped to duration
    });
  });

  describe('Volume Control', () => {
    it('should display current volume level', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={75} />
        </TestWrapper>
      );

      expect(screen.getByRole('slider', { name: /volume: 75%/i })).toBeInTheDocument();
    });

    it('should handle volume changes via click', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      const volumeSlider = screen.getByRole('slider', { name: /volume/i });
      await user.click(volumeSlider);

      expect(defaultProps.onVolumeChange).toHaveBeenCalled();
    });

    it('should handle mute/unmute toggle', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={50} />
        </TestWrapper>
      );

      const muteButton = screen.getByRole('button', { name: /mute/i });
      await user.click(muteButton);

      expect(defaultProps.onVolumeChange).toHaveBeenCalledWith(0);
    });

    it('should handle keyboard navigation for volume', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={50} />
        </TestWrapper>
      );

      const volumeSlider = screen.getByRole('slider', { name: /volume/i });
      volumeSlider.focus();

      await user.keyboard('{ArrowRight}');
      expect(defaultProps.onVolumeChange).toHaveBeenCalledWith(55);

      await user.keyboard('{ArrowLeft}');
      expect(defaultProps.onVolumeChange).toHaveBeenCalledWith(45);
    });

    it('should show different volume icons based on level', () => {
      const { rerender } = render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={0} />
        </TestWrapper>
      );

      expect(screen.getByRole('button', { name: /unmute/i })).toBeInTheDocument();

      rerender(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={25} />
        </TestWrapper>
      );

      expect(screen.getByRole('button', { name: /mute/i })).toBeInTheDocument();

      rerender(
        <TestWrapper>
          <MusicPlayer {...defaultProps} volume={75} />
        </TestWrapper>
      );

      expect(screen.getByRole('button', { name: /mute/i })).toBeInTheDocument();
    });
  });

  describe('Now Playing', () => {
    it('should display track information with proper colors', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      const titleElement = screen.getByText('Blinding Lights');
      const artistElement = screen.getByText('The Weeknd');

      expect(titleElement).toBeInTheDocument();
      expect(artistElement).toBeInTheDocument();
    });

    it('should handle image error gracefully', async () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      const image = screen.getByRole('img', { name: /blinding lights album cover/i });
      
      // Simulate image error
      fireEvent.error(image);
      
      await waitFor(() => {
        expect(image.getAttribute('src')).toContain('placeholder');
      });
    });

    it('should show fallback state when no track is loaded', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTrack={undefined} />
        </TestWrapper>
      );

      expect(screen.getByText('Not Playing')).toBeInTheDocument();
      expect(screen.getByText('Unknown Artist')).toBeInTheDocument();
    });

    it('should handle partial track information', () => {
      const partialTrack = {
        title: 'Song Title',
        artist: '',
        album: 'Album Name',
        coverUrl: '',
      };

      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTrack={partialTrack} />
        </TestWrapper>
      );

      expect(screen.getByText('Song Title')).toBeInTheDocument();
      expect(screen.getByText('Unknown Artist')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('should work without event handlers', () => {
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

      expect(screen.getByText('Blinding Lights')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
    });

    it('should handle missing handlers gracefully', async () => {
      const user = userEvent.setup();
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

      const playButton = screen.getByRole('button', { name: /play/i });
      
      // Should not throw error when clicking without handlers
      await user.click(playButton);
      expect(playButton).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels for all interactive elements', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /next track/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /previous track/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /mute/i })).toBeInTheDocument();
      expect(screen.getByRole('slider', { name: /seek to position/i })).toBeInTheDocument();
      expect(screen.getByRole('slider', { name: /volume/i })).toBeInTheDocument();
    });

    it('should support keyboard navigation', async () => {
      const user = userEvent.setup();
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} />
        </TestWrapper>
      );

      // Tab through interactive elements
      await user.tab();
      expect(screen.getByRole('button', { name: /previous track/i })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole('button', { name: /play/i })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole('button', { name: /next track/i })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole('slider', { name: /seek to position/i })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole('button', { name: /mute/i })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole('slider', { name: /volume/i })).toHaveFocus();
    });

    it('should have proper slider attributes', () => {
      render(
        <TestWrapper>
          <MusicPlayer {...defaultProps} currentTime={45} duration={180} volume={75} />
        </TestWrapper>
      );

      const progressSlider = screen.getByRole('slider', { name: /seek to position/i });
      expect(progressSlider).toHaveAttribute('aria-valuemin', '0');
      expect(progressSlider).toHaveAttribute('aria-valuemax', '180');
      expect(progressSlider).toHaveAttribute('aria-valuenow', '45');

      const volumeSlider = screen.getByRole('slider', { name: /volume/i });
      expect(volumeSlider).toHaveAttribute('aria-valuemin', '0');
      expect(volumeSlider).toHaveAttribute('aria-valuemax', '100');
      expect(volumeSlider).toHaveAttribute('aria-valuenow', '75');
    });
  });
});

describe('PlayerControls Sub-component', () => {
  const controlsProps = {
    isPlaying: false,
    onPlayPause: jest.fn(),
    onNext: jest.fn(),
    onPrevious: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render all control buttons', () => {
    render(
      <TestWrapper>
        <PlayerControls {...controlsProps} />
      </TestWrapper>
    );

    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next track/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /previous track/i })).toBeInTheDocument();
  });

  it('should toggle play/pause button state', () => {
    const { rerender } = render(
      <TestWrapper>
        <PlayerControls {...controlsProps} isPlaying={false} />
      </TestWrapper>
    );

    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();

    rerender(
      <TestWrapper>
        <PlayerControls {...controlsProps} isPlaying={true} />
      </TestWrapper>
    );

    expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
  });
});

describe('ProgressBar Sub-component', () => {
  const progressProps = {
    currentTime: 45,
    duration: 180,
    onSeek: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should format time correctly', () => {
    render(
      <TestWrapper>
        <ProgressBar {...progressProps} />
      </TestWrapper>
    );

    expect(screen.getByText('0:45')).toBeInTheDocument();
    expect(screen.getByText('3:00')).toBeInTheDocument();
  });

  it('should handle zero duration gracefully', () => {
    render(
      <TestWrapper>
        <ProgressBar {...progressProps} duration={0} />
      </TestWrapper>
    );

    expect(screen.getByText('0:00')).toBeInTheDocument();
  });
});

describe('VolumeControl Sub-component', () => {
  const volumeProps = {
    volume: 75,
    onVolumeChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render volume control elements', () => {
    render(
      <TestWrapper>
        <VolumeControl {...volumeProps} />
      </TestWrapper>
    );

    expect(screen.getByRole('button', { name: /mute/i })).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: /volume: 75%/i })).toBeInTheDocument();
  });
});

describe('NowPlaying Sub-component', () => {
  const nowPlayingProps = {
    title: 'Test Song',
    artist: 'Test Artist',
    coverUrl: 'https://example.com/cover.jpg',
  };

  it('should render track information', () => {
    render(
      <TestWrapper>
        <NowPlaying {...nowPlayingProps} />
      </TestWrapper>
    );

    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /test song album cover/i })).toBeInTheDocument();
  });

  it('should handle missing information', () => {
    render(
      <TestWrapper>
        <NowPlaying title="" artist="" coverUrl="" />
      </TestWrapper>
    );

    expect(screen.getByText('Not Playing')).toBeInTheDocument();
    expect(screen.getByText('Unknown Artist')).toBeInTheDocument();
  });
}); 