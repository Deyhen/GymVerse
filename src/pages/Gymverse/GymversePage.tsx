import { useRef } from 'react';
import {
  AchievementsSection,
  BenefitsSection,
  CommentsSection,
  ComparisonSection,
  FeaturedOnSection,
  FeaturesSection,
  Heading,
  PlansSection,
  FAQSection,
} from '@app/modules/GymverseDarkModules';
import { Button } from '@app/shared/components';

import ArrowToFeaturesIcon from '@app/shared/svg-icons/icons/ArrowIcon';
import ArrowToTopIcon from '@app/shared/svg-icons/icons/YellowIconIcon';
import styles from './styles.module.css';

export function GymversePage() {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      <div className="flex gap-3">
        <Button href="/timeline" variant="primary">
          Timeline
        </Button>
        <Button href="/start-plan" variant="primary">
          Start Plan
        </Button>
      </div>
      <Heading />
      <CommentsSection />
      <PlansSection />
      <Button
        variant="blank"
        className="self-center"
        onClick={scrollToFeatures}>
        <ArrowToFeaturesIcon />
      </Button>
      <AchievementsSection />
      <FeaturedOnSection />
      <ComparisonSection />
      <BenefitsSection />
      <PlansSection />
      <FeaturesSection ref={featuresRef} />
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
}
