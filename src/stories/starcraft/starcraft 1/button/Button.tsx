import clsx from 'clsx';
import { ReactElement } from 'react';

interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: ReactElement;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * Primary Starcraft 1 button in menus
 */
export const Button = ({
  size = 'medium',
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx('border-2 rounded', {
        'px-4': size === 'small',
        'px-8': size === 'medium',
        'px-16': size === 'large',
        'border-gray-600 text-gray-600': disabled,
        'border-red-900': !disabled,
      })}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
