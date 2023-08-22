import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Starcraft 1/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'starcraft 1' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'terran', 'zerg', 'protoss'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Starcraft 1',
    disableGlow: false,
    disabled: false,
  },
};
