import { Typography } from '@app/shared/components';

import MSLogoIcon from '@app/shared/svg-icons/icons/logos/M&SLightLogoIcon';
import NewYorkTimesLogoIcon from '@app/shared/svg-icons/icons/logos/NewYorkTimesLogoIcon';
import WomensHealthLogoIcon from '@app/shared/svg-icons/icons/logos/WomensHealthLightLogoIcon';
import MensFitnessLogoIcon from '@app/shared/svg-icons/icons/logos/MensFitnessLightLogoIcon';
import USATodayLogoIcon from '@app/shared/svg-icons/icons/logos/USATodayLogoIcon';

import styles from './FeaturedOnSection.module.css';

export const FeaturedOnSection = () => {
  return (
    <section className="flex flex-col gap-6 items-center">
      <Typography
        bold="bold"
        font="montserrat"
        color="white"
        className={styles.title}>
        As featured on:
      </Typography>
      <div className={styles['logos-container']}>
        <MSLogoIcon className="max-sm:w-24 max-sm:h-24" />
        <MensFitnessLogoIcon />
        <NewYorkTimesLogoIcon />
        <WomensHealthLogoIcon />
        <USATodayLogoIcon />
      </div>
    </section>
  );
};
