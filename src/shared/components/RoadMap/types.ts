import { ReactElement, ReactNode } from 'react';
import { TypographyProps } from '../Typography';

export type RoadColorTypes = 'blue' | 'asure';

export interface RoadMapStep {
  icon: ReactNode;
  title: ReactElement<TypographyProps>;
  subtitle: ReactElement<TypographyProps>;
  id: number;
}

export interface RoadMapProps {
  steps: RoadMapStep[];
  roadColor: RoadColorTypes;
  className?: string;
}
