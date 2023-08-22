import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Starcraft 1/ProgressBar',
  component: ProgressBar,
  decorators: [
    (Story) => (
      <div
        style={{
          width: 200,
          height: 40,
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'starcraft 1' },
  },
  tags: ['autodocs'],
  argTypes: {
    percent: {
      control: 'range',
      min: 0,
      max: 100,
    },
    color: {
      control: 'select',
      options: ['red', 'orange', 'green'],
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    score: 7750,
    percent: 42,
    color: 'red',
  },
};
