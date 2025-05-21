import { Typography } from '@app/shared/components';

import MSLogoIcon from '@app/shared/svg-icons/icons/logos/M&SLogoIcon';
import NewYorkTimesLogoIcon from '@app/shared/svg-icons/icons/logos/NewYorkTimesLogoIcon';
import WomensHealthLogoIcon from '@app/shared/svg-icons/icons/logos/WomensHealthLogoIcon';
import MensFitnessLogoIcon from '@app/shared/svg-icons/icons/logos/MensFitnessLogoIcon';
import USATodayLogoIcon from '@app/shared/svg-icons/icons/logos/USATodayLogoIcon';

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
