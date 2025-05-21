import { RoadMap, RoadMapStep, Typography } from '@app/shared/components';

import BellIcon from '@app/shared/svg-icons/icons/BellIcon';
import BlackStarIcon from '@app/shared/svg-icons/icons/stars/BlackStarIcon';

import UnlockIcon from '@app/shared/svg-icons/icons/UnlockIcon';

const steps: RoadMapStep[] = [
  {
    icon: <UnlockIcon className="min-w-5 h-5" />,
    title: (
      <Typography className="text-18" bold="bold" color="element-primary">
        Today - Unlock Gymverse
      </Typography>
    ),
    subtitle: (
      <Typography className="text-16" color="element-primary">
        Access all features including your personalized plan, video guidance,
        and weight suggestions
      </Typography>
    ),
    id: 1,
  },
  {
    icon: <BellIcon className="min-w-5 h-5" />,
    title: (
      <Typography className="text-18" bold="bold" color="element-primary">
        In 5 days - Get a Reminder
      </Typography>
    ),
    subtitle: (
      <Typography className="text-16" color="element-primary">
        We’ll send you a reminder that your trial ends soon. Enable
        notifications in settings
      </Typography>
    ),
    id: 2,
  },
  {
    icon: <BlackStarIcon className="min-w-5 h-5" />,
    title: (
      <Typography className="text-18" bold="bold" color="element-primary">
        In 7 days - Trial Complete
      </Typography>
    ),
    subtitle: (
      <Typography className="text-16" color="element-primary">
        You’ll be charged on <b>January 20</b> unless you cancel anytime
        beforehand
      </Typography>
    ),
    id: 3,
  },
];

export const TimelineSection = () => {
  return (
    <section>
      <RoadMap steps={steps} roadColor="blue" />
    </section>
  );
};
