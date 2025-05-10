import { Typography } from '../../shared/components';

import MSLogoIcon from '../../shared/svg-icons/icons/M&SLogoIcon';
import NewYorkTimesLogoIcon from '../../shared/svg-icons/icons/NewYorkTimesLogoIcon';
import WomensHealthLogoIcon from '../../shared/svg-icons/icons/WomensHealthLogoIcon';
import MensFitnessLogoIcon from '../../shared/svg-icons/icons/MensFitnessLogoIcon';
import USATodayLogoIcon from '../../shared/svg-icons/icons/USATodayLogoIcon';

import styles from './FeaturedOnSection.module.css';

export const FeaturedOnSection = () => {
  return (
    <section className="flex flex-col gap-6 items-center mt-20">
      <Typography
        bold="bold"
        font="montserrat"
        color="primary"
        className={styles.title}>
        As featured on:
      </Typography>
      <div className={styles['logos-container']}>
        <MSLogoIcon />
        <MensFitnessLogoIcon />
        <NewYorkTimesLogoIcon />
        <WomensHealthLogoIcon />
        <USATodayLogoIcon />
      </div>
    </section>
  );
};
