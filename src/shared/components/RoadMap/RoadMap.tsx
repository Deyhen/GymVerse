import clsx from 'clsx';
import { RoadColorTypes, RoadMapProps } from './types';

const roadBgColorsMap: Record<RoadColorTypes, string> = {
  blue: 'bg-blue',
  asure: 'bg-asure-light',
};

const roadBorderColorsMap: Record<RoadColorTypes, string> = {
  blue: 'border-blue',
  asure: 'border-asure-light',
};

export const RoadMap = ({
  steps,
  roadColor,
  className,
  roadClassName,
  withBorder,
}: RoadMapProps) => {
  const targetBgColor = roadBgColorsMap[roadColor];

  return (
    <div className={clsx('flex flex-col relative', className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex gap-7 last:*:pt-2">
          <div className="flex flex-col items-center">
            <div
              className={clsx('p-2', {
                'rounded-full border-2': withBorder,
                [roadBorderColorsMap[roadColor]]: withBorder,
              })}>
              {step.icon}
            </div>

            <div
              className={clsx(
                'w-1 h-full min-h-14',
                targetBgColor,
                roadClassName,
                index === steps.length - 1 && 'fade-mask'
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            {step.title}
            {step.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};
