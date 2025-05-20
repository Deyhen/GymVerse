import clsx from 'clsx';
import { RoadColorTypes, RoadMapProps } from './types';

const roadBgColorsMap: Record<RoadColorTypes, string> = {
  blue: 'bg-blue',
  asure: 'bg-asure-light',
};

const roadColorsMap: Record<RoadColorTypes, string> = {
  blue: 'from-blue',
  asure: 'from-asure-light',
};

export const RoadMap = ({ steps, roadColor, className }: RoadMapProps) => {
  const targetBgColor = roadBgColorsMap[roadColor];
  const targetColor = roadColorsMap[roadColor];

  return (
    <div className={clsx('flex flex-col  relative', className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex gap-7 pb-2">
          <div className="flex flex-col items-center mt-0.5">
            <div className=" mb-2">{step.icon}</div>
            <div
              className={clsx(
                'w-1 h-full min-h-14',
                targetBgColor,

                index === steps.length - 1
                  ? [`bg-gradient-to-b to-white ${targetColor}`]
                  : targetBgColor
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
