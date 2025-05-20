import { Button, Typography } from '@app/shared/components';
import { useEffect } from 'react';
import { MorePlans } from './MorePlans';
import { FreeTrialButton } from './components/FreeTrialButton';

interface StartTrialSectionProps {
  isOpen: boolean;
  toggleModal: VoidFunction;
}

export const StartTrialSection = ({
  isOpen,
  toggleModal,
}: StartTrialSectionProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <section className="flex flex-col">
      <FreeTrialButton className="mb-6" />
      <Button variant="blank" onClick={toggleModal}>
        <Typography
          center
          color="element-primary"
          bold="bold"
          className="text-15 md:text-18">
          See more plans
        </Typography>
      </Button>
      <MorePlans isOpen={isOpen} onClose={toggleModal} />
    </section>
  );
};
