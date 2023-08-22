import clsx from 'clsx';
import { Typography } from '../typography/Typography';

interface ProgressBarProps {
  /**
   * Score displayed on the bar
   */
  score: number;
  /**
   * Bar progression
   */
  percent: number;
  /**
   * Bar color
   */
  color: 'red' | 'orange' | 'green';
}

/**
 * Starcraft 1 progress bar used to display your stats when the game ends
 */
export const ProgressBar = ({ color, score, percent }: ProgressBarProps) => {
  return (
    <div
      className={clsx('w-full h-full bg-black relative border-2 p-1 rounded', {
        'border-orange-800': color === 'orange',
        'border-red-800': color === 'red',
        'border-green-800': color === 'green',
      })}
    >
      <div
        className={clsx(`h-full`, {
          'bg-orange-800': color === 'orange',
          'bg-red-800': color === 'red',
          'bg-green-800': color === 'green',
        })}
        style={{ width: `${percent}%` }}
      />
      <p className="absolute inset-0 flex items-center justify-center">
        <Typography text={score.toString()} variant="secondary" />
      </p>
    </div>
  );
};
