import clsx from 'clsx';

export const SkewBackgroundSquare = ({ className }: { className?: string }) => (
  <div
    className={clsx(
      'bg-asure-dark  w-screen absolute -left-[var(--padding)] -skew-y-[10deg] xl:-skew-y-[6deg] 3xl:-skew-y-[4deg] h-[120%] -top-14',
      className
    )}
  />
);
