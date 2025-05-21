import { useRef } from 'react';
import { Heading } from '@app/modules/GymverseLightModules/Heading';
import { CommentsSection } from '@app/modules/GymverseLightModules/CommentsSection';
import {
  AchievementsSection,
  BenefitsSection,
  FeaturedOnSection,
  PlansSection,
  FeaturesSection,
  FAQSection,
} from '@app/modules/GymverseLightModules';
import { Button } from '@app/shared/components';

import styles from './styles.module.css';
import ArrowToFeaturesIcon from '@app/shared/svg-icons/icons/arrows/BlackArrowIcon';
import ArrowToTopIcon from '@app/shared/svg-icons/icons/arrows/ChevronTopIcon';
import clsx from 'clsx';

export const GymverseLightPage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <Heading />
        <CommentsSection />
        <PlansSection />
        <Button
          variant="blank"
          className="self-center mb-9"
          onClick={scrollToFeatures}>
          <ArrowToFeaturesIcon className="mt-6" />
        </Button>
      </div>
      <div className={styles.achievements}>
        <AchievementsSection />
        <FeaturedOnSection />
      </div>

      <div className={clsx(styles.benefits, 'mb-14')}>
        <BenefitsSection />
      </div>
      <PlansSection />
      <div className={clsx(styles.benefits, 'my-14')}>
        <FeaturesSection ref={featuresRef} />
      </div>
      <PlansSection />
      <FAQSection />
      <Button
        variant="blank"
        className="self-center mt-6"
        onClick={scrollToTop}>
        <ArrowToTopIcon />
      </Button>
    </main>
  );
};
