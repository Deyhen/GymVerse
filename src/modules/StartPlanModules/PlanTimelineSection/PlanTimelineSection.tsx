import { RoadMap, RoadMapStep, Typography } from '@app/shared/components';

import DumbbellIcon from '@app/shared/svg-icons/icons/DumbbellIcon';
import SharpBlackStarIcon from '@app/shared/svg-icons/icons/stars/SharpBlackStarIcon';
import UnlockIcon from '@app/shared/svg-icons/icons/UnlockIcon';

const steps: RoadMapStep[] = [
  {
    icon: <UnlockIcon className="min-w-[18px] h-[18px] max-w-[18px]" />,
    title: (
      <Typography className="text-18" bold="bold" color="element-primary">
        Today
      </Typography>
    ),
    subtitle: (
      <Typography className="text-16" color="element-primary">
        Unlock your personalized plan and know exactly what to train every day
      </Typography>
    ),
    id: 1,
  },
  {
    icon: <DumbbellIcon className="min-w-[18px] h-[18px] max-w-[18px]" />,
    title: (
      <Typography className="text-18" bold="bold" color="element-primary">
        Train free for 7 days
      </Typography>
    ),
    subtitle: (
      <Typography className="text-16" color="element-primary">
        Log your workouts and your plan will automatically adapt so you progress
      </Typography>
    ),
    id: 2,
  },
  {
    icon: <SharpBlackStarIcon className="min-w-[18px] h-[18px] max-w-[18px]" />,
    title: (
      <Typography className="text-18" bold="bold" color="element-primary">
        Day 8 and on
      </Typography>
    ),
    subtitle: (
      <Typography className="text-16" color="element-primary">
        See your progress in the gym and change the way you train forever
      </Typography>
    ),
    id: 3,
  },
];

export const PlanTimelineSection = () => {
  return (
    <section className="pl-5 pr-8 lg:px-16 mt-6 ">
      <RoadMap
        withBorder
        roadClassName="!w-0.5"
        className="*:gap-4 last:*:*:pt-1 last:*:*:gap-px"
        steps={steps}
        roadColor="asure"
      />
    </section>
  );
};
