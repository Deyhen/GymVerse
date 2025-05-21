import {
  Button,
  Typography,
  DiffuseCircle,
  Divider,
} from '@app/shared/components';
import { ListItem } from './components/ListItem';
import { FreeTrialButton } from './components/FreeTrialButton';
import { PlanSelectButton } from './components/PlanSelectButton';
import clsx from 'clsx';
import { useRef } from 'react';
import { useOutsideClick } from '@app/shared/hooks';

export const MorePlans = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = () => {
    if (!isOpen) return;
    onClose();
  };

  useOutsideClick(modalRef, handleOutsideClick);

  return (
    <div
      ref={modalRef}
      className={clsx(
        'fixed bottom-0 left-0 w-full bg-white z-50 transition-transform duration-500 ease-in-out transform rounded-t-2xl',
        isOpen ? 'translate-y-0' : 'translate-y-full'
      )}>
      <div className="relative w-full h-auto max-h-screen overflow-y-auto overflow-x-hidden shadow-lg">
        <DiffuseCircle className="absolute top-12 -left-4 w-64 h-64" />
        <DiffuseCircle className="absolute bottom-24 -right-10 w-64 h-64" />

        <div className="flex w-full justify-end items-center py-5 px-5 border-b border-element-primary">
          <Button variant="blank" onClick={onClose}>
            <Typography
              color="element-primary"
              font="apple"
              bold="bold"
              className="text-16">
              Close
            </Typography>
          </Button>
        </div>

        <div className="flex flex-col px-4 sm:px-8 pb-6">
          <Typography
            center
            className="w-full text-21 sm:text-22 md:text-26 py-5 md:py-7 leading-9 capitalize"
            font="montserrat"
            bold="bold"
            color="element-primary">
            Unlock Premium to gain muscle & lose weight faster
          </Typography>

          <div className="flex flex-col mt-2 md:mt-4 gap-4 justify-center items-center">
            <ListItem>
              Become consistent and motivated to start and finish your workouts
            </ListItem>
            <ListItem>
              Plans developed by top human trainers to fit your level and goals
            </ListItem>
            <ListItem>
              Your plan adapts & optimizes as you train, ensuring your progress
            </ListItem>
          </div>

          <FreeTrialButton className="mt-11 mb-5 md:mt-14 md:mb-7 items-center last:*:max-w-[738px]" />

          <div className="flex gap-3 items-center mb-6 md:mb-9">
            <Divider />
            <Typography
              center
              color="element-primary"
              bold="semibold"
              className="text-18">
              or
            </Typography>
            <Divider />
          </div>

          <div className="flex flex-col gap-4 items-center pb-8">
            <PlanSelectButton label="Monthly" price="$39.99" />
            <PlanSelectButton label="Lifetime" price="$119.99" />
          </div>
        </div>
      </div>
    </div>
  );
};
