import { useState } from 'react';
import { Typography, Button } from '@app/shared/components';
import { PlanConfirmationDialog } from './components';
import styles from './PlansSection.module.css';

export type Plans = 'Lifetime' | 'Monthly' | 'FreeTrial';

export const PlansSection = () => {
  const [planConfirmDialog, setPlanConfirmDialog] = useState<Plans | null>(
    null
  );

  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col gap-2.5 mt-10 max-w-[536px] w-full">
        <Button
          variant="primary"
          onClick={() => setPlanConfirmDialog('FreeTrial')}>
          <div className="absolute py-0.5 px-2 -top-2.5 right-3 rounded-xl bg-white">
            <Typography
              color="element-primary"
              bold="bold"
              className="text-14 font-assistant">
              BEST VALUE
            </Typography>
          </div>
          <div className="flex flex-col items-start justify-center">
            <Typography
              bold="bold"
              color="element-primary"
              className={styles['primary-button-content']}>
              Start 7-day free trial
            </Typography>
            <span className="flex">
              <Typography
                bold="semibold"
                color="element-primary"
                className={styles['primary-button-subcontent']}>
                then $59.99 a year
              </Typography>{' '}
              <Typography
                className={styles['primary-button-subcontent']}
                color="element-primary">
                | only $5.50 a month
              </Typography>
            </span>
          </div>
        </Button>
        <Button
          variant="secondary"
          className={styles['secodary-button']}
          onClick={() => setPlanConfirmDialog('Monthly')}>
          <Typography
            bold="semibold"
            className={styles['secodary-button-content']}>
            Monthly
          </Typography>
          <Typography
            bold="semibold"
            className={styles['secodary-button-content']}>
            $19.99
          </Typography>
        </Button>
        <Button
          variant="secondary"
          className={styles['secodary-button']}
          onClick={() => setPlanConfirmDialog('Lifetime')}>
          <Typography
            bold="semibold"
            className={styles['secodary-button-content']}>
            Lifetime
          </Typography>
          <Typography
            bold="semibold"
            className={styles['secodary-button-content']}>
            $119.99
          </Typography>
        </Button>
      </div>
      <Button className="mt-[22px] self-center" variant="blank">
        <Typography
          color="grey-primary"
          underline
          className="text-14 md:text-16 underline-offset-4">
          I don’t want my personalized plan
        </Typography>
      </Button>
      {!!planConfirmDialog && (
        <PlanConfirmationDialog
          open
          planType={planConfirmDialog}
          onClose={() => setPlanConfirmDialog(null)}
        />
      )}
    </section>
  );
};
