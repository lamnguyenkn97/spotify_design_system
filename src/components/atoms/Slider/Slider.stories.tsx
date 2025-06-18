import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Slider } from './Slider';
import { SliderProps } from './Slider.types';
import { Stack } from '../Layout';

export default {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'A comprehensive slider component with multiple variants, sizes, tooltips, marks, and advanced features.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'brand', 'gradient'],
    },
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    valueLabelPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} as Meta<typeof Slider>;

// Interactive Template
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

// Default Examples
export const Default = Template.bind({});
Default.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  value: 30,
  label: 'Volume',
  helperText: 'Adjust the audio volume level',
};

// Size Variations
export const SizeVariations: StoryFn = () => {
  const [values, setValues] = useState({
    xs: 20,
    sm: 30,
    md: 50,
    lg: 70,
    xl: 90,
  });

  return (
    <Stack direction="column" spacing="xl">
      <Stack direction="column" spacing="lg">
        <Slider
          label="Extra Small"
          size="xs"
          value={values.xs}
          onChange={(value) => setValues(prev => ({ ...prev, xs: value }))}
        />
        <Slider
          label="Small"
          size="sm"
          value={values.sm}
          onChange={(value) => setValues(prev => ({ ...prev, sm: value }))}
        />
        <Slider
          label="Medium"
          size="md"
          value={values.md}
          onChange={(value) => setValues(prev => ({ ...prev, md: value }))}
        />
        <Slider
          label="Large"
          size="lg"
          value={values.lg}
          onChange={(value) => setValues(prev => ({ ...prev, lg: value }))}
        />
        <Slider
          label="Extra Large"
          size="xl"
          value={values.xl}
          onChange={(value) => setValues(prev => ({ ...prev, xl: value }))}
        />
      </Stack>
    </Stack>
  );
};

// Variant Showcase
export const VariantShowcase: StoryFn = () => {
  const [values, setValues] = useState({
    default: 30,
    primary: 40,
    secondary: 50,
    success: 60,
    warning: 70,
    error: 35,
    brand: 80,
    gradient: 90,
  });

  return (
    <Stack direction="column" spacing="lg">
      <Slider
        label="Default"
        variant="default"
        value={values.default}
        onChange={(value) => setValues(prev => ({ ...prev, default: value }))}
      />
      <Slider
        label="Primary"
        variant="primary"
        value={values.primary}
        onChange={(value) => setValues(prev => ({ ...prev, primary: value }))}
      />
      <Slider
        label="Secondary"
        variant="secondary"
        value={values.secondary}
        onChange={(value) => setValues(prev => ({ ...prev, secondary: value }))}
      />
      <Slider
        label="Success"
        variant="success"
        value={values.success}
        onChange={(value) => setValues(prev => ({ ...prev, success: value }))}
      />
      <Slider
        label="Warning"
        variant="warning"
        value={values.warning}
        onChange={(value) => setValues(prev => ({ ...prev, warning: value }))}
      />
      <Slider
        label="Error"
        variant="error"
        value={values.error}
        onChange={(value) => setValues(prev => ({ ...prev, error: value }))}
      />
      <Slider
        label="Brand"
        variant="brand"
        value={values.brand}
        onChange={(value) => setValues(prev => ({ ...prev, brand: value }))}
      />
      <Slider
        label="Gradient"
        variant="gradient"
        value={values.gradient}
        onChange={(value) => setValues(prev => ({ ...prev, gradient: value }))}
      />
    </Stack>
  );
};

// With Tooltips
export const WithTooltips: StoryFn = () => {
  const [value1, setValue1] = useState(65);
  const [value2, setValue2] = useState(45);
  const [value3, setValue3] = useState(80);

  return (
    <Stack direction="column" spacing="xl">
      <Slider
        label="Basic Tooltip"
        value={value1}
        onChange={setValue1}
        showTooltip
        variant="primary"
      />
      <Slider
        label="Custom Tooltip Formatter"
        value={value2}
        onChange={setValue2}
        showTooltip
        tooltipFormatter={(val) => `${val}%`}
        variant="success"
      />
      <Slider
        label="Advanced Tooltip"
        value={value3}
        onChange={setValue3}
        showTooltip
        tooltipFormatter={(val) => `${val}dB`}
        variant="brand"
        size="lg"
      />
    </Stack>
  );
};

// With Marks
export const WithMarks: StoryFn = () => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(2);
  const [value3, setValue3] = useState(75);

  return (
    <Stack direction="column" spacing="xl">
      <Slider
        label="Simple Marks"
        value={value1}
        onChange={setValue1}
        marks={[0, 25, 50, 75, 100]}
        showMarks
        variant="primary"
      />
      <Slider
        label="Labeled Marks"
        min={0}
        max={5}
        step={1}
        value={value2}
        onChange={setValue2}
        marks={[
          { value: 0, label: 'Off' },
          { value: 1, label: 'Low' },
          { value: 2, label: 'Med' },
          { value: 3, label: 'High' },
          { value: 4, label: 'Max' },
          { value: 5, label: 'Boost' },
        ]}
        showMarks
        variant="warning"
      />
      <Slider
        label="Custom Styled Marks"
        value={value3}
        onChange={setValue3}
        marks={[
          { value: 0, label: '0%' },
          { value: 25, label: '25%', style: { color: '#1db954' } },
          { value: 50, label: '50%', style: { color: '#1ed760' } },
          { value: 75, label: '75%', style: { color: '#1db954' } },
          { value: 100, label: '100%' },
        ]}
        showMarks
        variant="gradient"
        size="lg"
      />
    </Stack>
  );
};

