import clsx from 'clsx';

type ColorType = 'grey';

interface DividerProps {
  className?: string;
  color?: ColorType;
  variant?: 'horizontal' | 'vertical';
}

const colorMap = {
  grey: 'bg-link-underlined',
};

export const Divider = ({
  className,
  color = 'grey',
  variant = 'horizontal',
}: DividerProps) => {
  return (
    <div
      className={clsx(colorMap[color], className, {
        'h-px w-full': variant === 'horizontal',
        'h-full w-px': variant === 'vertical',
      })}></div>
  );
};
