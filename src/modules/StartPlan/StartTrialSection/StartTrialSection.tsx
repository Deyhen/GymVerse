import { Button, Typography } from '@app/shared/components';
import { useState } from 'react';
import { MorePlans } from './MorePlans';
import { FreeTrialButton } from './components/FreeTrialButton';

export const StartTrialSection = () => {
  const [isOpen, setisOpen] = useState(false);

  const toogleModal = () => setisOpen(!isOpen);

  if (isOpen) return <MorePlans onClose={toogleModal} />;

  return (
    <section className=" flex flex-col ">
      <FreeTrialButton className="mb-6" />
      <Button variant="blank" onClick={toogleModal}>
        <Typography
          center
          color="element-primary"
          bold="bold"
          className="text-15 md:text-18">
          See more plans
        </Typography>
      </Button>
    </section>
  );
};