// Advanced Features
export const AdvancedFeatures: StoryFn = () => {
  const [value1, setValue1] = useState(60);
  const [value2, setValue2] = useState(40);
  const [value3, setValue3] = useState(85);
  const [value4, setValue4] = useState(25);

  return (
    <Stack direction="column" spacing="xl">
      <Slider
        label="With Value Display"
        value={value1}
        onChange={setValue1}
        showValue
        showTooltip
        variant="primary"
        required
      />
      <Slider
        label="Loading State"
        value={value2}
        onChange={setValue2}
        loading
        variant="secondary"
        helperText="Processing changes..."
      />
      <Slider
        label="Custom Colors"
        value={value3}
        onChange={setValue3}
        trackColor="#ff6b35"
        thumbColor="#ffffff"
        backgroundColor="#333333"
        showTooltip
        tooltipFormatter={(val) => `${val}%`}
      />
      <Slider
        label="Error State"
        value={value4}
        onChange={setValue4}
        variant="error"
        error="Value too low for optimal performance"
        required
      />
    </Stack>
  );
};

// States & Interactions
export const StatesAndInteractions: StoryFn = () => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(70);
  const [value3, setValue3] = useState(30);

  const handleChangeStart = (value: number) => {
    console.log('Change started:', value);
  };

  const handleChangeEnd = (value: number) => {
    console.log('Change ended:', value);
  };

  return (
    <Stack direction="column" spacing="lg">
      <Slider
        label="Interactive Slider"
        value={value1}
        onChange={setValue1}
        onChangeStart={handleChangeStart}
        onChangeEnd={handleChangeEnd}
        showTooltip
        variant="primary"
        helperText="Drag to adjust value"
      />
      <Slider
        label="Disabled Slider"
        value={value2}
        onChange={setValue2}
        disabled
        variant="secondary"
        helperText="This slider is disabled"
      />
      <Slider
        label="Loading Slider"
        value={value3}
        onChange={setValue3}
        loading
        variant="brand"
        helperText="Loading state with pulse animation"
      />
    </Stack>
  );
};

// Real-world Examples
export const RealWorldExamples: StoryFn = () => {
  const [volume, setVolume] = useState(75);
  const [brightness, setBrightness] = useState(60);
  const [bass, setBass] = useState(2);
  const [progress, setProgress] = useState(45);

  return (
    <Stack direction="column" spacing="xl">
      {/* Audio Controls */}
      <Stack direction="column" spacing="sm">
        <h4 style={{ margin: 0, color: '#ffffff' }}>Audio Controls</h4>
        <Slider
          label="Volume"
          value={volume}
          onChange={setVolume}
          min={0}
          max={100}
          showTooltip
          tooltipFormatter={(val) => `${val}%`}
          variant="primary"
          size="md"
        />
        <Slider
          label="Bass Boost"
          min={0}
          max={5}
          step={1}
          value={bass}
          onChange={setBass}
          marks={[
            { value: 0, label: 'Off' },
            { value: 1, label: '+1' },
            { value: 2, label: '+2' },
            { value: 3, label: '+3' },
            { value: 4, label: '+4' },
            { value: 5, label: 'Max' },
          ]}
          showMarks
          variant="success"
          size="sm"
        />
      </Stack>

      {/* Display Settings */}
      <Stack direction="column" spacing="sm">
        <h4 style={{ margin: 0, color: '#ffffff' }}>Display Settings</h4>
        <Slider
          label="Brightness"
          value={brightness}
          onChange={setBrightness}
          min={0}
          max={100}
          showValue
          variant="warning"
          tooltipFormatter={(val) => `${val}%`}
          showTooltip
        />
      </Stack>

      {/* Progress Indicator */}
      <Stack direction="column" spacing="sm">
        <h4 style={{ margin: 0, color: '#ffffff' }}>Track Progress</h4>
        <Slider
          label="Song Progress"
          value={progress}
          onChange={setProgress}
          min={0}
          max={100}
          variant="brand"
          size="sm"
          showTooltip
          tooltipFormatter={(val) => {
            const totalSeconds = 180; // 3 minutes
            const currentSeconds = Math.floor((val / 100) * totalSeconds);
            const minutes = Math.floor(currentSeconds / 60);
            const seconds = currentSeconds % 60;
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
          }}
          helperText="Drag to seek through the track"
        />
      </Stack>
    </Stack>
  );
};

// Interactive Playground
export const InteractivePlayground = Template.bind({});
InteractivePlayground.args = {
  label: 'Interactive Slider',
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  size: 'md',
  variant: 'primary',
  orientation: 'horizontal',
  disabled: false,
  loading: false,
  showTooltip: false,
  showValue: false,
  showMarks: false,
  animate: true,
  required: false,
  helperText: 'Adjust the value using the slider',
};
