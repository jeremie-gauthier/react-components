import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../typography/Typography';
import { Button } from './Button';

const meta = {
  title: 'Starcraft/Starcraft 1/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'starcraft 1' },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      defaultValue: 'medium',
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    label: {
      table: { disable: true },
    },
    onClick: {
      table: { disable: true },
    },
    disabled: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: Typography({ text: 'See Top Players', disableGlow: true }),
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: Typography({
      text: 'See Top Players',
      disableGlow: true,
      disabled: true,
    }),
    size: 'medium',
    disabled: true,
  },
};
