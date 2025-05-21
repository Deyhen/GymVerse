import { Benefit } from '@app/shared/types/benefits';

import EnergyIcon from '@app/shared/svg-icons/icons/EnergyDarkIcon';
import FlexabilityIcon from '@app/shared/svg-icons/icons/FlexabilityDarkIcon';
import StatsIcon from '@app/shared/svg-icons/icons/StatsDarkIcon';
import StrengthIcon from '@app/shared/svg-icons/icons/StrengthDarkIcon';

export const benefits: Benefit[] = [
  {
    title: 'Transform your workout ',
    subtitle: 'Plans developed by top trainers to fit your level and goals',
    icon: <StrengthIcon />,
  },
  {
    title: 'Always know how much to lift',
    subtitle: 'Gymverse optimizes your weight & reps to ensure progress',
    icon: <EnergyIcon />,
  },
  {
    title: 'Easily track your progress',
    subtitle: 'Log every workout, and see your progress week by week',
    icon: <StatsIcon />,
  },
  {
    title: 'Mix up your workouts',
    subtitle:
      'Never get bored. With over 500 exercises, you’ll always find something new',
    icon: <FlexabilityIcon />,
  },
];
