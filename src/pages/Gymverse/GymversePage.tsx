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
} from '@app/modules/Gymverse';
import { Button } from '@app/shared/components';
import { FAQSection } from '@app/modules/Gymverse/FAQSection';

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
