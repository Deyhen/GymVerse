import {
  Heading,
  PlanTimelineSection,
  StartTrialSection,
} from '@app/modules/StartPlan';
import styles from './styles.module.css';

export const StartPlanPage = () => {
  return (
    <main className={styles.main}>
      <Heading />
      <PlanTimelineSection />
      <StartTrialSection />
    </main>
  );
};
