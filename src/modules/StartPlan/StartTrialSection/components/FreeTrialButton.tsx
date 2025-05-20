import { Button, Typography } from '@app/shared/components';
import clsx from 'clsx';

export const FreeTrialButton = ({ className }: { className?: string }) => (
  <div className={clsx('flex flex-col text-15 md:text-18', className)}>
    <Typography center color="element-primary">
      Start your 7-day free trial then $69/year | only $6.50/mo.
    </Typography>
    <Typography center color="element-primary" bold="bold">
      No payment now. Cancel anytime.
    </Typography>
    <Button
      variant="primary"
      className="mt-4 !bg-element-primary !text-white !py-5 !px-12 sm:!px-24 !rounded-2xl w-full">
      <Typography center color="white" bold="semibold" className="text-23">
        Start my free trial
      </Typography>
    </Button>
  </div>
);
