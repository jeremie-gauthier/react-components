import clsx from 'clsx';

interface TypographyProps {
  /**
   * Typography variant style
   */
  variant?: 'primary' | 'secondary' | 'terran' | 'zerg' | 'protoss';
  /**
   * Typography content
   */
  text: string;
  /**
   * Disable the first letter being clearer.
   *
   * Fallback to `false` when **disabled** is set to `true` or if **variant** is *not* `primary`
   */
  disableGlow?: boolean;
  /**
   * Apply the disable style
   */
  disabled?: boolean;
}

/**
 * Starcraft 1 typography in menus
 */
export const Typography = ({
  variant = 'primary',
  text,
  disableGlow = false,
  disabled = false,
}: TypographyProps) => {
  return (
    <span
      className={clsx('block font-light', {
        'first-letter:text-green-200': !disableGlow && variant === 'primary',
        'text-green-600': variant === 'primary',
        'text-blue-400': variant === 'secondary',
        'text-sky-300': variant === 'terran',
        'text-purple-400': variant === 'zerg',
        'text-yellow-300': variant === 'protoss',
        'first-letter:!text-gray-600 !text-gray-600': disabled,
      })}
    >
      {text}
    </span>
  );
};
