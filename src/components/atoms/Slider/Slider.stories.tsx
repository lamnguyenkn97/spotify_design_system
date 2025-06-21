import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Slider } from './Slider';
import { SliderProps } from './Slider.types';
import { Stack } from '../Stack';
import { Typography } from '../Typography/Text/Typography';
import { 
  faVolumeUp, 
  faCircle, 
  faGripVertical, 
  faCog,
  faAdjust,
  faMusic
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'A clean, minimal slider component with a prominent circular marker, optimized for Spotify use cases like volume control and progress bars.',
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current value of the slider',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value',
    },
    step: {
      control: { type: 'number', min: 0.1, step: 0.1 },
      description: 'Step increment',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the slider is disabled',
    },
    thumbIcon: {
      control: { type: 'select' },
      options: ['none', 'circle', 'volume', 'grip', 'cog', 'adjust', 'music'],
      mapping: {
        none: undefined,
        circle: faCircle,
        volume: faVolumeUp,
        grip: faGripVertical,
        cog: faCog,
        adjust: faAdjust,
        music: faMusic,
      },
      description: 'Icon to use as the slider thumb',
    },
  },
} as Meta<typeof Slider>;

// Template for interactive stories
const Template: StoryFn<SliderProps> = (args) => {
  const [value, setValue] = useState(args.value);
  
  return (
    <Slider
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

// Basic Examples
export const Default: StoryFn<SliderProps> = Template.bind({});
Default.args = {
  value: 50,
  'aria-label': 'Volume control',
};

export const VolumeControl: StoryFn = () => {
  const [volume, setVolume] = useState(75);
  
  return (
    <Stack direction="column" spacing="sm" style={{ width: 200 }}>
      <Typography variant="body" size="sm">Volume: {volume}%</Typography>
      <Slider
        value={volume}
        min={0}
        max={100}
        step={1}
        onChange={setVolume}
        thumbIcon={faVolumeUp}
        aria-label={`Volume: ${volume}%`}
      />
    </Stack>
  );
};

export const ProgressBar: StoryFn = () => {
  const [currentTime, setCurrentTime] = useState(125);
  const duration = 240; // 4 minutes
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <Stack direction="column" spacing="sm" style={{ width: 400 }}>
      <Slider
        value={currentTime}
        min={0}
        max={duration}
        step={1}
        onChange={setCurrentTime}
        aria-label={`Seek to ${formatTime(currentTime)} of ${formatTime(duration)}`}
      />
      <Stack direction="row" justify="space-between">
        <Typography variant="caption" color="secondary">
          {formatTime(currentTime)}
        </Typography>
        <Typography variant="caption" color="secondary">
          {formatTime(duration)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export const DisabledState: StoryFn<SliderProps> = Template.bind({});
DisabledState.args = {
  value: 30,
  disabled: true,
  'aria-label': 'Disabled slider',
};

export const CustomRange: StoryFn = () => {
  const [value, setValue] = useState(50);
  
  return (
    <Stack direction="column" spacing="sm" style={{ width: 300 }}>
      <Typography variant="body" size="sm">
        Bass: {value}Hz
      </Typography>
      <Slider
        value={value}
        min={20}
        max={200}
        step={5}
        onChange={setValue}
        aria-label={`Bass frequency: ${value} Hz`}
      />
    </Stack>
  );
};

export const InteractiveMarker: StoryFn = () => {
  const [value, setValue] = useState(65);
  
  return (
    <div style={{ 
      background: '#121212', 
      padding: '2rem', 
      borderRadius: '8px',
      color: 'white'
    }}>
      <Stack direction="column" spacing="lg">
        <Typography variant="heading" size="lg">
          Interactive Circular Marker
        </Typography>
        <Typography variant="body" size="sm" color="secondary">
          Hover and drag the circular marker to see the interactive effects
        </Typography>
        
        <Stack direction="column" spacing="sm" style={{ width: 400 }}>
          <Typography variant="body" size="sm">
            Value: {value}%
          </Typography>
          <Slider
            value={value}
            min={0}
            max={100}
            step={1}
            onChange={setValue}
            aria-label={`Interactive slider: ${value}%`}
          />
          <Typography variant="caption" color="secondary">
            The circular marker scales on hover and shows a focus ring when active
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export const IconThumbs: StoryFn = () => {
  const [volume, setVolume] = useState(75);
  const [brightness, setBrightness] = useState(60);
  const [bass, setBass] = useState(40);
  const [settings, setSettings] = useState(30);
  
  return (
    <div style={{ 
      background: '#121212', 
      padding: '2rem', 
      borderRadius: '8px',
      color: 'white'
    }}>
      <Stack direction="column" spacing="lg">
        <Typography variant="heading" size="lg">
          Icon Thumb Examples
        </Typography>
        <Typography variant="body" size="sm" color="secondary">
          Different icons can be used as slider thumbs for better context
        </Typography>
        
        <Stack direction="column" spacing="md">
          {/* Volume with Volume Icon */}
          <Stack direction="column" spacing="sm">
            <Typography variant="body" size="sm">Volume: {volume}%</Typography>
            <Slider
              value={volume}
              min={0}
              max={100}
              step={1}
              onChange={setVolume}
              thumbIcon={faVolumeUp}
              aria-label={`Volume: ${volume}%`}
              style={{ width: 300 }}
            />
          </Stack>
          
          {/* Brightness with Adjust Icon */}
          <Stack direction="column" spacing="sm">
            <Typography variant="body" size="sm">Brightness: {brightness}%</Typography>
            <Slider
              value={brightness}
              min={0}
              max={100}
              step={1}
              onChange={setBrightness}
              thumbIcon={faAdjust}
              aria-label={`Brightness: ${brightness}%`}
              style={{ width: 300 }}
            />
          </Stack>
          
          {/* Bass with Music Icon */}
          <Stack direction="column" spacing="sm">
            <Typography variant="body" size="sm">Bass: {bass}%</Typography>
            <Slider
              value={bass}
              min={0}
              max={100}
              step={1}
              onChange={setBass}
              thumbIcon={faMusic}
              aria-label={`Bass: ${bass}%`}
              style={{ width: 300 }}
            />
          </Stack>
          
          {/* Settings with Cog Icon */}
          <Stack direction="column" spacing="sm">
            <Typography variant="body" size="sm">Settings: {settings}%</Typography>
            <Slider
              value={settings}
              min={0}
              max={100}
              step={1}
              onChange={setSettings}
              thumbIcon={faCog}
              aria-label={`Settings: ${settings}%`}
              style={{ width: 300 }}
            />
          </Stack>
          
          {/* Default (no icon) */}
          <Stack direction="column" spacing="sm">
            <Typography variant="body" size="sm">Default (no icon): 50%</Typography>
            <Slider
              value={50}
              min={0}
              max={100}
              step={1}
              onChange={() => {}}
              aria-label="Default slider"
              style={{ width: 300 }}
            />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

// Real-world examples
export const SpotifyExamples: StoryFn = () => {
  const [volume, setVolume] = useState(80);
  const [progress, setProgress] = useState(45);
  const [bass, setBass] = useState(0);
  const [treble, setTreble] = useState(0);
  
  const formatTime = (percentage: number) => {
    const totalSeconds = Math.floor((percentage / 100) * 180); // 3 minute song
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div style={{ 
      background: '#121212', 
      padding: '2rem', 
      borderRadius: '8px',
      color: 'white'
    }}>
      <Stack direction="column" spacing="lg">
        <Typography variant="heading" size="lg" style={{ marginBottom: '1rem' }}>
          Spotify Controls
        </Typography>
        
        {/* Volume Control */}
        <Stack direction="column" spacing="sm">
          <Typography variant="body" size="sm">Volume: {volume}%</Typography>
          <Slider
            value={volume}
            min={0}
            max={100}
            step={1}
            onChange={setVolume}
            aria-label={`Volume: ${volume}%`}
            style={{ width: 150 }}
          />
        </Stack>
        
        {/* Progress Bar */}
        <Stack direction="column" spacing="sm">
          <Typography variant="body" size="sm">Track Progress</Typography>
          <Slider
            value={progress}
            min={0}
            max={100}
            step={1}
            onChange={setProgress}
            aria-label={`Track progress: ${formatTime(progress)} of 3:00`}
            style={{ width: 400 }}
          />
          <Stack direction="row" justify="space-between" style={{ width: 400 }}>
            <Typography variant="caption" color="secondary">
              {formatTime(progress)}
            </Typography>
            <Typography variant="caption" color="secondary">
              3:00
            </Typography>
          </Stack>
        </Stack>
        
        {/* EQ Controls */}
        <Stack direction="column" spacing="md">
          <Typography variant="body" size="sm">Equalizer</Typography>
          <Stack direction="row" spacing="lg">
            <Stack direction="column" spacing="sm" align="center">
              <Typography variant="caption" color="secondary">Bass</Typography>
              <Slider
                value={bass}
                min={-10}
                max={10}
                step={1}
                onChange={setBass}
                aria-label={`Bass: ${bass > 0 ? '+' : ''}${bass} dB`}
                style={{ width: 100 }}
              />
              <Typography variant="caption" color="secondary">
                {bass > 0 ? '+' : ''}{bass} dB
              </Typography>
            </Stack>
            <Stack direction="column" spacing="sm" align="center">
              <Typography variant="caption" color="secondary">Treble</Typography>
              <Slider
                value={treble}
                min={-10}
                max={10}
                step={1}
                onChange={setTreble}
                aria-label={`Treble: ${treble > 0 ? '+' : ''}${treble} dB`}
                style={{ width: 100 }}
              />
              <Typography variant="caption" color="secondary">
                {treble > 0 ? '+' : ''}{treble} dB
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};
