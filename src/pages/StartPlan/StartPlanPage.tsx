import clsx from 'clsx';
import styles from './styles.module.css';
import {
  Heading,
  TimelineSection,
  StartTrialSection,
} from '@app/modules/StartPlan';
import { useState } from 'react';

export const StartPlanPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <main className={clsx(styles.main)}>
      <Heading isOpen={isOpen} />
      <TimelineSection />
      <StartTrialSection isOpen={isOpen} toggleModal={toggleModal} />
    </main>
  );
};
