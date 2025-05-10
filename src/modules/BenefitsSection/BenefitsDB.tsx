import { Benefit } from '../../shared/types/benefits';

import EnergyIcon from '../../shared/svg-icons/icons/EnergyIcon';
import FlexabilityIcon from '../../shared/svg-icons/icons/FlexabilityIcon';
import StatsIcon from '../../shared/svg-icons/icons/StatsIcon';
import StrengthIcon from '../../shared/svg-icons/icons/StrengthIcon';

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
