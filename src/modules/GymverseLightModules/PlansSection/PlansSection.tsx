import { Typography, Button } from '@app/shared/components';
import styles from './PlansSection.module.css';

export type Plans = 'Lifetime' | 'Monthly' | 'FreeTrial';

export const PlansSection = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col gap-2.5 mt-2 max-w-[536px] w-full">
        <Button variant="primary-dark">
          <div className="absolute py-0.5 px-2 -top-2.5 right-3 rounded-xl bg-primary">
            <Typography
              color="element-primary"
              bold="bold"
              className="text-14 font-assistant">
              BEST VALUE
            </Typography>
          </div>
          <div className="flex flex-col items-start justify-center">
            <Typography
              bold="semibold"
              color="white"
              className={styles['primary-button-content']}>
              Start 7-day free trial
            </Typography>
            <Typography
              color="white"
              className="text-14 sm:text-15 lg:text-17 opacity-70">
              then $59.99 a year | only $5.50 a month
            </Typography>
          </div>
        </Button>
        <Button variant="secondary-light" className={styles['secodary-button']}>
          <Typography
            bold="semibold"
            color="black"
            className={styles['secodary-button-content']}>
            3 Months
          </Typography>
          <Typography
            bold="semibold"
            color="black"
            className={styles['secodary-button-content']}>
            $39.99
          </Typography>
        </Button>
        <Button variant="secondary-light" className={styles['secodary-button']}>
          <Typography
            bold="semibold"
            color="black"
            className={styles['secodary-button-content']}>
            Monthly
          </Typography>
          <Typography
            bold="semibold"
            color="black"
            className={styles['secodary-button-content']}>
            $19.99
          </Typography>
        </Button>
      </div>
    </section>
  );
};
