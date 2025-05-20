import clsx from 'clsx';
import styles from './styles.module.css';
import {
  Heading,
  TimelineSection,
  StartTrialSection,
} from '@app/modules/StartPlan';

export const StartPlanPage = () => {
  return (
    <main className={clsx(styles.main)}>
      <Heading />
      <TimelineSection />
      <StartTrialSection />
    </main>
  );
};
