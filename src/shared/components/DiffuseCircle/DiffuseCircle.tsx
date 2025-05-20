import clsx from 'clsx';

type DiffuseCircleProps = {
  color?: ColorsType;
  className?: string;
};

type ColorsType = 'blue';

const colorsMap: Record<ColorsType, string> = {
  blue: 'bg-blue',
};

export const DiffuseCircle = ({
  className,
  color = 'blue',
}: DiffuseCircleProps) => {
  return (
    <div
      className={clsx(
        'rounded-full blur-[94px] opacity-20',
        colorsMap[color],
        className
      )}
    />
  );
};
