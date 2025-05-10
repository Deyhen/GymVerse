import {
  AchievementsSection,
  PlansSection,
  BenefitsSection,
  CommentsSection,
  ComparisonSection,
  FeaturedOnSection,
  FeaturesSection,
  Heading,
} from './modules/';
import { FAQSection } from './modules/FAQSection';
import { useRef } from 'react';
import { Button } from './shared/components';

import styles from './App.module.css';
import ArrowToFeaturesIcon from './shared/svg-icons/icons/ArrowIcon';
import ArrowToTopIcon from './shared/svg-icons/icons/YellowIconIcon';

function App() {
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

export default App;
