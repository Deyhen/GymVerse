import { Button, Typography } from '@app/shared/components';

export const StartTrialSection = () => {
  return (
    <section className="mt-3 px-8 lg:px-16">
      <Typography
        center
        color="element-primary"
        bold="bold"
        className="text-16 md:text-18">
        No payment now . Cancel anytime
      </Typography>
      <Button
        variant="primary"
        className="mt-3 sm:mt-4 md:mt-5 !bg-element-primary !text-white !py-5 !px-2  !rounded-2xl w-full">
        <Typography center color="white" bold="semibold" className="text-23">
          Start my 7-day free trial
        </Typography>
      </Button>
      <div className="flex gap-0.5 text-14 md:text-16 mt-3 justify-center items-center">
        <Typography center color="element-primary" bold="semibold">
          then $59.99 a year |
        </Typography>
        <Typography center color="element-primary">
          only $5.50 a month
        </Typography>
      </div>
    </section>
  );
};
